import '../MainStyle.css'
import React from 'react'
import rodas from '../images/rodas.png'
import { Link } from "react-router-dom";

export default function Rodas() {
    return (
        <div className="body">
            <div className="imagem-container">
            <img src={rodas} alt="rodaslogo" className="rodas"></img>
            </div>
            <div className="inicio">
            <Link to = "/honda/city/cgtitan"style={{color:"black"}}> Voltar </Link>
            </div>
        </div>
    )

}