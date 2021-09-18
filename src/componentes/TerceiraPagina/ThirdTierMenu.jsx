import React from "react";
import { Link } from "react-router-dom";

import '../Index/IndexMenu.css'

export default function ThirdMenu() {
    return (
            <header className="menu">
                <nav className="navMenu">
                    <ul>
                        <li> <Link to = "/" className="inicio" style={{color:"black"}}> Inicio </Link> </li>
                        <li> <Link to = "/honda/city/pop" style={{color:"#2E8B57"}} className="pop"> POP </Link> </li>
                        <li> <Link to = "/honda/city/biz" style={{color:"#2E8B57"}} className="biz">BIZ </Link> </li>
                        <li> <Link to = "/honda/city/cgfan"style={{color:"#2E8B57"}}  className="cgfan"> CG FAN </Link> </li>
                        <li> <Link to = "/honda/city/cgtitan" style={{color:"#2E8B57"}} className="cgtitan"> CG TITAN </Link> </li>
                    </ul>
                      
                </nav>
            </header>
    )
}