import './App.css'
import Header from './Component/Header'
import ButtonGradient from "./assets/svg/ButtonGradient";
import Hero from './Component/Hero'

const App = () => {
  return (
    <>
    <div className='pt-[4.75rem] lg:pt-[5.25rem] '>
      <Header/>
      <Hero/>
    </div>
    <ButtonGradient />
    </>
  )
}

export default App
