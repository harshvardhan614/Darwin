import React, { useEffect } from "react";
import "../../index.css";
import { darwinPage, logo,  } from "../../assets";
import Aos from "aos";
import 'aos/dist/aos.css';
export default function about() {
  useEffect(()=>{
    Aos.init({duration:1500})
  },[])
  return (
    <div className="flex items-center justify-center w-full max-w-7xl  my-[200px] z-20" data-aos="fade-left">
      <img src={darwinPage} alt="no img" className="w-[580px] h-auto object-contain pb-[20px] "/>
      <div className="flex flex-col items-start gap-[20px]">
      <img src={logo} alt="logo" className="h-[50px] w-auto object-contain mb-[20px] "/>
      <p className="ml-[40px]">我々は、ウェブ制作、AIソリューション、そしてweb3テクノロジー <br />
       に特化し、ビジネスの革新と成功をサポートしています。</p>
      <p className="ml-[80px]">クライアントのニーズに合わせ、最新のテクノロジーを活用したAI <br /> ソリューションを提供し新たなデジタル経済の領域での競争力を高 <br /> めます。</p>
      <p className="ml-[160px]">京都府左京区中野3-56</p>
      </div>
    </div>
  );
}
