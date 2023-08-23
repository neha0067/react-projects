import React from "react";
import { FaTimes } from 'react-icons/fa';
import logo from '../logo.svg';
import { links, social } from '../data';

export default function Sidebar(props) {
    return (
        <aside className="sidebar">
            <div className="sidebar-logo">
                <img src={logo} alt='coding addict'/>
                <button className="sidebarCloseButton" onClick={() => props.closeSidebar(false)}>
                    <FaTimes />
                </button>
            </div>
            <ul className="links">
                {
                    links.map((link) => {
                        return <li key={link.id}>
                            <a href={link.url}>
                                {link.icon}
                                {link.text}
                            </a>
                        </li>
                    }) 
                }
            </ul>
            <ul className="social-icons">
                {
                    social.map((item) => {
                        return <li key={item.id}>
                            <a className="icons" href={item.url}>
                                {item.icon}
                            </a>
                        </li>
                    })
                }
            </ul>
        </aside>
    )
}