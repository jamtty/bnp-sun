import { useState } from 'react'
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
    id: 1,
    title: '6월 전국동시지방선거일 정상진료 안내',
    date: '2026.05.22',
    author: '관리자',
    image: imgNoticeSample,
  },
  {
    id: 2,
    title: '6월 전국동시지방선거일 정상진료 안내',
    date: '2026.05.22',
    author: '관리자',
    image: imgNoticeSample,
  },
  {
    id: 3,
    title: '6월 전국동시지방선거일 정상진료 안내',
    date: '2026.05.22',
    author: '관리자',
    image: imgNoticeSample,
  },
  {
    id: 4,
    title: '6월 전국동시지방선거일 정상진료 안내',
    date: '2026.05.22',
    author: '관리자',
    image: imgNoticeSample,
  },
  {
    id: 5,
    title: '6월 전국동시지방선거일 정상진료 안내',
    date: '2026.05.22',
    author: '관리자',
    image: imgNoticeSample,
  },
  {
    id: 6,
    title: '6월 전국동시지방선거일 정상진료 안내',
    date: '2026.05.22',
    author: '관리자',
    image: imgNoticeSample,
  },
  {
    id: 7,
    title: '6월 전국동시지방선거일 정상진료 안내',
    date: '2026.05.22',
    author: '관리자',
    image: imgNoticeSample,
  },
  {
    id: 8,
    title: '6월 전국동시지방선거일 정상진료 안내',
    date: '2026.05.22',
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
            <div key={idx} className='notice-card'>
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
            </div>
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
