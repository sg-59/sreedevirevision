import React from 'react'
import './navbar.css'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <>
    <div className='nav'>
      <Link to={'/'}><h3>Home</h3></Link>
      <a href="/">Home anchor tag</a>
       <Link to={'/cart'}> <h3>Cart</h3></Link>
       <a href="/cart">Cart anchor tag</a>
        <h3>About</h3>
        <h3>Contact</h3>
        <h3>Logout</h3>
        </div>  
    </>
  )
}

export default Navbar
