import { useState } from 'react'
import SubLayout from '../../components/layout/SubLayout'
import imgEquipSample from '../../assets/images/img_sam_ma.svg'

const TABS = [
  { key: 'ortho', label: '정형외과' },
  { key: 'vein',  label: '정맥·동맥부전 / 투석혈관' },
] as const

type TabKey = typeof TABS[number]['key']

interface EquipmentItem {
  id: number
  name: string
  desc: string
  image: string
}

const ORTHO_EQUIPMENTS: EquipmentItem[] = [
  {
    id: 1,
    name: '페인스크램블러',
    desc: '약물치료나 기존의 제반 통증치료에 반응이 없는 신경성 통증 및 만성 통증 등 난치성 통증 치료기 부작용이 없고 즉각적이고 탁월한 치료 가능',
    image: imgEquipSample
  },
  {
    id: 2,
    name: '특수 ICT (AUDIOTRON)',
    desc: '리듬, 와이드, 무브의 3가지 모드와 MIX모드 탑재하여 4개의 채널에서 각각 4극 출력, 총 16개의 흡착 컵을 사용하여 동시에 여러 부위의 치료가 가능 더욱 부드럽고 풍부한 간섭파를 발생시켜 통증 부위의',
    image: imgEquipSample
  },
  {
    id: 3,
    name: '골밀도 검사기 (DEXXUMT)',
    desc: '체지방 분석 중 가장 정확한 DXA 장비로 동급 장비 중에서 가장 빠른 속도로 측정이 가능하며 한국인 체형에 맞게 설계 골밀도, 체지방량, 체질량지수, 복부 두께 4가지를 한번에 진단 및 분석 가능',
    image: imgEquipSample
  }
]

const VEIN_EQUIPMENTS: EquipmentItem[] = [
  {
    id: 1,
    name: '정밀 혈관 초음파 (EPIQ Elite)',
    desc: '혈관 구조와 혈류 역학적 상태를 정밀하게 추적하고 고해상도 영상을 실시간 제공하여 하지정맥류 및 동맥 부전을 포함한 복합 혈관 질환을 완벽하게 진단합니다.',
    image: imgEquipSample
  },
  {
    id: 2,
    name: '혈관 폐쇄 치료용 고주파 장비',
    desc: '역류 질환이 발생한 손상된 하지 혈관 내벽을 고주파 열에너지를 사용하여 비절개 방식으로 효과적으로 폐쇄하며, 출혈과 통증이 대폭 경감되어 일상 복귀가 수월합니다.',
    image: imgEquipSample
  },
  {
    id: 3,
    name: '투석 혈관 관리용 정밀 온열 치료기',
    desc: '투석 시 혈관의 안정성을 유지하고, 혈류 공급을 유연하게 유도하여 장시간 반복되는 혈액 투석 및 정맥 협착 증세로부터 혈관 부작용과 경련을 선제적으로 완화하고 보호합니다.',
    image: imgEquipSample
  }
]

function EquipmentPage() {
  const [active, setActive] = useState<TabKey>('ortho')

  const currentEquipments = active === 'ortho' ? ORTHO_EQUIPMENTS : VEIN_EQUIPMENTS

  return (
    <SubLayout title='장비소개'>
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

      <div className='equipment-list-wrapper'>
        <div className='equipment-list'>
          {currentEquipments.map((equip) => (
            <div key={equip.id} className='equipment-card'>
              <div className='equipment-card-img-wrap'>
                <img src={equip.image} alt={equip.name} className='equipment-card-img' />
              </div>
              <div className='equipment-card-info'>
                <h3 className='equipment-card-name'>{equip.name}</h3>
                <p className='equipment-card-desc'>{equip.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </SubLayout>
  )
}

export default EquipmentPage

