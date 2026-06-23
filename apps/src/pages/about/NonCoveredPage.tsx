import SubLayout from '../../components/layout/SubLayout'

function NonCoveredPage() {
  return (
    <SubLayout title='비급여 안내'>
      <div className='nc-scroll'>
        <table className='nc-table'>
          <colgroup>
            <col style={{ width: '10%' }} />
            <col style={{ width: '10%' }} />
            <col style={{ width: '8%' }} />
            <col style={{ width: '10%' }} />
            <col style={{ width: '5%' }} />
            <col style={{ width: '7%' }} />
            <col style={{ width: '7%' }} />
            <col style={{ width: '7%' }} />
            <col style={{ width: '10%' }} />
            <col style={{ width: '10%' }} />
            <col style={{ width: '8%' }} />
            <col style={{ width: '8%' }} />
          </colgroup>
          <thead>
            <tr>
              <th rowSpan={3}>중분류</th><th rowSpan={3}>소분류</th>
              <th colSpan={2}>항 목</th>
              <th colSpan={6}>진료 비용 (단위 : 원)</th>
              <th rowSpan={3}>특이사항</th><th rowSpan={3}>최종 변경일</th>
            </tr>
            <tr>
              <th rowSpan={2}>코드</th><th rowSpan={2}>명칭</th><th rowSpan={2}>구분</th>
              <th rowSpan={2}>비용</th><th rowSpan={2}>최저비용</th><th rowSpan={2}>최고비용</th>
              <th>치료<br />재료대</th><th>약제비</th>
            </tr>
            <tr><th>포함<br />여부</th><th>포함<br />여부</th></tr>
          </thead>
          <tbody>
            {/* ── 초음파 검사료 ── 12행 */}
            <tr>
              <td rowSpan={12}>초음파<br />검사료<br />(진단초음파)</td>
              <td>근골격,연부-연부조직 초음파</td><td>EB470</td><td>일반, 경추, 요추</td><td></td>
              <td className='nc-r'>50,000</td><td className='nc-r'>50,000</td><td className='nc-r'>70,000</td>
              <td></td><td></td><td></td>
              <td rowSpan={62} className='nc-date'>2026.01.02<br /><span>(이하 동일)</span></td>
            </tr>
            <tr>
              <td rowSpan={8}>근골격,연부-관절 초음파</td>
              <td>EB466</td><td>어깨</td><td></td><td className='nc-r'>80,000</td><td></td><td></td><td></td><td></td><td></td>
            </tr>
            <tr><td>EB463</td><td>팔꿈치</td><td></td><td className='nc-r'>60,000</td><td></td><td></td><td></td><td></td><td></td></tr>
            <tr><td>EB467</td><td>손목</td><td></td><td className='nc-r'>80,000</td><td></td><td></td><td></td><td></td><td></td></tr>
            <tr><td>EB461</td><td>손가락</td><td></td><td className='nc-r'>50,000</td><td></td><td></td><td></td><td></td><td></td></tr>
            <tr><td>EB465</td><td>고관절</td><td></td><td className='nc-r'>80,000</td><td></td><td></td><td></td><td></td><td></td></tr>
            <tr><td>EB464</td><td>무릎</td><td></td><td className='nc-r'>60,000</td><td></td><td></td><td></td><td></td><td></td></tr>
            <tr><td>EB468</td><td>발목</td><td></td><td className='nc-r'>80,000</td><td></td><td></td><td></td><td></td><td></td></tr>
            <tr><td>EB462</td><td>발가락</td><td></td><td className='nc-r'>50,000</td><td></td><td></td><td></td><td></td><td></td></tr>
            <tr>
              <td>두경부-경부 초음파/<br />갑상선,부갑상선</td>
              <td>EB414</td><td>갑상선 초음파</td><td></td><td className='nc-r'>80,000</td><td></td><td></td><td></td><td></td><td></td>
            </tr>
            <tr>
              <td>혈관-두개외 혈관<br />도플러 초음파/경동맥</td>
              <td>EB482</td><td>경동맥 초음파</td><td></td><td className='nc-r'>100,000</td><td></td><td></td><td></td><td></td><td></td>
            </tr>
            <tr>
              <td>혈관-사지혈관<br />도플러 초음파</td>
              <td>EB489</td><td>혈관 초음파</td><td></td><td className='nc-r'>140,000</td><td></td><td></td><td></td><td className='nc-check'>○</td><td></td>
            </tr>

            {/* ── 기능검사료 ── 1행 */}
            <tr>
              <td>기능검사료<br />(순환기 기능 검사)</td>
              <td>동맥경화도검사</td><td>EZ868</td><td>ABI</td><td></td>
              <td className='nc-r'>30,000</td><td></td><td></td><td></td><td></td><td></td>
            </tr>

            {/* ── 이학요법료 ── 4행 */}
            <tr>
              <td rowSpan={4}>이학요법료</td>
              <td>도수치료</td><td>MX122</td><td>도수치료</td><td></td><td></td>
              <td className='nc-r'>50,000</td><td className='nc-r'>200,000</td><td></td><td></td><td></td>
            </tr>
            <tr>
              <td>신장분사치료</td><td>MZ007</td><td>신장분사치료</td><td></td><td></td>
              <td className='nc-r'>30,000</td><td className='nc-r'>180,000</td><td></td><td></td><td></td>
            </tr>
            <tr>
              <td>비침습적 무통증 신호요법</td><td>MZ012</td><td>패인스크램블러</td><td></td><td></td>
              <td className='nc-r'>30,000</td><td className='nc-r'>100,000</td><td></td><td></td><td>부위별 가격 상이함</td>
            </tr>
            <tr>
              <td>증식치료</td><td>MY142<br />MY143</td><td>프롤로테라피</td><td></td><td></td>
              <td className='nc-r'>30,000</td><td className='nc-r'>500,000</td><td></td><td></td><td>부위별 가격 상이함</td>
            </tr>

            {/* ── 처치 및 수술료(근골) ── 3행 */}
            <tr>
              <td rowSpan={3}>처치 및<br />수술료(근골)</td>
              <td>체외충격파치료</td><td>SZ084</td><td>충격파</td><td></td><td></td>
              <td className='nc-r'>50,000</td><td className='nc-r'>150,000</td><td></td><td></td><td></td>
            </tr>
            <tr>
              <td>경피적 경막외강 신경성형술</td><td>SZ634</td><td>NM</td><td></td><td></td>
              <td className='nc-r'>1,500,000</td><td className='nc-r'>2,500,000</td><td className='nc-check'>○</td><td className='nc-check'>○</td><td></td>
            </tr>
            <tr>
              <td>자가혈소판풍부혈장주사</td><td>신의료기술</td><td>무릎 PRP</td><td></td>
              <td className='nc-r'>300,000</td><td className='nc-r'>150,000</td><td className='nc-r'>300,000</td><td></td><td></td><td></td>
            </tr>

            {/* ── 처치 및 수술료(순환기) ── 5행 */}
            <tr>
              <td rowSpan={5}>처치 및<br />수술료<br />(순환기)</td>
              <td>초음파 유도하 혈관경화요법</td><td>OZ305</td><td>경화요법</td><td></td>
              <td className='nc-r'>250,000</td><td></td><td></td>
              <td className='nc-check'>○</td><td className='nc-check'>○</td><td>684900040 파이브로베인주1%</td>
            </tr>
            <tr>
              <td>시아노아크릴레이트를 이용한<br />복재정맥 폐색술</td><td>OZ303</td><td>베나실</td><td></td><td></td>
              <td className='nc-r'>2,500,000</td><td className='nc-r'>8,000,000</td>
              <td className='nc-check'>○</td><td></td><td>BJ4321DU VENASEAL CLOSURE SYSTEM</td>
            </tr>
            <tr>
              <td>고주파정맥내막 폐쇄술</td><td>OY202</td><td>고주파</td><td></td><td></td>
              <td className='nc-r'>2,500,000</td><td className='nc-r'>7,000,000</td>
              <td className='nc-check'>○</td><td className='nc-check'>○</td><td>BJ4301DU CLOSURE FAST</td>
            </tr>
            <tr>
              <td rowSpan={2}>기계화학 정맥 폐색술</td>
              <td rowSpan={2}>OZ308</td><td rowSpan={2}>클라리베인</td>
              <td rowSpan={2}></td><td rowSpan={2}></td>
              <td rowSpan={2} className='nc-r'>2,500,000</td><td rowSpan={2} className='nc-r'>8,000,000</td>
              <td rowSpan={2} className='nc-check'>○</td><td rowSpan={2} className='nc-check'>○</td>
              <td>BJ4330ZI CLARIVEIN OC INFUSION CATHETER</td>
            </tr>
            <tr><td>684900030 파이브로베인주3%바이알</td></tr>

            {/* ── 처치 및 수술료(기타) ── 1행 */}
            <tr>
              <td>처치 및 수술료(기타)</td>
              <td>경두개자기자극술</td><td>QZ962</td><td>TMS</td><td></td><td></td>
              <td className='nc-r'>100,000</td><td className='nc-r'>200,000</td><td></td><td></td><td></td>
            </tr>

            {/* ── 주사 및 약제료 ── 4행 */}
            <tr>
              <td rowSpan={4}>주사 및<br />약제료</td>
              <td rowSpan={4}></td><td rowSpan={4}></td>
              <td>통증 수액주사</td><td></td><td></td>
              <td className='nc-r'>100,000</td><td className='nc-r'>250,000</td><td></td><td></td><td></td>
            </tr>
            <tr><td>비타민D 검사</td><td></td><td className='nc-r'>15,000</td><td></td><td></td><td></td><td></td><td></td></tr>
            <tr><td>비타민D 주사</td><td></td><td className='nc-r'>50,000</td><td></td><td></td><td></td><td></td><td></td></tr>
            <tr><td>리포라제</td><td></td><td></td><td className='nc-r'>30,000</td><td className='nc-r'>100,000</td><td></td><td></td><td></td></tr>

            {/* ── 예방접종료 ── 1행 */}
            <tr>
              <td>예방접종료</td>
              <td>대상포진</td><td>3Z5200303</td><td>싱그릭스</td><td></td>
              <td className='nc-r'>250,000</td><td className='nc-r'>250,000</td><td className='nc-r'>480,000</td>
              <td></td><td></td><td>1차 접종시 25만원<br />1, 2차 모두 접종시 48만원</td>
            </tr>

            {/* ── 제증명 수수료 ── 14행 */}
            <tr>
              <td rowSpan={14}>제증명<br />수수료</td>
              <td>진단서(일반)</td><td>PDZ010000</td><td>진단서 (일반)</td><td></td>
              <td className='nc-r'>10,000</td><td></td><td></td><td></td><td></td><td></td>
            </tr>
            <tr>
              <td>영문진단서(일반)</td><td>PDE010001</td><td>진단서 (영문)</td><td></td>
              <td className='nc-r'>20,000</td><td></td><td></td><td></td><td></td><td></td>
            </tr>
            <tr>
              <td rowSpan={2}>상해진단서</td><td>PDZ020001</td><td>상해 진단서</td><td>3주 미만</td>
              <td className='nc-r'>100,000</td><td></td><td></td><td></td><td></td><td></td>
            </tr>
            <tr>
              <td>PDZ020002</td><td>상해 진단서</td><td>3주 이상</td>
              <td className='nc-r'>150,000</td><td></td><td></td><td></td><td></td><td></td>
            </tr>
            <tr>
              <td>병무용 진단서</td><td>PDZ080000</td><td>병무용 진단서</td><td></td>
              <td className='nc-r'>20,000</td><td></td><td></td><td></td><td></td><td>증명사진 2장 지참</td>
            </tr>
            <tr><td>-</td><td>-</td><td>산재용 진단서(소견서)</td><td></td><td className='nc-r'>30,000</td><td></td><td></td><td></td><td></td><td></td></tr>
            <tr><td>-</td><td>-</td><td>소견서 (일반)</td><td></td><td className='nc-r'>10,000</td><td></td><td></td><td></td><td></td><td></td></tr>
            <tr><td>수술확인서</td><td>-</td><td>수술 확인서</td><td></td><td className='nc-r'>10,000</td><td></td><td></td><td></td><td></td><td></td></tr>
            <tr><td>확인서(진료)</td><td>PDZ090007</td><td>진료 확인서</td><td></td><td className='nc-r'>3,000</td><td></td><td></td><td></td><td></td><td></td></tr>
            <tr><td>확인서(입퇴원)</td><td>PDZ090002</td><td>입퇴원 확인서</td><td></td><td className='nc-r'>3,000</td><td></td><td></td><td></td><td></td><td></td></tr>
            <tr><td>진료기록영상</td><td>PDZ110004</td><td>CD</td><td></td><td className='nc-r'>10,000</td><td></td><td></td><td></td><td></td><td></td></tr>
            <tr>
              <td>제증명 사본</td><td>PDZ160000</td><td>제증명 사본</td><td></td>
              <td className='nc-r'>1,000</td><td></td><td></td><td></td><td></td><td>진단서, 소견서, 진료확인서 등 사본 발급</td>
            </tr>
            <tr>
              <td rowSpan={2}>진료기록 사본</td><td>PDZ110101</td><td>진료기록사본</td><td>1~5매 (장당)</td>
              <td className='nc-r'>1,000</td><td></td><td></td><td></td><td></td><td></td>
            </tr>
            <tr>
              <td>PDZ110102</td><td>진료기록사본</td><td>6매부터 (장당)</td>
              <td className='nc-r'>100</td><td></td><td></td><td></td><td></td><td></td>
            </tr>

            {/* ── 치료재료대 ── 17행 */}
            <tr>
              <td rowSpan={17}>치료재료대</td>
              <td rowSpan={17}>-</td><td rowSpan={17}></td>
              <td>프로힐</td><td></td><td className='nc-r'>70,000</td><td></td><td></td><td></td><td></td><td></td>
            </tr>
            <tr><td>허리보호대</td><td></td><td className='nc-r'>30,000</td><td></td><td></td><td></td><td></td><td></td></tr>
            <tr><td>팔꿈치보호대</td><td></td><td className='nc-r'>25,000</td><td></td><td></td><td></td><td></td><td></td></tr>
            <tr><td>손목보호대</td><td></td><td className='nc-r'>20,000</td><td></td><td></td><td></td><td></td><td></td></tr>
            <tr><td>무릎보호대</td><td></td><td className='nc-r'>50,000</td><td></td><td></td><td></td><td></td><td></td></tr>
            <tr><td>발목보호대</td><td></td><td className='nc-r'>20,000</td><td></td><td></td><td></td><td></td><td></td></tr>
            <tr><td>캐스트슈즈</td><td></td><td></td><td className='nc-r'>10,000</td><td className='nc-r'>30,000</td><td></td><td></td><td></td></tr>
            <tr><td>깔창</td><td></td><td className='nc-r'>30,000</td><td></td><td></td><td></td><td></td><td></td></tr>
            <tr><td>깔창용양말</td><td></td><td className='nc-r'>2,500</td><td></td><td></td><td></td><td></td><td></td></tr>
            <tr><td>목발</td><td></td><td className='nc-r'>20,000</td><td></td><td></td><td></td><td></td><td></td></tr>
            <tr><td>팔걸이</td><td></td><td className='nc-r'>5,000</td><td></td><td></td><td></td><td></td><td></td></tr>
            <tr><td>Thumb Brace</td><td></td><td className='nc-r'>20,000</td><td></td><td></td><td></td><td></td><td></td></tr>
            <tr><td>치아스프린트</td><td></td><td className='nc-r'>50,000</td><td></td><td></td><td></td><td></td><td></td></tr>
            <tr><td>벨포밴드</td><td></td><td className='nc-r'>20,000</td><td></td><td></td><td></td><td></td><td></td></tr>
            <tr><td>세라밴드</td><td></td><td className='nc-r'>3,000</td><td></td><td></td><td></td><td></td><td></td></tr>
            <tr><td>마사지볼</td><td></td><td className='nc-r'>5,000</td><td></td><td></td><td></td><td></td><td></td></tr>
            <tr><td>폼롤러</td><td></td><td className='nc-r'>25,000</td><td></td><td></td><td></td><td></td><td></td></tr>
          </tbody>
        </table>
      </div>
    </SubLayout>
  )
}

export default NonCoveredPage
