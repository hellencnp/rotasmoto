import '../MainStyle.css'
import React from 'react'
import scooter from '../images/scooter.png'
import { Link } from "react-router-dom";

export default function Scooter() {
    return (
        <div>
            <div className="imagem-container">
            <img src={scooter} alt="scooterlogo" className="scooter"></img>
            </div>
            <div className="inicio">
            <Link to = "/honda" style={{color:"black"}}> Voltar </Link>
            </div>
        </div>
    )

}