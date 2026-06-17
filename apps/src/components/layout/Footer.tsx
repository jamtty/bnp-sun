import logoFooter from '../../assets/images/logo_footer.svg'
import { Link } from 'react-router-dom'

function Footer() {
  return (
    <footer className='footer'>
      <div className='map-wrap'>
        <div className="map">
          <iframe
            title='서울특별시 양천구 공항대로 630 지도'
            src='https://www.google.com/maps?q=%EC%84%9C%EC%9A%B8%ED%8A%B9%EB%B3%84%EC%8B%9C%20%EC%96%91%EC%B2%9C%EA%B5%AC%20%EA%B3%B5%ED%95%AD%EB%8C%80%EB%A1%9C%20630&output=embed'
            loading='lazy'
            referrerPolicy='no-referrer-when-downgrade'
            allowFullScreen
          />
        </div>
        <div className="info">
          <h3>오시는 길</h3>
          <div className='footer-row'>
            <div className='t-hd'>오시는 길</div>
            <div className='t-body'>
                <p>
                    <span>주소</span>
                    <strong>서울특별시 양천구 공항대로 630, 201호, 202호, 203호, 204호</strong>
                </p>
                <p>
                    <span>지하철</span>
                    <strong>9호선 염창역 3번 출구</strong>
                </p>
                <p>
                    <span>주차장 입구</span>
                    <strong>병원 건물 위치와 동일</strong>
                </p>
            </div>
          </div>
          <div className='footer-row'>
            <div className='t-hd'>진료시간</div>
            <div className='t-body'>
                <p>
                    <span>평일</span>
                    <strong className='w-160'>09:00 ~ 18:00</strong>
                    <span>토요일</span>
                    <strong>09:00 ~ 13:00(점심시간 없음)</strong>
                </p>
                <p>
                    <span>점심시간</span>
                    <strong className='w-160'>13:00 ~ 14:00</strong>
                    <span>휴무일</span>
                    <strong>일요일,공휴일</strong>
                </p>
            </div>
          </div>
          <div className='footer-row align-items-center'>
            <div className='t-hd'>문의전화</div>
            <div className='t-body'>
                <strong className='big'>02-2038-2530</strong>
            </div>
          </div>

          <div className='footer-links'>
            <a href='#' onClick={(event) => event.preventDefault()} className='footer-link footer-link-call'>
              <span>예약하기</span>
            </a>
            <a href='#' onClick={(event) => event.preventDefault()} className='footer-link footer-link-kakao'>
              <span>카카오톡</span>
            </a>
            <a href='#' onClick={(event) => event.preventDefault()} className='footer-link footer-link-blog'>
              <span>블로그가기</span>
            </a>
            <a href='#' onClick={(event) => event.preventDefault()} className='footer-link footer-link-youtube'>
              <span>유튜브가기</span>
            </a>
          </div>
        </div>
      </div>
      <div className='copyright'>
        <ul>
          <li><Link to='#'><strong>서울선정형외과 소개</strong></Link></li>
          <li><Link to='#'>이용약관</Link></li>
          <li><Link to='#'>개인정보처리방침</Link></li>
          <li><Link to='#'>오시는길</Link></li>
        </ul>
        <div className='logo'>
          <img src={logoFooter} alt='서울선정형외과 로고' />
        </div>
        <p>
            서울특별시 양천구 공항대로 630, 201호, 202호, 203호, 204호<span></span>
            대표전화 02-2038-2530<span></span>
            팩스 02-2038-2531<span></span>
            사업자번호 732-98-00628<span></span>
            대표자 박광선<br />
            © 2026 서울선정형외과의원, ALL RIGHT RESERVED
        </p>
      </div>
    </footer>
  )
}

export default Footer
