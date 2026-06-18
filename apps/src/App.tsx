import { useState, useEffect } from 'react'
import './assets/css/common.css'
import './assets/css/style.css'
import Header from './components/layout/Header'
import Footer from './components/layout/Footer'
import AppRouter from './router'
import { useLocation } from 'react-router-dom'

function App() {
  const [isQuickMenuOpen, setIsQuickMenuOpen] = useState(false)

  const { pathname } = useLocation()

  useEffect(() => {
    // 라우트가 변경되면 열려있던 전체/퀵 메뉴를 닫고 최상단으로 이동
    setIsQuickMenuOpen(false)
    window.scrollTo({ top: 0, behavior: 'instant' })
    try {
      const active = document.activeElement as HTMLElement | null
      if (active && typeof active.blur === 'function') active.blur()
    } catch (e) {
      // 서버 환경 등에서 안전하게 무시
    }
    // 향후 다른 전역 메뉴 상태가 추가되면 여기서 함께 닫도록 확장 가능
  }, [pathname])

  const handleClickTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  const handleToggleQuickMenu = () => {
    setIsQuickMenuOpen((currentValue) => !currentValue)
  }

  const quickMenuItems = [
    { label: '유튜브', shortLabel: 'Y' },
    { label: '블로그', shortLabel: 'B' },
    { label: '서류발급', shortLabel: 'D' },
    { label: '오시는길', shortLabel: 'L' },
  ]

  return (
    <div className='wrap'>
      <Header />
      <AppRouter />
      <Footer />
      <div className={`quick-menu${isQuickMenuOpen ? ' is-open' : ''}`}>
        <div className='quick-menu-panel' aria-hidden={!isQuickMenuOpen}>
          {quickMenuItems.map((item) => (
            <button type='button' key={item.label} className='quick-menu-item'>
              <span className='quick-menu-icon' aria-hidden='true'></span>
              <span className='quick-menu-label'>{item.label}</span>
            </button>
          ))}
        </div>
        <button
          type='button'
          className='quick-menu-toggle'
          onClick={handleToggleQuickMenu}
          aria-label='퀵메뉴 열기'
          aria-expanded={isQuickMenuOpen}
        >
          <span className='quick-menu-toggle-icon' aria-hidden='true'></span>
          <span className='quick-menu-toggle-label'>퀵메뉴</span>
        </button>
        <button type='button' className='btn-reserve' aria-label='진료예약'>
            <span className='btn-reserve-icon' aria-hidden='true'>◆</span>
            <span className='btn-reserve-label'>진료예약</span>
        </button>
        <button
            type='button'
            className='btn-top'
            onClick={handleClickTop}
            aria-label='상단으로 이동'
        />
      </div>
    </div>
  )
}

export default App

