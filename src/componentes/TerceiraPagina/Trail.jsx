import '../MainStyle.css'
import React from 'react'
import trail from '../images/trail.png'
import { Link } from "react-router-dom";

export default function Trail() {
    return (
        <div className="body">
            <div className="imagem-container">
            <img src={trail} alt="traillogo " className="trail"></img>
            </div>
            <div className="inicio">
            <Link to = "/honda"style={{color:"black"}}> Voltar </Link>
            </div>
        </div>
    )

}