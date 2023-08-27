import React, { useState } from 'react'
import { index } from './Devices'

const info=[
    {
        src:'',
        title:'',
        description:'',
        bullets:[],
        color:'',
        size:''

    },{
        
        src:'',
        title:'',
        description:'',
        bullets:[],
        color:'',
        size:''

    },{
        
        src:'',
        title:'',
        description:'',
        bullets:[],
        color:'',
        size:''

    },{
        
        src:'',
        title:'',
        description:'',
        bullets:[],
        color:'',
        size:''

    },{
        
        src:'',
        title:'',
        description:'',
        bullets:[],
        color:'',
        size:''

    },{
        
        src:'',
        title:'',
        description:'',
        bullets:[],
        color:'',
        size:''
        
    },{
        
        src:'',
        title:'',
        description:'',
        bullets:[],
        color:'',
        size:''
    }
]

function Device() {
    const ind=Number(index)
    const [Btn,switchBtn]=useState(0)

const changeInfo=()=>{
    if (Btn===0){
        switchBtn(1)
    }
    else{
        switchBtn(0)
    }
}

  return (
    <div className='text-white'>
      <section class=" body-font overflow-hidden">
  <div class="container px-5 py-24 mx-auto">
    <div class="lg:w-4/5 mx-auto flex flex-wrap">
      <div class="lg:w-1/2 w-full lg:pr-10 lg:py-6 mb-6 lg:mb-0">
        <h1 class="text-gray-900 text-3xl title-font font-medium mb-4">{info[ind].title}</h1>
        <div class="flex mb-4">
          <a onClick={changeInfo} class={`flex-grow border-b-2  ${Btn===0?'border-cyan-400 text-cyan-400':'border-gray-300'} py-2 text-lg px-1 hover:cursor-pointer`}>Description</a>
          <a onClick={changeInfo} class={`flex-grow border-b-2  ${Btn!==0?'border-cyan-400 text-cyan-400':'border-gray-300'} py-2 text-lg px-1 hover:cursor-pointer`}>Features</a>
        </div>
      {Btn===0?<><p class="leading-relaxed mb-4">{info[ind].description}</p><div class="flex border-t border-gray-200 py-2">
        <span class="text-gray-500">Color</span>
        <span class="ml-auto text-gray-900">Blue</span>
        </div>
        <div class="flex border-t border-gray-200 py-2">
            <span class="text-gray-500">Size</span>
            <span class="ml-auto text-gray-900">Medium</span>
            </div></>:<>
            <ul className='list-disc'>
            {info[ind].bullets.map((bullet,i)=>{
                return(
                    <li key={i}>{bullet}</li>
                    )
                })}
                </ul>
            </>}
      </div>
      <img alt="ecommerce" class="lg:w-1/2 w-full lg:h-auto h-64 object-cover object-center rounded" src="https://dummyimage.com/400x400"/>
    </div>
  </div>
</section>
    </div>
  )
}

export default Device
