import React from "react";
import { blueContact } from "../../assets";
import { Link } from "react-router-dom";
function RightMark(){
  return (
      <svg width="40" height="13" viewBox="0 0 56 14" fill="none" xmlns="http://www.w3.org/2000/svg">
      <line y1="11.8226" x2="55" y2="11.8226" stroke="white" stroke-width="3"/>
      <line y1="-1.5" x2="14.788" y2="-1.5" transform="matrix(0.712194 0.701983 -0.35431 0.935128 44.3549 3)" stroke="white" stroke-width="3"/>
      </svg>
  ) 
}
export default function Contact() {
  return (
    <div className=" flex items-center  w-full max-w-7xl static ">
      <div className="left ml-28">
        <div className="left-content flex flex-col relative">
          <p className="text-2xl ml-10 font-bold">CONTACT</p>
        </div>
        <div className="absolute ml-36 text-lg w-10 font-medium">
          Web System
        </div>
        <p className="font-bold text-2xl mt-10 ml-10">WEB 3.0</p>
        <p className="ml-10 font-medium">AI SYSTEM SOLUTION</p>
        <div className="absolute ml-36 text-lg w-10 font-bold">APPS</div>
        <div className="absolute ml-36 text-lg w-10 font-medium mt-5">
          android
        </div>
        <div className="absolute ml-36 text-lg w-10 font-medium mt-10">ios</div>
      </div>
      <div className="rig ml-[500px] z-10">
        {/* <img src={blueContact} className='right-0 absolute'/> */}
        <form className="w-[400px]">
          <label className="mr-5">
            {" "}
            Name
            <input type="text "  className="w-[300px] h-8 ml-7"/>
          </label>
          <label className="mr-5">
            {" "}
            Email
            <input type="text" className="w-[300px] mt-4 h-8 ml-8"/>
          </label>
          <label className="mr-5">
            {" "}
            Contact
            <input type="text w-[300px] ml-5" className="w-[300px] mt-4 h-8 ml-5"/>
          </label>
          <label className="mr-5">
            {" "}
            Address
            <input type="text w-[300px] ml-5" className="w-[300px] mt-4 h-8 ml-4"/>
          </label>
          <label className="mr-5">
            {" "}
            Contact
            <input type="text w-[300px] mt-4 h-8 ml-5" className="w-[300px] mt-4 h-8 ml-5" />
          </label>
          <label className="mr-5">
            {" "}
            Message
            <input type="text w-[300px] mt-4 h-8 ml-5" className="w-[300px] mt-4 h-20 ml-4 mb-5" />
          </label>
          <Link to="/what" className='w-[320px] flex items-center justify-between cursor-pointer mt-[4px] ml-16 text-white bg-black p-3 mb-5'>
               <p >Send form </p>
                <RightMark className='bg-white'/>
            </Link>
        </form>
      </div>
    </div>
  );
}
