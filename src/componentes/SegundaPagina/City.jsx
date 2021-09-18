import '../MainStyle.css'
import React from 'react'
import city from '../images/city.png'
import { Link } from "react-router-dom";

export default function City() {
    return (
        <div>
            <div className="imagem-container">
            <img src={city} alt="citylogo" className="city"></img>
            </div>
            <div className="inicio">
            <Link to = "/honda"style={{color:"black"}}> Voltar </Link>
            </div>
        </div>
    )

}