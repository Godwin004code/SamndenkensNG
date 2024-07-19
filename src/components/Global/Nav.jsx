
import React, {useState} from 'react'
import { Link } from 'react-router-dom'
import logo from "../../images/samdenkens3.png"
import hamburger from "../../images/hamburger.svg"
import cross from "../../images/cross.svg"
import navLogo from "../../images/samdenkens3.png"

const Nav = () => {
    const [mobileShown, setMobileShown] = useState(false);


    function toggleNav() {
      setMobileShown(!mobileShown);
    }
  return (
    <header className='flex w-full bg-[#d81220]'>
        
        <div className='w-[30%] sm:w-[40%] bg-white justify-center items-center flex py-0'>
           <Link to="/"> <img src={logo} alt="Samdenkens" className='w-[150px] h-[60px] sm:w-[80px] sm:h-[40px]' /></Link>
        </div>
        <div className="triangle"></div>
        <nav className='bg-[#D81220] w-[70%]  h-[100%] my-auto navbar-container sm:hidden'>
            <ul className='flex justify-between px-20 '>
                <li className='navbar-link py-2 cursor-pointer'>
                <Link to="/" className='text-white text-lg '>Home</Link>
                <span className='w-[20px] h-[6px] rounded-xl under-bar bg-black' />
                </li>
                <li className='navbar-link py-2 cursor-pointer'>
                    <Link to="/about" className='text-white text-lg '>About Us</Link>
                    <span className='w-[20px] h-[6px] rounded-xl under-bar bg-black' />
                </li>
                <li className='navbar-link py-2 cursor-pointer'>
                    <Link to={"/projects"} className='text-white text-lg '>Our Services</Link>
                    <span className='w-[20px] h-[6px] rounded-xl under-bar bg-black' />
                </li>
               
                <li className='navbar-link py-2 cursor-pointer'>
                    <Link to="/contact" className='text-white text-lg '>Contact Us</Link>
                    <span className='w-[20px] h-[6px] rounded-xl under-bar bg-black' />
                </li>
                <li className='bg-white cursor-pointer py-2 px-2 rounded-sm'>
                <Link to="/request-quote">
              Request Route
            </Link>
                </li>

            </ul>
        </nav>
        <button className="hidden lg:block w-[50px] ml-auto" onClick={toggleNav}>
          <img src={hamburger} className="hidden lg:block w-[50px] sm:w-[30px]" alt="" />
        </button>
        <div
          className={`${
            mobileShown
              ? "left-[0%] pointer-events-auto"
              : "left-[100%] pointer-events-none"
          } fixed bg-white h-full w-full z-[100] overflow-auto left-0 top-0 text-black duration-500 ease-in-out`}
        >
          {/* Container for logo and cross button */}
          <div className="w-[90%] mx-auto py-10 mb-[40px] flex justify-between">
            <Link to="/">
              {" "}
              <img src={navLogo} className="w-[150px] " alt="logo" />
            </Link>
            <button onClick={toggleNav}>
              <img className="w-[50px]" src={cross} alt="" />
            </button>
          </div>

          <ul className="flex my-auto gap-16 w-[90%] mx-auto flex-col text-3xl sm:text-xl sm:gap-8">
            <li>
              <Link to="/" className="font-medium">
                Home
              </Link>
            </li>
            <li>
              <Link to="/about" className="font-medium">
                Our Story
              </Link>
            </li>
           
            <li>
              <Link to="/projects" className="font-medium">
                Service
              </Link>
            </li>
            

            <Link to="/contact">
              <button className="bg-[#d81220] text-white w-full mt-[80px] rounded-md py-4 px-10">
                Contact Us
              </button>
            </Link>
          </ul>
        </div>
       
    </header>
  )
}

export default Nav