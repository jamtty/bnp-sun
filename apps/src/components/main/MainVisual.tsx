import { useRef, useState } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay, Navigation } from 'swiper/modules'
import type { Swiper as SwiperType } from 'swiper'
import 'swiper/css'
import vis1 from '../../assets/images/img_main_vis1.png'
import vis2 from '../../assets/images/img_main_vis2.png'
import vis3 from '../../assets/images/img_main_vis3.png'
import vis4 from '../../assets/images/img_main_vis4.png'
import vis5 from '../../assets/images/img_main_vis5.png'
import vis6 from '../../assets/images/img_main_vis6.png'
import vis7 from '../../assets/images/img_main_vis7.png'

const slides = [
  {
    id: 1,
    image: vis1,
    title: '서울 중서부권 정형외과 최초\n첨단재생의료 실시기관 지정!',
    desc: '서울선정형외과 보건복지부 공식 지정 재생의료기관',
  },
  {
    id: 2,
    image: vis2,
    title: '서울선정형외과 MRI & CT도입',
    desc: '근골격계부터 혈관 정밀진단까지 한번에 해결 가능\n검사는 편리하게! 진단은 정확하게!',
  },
  {
    id: 3,
    image: vis3,
    title: '서울선정형외과 투석혈관클리닉\n보훈위탁병원 지정',
    desc: '나라를 위해 헌신하신 국가유공자분들과 가족분들의\n혈관건강은 물론 마음의 건강까지도 책임지겠습니다.',
  },
  {
    id: 4,
    image: vis4,
    title: '환자중심의\n서울선정형외과의원',
    desc: '통증 · 재활 · 교정 치료!',
  },
  {
    id: 5,
    image: vis5,
    title: '주사,도수치료도 역시\n서울선정형외과의원',
    desc: '서울선정형외과의원은 양질의 의료 서비스를\n제공해 드리기 위해 항상 최선을 다합니다.',
  },
  {
    id: 6,
    image: vis6,
    title: '연구하고, 봉사하는\n서울선정형외과의원',
    desc: '서울선정형외과의원은 항상 연구하고 봉사하는 마음으로\n오시는 환자분 모두가 편안함을 유지할 수 있도록 노력합니다.',
  },
  {
    id: 7,
    image: vis7,
    title: 'one stop total service\n서울선정형외과의원 ',
    desc: '서울선정형외과의원은 깔끔하고 동선이 빠른 병원으로\n환자 모두가 편안하고, 빠르게 진료받는 것을 목표로 합니다.',
  },
]

function MainVisual() {
  const swiperRef = useRef<SwiperType | null>(null)
  const [current, setCurrent] = useState(1)
  const [isPlaying, setIsPlaying] = useState(true)
  const total = slides.length

  const handlePrev = () => swiperRef.current?.slidePrev()
  const handleNext = () => swiperRef.current?.slideNext()
  const handleToggle = () => {
    if (!swiperRef.current) return
    if (isPlaying) {
      swiperRef.current.autoplay.stop()
    } else {
      swiperRef.current.autoplay.start()
    }
    setIsPlaying(!isPlaying)
  }

  return (
    <div className='main-visual'>
      <Swiper
        modules={[Autoplay, Navigation]}
        loop
        autoplay={{ delay: 4000, disableOnInteraction: false }}
        onSwiper={(swiper) => { swiperRef.current = swiper }}
        onSlideChange={(swiper) => setCurrent((swiper.realIndex % total) + 1)}
        className='main-visual-swiper'
      >
        {slides.map((slide) => (
          <SwiperSlide key={slide.id}>
            <div
              className='main-visual-slide'
              style={{ backgroundImage: `url(${slide.image})` }}
            >
              <div className='main-visual-inner'>
                <p className='main-visual-title'>{slide.title}</p>
                <p className='main-visual-desc'>{slide.desc}</p>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      <div className='main-visual-controls'>
        <span className='main-visual-count'>{current}/{total}</span>
        <button type='button' className='btn-vis-prev' onClick={handlePrev} aria-label='이전'></button>
        <button type='button' className={`btn-vis-toggle ${isPlaying ? 'is-playing' : 'is-paused'}`} onClick={handleToggle} aria-label={isPlaying ? '일시정지' : '재생'}></button>
        <button type='button' className='btn-vis-next' onClick={handleNext} aria-label='다음'></button>
      </div>
    </div>
  )
}

export default MainVisual
