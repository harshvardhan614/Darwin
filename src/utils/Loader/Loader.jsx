import React from 'react'
import "./Loader.css"
import logo from "../../assets/darwinLOGOSVG.svg"
import logo1 from "../../assets/logo.png"

const Loader = () => {
  return (
    <div className='loading'>
            <img src={logo1} style={{height: '70px', width: '170px'}} className='imgg absolute top-[30%]'/>
        <div></div>
    </div>
  )
}

export default Loader