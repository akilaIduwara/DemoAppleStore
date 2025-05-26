import React from 'react';
import Header from '../Heder/Header';
import { centerimg } from './home-center';
import videoSrc from '../../assets/xlarge_2x.mp4'; 
import MainHeaderCom from '../Heder/MainHeaderCom';

function Home() {
  return (
    <>
      <p className='asd'>Welcome to Apple Shop</p>
      
      <MainHeaderCom />

      <div className="img-containe flex flex-wrap gap-4 justify-center">
        {centerimg.map((item) => (
          <img
            key={item.id}
            src={item.url}
            alt={item.alt}
            className="rounded-lg"
            width={200}       
            height={130}
          />
        ))}
      </div>

      <p className="homevideo flex justify-center items-center text-center text-black font-semibold">
        Store. The best way to buy the products you love.
      </p>

      <div className="homevideo flex justify-center items-center">
        <video
          width="1000"
          className="rounded-lg"
          src={videoSrc}
          autoPlay
          loop
          muted
          playsInline
        />
      </div>  
    </>
  );
}

export default Home;