import type { ReactNode } from 'react'
import { useLocation } from 'react-router-dom'
import imgSub from '../../assets/images/img_subvis_1.svg'
import imgService from '../../assets/images/img_main_service.svg'
import imgContentsBig from '../../assets/images/img_main_contents_big.svg'
import imgMainBg from '../../assets/images/img_main_bg.svg'

interface SubLayoutProps {
  title: string
  children: ReactNode
}

function SubLayout({ title, children }: SubLayoutProps) {
  const { pathname } = useLocation()
  const section = pathname.split('/')[1] || ''

  const visualMap: Record<string, string> = {
    about: imgSub,
    pain: imgService,
    neuro: imgContentsBig,
    cell: imgMainBg,
    sports: imgService,
    vein: imgContentsBig,
    dialysis: imgSub,
  }

  const bg = visualMap[section] ?? imgSub

  return (
    <div className='sub-wrap'>
      <div className='sub-visual' style={{ backgroundImage: `url(${bg})` }}>
        <div className='inner'>
          <h2 className='sub-visual-title'>{title}</h2>
        </div>
      </div>
      <div className='sub-content'>
        <div className='inner'>
          {children}
        </div>
      </div>
    </div>
  )
}

export default SubLayout
