import '../MainStyle.css'
import React from 'react'
import lambretta from '../images/lambretta.png'
import { Link } from "react-router-dom";

export default function Lambreta() {
    return (
        <div className="body">
            <div className="imagem-container">
            <img src={lambretta} alt="lambrettalogo" className="lambretta"></img>
            </div>
            <div className="inicio">
            <Link to = "/"style={{color:"black"}}> Voltar </Link>
            </div>
        </div>
    )

}