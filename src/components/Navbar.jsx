import React from 'react'
import '../styles/Navbar.css'

export default function Navbar({onSearch}) {        // This is a functional component. It is used to display the navbar.
  return (
    <div className='navbar'>
        <span className="heading">
            User Dashboard
        </span>
        <input type="text" className="searchbar" placeholder='Search User' onChange={(e)=>onSearch(e)} />   {/* This is an input field. It is used to search for a user. */}
    </div>
  )
}
