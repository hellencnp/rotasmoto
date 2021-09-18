import '../MainStyle.css'
import React from 'react'
import freio from '../images/freio.png'
import { Link } from "react-router-dom";

export default function Freios() {
    return (
        <div className="body">
            <div className="imagem-container">
            <img src={freio} alt="freiologo" className="freio"></img>
            </div>
            <div className="inicio">
            <Link to = "/honda/city/cgtitan"style={{color:"black"}}> Voltar </Link>
            </div>
        </div>
    )

}