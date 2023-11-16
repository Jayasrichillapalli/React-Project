import React from 'react'
import { Link } from 'react-router-dom'

function Header() {
  return (
    <div id="header">
        <Link to="/" element={isLoggedIn == true ? <About/> : <Navigate to ="/"></Navigate>}>Home</Link>
        <Link to="/about">About</Link>
        <Link to="/details">Details</Link>
        <button >Login</button>

    </div>
  )
}

export default Header