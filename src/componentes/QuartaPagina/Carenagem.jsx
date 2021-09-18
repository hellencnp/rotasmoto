import '../MainStyle.css'
import React from 'react'
import carenagem from '../images/carenagem.png'
import { Link } from "react-router-dom";

export default function Carenagem() {
    return (
        <div className="body">
            <div className="imagem-container">
            <img src={carenagem} alt="carenagemlogo" className="carenagem"></img>
            </div>
            <div className="inicio">
            <Link to = "/honda/city/cgtitan"style={{color:"black"}}> Voltar </Link>
            </div>
        </div>
    )

}