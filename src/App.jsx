import './App.css'
import Header from './Component/Header'
import ButtonGradient from "./assets/svg/ButtonGradient";
import Hero from './Component/Hero'
import Benefits from './Component/Benefits';
import Collaboration from './Component/Collaboration';
import Services from './Component/Services';
import Pricing from './Component/Pricing'
import Roadmap from './Component/Roadmap';
import Footer from './Component/Footer'

const App = () => {
  return (
    <>
    <div className='pt-[0.75rem] lg:pt-[5.25rem] '>
      <Header/>
      <Hero/>
      <Benefits/>
      <Collaboration/>
      <Services/>
      <Pricing/>
      <Roadmap/>
      <Footer/>
    </div>
    <ButtonGradient />
    </>
  )
}

export default App
