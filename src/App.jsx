import './App.css'
import Featues from './components/Featues'
import Footer from './components/Footer'
import Hero from './components/Hero'
import Highlights from './components/Highlights'
import HowItWorks from './components/HowItWorks'
import { Model } from './components/Model'
import Navbar from './components/Navbar'

const App = () => {

  return (
    <>
      <main>
        <Navbar/>
        <Hero/>
        <Highlights/>
        <Model/>
        <Featues/>
        <HowItWorks/>
        <Footer/>
      </main>
    </>
  )
}

export default App
