import React from 'react'
import './Mk.css'
import MainHeaderCom from '../Heder/MainHeaderCom';
import Header from '../Heder/Header'

function MacData() {
  return (

    <>
    <MainHeaderCom/>

  <div className="flex justify-between px-4">
  <span className="text-black text-5xl font-bold">MacData</span>
  <span className="text-black text-3xl italic">If you can dream it, Mac can do it.</span>
  </div>

      <div className="flex justify-center p-4 bg-white">
      <video
        className="w-full max-w-3xl rounded-lg shadow-lg"
        controls
        autoPlay
        loop
        muted
      >
        <source
          src="https://www.apple.com/105/media/us/mac/family/2025/59856fc1-d007-421a-90ee-734ddf3fd25d/anim/welcome/xlarge_2x.mp4"
          type="video/mp4"
        />
        Your browser does not support the video tag.
      </video>
    </div>

    
    </>
  )
}

export default MacData