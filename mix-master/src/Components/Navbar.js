import React from 'react';
import logo from '../logo.svg'


export default function Navbar(){
    return (
        <nav className='navbar'>
            <div className='nav-container'>
                <img src={logo} alt="Mix master logo" />
                <div className='categories'>
                    <a className='selected' href="/">Home</a>
                    <a href="/">About</a>
                    <a href="/">Newsletter</a>
                </div>                
            </div>
        </nav>
    )
}