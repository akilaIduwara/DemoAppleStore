import React from 'react'
import Header from './Header'
{Header}

function MainHeaderCom() {
  return (
    <div className='ak'>
    <Header linkname="Home" url="Home"/> 
    <Header linkname="iphones" url="Phones"/> 
    <Header linkname="MacBook" url="MacData"/> 
    <Header linkname="Accesories" url="Accesories"/>          
   </div>

  )
}

export default MainHeaderCom