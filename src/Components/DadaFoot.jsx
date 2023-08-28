import React from 'react'

function DadaFoot(props) {
    
  return (
    <div className={`w-full bg-black text-center text-white mt-4 py-5 font-semibold ${props.style}`}>
      Designed by <span className='text-cyan-300'>WarP</span>
    </div>
  )
}

export default DadaFoot
