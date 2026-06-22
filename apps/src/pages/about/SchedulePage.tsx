import { useState } from 'react'
import SubLayout from '../../components/layout/SubLayout'
import doctorSample from '../../assets/images/doctor_sample.svg'
import doctorSample2 from '../../assets/images/doctor_sample3.svg'

const TABS = [
  { key: 'ortho', label: '정형외과' },
  { key: 'vein',  label: '정맥·동맥부전 / 투석혈관' },
] as const

type TabKey = typeof TABS[number]['key']
type DotType = 'blue' | 'gold' | 'gray'

interface DoctorSchedule {
  id: number
  hospital: string
  position: string
  name: string
  note?: string
  photo: string
  legend: { type: DotType; label: string }[]
  // [오전, 오후] x [월,화,수,목,금,토]
  schedule: [DotType[], DotType[]]
}

const ORTHO_DOCTORS: DoctorSchedule[] = [
  {
    id: 1,
    hospital: '서울선정형외과',
    position: '대표원장',
    name: '박광선',
    photo: doctorSample,
    legend: [{ type: 'blue', label: '진료' }],
    schedule: [
      ['blue', 'blue', 'blue', 'blue', 'blue', 'blue'],
      ['blue', 'blue', 'blue', 'blue', 'blue', 'gray'],
    ],
  },
  {
    id: 2,
    hospital: '서울선정형외과',
    position: '대표원장',
    name: '최재우',
    note: '매주 수요일 휴진',
    photo: doctorSample2,
    legend: [
      { type: 'blue', label: '진료' },
      { type: 'gold', label: '근전도 검사' },
    ],
    schedule: [
      ['blue', 'blue', 'gray', 'gold', 'blue', 'blue'],
      ['blue', 'blue', 'gray', 'gold', 'blue', 'gray'],
    ],
  },
]

const VEIN_DOCTORS: VeinDoctorSchedule[] = [
  {
    id: 3,
    hospital: '인터벤션 영상의학과 전문의',
    position: '원장',
    name: '이윤학',
    photo: doctorSample2,
    legend: [
      { type: 'blue', label: '진료' },
      { type: 'gold', label: '시술' },
    ],
    // 0=월 1=화 2=수 3=목 4=금 5=토 6=일
    weeklyPattern: { 0: 'blue', 1: 'blue', 2: 'gold', 3: 'blue', 4: 'blue' },
  },
]

const DAY_LABELS = ['월', '화', '수', '목', '금', '토']

// --- VEIN calendar types ---
interface VeinDoctorSchedule {
  id: number
  hospital: string
  position: string
  name: string
  photo: string
  legend: { type: DotType; label: string }[]
  weeklyPattern: Partial<Record<number, DotType>> // 0=월...6=일
}

const MONTH_EN = ['JANUARY','FEBRUARY','MARCH','APRIL','MAY','JUNE','JULY','AUGUST','SEPTEMBER','OCTOBER','NOVEMBER','DECEMBER']
const CAL_DOW = ['월','화','수','목','금','토','일']

function getCalendarDays(year: number, month: number): (number | null)[] {
  const firstDow = (new Date(year, month, 1).getDay() + 6) % 7 // Mon=0
  const lastDate = new Date(year, month + 1, 0).getDate()
  const days: (number | null)[] = Array(firstDow).fill(null)
  for (let d = 1; d <= lastDate; d++) days.push(d)
  while (days.length % 7 !== 0) days.push(null)
  return days
}

function getWeekDates() {
  const today = new Date()
  const day = today.getDay() // 0=일, 1=월 ...
  const diffToMon = day === 0 ? -6 : 1 - day
  const monday = new Date(today)
  monday.setDate(today.getDate() + diffToMon)
  return DAY_LABELS.map((label, i) => {
    const d = new Date(monday)
    d.setDate(monday.getDate() + i)
    const m = d.getMonth() + 1
    const dd = d.getDate()
    return { label, dateStr: `${m}/${dd}` }
  })
}

const DOT_COLOR: Record<string, string> = {
  blue: '#2B6AD1',
  gold: '#C97900',
  gray: '#707070',
}

function ScheduleDot({ type }: { type: DotType }) {
  const color = DOT_COLOR[type] ?? type
  return (
    <span
      className='sch-dot'
      style={{ backgroundColor: color }}
      aria-label={type === 'gray' ? '휴진' : type === 'gold' ? '근전도 검사' : '진료'}
    />
  )
}

function DoctorScheduleCard({ doctor, dates, isFirst }: { doctor: DoctorSchedule; dates: ReturnType<typeof getWeekDates>; isFirst?: boolean }) {
  return (
    <div className='sch-card'>
      <div className='sch-card-photo'>
        <img src={doctor.photo} alt={`${doctor.name} ${doctor.position}`} />
      </div>
      <div className='sch-card-info'>
        {isFirst && <p className='sch-card-notice'>*진료일정을 참고하시면 변동 가능성이 있으니 참고 부탁드립니다. 감사합니다.</p>}
        <p className='sch-card-hospital'>{doctor.hospital}</p>
        <h3 className='sch-card-name'>
          {doctor.position} {doctor.name}
          {doctor.note && <span className='sch-card-name-note'>({doctor.note})</span>}
        </h3>
        <div className='sch-table-wrap'>
          <div className='sch-table-legend'>
            <span>진료시간표</span>
            <div className='sch-legend-list'>
              {doctor.legend.map((l) => (
                <span key={l.type} className='sch-legend-item'>
                  <span className='sch-dot' style={{ backgroundColor: DOT_COLOR[l.type] }} />
                  {l.label}
                </span>
              ))}
            </div>
          </div>
          <div className='sch-table-border'>
            <table className='sch-table'>
                <thead>
                <tr>
                    <th className='sch-th-empty' />
                    {dates.map((d) => (
                    <th key={d.label}>{d.dateStr} ({d.label})</th>
                    ))}
                </tr>
                </thead>
                <tbody>
                {(['오전', '오후'] as const).map((timeLabel, rowIdx) => (
                    <tr key={timeLabel}>
                    <td className='sch-row-label'>{timeLabel}</td>
                    {doctor.schedule[rowIdx].map((dot, colIdx) => (
                        <td key={colIdx} className='sch-cell'>
                        <ScheduleDot type={dot} />
                        </td>
                    ))}
                    </tr>
                ))}
                </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  )
}

function VeinDoctorCalendarCard({ doctor, isFirst }: { doctor: VeinDoctorSchedule; isFirst?: boolean }) {
  const today = new Date()
  const [year, setYear] = useState(today.getFullYear())
  const [month, setMonth] = useState(today.getMonth())
  const days = getCalendarDays(year, month)

  const prevMonth = () => { if (month === 0) { setYear(y => y - 1); setMonth(11) } else setMonth(m => m - 1) }
  const nextMonth = () => { if (month === 11) { setYear(y => y + 1); setMonth(0) } else setMonth(m => m + 1) }

  return (
    <div className='sch-card'>
      <div className='sch-card-photo'>
        <img src={doctor.photo} alt={`${doctor.name} ${doctor.position}`} />
      </div>
      <div className='sch-card-info'>
        {isFirst && <p className='sch-card-notice'>*진료일정을 참고하시면 변동 가능성이 있으니 참고 부탁드립니다. 감사합니다.</p>}
        <p className='sch-card-hospital'>{doctor.hospital}</p>
        <h3 className='sch-card-name'>{doctor.position} {doctor.name}</h3>
        <div className='sch-table-wrap'>
          <div className='sch-table-legend'>
            <span>진료시간표</span>
            <div className='sch-legend-list'>
              {doctor.legend.map((l) => (
                <span key={l.type} className='sch-legend-item'>
                  <span className='sch-dot' style={{ backgroundColor: DOT_COLOR[l.type] }} />
                  {l.label}
                </span>
              ))}
            </div>
          </div>
          <div className='sch-cal'>
            <div className='sch-cal-header'>
              <span className='sch-cal-title'>{MONTH_EN[month]} {month + 1}월</span>
              <div className='sch-cal-nav'>
                <button onClick={prevMonth} className='sch-cal-btn prev' type='button' aria-label='이전 달'></button>
                <button onClick={nextMonth} className='sch-cal-btn next' type='button' aria-label='다음 달'></button>
              </div>
            </div>
            <div className='sch-cal-grid'>
              {CAL_DOW.map((d) => <div key={d} className='sch-cal-dow'>{d}</div>)}
              {days.map((day, i) => {
                const dow = day ? (new Date(year, month, day).getDay() + 6) % 7 : null
                const dotType = dow !== null ? doctor.weeklyPattern[dow] : undefined
                return (
                  <div key={i} className={`sch-cal-day${day === null ? ' is-empty' : ''}`}>
                    {day !== null && (
                      <>
                        <span className='sch-cal-date'>{day}</span>
                        {dotType && <span className='sch-dot' style={{ backgroundColor: DOT_COLOR[dotType] }} />}
                      </>
                    )}
                  </div>
                )
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

function SchedulePage() {
  const [active, setActive] = useState<TabKey>('ortho')
  const dates = getWeekDates()

  return (
    <SubLayout title='진료 일정'>
      <div className='intro-tabs'>
        {TABS.map((tab) => (
          <button
            key={tab.key}
            className={`intro-tab${active === tab.key ? ' is-active' : ''}`}
            onClick={() => setActive(tab.key)}
            type='button'
          >
            {tab.label}
          </button>
        ))}
      </div>
      <div className='sch-list'>
        {active === 'ortho'
          ? ORTHO_DOCTORS.map((doctor, idx) => (
              <DoctorScheduleCard key={doctor.id} doctor={doctor} dates={dates} isFirst={idx === 0} />
            ))
          : VEIN_DOCTORS.map((doctor, idx) => (
              <VeinDoctorCalendarCard key={doctor.id} doctor={doctor} isFirst={idx === 0} />
            ))
        }
      </div>
    </SubLayout>
  )
}

export default SchedulePage
