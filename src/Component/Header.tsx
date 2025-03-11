import { useLocation } from 'react-router-dom'
import {disablePageScroll, enablePageScroll} from 'scroll-lock'
import React, { useState } from 'react'
import {brainwave} from '../assets'
import { navigation } from '../constants'
import Button from './Button'
import menuSvg from '../assets/svg/MenuSvg'
import {HamburgerMenu} from './design/Header'
import MenuSvg from '../assets/svg/MenuSvg'
const Header = () => {
  const pathname = useLocation();
  const [openNavigation, setOpenNavigation] = useState(false)

  const toggleNavigation = () =>{
    if (openNavigation) {
      setOpenNavigation(false); enablePageScroll()}
      else {setOpenNavigation(true); disablePageScroll()
    }
  }
  const handleClick =()=>{
    if(!openNavigation) return;
    enablePageScroll();
    setOpenNavigation(false);
  }
  return (
    <>
    <div className={`fixed top-0 left-0 w-full z-50 border-b border-n-6
       lg:bg-n-8/90 lg:backdrop-blur-sm ${openNavigation ? 'bg-n-8' : 'bg-n-8/90 backdrop-blur-sm'}`} >
        <div className='flex items-center px-5 lg:px-7.5 xl:px-10 max-lg:py-4'>
            <a href="#hero" className='block w-[12rem] '>
            <img src={brainwave} alt="Brainwave" width={190} height={40}/>
            </a>
            <nav className={` ${
              openNavigation ? "flex" : "hidden"
            } fixed top-[5rem] left-0 right-0 bottom-0 bg-n-8 lg:static lg:flex 
            lg:mx-auto lg:bg-transparent`}>
              <div className='relative z-2 flex flex-col items-center justify-center m-auto lg:flex-row'>
                {navigation.map((item)=>(
                  <a key={item.id} href={item.url}
                  className={`block relative font-code text-2xl uppercase text-n-1 transition-colors hover:text-color-1 ${item.onlyMobile ? "lg:hidden" : ""} px-6 py-6 md:py-8 lg:text-[12px] lg:font-semibold
                  ${item.url===pathname.hash ? 'z-2 lg:text-white' : 'lg:text-gray-400'}`}
                  >
                    {item.title}
                  </a>
                ))}  
              </div>
              <HamburgerMenu/>
            </nav>
            <a href="#signup" className="button hidden mr-8 text-n-1/15 
            transition-colors hover:text-n-1 lg:block ">
              New account
            </a>
            <Button className='hidden lg:flex' href="login" >
               Sign in
            </Button>

            <Button className='ml-auto lg:hidden' px="px-3"
            onClick={toggleNavigation} >
                
              <MenuSvg openNavigation={openNavigation} />
            </Button>
        </div>
    </div>
    </>
  )
}

export default Header