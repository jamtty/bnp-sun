import { useState } from 'react'
import { Link } from 'react-router-dom'
import SubLayout from '../../components/layout/SubLayout'
import imgNoticeSample from '../../assets/images/img_notice_sample.svg'

interface NoticeItem {
  id: number
  title: string
  date: string
  author: string
  image: string
}

const INITIAL_NOTICES: NoticeItem[] = [
  {
    id: 3,
    title: '석가탄신일 대체휴일 정상진료 안내',
    date: '2026.05.25',
    author: '관리자',
    image: imgNoticeSample,
  },
  {
    id: 2,
    title: '2026년 6월 진료일정 안내',
    date: '2026.05.22',
    author: '관리자',
    image: imgNoticeSample,
  },
  {
    id: 1,
    title: '6월 전국동시지방선거일 정상진료 안내',
    date: '2026.05.20',
    author: '관리자',
    image: imgNoticeSample,
  },
  {
    id: 4,
    title: '서울선정형외과 병원 이전 및 확장 안내',
    date: '2026.05.15',
    author: '관리자',
    image: imgNoticeSample,
  },
  {
    id: 5,
    title: '정형외과 전문의 추가 초빙 및 4인 진료 개시',
    date: '2026.05.10',
    author: '관리자',
    image: imgNoticeSample,
  },
  {
    id: 6,
    title: '도수치료/물리치료 센터 리뉴얼 및 확대 오픈',
    date: '2026.05.05',
    author: '관리자',
    image: imgNoticeSample,
  },
  {
    id: 7,
    title: '척추 관절 비수술 통합 치료 프로그램 안내',
    date: '2026.04.28',
    author: '관리자',
    image: imgNoticeSample,
  },
  {
    id: 8,
    title: '독감 예방접종 및 대상포진 백신 할인 이벤트',
    date: '2026.04.15',
    author: '관리자',
    image: imgNoticeSample,
  },
]

function NoticePage() {
  const [searchQuery, setSearchQuery] = useState('')

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(e.target.value)
  }

  const filteredNotices = INITIAL_NOTICES.filter((notice) =>
    notice.title.toLowerCase().includes(searchQuery.toLowerCase())
  )

  return (
    <SubLayout title='공지사항'>
      <div className='notice-header-row'>
        <div className='notice-search'>
          <input
            type='text'
            placeholder='검색어를 입력하세요.'
            className='notice-search-input'
            value={searchQuery}
            onChange={handleSearchChange}
          />
          <button type='button' className='notice-search-btn' aria-label='검색' />
        </div>
      </div>

      <div className='notice-grid'>
        {filteredNotices.length > 0 ? (
          filteredNotices.map((notice, idx) => (
              <Link key={idx} to={`/about/notice/${notice.id}`} className='notice-card'>
                <div className='notice-card-img-wrap'>
                  <img src={notice.image} alt={notice.title} className='notice-card-img' />
                </div>
                <div className='notice-card-info'>
                  <h3 className='notice-card-title'>{notice.title}</h3>
                  <div className='notice-card-meta'>
                    <span className='notice-card-date'>{notice.date}</span>
                    <span className='notice-card-divider'>|</span>
                    <span className='notice-card-author'>{notice.author}</span>
                  </div>
                </div>
              </Link>
          ))
        ) : (
          <div className='notice-empty'>검색 결과가 없습니다.</div>
        )}
      </div>

      {/* 하단 페이징 영역 */}
      <div className='notice-pagination'>
        <button type='button' className='page-btn page-first' aria-label='첫 페이지' />
        <button type='button' className='page-btn page-prev' aria-label='이전 페이지' />
        
        <ul className='page-list'>
          <li><button type='button' className='page-num is-active'>1</button></li>
          <li><button type='button' className='page-num'>2</button></li>
          <li><button type='button' className='page-num'>3</button></li>
          <li><button type='button' className='page-num'>4</button></li>
          <li><button type='button' className='page-num'>5</button></li>
          <li><button type='button' className='page-num'>6</button></li>
          <li><button type='button' className='page-num'>7</button></li>
          <li><button type='button' className='page-num'>8</button></li>
          <li><button type='button' className='page-num'>9</button></li>
          <li><button type='button' className='page-num'>10</button></li>
        </ul>

        <button type='button' className='page-btn page-next' aria-label='다음 페이지' />
        <button type='button' className='page-btn page-last' aria-label='마지막 페이지' />
      </div>
    </SubLayout>
  )
}

export default NoticePage
