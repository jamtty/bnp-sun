import './assets/css/common.css'
import './assets/css/style.css'
import Header from './components/layout/Header'
import Footer from './components/layout/Footer'
import AppRouter from './router'

function App() {
  return (
    <div className='wrap'>
      <Header />
      <AppRouter />
      <Footer />
    </div>
  )
}

export default App

