import Head from './components/Navbar'
import HomePage from './pages/LandingPage';
import Services from './components/ServicesCard'
import Features from './components/Features'
import Industry from './components/Industry'
import FAQ from './components/FAQ'
import Down from './components/Footer'
import './App.css'
import LandingPage from './pages/LandingPage';

function App() {

  return (
    <>
      <Head/>
      <LandingPage/>
      <Services/>
      <Features/>
      <Industry/>
      <FAQ/>
      <Down/>
      </>
  )
}

export default App
