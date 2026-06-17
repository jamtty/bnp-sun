import { useState } from 'react'
import SubLayout from '../../components/layout/SubLayout'
import doctorSample from '../../assets/images/doctor_sample.svg'
import doctorSample2 from '../../assets/images/doctor_sample2.svg'

const TABS = [
  { key: 'ortho', label: '정형외과' },
  { key: 'vein',  label: '정맥·동맥부전 / 투석혈관' },
] as const

type TabKey = typeof TABS[number]['key']

const ORTHO_DOCTORS = [
  {
    id: 1,
    hospital: '서울선정형외과',
    position: '대표원장',
    name: '박광선',
    photo: doctorSample,
    sections: [
      {
        label: '경력',
        items: [
          '전 대한공중보건의사협회의회 회장',
          '전 대한의사협회 정책이사',
          '대한초음파의학회 근골격계 초음파 감사 인증의',
          '세계중족의(WIP) 국제 통증 초음파(CIPS) 자격 취득',
          '대한근골격초음파학회(KAOM) 강사',
          '',
          '대한형형통증의학회 중계마 TFT 위원',
          '대한충격파재의학회 총무이사',
          '전) 2023 대구 국제충파치료학회(ISMST) 조직위원회 사무총장',
          '전) 2023 대구 국제충격파심포지엄(ISSW) 조직위원',
          '전) 2024 암스테르담 국제충파치료학회(ISMST) 조직위원회 학술위원',
          '국제충격파치료학회(ISMST) ICC 고수과원(Certified Instructor)',
          '국제충격파치료학회(ISMST) 아시아태평양 지역 사무총장(Regional Secretary for Asia/Pacific)',
          '',
          '대한인동제증기세포재생의학회 자신홍보위원',
          '미국정형의학회(AAOM) 줄기세포 재생자료(IROM-C) 자격 취득',
          'Journal of Regenerative Sciences 편집위원',
          '대한도수의학회 학술이사',
          '',
          '대한국구협회 의무위원회 의무위원',
          'U-22 축구대표팀 팀닥터',
        ],
      },
      {
        label: '학회활동',
        items: [
          '대한정형외과학회 정회원 / 대한술관절학회 정회원 / 대한건강관절학회 정회원',
          '미국정형의학회(AAOM) 정회원',
          '세계중족의(WIP) 정회원',
          '국제 초음파 통증연구학회(WAMPU) 정회원',
          '국제충격파치료학회(ISMST) 정회원',
          '운동(도수)치료 연구회 정회원',
          '',
          'AO Trauma/AO spine Advanced Course 이수',
          'HHPF Prolotherapy Workshop in Madison 수료',
          'Lyftpgt International Perineural Injection Treatment Workshop 수료',
          'WAMPU Advanced Interventional Pain Workshop, Miami, USA 이수',
        ],
      },
      {
        label: '수상경력',
        items: [
          '인도네시아 의사협회 감사패 (쓰나미 긴급의료지원단)',
          '대한적십자사 공로패 / 한국병원통합학회 감사패',
          '[마디센병원]메이, 전국의과마이학협의회 감사패',
          '[충격파로 다양한 스포츠 질환 치료하기; SHOCK WAVES IN SPORTS MEDICINE] / 공로패 (의료정책)',
          '보건복지부 장관 표창 (공중보건)',
          '의산시장 공로패 (전국장애인권지원 의료지원)',
          '서울시장 표창 (전국장애인제전 서울시장애인제국회 창단)',
          '강천구청장 표창 (해온들파크본전거울니가 우수 기자재)',
        ],
      },
      {
        label: '저서',
        items: [
          '[WHO 구급시설 건강권 보장을 위한 지침서; Health in prisons :',
          ' a WHO guide to the essentials in prison health - 국가인권위원회] 번역',
          '[제충격파를 이용한 근막 서류; Fascia treatment with shockwaves] 역',
          '[SHOCK WAVES IN SPORTS MEDICINE] 역',
          '[충격파로 다양한 스포츠 질환 치료하기; SHOCK WAVES IN SPORTS MEDICINE] 역',
          '[ESWT in Hand Surgery] 역',
          '[다양한 수부 질환에 충격파 적용하기; ESWT in Hand Surgery] 역',
          '[특수충격파치료 치료 가이드라인] 역',
          '[충격파로 작용하는 통증치료] 역',
          '[전국 명성으로 증제술; Interventional Pain Procedures] 역',
          '[ESWT IN NEUROLOGY] 저',
          '[체외충격파·근골격계 치료의 이노베이션 일본충격파치료학회(JOSST) 치료(뇌외)] 역',
        ],
      },
    ],
  },
  {
    id: 2,
    hospital: '서울선정형외과',
    position: '원장',
    name: '심정인',
    photo: doctorSample2,
    sections: [
      {
        label: '경력',
        items: [
          '순천향대학교 의과대학 졸업',
          '서울성모병원 인턴 / 정형외과 레지던트 수료',
          '가톨릭대학교 성빈센트병원 정형외과 임상강사(수부 상지 및 미세수술)',
          '전)부천 중앙정형외과의원 원장',
          '',
          '세계통증학회(WIP) 국제통증초음파(CIPS) 자격 취득',
          '미국진단초음파협회(ARDMS) 국제근골격계초음파(RMSK) 자격 취득',
          '미국진단초음파협회(ARDMS) 국제혈관초음파검사사(RVT) 자격 취득',
          '미국진단초음파협회(ARDMS) 국제혈관초음파판독(RPVt) 자격 취득',
          '',
          '대한정맥통증학회 학술이사',
          '대한축구협회 팀닥터',
        ],
      },
      {
        label: '학회활동',
        items: [
          '대한정형외과학회 정회원',
          '대한수부외과학회 정회원',
          '대한미세수술학회 정회원',
          '대한정형외과초음파학회 정회원',
          '대한정상학회 정회원',
          '대한형통증의학회 정회원',
          '',
          '2018 AO Trauma Course-Advanced Principles of Fracture Management 수료',
          '2016, 2019 대한정형통증의학회 TPI(근막통증 유발점 주사자극 치료) 교육과정 이수',
          '2016 대한미세수술학회 Microsurgery workshop 과정 수료',
          '2018 대한정형외과초음파학회 하지근골격초음파 Advanced workshop 과정 수료',
          '2019 국제충격파치료학회(ISMST) ICC(Instructional Certification Course) 수료',
        ],
      },
      {
        label: '수상경력',
        items: [
          '인도네시아 의사협회 감사패 (쓰나미 긴급의료지원단)',
          '대한적십자사 공로패 / 한국병원통합환우회 감사패',
          '[의대생병원]메이, 전국의과대학학생회연합) 감사패',
          '대한의사협회 감사패 (의과대학 학생회) / 공로패 (의료정책)',
          '보건복지부 장관 표창 (공중보건)',
          '의산시장 공로패 (전국장애인권단체 의료지원)',
          '서울시장 표창 (전국장애인체전 서울시장애인체육회 팀닥터)',
          '양천구청장 표창 (해양온돌파본전거울나가 우수 기자재)',
        ],
      },
      {
        label: '저서',
        items: [
          '[ESWT in Hand Surgery] 역',
          '[다양한 수부 질환에 충격파 적용하기; ESWT in Hand Surgery] 역',
          '[초음파로 의미는 통증치료] 역',
          '[학주전 명성이도 증제술; Interventional pain procedures] 역',
          '[체외충격파·근골격계 치료의 이노베이션 일본충격파치료학회(JOSST) 치료매뉴얼] 역',
        ],
      },
    ],
  },
]

function DoctorCard({ doctor }: { doctor: typeof ORTHO_DOCTORS[number] }) {
  return (
    <div className='doctor-card'>
      <div className='doctor-card-photo'>
        <img src={doctor.photo} alt={`${doctor.name} 원장`} />
      </div>
      <div className='doctor-card-info'>
        <p className='doctor-card-hospital'>{doctor.hospital}</p>
        <h3 className='doctor-card-name'>{doctor.position} {doctor.name}</h3>
        <div className='doctor-card-sections'>
          {doctor.sections.map((sec) => (
            <div key={sec.label} className='doctor-card-section'>
              <h4 className='doctor-card-section-label'>{sec.label}</h4>
              <ul className='doctor-card-section-list'>
                {sec.items.map((item, i) =>
                  item === '' ? (
                    <li key={i} className='doctor-card-section-spacer' aria-hidden='true' />
                  ) : (
                    <li key={i}>{item}</li>
                  )
                )}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

function IntroPage() {
  const [active, setActive] = useState<TabKey>('ortho')

  return (
    <SubLayout title='의료진 소개'>
      <div className='intro-tabs'>
        {TABS.map((tab) => (
          <button
            key={tab.key}
            type='button'
            className={`intro-tab${active === tab.key ? ' is-active' : ''}`}
            onClick={() => setActive(tab.key)}
          >
            {tab.label}
          </button>
        ))}
      </div>

      <div className='intro-tab-content'>
        {active === 'ortho' && (
          <div className='doctor-list'>
            {ORTHO_DOCTORS.map((doc) => (
              <DoctorCard key={doc.id} doctor={doc} />
            ))}
          </div>
        )}
        {active === 'vein' && (
          <div className='doctor-list'>
            {ORTHO_DOCTORS.map((doc) => (
              <DoctorCard key={doc.id} doctor={doc} />
            ))}
          </div>
        )}
      </div>
    </SubLayout>
  )
}

export default IntroPage
