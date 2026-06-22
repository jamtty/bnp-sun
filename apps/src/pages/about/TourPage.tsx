import { useRef, useState } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Thumbs } from 'swiper/modules'
import type { Swiper as SwiperType } from 'swiper'
import 'swiper/css'
import SubLayout from '../../components/layout/SubLayout'
import hosSample from '../../assets/images/img_hos_sample.png'

const TABS = [
  { key: 'ortho',    label: '정형외과' },
  { key: 'vein',     label: '정맥·동맥부전' },
  { key: 'dialysis', label: '투석혈관' },
] as const

type TabKey = typeof TABS[number]['key']

const IMAGES: Record<TabKey, string[]> = {
  ortho:    Array(6).fill(hosSample),
  vein:     Array(6).fill(hosSample),
  dialysis: Array(6).fill(hosSample),
}

function TourPage() {
  const [active, setActive] = useState<TabKey>('ortho')
  const [thumbsSwiper, setThumbsSwiper] = useState<SwiperType | null>(null)
  const mainSwiperRef = useRef<SwiperType | null>(null)

  const handleTabChange = (key: TabKey) => {
    setActive(key)
    setThumbsSwiper(null)
  }

  const images = IMAGES[active]

  return (
    <SubLayout title='병원 둘러보기'>
      <div className='intro-tabs'>
        {TABS.map((tab) => (
          <button
            key={tab.key}
            className={`intro-tab${active === tab.key ? ' is-active' : ''}`}
            onClick={() => handleTabChange(tab.key)}
            type='button'
          >
            {tab.label}
          </button>
        ))}
      </div>
      <div className='tour-gallery'>
        {/* 메인 슬라이더 */}
        <div className='tour-main-wrap'>
          <Swiper
            key={`main-${active}`}
            modules={[Thumbs]}
            thumbs={{ swiper: thumbsSwiper }}
            onSwiper={(sw) => { mainSwiperRef.current = sw }}
            className='tour-main-swiper'
          >
            {images.map((img, i) => (
              <SwiperSlide key={i}>
                <img src={img} alt={`병원 사진 ${i + 1}`} />
              </SwiperSlide>
            ))}
          </Swiper>
          <button className='tour-nav-btn tour-nav-prev' type='button' onClick={() => mainSwiperRef.current?.slidePrev()} aria-label='이전' />
          <button className='tour-nav-btn tour-nav-next' type='button' onClick={() => mainSwiperRef.current?.slideNext()} aria-label='다음' />
        </div>
        {/* 썸네일 슬라이더 */}
        <Swiper
          key={`thumb-${active}`}
          modules={[Thumbs]}
          onSwiper={setThumbsSwiper}
          slidesPerView={5}
          spaceBetween={12}
          watchSlidesProgress
          className='tour-thumb-swiper'
        >
          {images.map((img, i) => (
            <SwiperSlide key={i}>
              <img src={img} alt={`썸네일 ${i + 1}`} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </SubLayout>
  )
}

export default TourPage
