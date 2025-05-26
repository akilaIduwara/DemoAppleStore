import React from 'react'
import Header from '../Heder/Header'
import MainHeaderCom from '../Heder/MainHeaderCom';
import './Acc.css';
import { acimg } from './Ac.js';

{Header}

function Accesories() {
  return (
    <>
   <MainHeaderCom/>

   <p className='acc1 text-black text-5xl font-bold'>Featured iPhone Accessories</p>

          <div className="img-phone ">
             {acimg.map((item) => (
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

export default Accesories