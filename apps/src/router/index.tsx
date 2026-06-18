import { Routes, Route } from 'react-router-dom'
import HomePage from '../pages/home/HomePage'
import IntroPage from '../pages/about/IntroPage'
import NoticePage from '../pages/about/NoticePage'
import NoticeDetailPage from '../pages/about/NoticeDetailPage'
import EquipmentPage from '../pages/about/EquipmentPage'
import LocationPage from '../pages/about/LocationPage'
import SchedulePage from '../pages/about/SchedulePage'
import TourPage from '../pages/about/TourPage'
import InjectionPage from '../pages/pain/InjectionPage'
import ShockwavePage from '../pages/pain/ShockwavePage'
import ManualPage from '../pages/pain/ManualPage'
import MriCtPage from '../pages/neuro/MriCtPage'
import EmgPage from '../pages/neuro/EmgPage'
import AutonomicPage from '../pages/neuro/AutonomicPage'
import TmsPage from '../pages/neuro/TmsPage'
import TcdPage from '../pages/neuro/TcdPage'
import RegenerativePage from '../pages/cell/RegenerativePage'
import PrpPage from '../pages/cell/PrpPage'
import BmacPage from '../pages/cell/BmacPage'
import SvfPage from '../pages/cell/SvfPage'
import SportsPage from '../pages/sports/SportsPage'
import VaricosePage from '../pages/vein/VaricosePage'
import VeinTreatmentPage from '../pages/vein/VeinTreatmentPage'
import VeinReviewPage from '../pages/vein/VeinReviewPage'
import DialysisVascularPage from '../pages/dialysis/DialysisVascularPage'
import DialysisPatientPage from '../pages/dialysis/DialysisPatientPage'
import DialysisReviewPage from '../pages/dialysis/DialysisReviewPage'

function AppRouter() {
  return (
    <Routes>
      <Route path='/' element={<HomePage />} />

      {/* 병원소개 */}
      <Route path='/about/intro' element={<IntroPage />} />
      <Route path='/about/notice' element={<NoticePage />} />
      <Route path='/about/notice/:id' element={<NoticeDetailPage />} />
      <Route path='/about/equipment' element={<EquipmentPage />} />
      <Route path='/about/location' element={<LocationPage />} />
      <Route path='/about/schedule' element={<SchedulePage />} />
      <Route path='/about/tour' element={<TourPage />} />

      {/* 만성통증클리닉 */}
      <Route path='/pain/injection' element={<InjectionPage />} />
      <Route path='/pain/shockwave' element={<ShockwavePage />} />
      <Route path='/pain/manual' element={<ManualPage />} />

      {/* 뇌신경혈관클리닉 */}
      <Route path='/neuro/mri-ct' element={<MriCtPage />} />
      <Route path='/neuro/emg' element={<EmgPage />} />
      <Route path='/neuro/autonomic' element={<AutonomicPage />} />
      <Route path='/neuro/tms' element={<TmsPage />} />
      <Route path='/neuro/tcd' element={<TcdPage />} />

      {/* 재생세포클리닉 */}
      <Route path='/cell/regenerative' element={<RegenerativePage />} />
      <Route path='/cell/prp' element={<PrpPage />} />
      <Route path='/cell/bmac' element={<BmacPage />} />
      <Route path='/cell/svf' element={<SvfPage />} />

      {/* 스포츠재활클리닉 */}
      <Route path='/sports' element={<SportsPage />} />

      {/* 정맥·동맥부전클리닉 */}
      <Route path='/vein/varicose' element={<VaricosePage />} />
      <Route path='/vein/treatment' element={<VeinTreatmentPage />} />
      <Route path='/vein/review' element={<VeinReviewPage />} />

      {/* 투석혈관클리닉 */}
      <Route path='/dialysis/vascular' element={<DialysisVascularPage />} />
      <Route path='/dialysis/patient' element={<DialysisPatientPage />} />
      <Route path='/dialysis/review' element={<DialysisReviewPage />} />
    </Routes>
  )
}

export default AppRouter