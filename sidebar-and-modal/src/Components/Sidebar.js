import React from "react";
import { FaTimes } from 'react-icons/fa';
import logo from '../logo.svg';
import { links, social } from '../data';

export default function Sidebar(props) {
    return (
        <aside>
            <div>
                <img src={logo} alt='coding addict'/>
                <button onClick={() => props.closeSidebar(false)}>
                    <FaTimes />
                </button>
            </div>
            <ul>
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
            <ul>
                {
                    social.map((item) => {
                        return <li key={item.id}>
                            <a href={item.url}>
                                {item.icon}
                            </a>
                        </li>
                    })
                }
            </ul>
        </aside>
    )
}