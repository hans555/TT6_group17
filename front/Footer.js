import React from 'react'
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom'

const Footer = () => {
  return (
    <footer>
        <p>Copyright &copy; 2022</p>
        <Link to='/about'>About</Link>
    </footer>
  )
}


export default Footer;
