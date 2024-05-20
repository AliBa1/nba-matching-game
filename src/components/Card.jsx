// import { useState } from 'react'
import Tilt from 'react-parallax-tilt';
// import './Card.css'

function Card() {
  return (
    <Tilt reset glareEnable={true} glareMaxOpacity={0.3} glareColor={"#fff"} glarePosition="bottom">
      <div className="w-48 h-64 rounded-lg text-center place-content-evenly select-none bg-slate-200 hover:bg-slate-300 border border-black">
        <img src="src/assets/shai-headshot.png" alt="Shai" className=""/>
        <p className="font-bold text-sm text-black p-1 bg-white border-black border-t-2 border-b-2 border-double">Shai Gilgeous-Alexander</p>
      </div>
    </Tilt>
  )
}

export default Card