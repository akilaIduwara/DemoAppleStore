import React from 'react'
import { phndata } from './phnData.'
import './Phones.css'
import Header from '../components/Heder/Header'
import Home from '../components/Home/Home'
import App from '../App'
import MacData from '../components/Macbook/Mackbook'
import MainHeaderCom from '../components/Heder/MainHeaderCom'
{MainHeaderCom}
{MacData}



function Phones() {
  return (
    <>
   <MainHeaderCom/>
    
      
    <p className="phntopic" text-5xl>Get to know iPhone.</p>

       <div className="img-phone ">
          {phndata.map((item) => (
            <img
              key={item.id}
              src={item.url}
              alt={item.alt}
              className="rounded-lg"
              width={300}       
              height={230}
            />
          ))}
        </div>     
    
    
    </>
  )
}

export default Phones