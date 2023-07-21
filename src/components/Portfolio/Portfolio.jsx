import React from 'react'
import { GreenPort } from '../../assets'

function RightMark(){
  return (
      <svg width="40" height="13" viewBox="0 0 56 14" fill="none" xmlns="http://www.w3.org/2000/svg">
      <line y1="11.8226" x2="55" y2="11.8226" stroke="black" stroke-width="3"/>
      <line y1="-1.5" x2="14.788" y2="-1.5" transform="matrix(0.712194 0.701983 -0.35431 0.935128 44.3549 3)" stroke="black" stroke-width="3"/>
      </svg>
  ) 
}

export default function Portfolio() {
  return (
    <div className="flex flex-col w-full max-w-7xl  static my-[300px] z-20">
       <div className="mx-[100px] z-10">
       <div className="boxHead w-[600px] z-10">
            <h1>WHAT WE CREATED</h1>
            <p>
            我々がこれまでに手がけたサービスやシステムの例をご覧ください。基本的にIT領域 <br /> のソリューションであれば、ほとんどすべてお受けすることができます。
            </p>
          </div>
          <div className='my-[100px] z-10'>
          <div className="flex items-center "> 
          <div className="boxHead w-[400px] ">
            <h1 className='text-[48px]'>Web2.0</h1>            
          </div>         
          <div className="boxPort ">
          <  RightMark className='rightIcon  bg-white'/>            
          </div>
          <div className="boxPort ">
          <  RightMark className='rightIcon  bg-white'/>            
          </div>
        </div>
          <div className="flex items-center">          
          <div className="boxPort ">
          <  RightMark className='rightIcon  bg-white'/>            
          </div>
          <div className="boxPort ">
          <  RightMark className='rightIcon  bg-white'/>            
          </div>
        </div>
          <div className="flex items-center ml-[100px]">          
          <div className="boxPort ">
          <  RightMark className='rightIcon  bg-white'/>            
          </div>
          <div className="boxPort ">
          <  RightMark className='rightIcon  bg-white'/>            
          </div>
        </div>            
          </div>
          <div className='my-[100px] z-10 '>
          <div className="flex items-center "> 
          <div className="boxHead w-[400px] ">
            <h1 className='text-[48px]'>Web3.0</h1>            
          </div>         
          <div className="boxPort ">
          <  RightMark className='rightIcon  bg-white'/>            
          </div>
          <div className="boxPort ">
          <  RightMark className='rightIcon  bg-white'/>            
          </div>
        </div>
          <div className="flex items-center ">          
          <div className="boxPort ">
          <  RightMark className='rightIcon  bg-white'/>            
          </div>
          <div className="boxPort ">
          <  RightMark className='rightIcon  bg-white'/>            
          </div>
        </div>
          <div className="flex items-center ml-[100px]">          
          <div className="boxPort ">
          <  RightMark className='rightIcon  bg-white'/>            
          </div>
          <div className="boxPort ">
          <  RightMark className='rightIcon  bg-white'/>            
          </div>
        </div>            
          </div>
          
     
       </div>
       <div className="absolute left-0 z-0 ">
            <img src={GreenPort} alt="no img" className='w-[800px] h-auto'/>
        </div>

    </div>
  )
}
