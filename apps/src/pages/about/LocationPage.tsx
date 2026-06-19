import SubLayout from '../../components/layout/SubLayout'

const CLINICS = [
  {
    id: 'ortho',
    label: '정형외과 / 정맥·동맥부전클리닉',
    mapSrc:
      'https://maps.google.com/maps?q=%EC%84%9C%EC%9A%B8%EC%84%A0%EC%A0%95%ED%98%95%EC%99%B8%EA%B3%BC&output=embed&hl=ko&z=17',
    schedule: [
      { label: '평일', value: '09:00 ~ 18:00' },
      { label: '점심시간', value: '13:00 ~ 14:00' },
      { label: '토요일', value: '09:00 ~ 13:00', note: '(점심시간 없음)' },
      { label: '휴무일', value: '일요일, 공휴일' },
    ],
    address: '서울시 양천구 공항대로 630 (목동 514-18) 아비나돌 별관 2층',
  },
  {
    id: 'dialysis',
    label: '투석혈관클리닉',
    mapSrc:
      'https://maps.google.com/maps?q=%EC%84%9C%EC%9A%B8%EC%84%A0%EC%A0%95%ED%98%95%EC%99%B8%EA%B3%BC&output=embed&hl=ko&z=17',
    schedule: [
      { label: '평일', value: '09:00 ~ 19:00' },
      { label: '점심시간', value: '13:00 ~ 14:00' },
      { label: '토요일', value: '09:00 ~ 14:00', note: '(점심시간 없음)' },
      { label: '휴무일', value: '일요일' },
      { label: '공휴일', value: '08:00 ~ 19:00', note: '(응급시술 가능)', noteRed: true },
    ],
    address: '서울시 양천구 공항대로 638 아가도스퓨리스 1층',
  },
]

function LocationPage() {
  return (
    <SubLayout title='진료시간·오시는 길'>
      <div className='location-sections'>
        {CLINICS.map((clinic) => (
          <div key={clinic.id} className='location-section'>
            <h3 className='location-section-title'>
              <span className='location-section-dot' />
              {clinic.label}
            </h3>

            <div className='location-map-wrap'>
              <iframe
                src={clinic.mapSrc}
                className='location-map'
                allowFullScreen
                loading='lazy'
                referrerPolicy='no-referrer-when-downgrade'
                title={`${clinic.label} 지도`}
              />
            </div>

            <div className='location-info-row'>
              <div className='location-schedule'>
                <h4 className='location-info-title'>{clinic.label}</h4>
                <dl className='location-schedule-list'>
                  {clinic.schedule.map((row) => (
                    <div key={row.label} className='location-schedule-item'>
                      <dt>{row.label}</dt>
                      <dd>
                        {row.value}
                        {row.note && (
                          <span className={`location-schedule-note${row.noteRed ? ' is-red' : ''}`}>
                            {' '}{row.note}
                          </span>
                        )}
                      </dd>
                    </div>
                  ))}
                </dl>
              </div>

              <div className='location-address'>
                <h4 className='location-info-title'>찾아오시는 길</h4>
                <p className='location-address-text'>{clinic.address}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </SubLayout>
  )
}

export default LocationPage
