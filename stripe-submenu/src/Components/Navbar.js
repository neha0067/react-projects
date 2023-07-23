import React from 'react';
import logo from '../data/logo.svg';
import sublinks from '../data/data';
import { useGlobalContext } from '../context';


export default function Navbar(){

    const {openSubmenu, setPage} = useGlobalContext();
    

    function handleHover(page){
        setPage(page);
        openSubmenu();
    }
    
    return (
        <nav>
            <img src={logo} alt='logo'/>
            <ul>
                {sublinks.map((sublink) => {
                    return (
                        <li onMouseEnter={() => {handleHover(sublink.page)}}>
                            {sublink.page}
                        </li> 
                    )
                })}
            </ul>
        </nav>
    )
}