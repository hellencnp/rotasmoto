import '../MainStyle.css'
import React from 'react'
import titan from '../images/titan.png'
import { Link } from "react-router-dom";

export default function Cgtitan() {
    return (
        <div className="body">
            <div className="imagem-container">
            <img src={titan} alt="titanlogo" className="titan"></img>
            </div>
            <div className="inicio">
            <Link to = "/honda/city"style={{color:"black"}}> Voltar </Link>
            </div>
        </div>
    )

}