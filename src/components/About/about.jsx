import React from "react";
import "../../index.css";
import { darwinPage, logo,  } from "../../assets";

export default function about() {
  return (
    <div className="flex items-center justify-center w-full max-w-7xl  my-[300px] z-20 ml-[40px]">
      <img src={darwinPage} alt="no img" className="w-[600px] h-auto object-contain "/>
      <div className="flex flex-col items-start gap-[10px] ml-[-100px] z-20">
      <img src={logo} alt="logo" className="h-[50px] w-auto object-contain mb-[20px] "/>
      <p className="ml-[40px]">我々は、ウェブ制作、AIソリューション、そしてweb3テクノロジー <br />
       に特化し、ビジネスの革新と成功をサポートしています。</p>
      <p className="ml-[80px]">クライアントのニーズに合わせ、最新のテクノロジーを活用したAI <br /> ソリューションを提供し新たなデジタル経済の領域での競争力を高 <br /> めます。</p>
      <p className="ml-[160px]">京都府左京区中野3-56</p>
      </div>
    </div>
  );
}
