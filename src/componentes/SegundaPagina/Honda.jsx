import '../MainStyle.css'
import React from 'react'
import honda from '../images/honda.png'
import { Link } from "react-router-dom";

export default function Honda() {
    return (
        <div className="body">
            <div className="imagem-container">
            <img src={honda} alt="hondalogo" className="hondaimg"></img>
            </div>
            <div className="inicio">
            <Link to = "/"style={{color:"black"}}> Voltar </Link>
            </div>
        </div>
    )

}