import React from "react";
import { Link } from "react-router-dom";

import '../Index/IndexMenu.css'

export default function FourthMenu() {
    return (
            <header className="menu">
                <nav className="navMenu">
                    <ul>
                        <li> <Link to = "/"style={{color:"black"}}> Inicio </Link> </li>
                        <li> <Link to = "/honda/city/cgtitan/painel"style={{color:"#CD8500"}} className="painel"> PAINEL </Link> </li>
                        <li> <Link to = "/honda/city/cgtitan/tanque" style={{color:"#CD8500"}} className="tanque"> TANQUE </Link> </li>
                        <li> <Link to = "/honda/city/cgtitan/carenagem" style={{color:"#CD8500"}} className="carenagem"> CARENAGEM </Link> </li>
                        <li> <Link to = "/honda/city/cgtitan/rodas" style={{color:"#CD8500"}} className="rodas"> RODAS </Link> </li>
                        <li> <Link to = "/honda/city/cgtitan/freios" style={{color:"#CD8500"}} className="freios"> FREIOS  </Link> </li>
                        
                    </ul>
                </nav>
            </header>
    )
}