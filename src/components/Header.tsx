import { useState } from 'react';
import logo from '../assets/iB.png'

function Header() {
     const [isMenuOpen, setIsMenuOpen] = useState(false);


     const toggleMenu = () => {
          setIsMenuOpen(!isMenuOpen);
     };

     return (
          <div>
               <nav className='bg-black'>
                    <div className={`max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4`}>
                         <div className='p-1'>
                              <img src={logo} alt="" width={48} />
                         </div>
                         <button onClick={toggleMenu} type="button" className="inline-flex p-2 w-10 h-10 justify-items-end text-sm text-gray-500 rounded-lg sm:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400" aria-controls="navbar-solid-bg" aria-expanded="false">
                              <span className="sr-only">Open main menu</span>
                              <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
                                   <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 1h15M1 7h15M1 13h15" />
                              </svg>
                         </button>
                         <div className={isMenuOpen ? 'block w-full md:w-auto' : 'hidden w-full md:block md:w-auto'} id="navbar-solid-bg">
                              <ul className="flex flex-col font-medium mt-4 rounded-lg md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-transparent md:dark:bg-transparent">
                                   <li>
                                        <a href="#" className="font-h1 block py-2 px-3 md:p-0 text-gray md:bg-transparent transition-all md:hover:text-white">Home</a>
                                   </li>
                                   <li>
                                        <a href="#" className="font-h1 block py-2 px-3 md:p-0 text-gray md:hover:bg-transparent transition-all md:hover:text-white">Projects</a>
                                   </li>
                                   <li>
                                        <a href="#" className="font-h1 block py-2 px-3 md:p-0 text-gray md:hover:bg-transparent transition-all md:hover:text-white">About Me</a>
                                   </li>
                                   <li>
                                        <a href="#" className="font-h1 block py-2 px-3 md:p-0 text-gray md:hover:bg-transparent transition-all md:hover:text-white">Contact Me</a>
                                   </li>
                              </ul>
                         </div>
                    </div>
               </nav >
          </div >
     );
}

export default Header;
