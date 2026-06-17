import { useState } from 'react'
import SubLayout from '../../components/layout/SubLayout'

const TABS = [
  { key: 'ortho', label: '정형외과' },
  { key: 'vein',  label: '정맥·동맥부전 / 투석혈관' },
] as const

type TabKey = typeof TABS[number]['key']

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
          <div>정형외과 의료진 내용</div>
        )}
        {active === 'vein' && (
          <div>정맥·동맥부전 / 투석혈관 의료진 내용</div>
        )}
      </div>
    </SubLayout>
  )
}

export default IntroPage
