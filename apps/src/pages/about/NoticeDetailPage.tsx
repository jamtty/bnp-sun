import { useParams, Link } from 'react-router-dom'
import SubLayout from '../../components/layout/SubLayout'
import imgNoticeSample from '../../assets/images/img_notice_sample.svg'
import icoPrint from '../../assets/images/ico_print.svg'
import icoShare from '../../assets/images/ico_share.svg'

const INITIAL_NOTICES = [
  {
    id: 1,
    title: '6월 전국동시지방선거일 정상진료 안내',
    date: '2026.05.20',
    author: '관리자',
    image: imgNoticeSample,
    content: `
      <div class="notice-detail-content">
        <p>안녕하세요. 서울선정형외과입니다.</p>
        <p>6월 3일 전국동시지방선거일 진료 일정을 안내해 드립니다.</p>
        <p>서울선정형외과는 선거일 당일에도 정상 진료를 시행합니다.</p>
        <p>내원 및 예약에 참고해주시기 바랍니다.</p>
      </div>
    `,
  },
  {
    id: 2,
    title: '2026년 6월 진료일정 안내',
    date: '2026.05.22',
    author: '관리자',
    image: imgNoticeSample,
    content: `
      <div class="notice-detail-content">
        <p>언제나 서울선정형외과를 믿고 찾아주셔서 감사합니다.</p>
        <p>6월 진료일정을 위와 같이 안내드리오니 본원 이용에 참고 부탁드립니다.</p>
      </div>
    `,
  },
  {
    id: 3,
    title: '석가탄신일 대체휴일 정상진료 안내',
    date: '2026.05.25',
    author: '관리자',
    image: imgNoticeSample,
    content: `
      <div class="notice-detail-content">
        <p>안녕하세요. 서울선정형외과입니다.</p>
        <p>대체공휴일 정상진료에 관한 안내사항입니다.</p>
        <p>양질의 진료 서비스 제공을 위해 최선을 다하겠습니다.</p>
      </div>
    `,
  },
]

function NoticeDetailPage() {
  const { id } = useParams()
  const currentIndex = INITIAL_NOTICES.findIndex((n) => n.id === Number(id))
  const notice = INITIAL_NOTICES[currentIndex]

  const handleShare = () => {
    navigator.clipboard.writeText(window.location.href)
      .then(() => {
        alert('링크가 클립보드에 복사되었습니다.')
      })
      .catch((err) => {
        console.error('링크 복사 실패:', err)
      })
  }

  if (!notice) {
    return (
      <SubLayout title="공지사항">
        <div className="notice-detail-container">
          <p className='nodata'>자료가 없습니다.</p>
          <div className="notice-detail-footer">
            <Link to="/about/notice" className="btn-list">목록</Link>
          </div>
        </div>
      </SubLayout>
    )
  }

  // index를 기준으로 이전글, 다음글을 구합니다.
  const prevNotice = currentIndex > 0 ? INITIAL_NOTICES[currentIndex - 1] : null
  const nextNotice = currentIndex < INITIAL_NOTICES.length - 1 ? INITIAL_NOTICES[currentIndex + 1] : null

  return (
    <SubLayout title="공지사항">
      <div className="notice-detail-container">
        <div className="notice-detail-header">
          <h2 className="notice-detail-title">{notice.title}</h2>
          <div className="notice-detail-meta-wrapper">
            <div className="notice-detail-meta">
              <span className="notice-detail-date">{notice.date}</span>
              <span className="notice-detail-divider">|</span>
              <span className="notice-detail-author">{notice.author}</span>
              <span className="notice-detail-divider">|</span>
              <span className="notice-detail-category">공지사항</span>
            </div>
            <div className="notice-detail-actions">
              <button onClick={() => window.print()} className="action-btn" title="인쇄">
                <img src={icoPrint} alt="인쇄" />
              </button>
              <span className="action-divider"></span>
              <button onClick={handleShare} className="action-btn" title="공유">
                <img src={icoShare} alt="공유" />
              </button>
            </div>
          </div>
        </div>

        <div className="notice-detail-body">
          {notice.image && (
            <div className="notice-detail-img-wrap">
              <img src={notice.image} alt={notice.title} className="notice-detail-body-img" />
            </div>
          )}
          <div dangerouslySetInnerHTML={{ __html: notice.content }} />
        </div>

        {/* 이전글 / 다음글 행 영역 */}
        <div className="notice-navigation-list">
          <div className="notice-navigation-item">
            <span className="nav-label">이전글</span>
            {prevNotice ? (
              <Link to={`/about/notice/${prevNotice.id}`} className="nav-link">
                {prevNotice.title}
              </Link>
            ) : (
              <span className="nav-link disabled">이전글이 없습니다.</span>
            )}
          </div>
          <div className="notice-navigation-item">
            <span className="nav-label">다음글</span>
            {nextNotice ? (
              <Link to={`/about/notice/${nextNotice.id}`} className="nav-link">
                {nextNotice.title}
              </Link>
            ) : (
              <span className="nav-link disabled">다음글이 없습니다.</span>
            )}
          </div>
        </div>

        {/* 하단 우측 목록 버튼 영역 */}
        <div className="notice-detail-footer">
          <Link to="/about/notice" className="btn-list">목록</Link>
        </div>
      </div>
    </SubLayout>
  )
}

export default NoticeDetailPage