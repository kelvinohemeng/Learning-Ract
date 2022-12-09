import React from 'react'

export default function Navbar() {
    return(
        <nav className='nav-bar'>
            <img src={process.env.PUBLIC_URL + '/t-j-assets/logo-icon.png'}/>
            <h3>my travel journal</h3>
        </nav>
    )
}