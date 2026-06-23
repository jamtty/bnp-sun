import type { ReactNode } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { useState, useEffect, useRef } from 'react'
import imgAbout   from '../../assets/images/img_subvis_1.svg'
import imgPain    from '../../assets/images/img_main_service.svg'
import imgNeuro   from '../../assets/images/img_main_contents_1.svg'
import imgCell    from '../../assets/images/img_main_contents_2.svg'
import imgSports  from '../../assets/images/img_main_service2.svg'
import imgVein    from '../../assets/images/img_Departments_1.svg'
import imgDialysis from '../../assets/images/img_Departments_2.svg'

type MenuItem = { label: string; path: string }
type SectionDef = { label: string; path: string; img: string; children: MenuItem[] }

const SECTIONS: Record<string, SectionDef> = {
  about: {
    label: '병원소개', path: '/about/intro', img: imgAbout,
    children: [
      { label: '의료진 소개',        path: '/about/intro' },
      { label: '공지사항',           path: '/about/notice' },
      { label: '장비소개',           path: '/about/equipment' },
      { label: '진료시간·오시는 길', path: '/about/location' },
      { label: '진료 일정',          path: '/about/schedule' },
      { label: '병원 둘러보기',      path: '/about/tour' },
      { label: '비급여 안내',        path: '/about/non-covered' },
    ],
  },
  pain: {
    label: '만성통증클리닉', path: '/pain/injection', img: imgPain,
    children: [
      { label: '주사치료',   path: '/pain/injection' },
      { label: '충격파치료', path: '/pain/shockwave' },
      { label: '도수치료',   path: '/pain/manual' },
    ],
  },
  neuro: {
    label: '뇌신경혈관클리닉', path: '/neuro/mri-ct', img: imgNeuro,
    children: [
      { label: 'MRI·CT',      path: '/neuro/mri-ct' },
      { label: '근전도검사',   path: '/neuro/emg' },
      { label: '자율신경계검사', path: '/neuro/autonomic' },
      { label: 'TMS',         path: '/neuro/tms' },
      { label: 'TCD',         path: '/neuro/tcd' },
    ],
  },
  cell: {
    label: '재생세포클리닉', path: '/cell/regenerative', img: imgCell,
    children: [
      { label: '첨단재생의료실시기관 선정', path: '/cell/regenerative' },
      { label: 'PRP',  path: '/cell/prp' },
      { label: 'BMAC', path: '/cell/bmac' },
      { label: 'SVF',  path: '/cell/svf' },
    ],
  },
  sports: {
    label: '스포츠재활클리닉', path: '/sports', img: imgSports,
    children: [
      { label: '스포츠재활클리닉', path: '/sports' },
    ],
  },
  vein: {
    label: '정맥·동맥부전클리닉', path: '/vein/varicose', img: imgVein,
    children: [
      { label: '하지정맥류',       path: '/vein/varicose' },
      { label: '하지정맥류 치료법', path: '/vein/treatment' },
      { label: '환자 후기',        path: '/vein/review' },
    ],
  },
  dialysis: {
    label: '투석혈관클리닉', path: '/dialysis/vascular', img: imgDialysis,
    children: [
      { label: '투석혈관', path: '/dialysis/vascular' },
      { label: '요양환자', path: '/dialysis/patient' },
      { label: '환자후기', path: '/dialysis/review' },
    ],
  },
}

const ALL_SECTIONS = Object.values(SECTIONS).map(({ label, path }) => ({ label, path }))

interface SubLayoutProps {
  title: string
  children?: ReactNode
}

function SubLayout({ title, children }: SubLayoutProps) {
  const { pathname } = useLocation()
  const sectionKey = pathname.split('/')[1] || ''
  const section = SECTIONS[sectionKey]
  // 상세페이지 경로(/about/notice/:id)에서도 LNB의 현재 페이지가 '공지사항'으로 매칭되도록 처리
  const currentPage = section?.children.find((c) => {
    if (c.path === '/about/notice' && pathname.startsWith('/about/notice')) {
      return true
    }
    return c.path === pathname
  })

  const [sectionOpen, setSectionOpen] = useState(false)
  const [pageOpen,    setPageOpen]    = useState(false)
  const lnbRef = useRef<HTMLDivElement>(null)

  // 영역 외 클릭 시 드롭다운 닫기
  useEffect(() => {
    const handler = (e: MouseEvent) => {
      if (lnbRef.current && !lnbRef.current.contains(e.target as Node)) {
        setSectionOpen(false)
        setPageOpen(false)
      }
    }
    document.addEventListener('mousedown', handler)
    return () => document.removeEventListener('mousedown', handler)
  }, [])

  const bg = section?.img ?? imgAbout

  return (
    <div className='sub-wrap'>
      {/* 서브 비주얼: GNB 메뉴명 표시 */}
      <div className='sub-visual' style={{ backgroundImage: `url(${bg})` }}>
        <div className='inner'>
          <h2 className='sub-visual-title'>{section?.label ?? title}</h2>
        </div>
      </div>

      {/* LNB */}
      <div className='sub-lnb' ref={lnbRef}>
        <div className='inner'>
          <ul className='sub-lnb-list'>
            {/* 홈 */}
            <li className='sub-lnb-home'>
              <Link to='/' aria-label='홈으로'></Link>
            </li>

            {/* 섹션(1depth) 드롭다운 */}
            {section && (
              <li className={`sub-lnb-item${sectionOpen ? ' is-open' : ''}`}>
                <button
                  type='button'
                  className='sub-lnb-btn'
                  onClick={() => { setSectionOpen((v) => !v); setPageOpen(false) }}
                  aria-expanded={sectionOpen}
                >
                  {section.label}
                  <span className='sub-lnb-arrow' aria-hidden='true' />
                </button>
                <ul className='sub-lnb-dropdown'>
                  {ALL_SECTIONS.map((s) => (
                    <li key={s.path}>
                      <Link to={s.path} onClick={() => setSectionOpen(false)}>{s.label}</Link>
                    </li>
                  ))}
                </ul>
              </li>
            )}

            {/* 현재 페이지(2depth) 드롭다운 */}
            {section && currentPage && (
              <li className={`sub-lnb-item${pageOpen ? ' is-open' : ''}`}>
                <button
                  type='button'
                  className='sub-lnb-btn'
                  onClick={() => { setPageOpen((v) => !v); setSectionOpen(false) }}
                  aria-expanded={pageOpen}
                >
                  {currentPage.label}
                  <span className='sub-lnb-arrow' aria-hidden='true' />
                </button>
                <ul className='sub-lnb-dropdown'>
                  {section.children.map((c) => (
                    <li key={c.path}>
                      <Link to={c.path} onClick={() => setPageOpen(false)}>{c.label}</Link>
                    </li>
                  ))}
                </ul>
              </li>
            )}
          </ul>
        </div>
      </div>

      {/* 페이지 콘텐츠 */}
      <div className='sub-content'>
        <div className='inner'>
          <h2 className='sub-page-title'>{title}</h2>
          {children}
        </div>
      </div>
    </div>
  )
}

export default SubLayout
