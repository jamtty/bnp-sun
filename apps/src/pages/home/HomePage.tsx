import { useRef, useState } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay } from 'swiper/modules'
import type { Swiper as SwiperType } from 'swiper'
import 'swiper/css'
import MainVisual from '../../components/main/MainVisual'
import btnYoutube from '../../assets/images/btn_youtube.svg'
import btnBlog from '../../assets/images/btn_blog.svg'
import thumbImage1 from '../../assets/images/img_main_contents_1.svg'
import thumbImage2 from '../../assets/images/img_main_contents_2.svg'
import thumbImageBig from '../../assets/images/img_main_contents_big.svg'
import bannerBg from '../../assets/images/img_main_bg2.svg'
import serviceImageThumb_1 from '../../assets/images/img_main_service_thumb1.svg'
import serviceImageThumb_2 from '../../assets/images/img_main_service_thumb2.svg'
import serviceImageThumb_3 from '../../assets/images/img_main_service_thumb3.svg'
import serviceImageThumb_4 from '../../assets/images/img_main_service_thumb4.svg'
import serviceImageThumb_5 from '../../assets/images/img_main_service_thumb5.svg'
import serviceImageThumb_6 from '../../assets/images/img_main_service_thumb6.svg'
import serviceImageThumb_7 from '../../assets/images/img_main_service_thumb7.svg'
import serviceImageThumb_8 from '../../assets/images/img_main_service_thumb8.svg'
import ServiceBanner1 from '../../assets/images/ico_service_banner1.svg'
import ServiceBanner2 from '../../assets/images/ico_service_banner2.svg'
import ServiceBanner3 from '../../assets/images/ico_service_banner3.svg'
import ServiceBanner4 from '../../assets/images/ico_service_banner4.svg'

function HomePage() {
  const [activeTab, setActiveTab] = useState<'notice' | 'faq'>('notice')
  const newsSwiperRef = useRef<SwiperType | null>(null)
    const serviceSwiperRef = useRef<SwiperType | null>(null)

  const noticeItems = [
    { id: 1, date: '2026-04-22', title: '2026년 5월 대체휴일 진료안내' },
    { id: 2, date: '2026-04-22', title: '2026년 5월 대체휴일 진료안내' },
    { id: 3, date: '2026-04-22', title: '2026년 5월 대체휴일 진료안내' },
    { id: 4, date: '2026-04-22', title: '2026년 5월 대체휴일 진료안내' },
    { id: 5, date: '2026-04-22', title: '2026년 5월 대체휴일 진료안내' },
    { id: 6, date: '2026-04-22', title: '2026년 5월 대체휴일 진료안내' },
  ]
  const faqItems = [
    { id: 1, date: '2026-04-22', title: '진료 예약은 어떻게 하나요?' },
    { id: 2, date: '2026-04-22', title: '주차 시설이 있나요?' },
    { id: 3, date: '2026-04-22', title: '입원 치료도 가능한가요?' },
    { id: 4, date: '2026-04-22', title: '보험 적용이 되나요?' },
    { id: 5, date: '2026-04-22', title: '진료 시간은 어떻게 되나요?' },
  ]
  const items = activeTab === 'notice' ? noticeItems : faqItems
    const serviceItems = [
        { id: 1, title: 'One Stop Total Service', desc: '한 자리에서 진단부터 치료, 재활까지 한번에!', image: serviceImageThumb_1 },
        { id: 2, title: '첨단 의료장비와 시설', desc: '정확한 진단과 치료를 위한 시스템을 갖추었습니다.', image: serviceImageThumb_2 },
        { id: 3, title: '맞춤형 진료 프로세스', desc: '진료부터 회복까지 빠르고 편안하게 연결합니다.', image: serviceImageThumb_3 },
        { id: 4, title: '환자 중심 케어', desc: '오시는 분 모두가 편안함을 느끼도록 설계했습니다.', image: serviceImageThumb_4 },
        { id: 5, title: '정밀 영상 진단', desc: '정확한 검사와 판독으로 빠른 치료 방향을 잡습니다.', image: serviceImageThumb_5 },
        { id: 6, title: '체계적인 재활 치료', desc: '치료 이후 회복까지 이어지는 재활 시스템을 제공합니다.', image: serviceImageThumb_6 },
        { id: 7, title: '통합 진료 시스템', desc: '진단과 치료, 회복이 하나의 흐름으로 이어집니다.', image: serviceImageThumb_7 },
        { id: 8, title: '편안한 진료 환경', desc: '환자 중심 동선과 쾌적한 공간을 제공합니다.', image: serviceImageThumb_8 },
    ]
  return (
    <>
      <MainVisual />
      <div className='main-container'>
        <section className='main-orthopedics-clinic'>
            <h2><strong>seoul sun</strong><br />orthopedics clinic</h2>
            <ul className='ul-list'>
                <li>목</li>
                <li>허리</li>
                <li>어깨</li>
                <li>팔꿈치,손,손목</li>
                <li>고관절</li>
                <li>무릎</li>
                <li>발목</li>
                <li>발</li>
            </ul>
        </section>
        <section className='main-news'>
            <div className='tit'>
                <h2>서울선정형외과 소식</h2>
                <ul className='news-tab'>
                    <li>
                        <button type='button' className={activeTab === 'notice' ? 'active' : ''} onClick={() => setActiveTab('notice')}>공지사항</button>
                    </li>
                    <li>
                        <button type='button' className={activeTab === 'faq' ? 'active' : ''} onClick={() => setActiveTab('faq')}>FAQ</button>
                    </li>
                </ul>
                <div className='news-controls'>
                    <button type='button' className='btn-news-prev' onClick={() => newsSwiperRef.current?.slidePrev()} aria-label='이전'></button>
                    <button type='button' className='btn-news-next' onClick={() => newsSwiperRef.current?.slideNext()} aria-label='다음'></button>
                    <button type='button' className='btn-news-more' aria-label='더보기'></button>
                </div>
            </div>
            <Swiper
                modules={[Autoplay]}
                onSwiper={(swiper) => { newsSwiperRef.current = swiper }}
                slidesPerView={4.5}
                spaceBetween={20}
                loop
                autoplay={{ delay: 3000, disableOnInteraction: false }}
                className='news-swiper'
            >
                {items.map((item) => (
                    <SwiperSlide key={item.id}>
                        <div className='news-card'>
                            <button type='button' className='btn-card-more'></button>
                            <p className='news-card-date'>{item.date}</p>
                            <p className='news-card-title'>{item.title}</p>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
        </section>
        <section className='main-sns'>
            <div className='tit'>
                <h2>서울선정형외과의원의<br />다양한 컨텐츠를 소개합니다.</h2>
                <p>박광선 대표원장님의 외부 강의 영상과 건강 컨텐츠를 만나보세요.</p>
                <div className='btn'>
                    <a href='#' onClick={(event) => { event.preventDefault(); alert('유튜브 바로가기입니다.') }}>
                        <img src={btnYoutube} alt='유튜브 바로가기' />
                    </a>
                    <a href='#' onClick={(event) => { event.preventDefault(); alert('블로그 바로가기입니다.') }}>
                        <img src={btnBlog} alt='블로그 바로가기' />
                    </a>
                </div>
            </div>
            <ul className='thumb-list'>
                <li><img src={thumbImage1} alt='컨텐츠 썸네일 1' /></li>
                <li><img src={thumbImage2} alt='컨텐츠 썸네일 2' /></li>
                <li><img src={thumbImageBig} alt='컨텐츠 썸네일 3' /></li>
            </ul>
            <div className='img-big'>
                <img src={thumbImageBig} alt='컨텐츠 썸네일 3' />
            </div>
        </section>
        <section className='main-Departments'>
            <div className='tit'>
                <h2>진료과목 안내 </h2>
                <p>서울선정형외과의원의 진료과목을 소개합니다.</p>
            </div>
            <ul className='thumb-list'>
                <li>
                    <p>
                        만성통증<br />클리닉
                        <span>Pain Medicine clinic</span>
                    </p>
                </li>
                <li>
                    <p>
                        뇌신경혈관<br />클리닉
                        <span>Neurovascular CLINIC </span>
                    </p>
                </li>
                <li>
                    <p>
                        재생세포<br />클리닉
                        <span>Regenerative Medicine<br />CLINIC</span>
                    </p>
                </li>
                <li>
                    <p>
                        스포츠재활<br />클리닉
                        <span>Sports Medicine &<br />Rehabilitation Clinic</span>
                    </p>
                </li>
                <li>
                    <p>
                        하지정맥<br />클리닉
                        <span>Venous Disease<br />Clinic</span>
                    </p>
                </li>
                <li>
                    <p>
                        투석혈관<br />클리닉
                        <span>Hemodialysis Vascular<br />Access Clinic</span>
                    </p>
                </li>
            </ul>
        </section>
        <section className='main-banner'>
            <div className='inner'>
                <img className='bg' src={bannerBg} alt='' aria-hidden='true' />
                <div className='txt'>
                    <h3>첨단의료장비와 시설</h3>
                    <p>첨단 장비들과 척추 및 관절 MRI 전문 영상의학과의 연계진료로 신속하고 정확한 진단과 치료를 약속합니다.</p>
                </div>
            </div>
        </section>
        <section className='main-service'>
            <div className='tit'>
                <div>
                    <h2>{serviceItems[0].title}</h2>
                    <p>{serviceItems[0].desc}</p>
                </div>
                <div className='news-controls'>
                    <button type='button' className='btn-news-prev' onClick={() => serviceSwiperRef.current?.slidePrev()} aria-label='이전'></button>
                    <button type='button' className='btn-news-next' onClick={() => serviceSwiperRef.current?.slideNext()} aria-label='다음'></button>
                    <button type='button' className='btn-news-more' aria-label='더보기'></button>
                </div>
            </div>
            <Swiper
                modules={[Autoplay]}
                onSwiper={(swiper) => { serviceSwiperRef.current = swiper }}
                slidesPerView={1}
                spaceBetween={0}
                loop
                autoplay={{ delay: 3500, disableOnInteraction: false }}
                className='service-swiper'
            >
                {serviceItems.map((item) => (
                    <SwiperSlide key={item.id}>
                        <div className='service-slide'>
                            <img src={item.image} alt={item.title} />
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
            <div className='service-thumb-wrap'>
                <Swiper
                    slidesPerView={8}
                    spaceBetween={25}
                    className='service-thumb-swiper'
                >
                    {serviceItems.map((item) => (
                        <SwiperSlide key={item.id}>
                            <button type='button' className='service-thumb' onClick={() => serviceSwiperRef.current?.slideToLoop(item.id - 1)}>
                                <img src={item.image} alt={item.title} />
                            </button>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
            <ul className='service-banner'>
                <li><a href="#"><img src={ServiceBanner1} alt='국제충격파치료학회' /></a></li>
                <li><a href="#"><img src={ServiceBanner2} alt='세계통증학회' /></a></li>
                <li><a href="#"><img src={ServiceBanner3} alt='미국정형의학회' /></a></li>
                <li><a href="#"><img src={ServiceBanner4} alt='미국초음파협회' /></a></li>
            </ul>
        </section>




      </div>
    </>
  )
}
export default HomePage

