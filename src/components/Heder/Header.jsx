import './Header.css';
import React from 'react'
import { Link } from "react-router";


function Header(props) {
  return (
    <>
    <a href={props.url} className='header'>{props.linkname}</a>
    </>
  )
}

export default Header