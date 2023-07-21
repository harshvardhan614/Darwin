import React, { useEffect } from 'react';
import { Link } from "react-router-dom";
import "../../index.css";
import { blueTop } from '../../assets';
import Aos from "aos";
import 'aos/dist/aos.css';

function RightMark(){
    useEffect(()=>{
        Aos.init({duration:1500})
      },[])
    return (
        <svg width="40" height="13" viewBox="0 0 56 14" fill="none" xmlns="http://www.w3.org/2000/svg">
        <line y1="11.8226" x2="55" y2="11.8226" stroke="white" stroke-width="3"/>
        <line y1="-1.5" x2="14.788" y2="-1.5" transform="matrix(0.712194 0.701983 -0.35431 0.935128 44.3549 3)" stroke="white" stroke-width="3"/>
        </svg>
    ) 
}


export default function Hero() {
  return (
    <div className='h-[90vh] flex items-center pl-[20px] w-full max-w-7xl static my-[100px] z-20 mx-auto' >
        <div className="flex flex-col ml-[80px] py-[40px]" data-aos="fade-right">
            <h1 className=' headText'>Empower.</h1>
            <h1 className=' headText'>Innovate.</h1>
            <h1 className=' headText'> Transform.</h1>
            <Link to="/what" className='w-[320px] flex items-center justify-between cursor-pointer mt-[40px] text-white bg-black p-5'>
               <p >check what we made</p>
                <RightMark className='bg-white'/>
            </Link>
            
        </div>
        <div className="absolute right-0 z-0">
            <img src={blueTop} alt="no img" className='w-[750px] h-auto'/>
        </div>
        

    </div>
  )
}
