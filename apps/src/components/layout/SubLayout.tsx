import type { ReactNode } from 'react'

interface SubLayoutProps {
  title: string
  children: ReactNode
}

function SubLayout({ title, children }: SubLayoutProps) {
  return (
    <div className='sub-wrap'>
      <div className='sub-visual'>
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
