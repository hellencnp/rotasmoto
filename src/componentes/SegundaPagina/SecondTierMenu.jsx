import React from "react";
import { Link } from "react-router-dom";

import '../Index/IndexMenu.css'

export default function SecondMenu() {
    return (
            <header className="menu">
                <nav className="navMenu">
                    <ul>
                        <li> <Link to = "/" style={{color:"black"}}     > Inicio </Link> </li>
                        <li> <Link to = "/honda/city" style={{color:"#8B0000"}} className="city"> CITY </Link> </li>
                        <li> <Link to = "/honda/trail" style={{color:"#8B0000"}} className="trail"> TRAIL</Link> </li>
                        <li> <Link to = "/honda/OffRoad" style={{color:"#8B0000"}}  className="offroad"> OFF ROAD </Link> </li>
                        <li> <Link to = "/honda/sport" style={{color:"#8B0000"}}  className="sport"> SPORT </Link> </li>
                        <li> <Link to = "/honda/scooter" style={{color:"#8B0000"}}  className="scooter"> SCOOTER </Link> </li>
                    
                    </ul>
                </nav>
            </header>
    )
}