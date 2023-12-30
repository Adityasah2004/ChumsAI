import Head from './components/Navbar'
import HomePage from './pages/LandingPage';
import Services from './components/ServicesCard'
import Features from './components/Features'
import Industry from './components/Industry'
import FAQ from './components/FAQ'
import Down from './components/Footer'
import './App.css'

function App() {

  return (
    <>
      <Head/>
      <Services/>
      <Features/>
      <Industry/>
      <FAQ/>
      <Down/>
      </>
  )
}

export default App
