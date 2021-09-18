import '../MainStyle.css'
import React from 'react'
import painel from '../images/painel.png'
import { Link } from "react-router-dom";

export default function Painel() {
    return (
        <div className="body">
            <div className="imagem-container">
            <img src={painel} alt="painellogo" className="painel"></img>
            </div>
            <div className="inicio">
            <Link to = "/honda/city/cgtitan"style={{color:"black"}}> Voltar </Link>
            </div>
        </div>
    )

}