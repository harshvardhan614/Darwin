import React, { useEffect, useState } from "react";
import { GreenPort } from "../../assets";
import Aos from "aos";
import "aos/dist/aos.css";
import "./Popup.css"

function RightMark() {
  return (
    <svg
      width="40"
      height="13"
      viewBox="0 0 56 14"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <line y1="11.8226" x2="55" y2="11.8226" stroke="black" stroke-width="3" />
      <line
        y1="-1.5"
        x2="14.788"
        y2="-1.5"
        transform="matrix(0.712194 0.701983 -0.35431 0.935128 44.3549 3)"
        stroke="black"
        stroke-width="3"
      />
    </svg>
  );
}

export default function Portfolio() {
  const [isOpen, setIsOpen] = useState(false);
  const [openedURL, setOpenedURL] = useState('');
  useEffect(() => {
    Aos.init({ duration: 1500 });
  }, []);

  // const URLs ={
  //   'https://res.cloudinary.com/doqgoey64/image/upload/v1689932478/portfolio/111111111111111_i3zdzu.png',
  // };
  const URLs = [
    'https://res.cloudinary.com/doqgoey64/image/upload/v1689948587/darwin/111111111111111_nb5wrz.png',
    'https://res.cloudinary.com/doqgoey64/image/upload/v1689948674/darwin/2222222222_sdaocx.png',
    'https://res.cloudinary.com/doqgoey64/image/upload/v1689948933/darwin/3333333333_cqvu9r.png',
    'https://res.cloudinary.com/doqgoey64/image/upload/v1689948933/darwin/444444444444_nklwng.png',
    'https://res.cloudinary.com/doqgoey64/image/upload/v1689948934/darwin/55555555555_cb5ern.png',
    'https://res.cloudinary.com/doqgoey64/image/upload/v1689948934/darwin/66666666666666_upin3f.png',
  ]

  return (
    <>
      {/* <div className="flex flex-col w-full max-w-7xl  static my-[200px] z-20"> */}
      <div className={`flex flex-col w-full max-w-7xl  static my-[200px] z-20 ${isOpen? 'blur-sm': ''}`}>
        <div className="mx-[100px] z-10">
          <div className="boxHead w-[600px] z-10 " data-aos="fade-down">
            <h1>WHAT WE CREATED</h1>
            <p>
              我々がこれまでに手がけたサービスやシステムの例をご覧ください。基本的にIT領域{" "}
              <br />{" "}
              のソリューションであれば、ほとんどすべてお受けすることができます。
            </p>
          </div>
          <div className="my-[100px] z-10" data-aos="fade-right">
            <div className="flex items-center ">
              <div className="boxHead w-[400px] ">
                <h1 className="text-[48px]">Web2.0</h1>
              </div>
              <div
                className={`boxPort bg-no-repeat bg-center bg-cover`}
              style={{background: `url(${URLs[0]})`, backgroundRepeat: 'no-repeat', backgroundPosition: 'center',backgroundSize: 'cover'}}
                // className="boxPort bg-[url('https://res.cloudinary.com/doqgoey64/image/upload/v1689932478/portfolio/111111111111111_i3zdzu.png')] bg-no-repeat bg-center bg-cover"
                onClick={() => {
                  setIsOpen(true);
                  setOpenedURL(URLs[0]);
                  console.log(openedURL);
                }}
              >
                <RightMark className="rightIcon  bg-white" />
              </div>
              
              <div className="boxPort "
                style={{background: `url(${URLs[1]})`, backgroundRepeat: 'no-repeat', backgroundPosition: 'center',backgroundSize: 'cover'}}
                onClick={() => {
                  setIsOpen(true);
                  setOpenedURL(URLs[1]);
                  console.log(openedURL);
                }}
              >
                <RightMark className="rightIcon  bg-white" />
              </div>
            </div>

            <div className="flex items-center">
              <div className="boxPort "
              style={{background: `url(${URLs[2]})`, backgroundRepeat: 'no-repeat', backgroundPosition: 'center',backgroundSize: 'cover'}}
              onClick={() => {
                setIsOpen(true);
                setOpenedURL(URLs[2]);
                console.log(openedURL);
              }}>
                <RightMark className="rightIcon  bg-white" />
              </div>
              <div className="boxPort "
              style={{background: `url(${URLs[3]})`, backgroundRepeat: 'no-repeat', backgroundPosition: 'center',backgroundSize: 'cover'}}
              onClick={() => {
                setIsOpen(true);
                setOpenedURL(URLs[3]);
                console.log(openedURL);
              }}>
                <RightMark className="rightIcon  bg-white" />
              </div>
            </div>

            <div className="flex items-center ml-[100px]">
              <div className="boxPort "
              style={{background: `url(${URLs[4]})`, backgroundRepeat: 'no-repeat', backgroundPosition: 'center',backgroundSize: 'cover'}}
              onClick={() => {
                setIsOpen(true);
                setOpenedURL(URLs[4]);
                console.log(openedURL);
              }}>
                <RightMark className="rightIcon  bg-white" />
              </div>
              <div className="boxPort "
              style={{background: `url(${URLs[5]})`, backgroundRepeat: 'no-repeat', backgroundPosition: 'center',backgroundSize: 'cover'}}
              onClick={() => {
                setIsOpen(true);
                setOpenedURL(URLs[5]);
                console.log(openedURL);
              }}>
                <RightMark className="rightIcon  bg-white" />
              </div>
            </div>
          </div>
          <div className="my-[100px] z-10 " data-aos="fade-left">
            <div className="flex items-center ">
              <div className="boxHead w-[400px] ">
                <h1 className="text-[48px]">Web3.0</h1>
              </div>
              <div className="boxPort ">
                <RightMark className="rightIcon  bg-white" />
              </div>
              <div className="boxPort ">
                <RightMark className="rightIcon  bg-white" />
              </div>
            </div>
            <div className="flex items-center ">
              <div className="boxPort ">
                <RightMark className="rightIcon  bg-white" />
              </div>
              <div className="boxPort ">
                <RightMark className="rightIcon  bg-white" />
              </div>
            </div>
            <div className="flex items-center ml-[100px]">
              <div className="boxPort ">
                <RightMark className="rightIcon  bg-white" />
              </div>
              <div className="boxPort ">
                <RightMark className="rightIcon  bg-white" />
              </div>
            </div>
          </div>
        </div>
        <div className="absolute left-0 z-0 ">
          <img src={GreenPort} alt="no img" className="w-[800px] h-auto" />
        </div>
        
      </div>

        
      {isOpen && (
        // later we will be adding url dynamically- hard coded for now

        <div className={`popup-content rounded-xl`}
        style={{background: `url(${openedURL})`, backgroundRepeat: 'no-repeat', backgroundPosition: 'center',backgroundSize: 'cover'}}>
         {/* <div className="popup-content rounded-xl bg-[url('https://res.cloudinary.com/doqgoey64/image/upload/v1689932478/portfolio/111111111111111_i3zdzu.png')] bg-no-repeat bg-center bg-cover"> */}
          <span onClick={() => {setIsOpen(false); setOpenedURL('')}} className="close-icon">
            &times;
          </span>
        </div>
      )}
      
      
    </>
  );
}
