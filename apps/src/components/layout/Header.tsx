import { Link, useLocation } from 'react-router-dom'
import { useState, useEffect } from 'react'
import logo from '../../assets/images/logo.svg'

function Header() {
  const [isOpen, setIsOpen] = useState(false)
  const { pathname } = useLocation()

  useEffect(() => {
    // 경로 변경 시 전체메뉴 닫기
    setIsOpen(false)
  }, [pathname])

  const handleToggle = () => setIsOpen((v) => !v)

  return (
    <header className={`header ${isOpen ? 'is-open' : ''}`}>
      <div className='inner'>
        <div className='logo'>
          <Link to='/'><img src={logo} alt='선정형외과 로고' /></Link>
        </div>
        <div className='gnb'>
          <ul>
            <li>
              <Link to='/about/intro'>병원소개</Link>
              <ul className='gnb-2depth'>
                <li><Link to='/about/intro'>의료진 소개</Link></li>
                <li><Link to='/about/notice'>공지사항</Link></li>
                <li><Link to='/about/equipment'>장비소개</Link></li>
                <li><Link to='/about/location'>진료시간·오시는 길</Link></li>
                <li><Link to='/about/schedule'>진료 일정</Link></li>
                <li><Link to='/about/tour'>병원 둘러보기</Link></li>
              </ul>
            </li>
            <li>
              <Link to='/pain/injection'>만성통증클리닉</Link>
              <ul className='gnb-2depth'>
                <li><Link to='/pain/injection'>주사치료</Link></li>
                <li><Link to='/pain/shockwave'>충격파치료</Link></li>
                <li><Link to='/pain/manual'>도수치료</Link></li>
              </ul>
            </li>
            <li>
              <Link to='/neuro/mri-ct'>뇌신경혈관클리닉</Link>
              <ul className='gnb-2depth'>
                <li><Link to='/neuro/mri-ct'>MRI·CT</Link></li>
                <li><Link to='/neuro/emg'>근전도검사</Link></li>
                <li><Link to='/neuro/autonomic'>자율신경계검사</Link></li>
                <li><Link to='/neuro/tms'>TMS</Link></li>
                <li><Link to='/neuro/tcd'>TCD</Link></li>
              </ul>
            </li>
            <li>
              <Link to='/cell/regenerative'>재생세포클리닉</Link>
              <ul className='gnb-2depth'>
                <li><Link to='/cell/regenerative'>첨단재생의료실시기관 선정</Link></li>
                <li><Link to='/cell/prp'>PRP</Link></li>
                <li><Link to='/cell/bmac'>BMAC</Link></li>
                <li><Link to='/cell/svf'>SVF</Link></li>
              </ul>
            </li>
            <li>
              <Link to='/sports'>스포츠재활클리닉</Link>
            </li>
            <li>
              <Link to='/vein/varicose'>정맥·동맥부전클리닉</Link>
              <ul className='gnb-2depth'>
                <li><Link to='/vein/varicose'>하지정맥류</Link></li>
                <li><Link to='/vein/treatment'>하지정맥류 치료법</Link></li>
                <li><Link to='/vein/review'>환자 후기</Link></li>
              </ul>
            </li>
            <li>
              <Link to='/dialysis/vascular'>투석혈관클리닉</Link>
              <ul className='gnb-2depth'>
                <li><Link to='/dialysis/vascular'>투석혈관</Link></li>
                <li><Link to='/dialysis/patient'>요양환자</Link></li>
                <li><Link to='/dialysis/review'>환자후기</Link></li>
              </ul>
            </li>
          </ul>
        </div>
        <div className='util'>
          <ul>
            <li><button type='button' className='btn-my'></button></li>
            <li><button type='button' className='btn-sch'></button></li>
            <li>
              <button
                type='button'
                className='btn-menu'
                onClick={handleToggle}
                aria-expanded={isOpen}
                aria-label='전체메뉴 열기/닫기'
              />
            </li>
          </ul>
        </div>
      </div>
    </header>
  )
}

export default Header
