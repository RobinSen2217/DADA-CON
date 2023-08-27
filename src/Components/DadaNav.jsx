import React from 'react'
import { Link } from 'react-router-dom'

function DadaNav() {
  document.body.style.backgroundImage='linear-gradient(to bottom,#00004d,white)'
  document.title='DADA-CON'
  return (
    <div>
      <header className="text-gray-600 bg-purple-600 body-font">
  <div className="container mx-auto flex flex-wrap p-2  flex-col md:flex-row items-center">
    <a className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
   <img src="/dadaLogo.png" alt="dadaLogo" className='h-16 w-16'/>
      <Link to='/dada' className="ml-3 text-3xl font-semibold font-Spy hover:cursor-pointer">DADA-CON</Link>
    </a>
    <nav className="md:ml-auto flex flex-wrap items-center text-white justify-center">
      <Link className="mr-5 hover:cursor-pointer hover:text-gray-900" to='/dada/notice'>Notices</Link>
      {/* <Link className="mr-5 hover:text-gray-900 hover:cursor-pointer">Second Link</Link> */}
      <Link className="mr-5 hover:text-gray-900 hover:cursor-pointer" >Chat Room</Link>
    </nav>
    <button className="inline-flex items-center bg-gray-100 border-0 py-1 px-3 focus:outline-none hover:bg-gray-200 rounded text-base mt-4 md:mt-0">Button
      <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-4 h-4 ml-1" viewBox="0 0 24 24">
        <path d="M5 12h14M12 5l7 7-7 7"></path>
      </svg>
    </button>
  </div>
</header>
    </div>
  )
}

export default DadaNav
