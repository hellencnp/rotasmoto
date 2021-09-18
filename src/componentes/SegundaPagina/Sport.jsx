import '../MainStyle.css'
import React from 'react'
import sport from '../images/sport.png'
import { Link } from "react-router-dom";

export default function Sport() {
    return (
        <div>
            <div className="imagem-container">
            <img src={sport} alt="sportlogo" className="sport"></img>
            </div>
            <div className="inicio">
            <Link to = "/honda"style={{color:"black"}}> Voltar </Link>
            </div>
        </div>
    )

}