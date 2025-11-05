import './App.css'
import Featues from './components/Featues'
import Hero from './components/Hero'
import Highlights from './components/Highlights'
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
      </main>
    </>
  )
}

export default App
