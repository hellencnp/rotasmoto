import React from "react";
import { Link } from "react-router-dom";

import './IndexMenu.css'

export default function IndexMenu() {
    return (
            <header className="menu">
                <nav className="navMenu">
                    <ul>
                        <li> <Link to = "/harley" style={{color:"#008B00"}} className="harley"> HARLEY </Link> </li>
                        <li> <Link to = "/suzuki" style={{color:"#FF34B3"}} className="suzuki"> SUZUKI </Link> </li>
                        <li> <Link to = "/honda" style={{color:"#87CEFF"}} className="honda"> HONDA </Link> </li>
                        <li> <Link to = "/hamaya" style={{color:"yellow"}} className="yamaha"> YAMAHA </Link> </li>
                        <li> <Link to = "/lambreta" style={{color:"white"}} className="lambreta"> LAMBRETA </Link> </li>
                       
                    </ul>
                </nav>
            </header>
    )
}