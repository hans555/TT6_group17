import React from 'react'
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom'

const About = () => {
  return (
      <div>
          <h4>Property of DBS</h4>
          <Link to='/home'>Go Back</Link>
      </div>
  )
}


export default About;