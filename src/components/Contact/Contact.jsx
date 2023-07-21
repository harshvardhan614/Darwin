import React, { useEffect } from "react";
import { blueContact } from "../../assets";
import { Link } from "react-router-dom";
import Aos from "aos";
import 'aos/dist/aos.css';

function RightMark(){
  return (
      <svg width="40" height="13" viewBox="0 0 56 14" fill="none" xmlns="http://www.w3.org/2000/svg">
      <line y1="11.8226" x2="55" y2="11.8226" stroke="white" stroke-width="3"/>
      <line y1="-1.5" x2="14.788" y2="-1.5" transform="matrix(0.712194 0.701983 -0.35431 0.935128 44.3549 3)" stroke="white" stroke-width="3"/>
      </svg>
  ) 
}
export default function Contact() {
  useEffect(()=>{
    Aos.init({duration:1500})
  },[])
  return (
    <div className="flex items-center  w-full max-w-7xl static z-20 mb-[300px]">
      <div className="absolute right-0 z-0 ">
            <img src={blueContact} alt="no img" className='w-[750px] h-auto'/>
        </div>
        <div className="flex flex-col w-full max-w-7xl  z-10">
        <div className="flex items-start justify-center gap-[30px] ">
      <div className="left" data-aos="fade-right" >
        <div className="left-content flex flex-col relative">
          <p className="text-[54px] font-500">CONTACT</p>
        </div>
        <div className="absolute ml-36 text-lg w-10 font-medium">
          Web System
        </div>
        <p className="font-bold text-2xl mt-10 ml-10">WEB 3.0</p>
        <div className="text-[36px] w-full">AI SYSTEM SOLUTION</div>
        <div className="absolute ml-36 text-[28px] w-10 font-bold">APPS</div>
        <div className="absolute ml-36 text-[24px] w-10 font-medium mt-5">
          android
        </div>
        <div className="absolute ml-36 text-lg w-10 font-medium mt-10">ios</div>
      </div>
      <div >        
        <form className=" flex flex-col gap-[20px] px-[20px]" data-aos="fade-left">
          <tr className="flex items-center justify-end text-[0.85rem]">
          <label className="mr-[20px]">
          御社名           
          </label>
          <input type="text "  className="w-[300px] h-8 "/>
          </tr>
          <tr className="flex items-center justify-end text-[0.85rem]">
          <label className="mr-[20px]">
          ご担当者名            
          </label>
          <input type="text" className="w-[300px]  h-8 "/>
          </tr>
          <tr className="flex items-center justify-end text-[0.85rem]">
          <label className="mr-[20px]">
          ご連絡先            
          </label>
          <input type="text" className="w-[300px]  h-8 "/>
          </tr>  
          <tr className="flex items-center justify-end text-[0.85rem]">
          <label className="mr-[20px]">
          お問い合わせカテゴリ            
          </label>
          <input type="text" className="w-[300px]  h-8"/>
          </tr>
          <tr className="flex items-center justify-end text-[0.85rem]">
          <label className="mr-[20px]">
          御社業種            
          </label>
          <input  type="text" className="w-[300px]  h-8" />
          </tr>
          <tr className="flex items-start justify-end text-[0.85rem]">
          <label className="mr-[20px]">
          お問い合わせ内容  
          </label>
          <input type="text" className="w-[300px]  h-[100px] " />
          </tr>         
          
          <div className="flex items-start justify-end">
          <Link to="/what" className='w-[320px] flex items-center justify-between cursor-pointer text-white bg-black p-3 '>
               <p >Send form </p>
                <RightMark className='bg-white'/>
            </Link>
          </div>
          
        </form>
      </div>
      </div>
        </div>
      
      
    </div>
  );
}