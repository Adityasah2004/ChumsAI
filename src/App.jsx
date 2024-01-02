import Head from './components/Navbar'
import LandingPage from './pages/LandingPage';
import AboutPage from './pages/About';
import Industry from './components/Industry'
import FAQ from './components/FAQ'
import Down from './components/Footer'
import './App.css'


function App() {

  return (
    <>
      <Head/>
      <LandingPage/>
      <AboutPage/>
      <Industry/>
      <FAQ/>
      <Down/>
      </>
  )
}

export default App
