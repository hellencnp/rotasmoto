import '../MainStyle.css'
import React from 'react'
import yamaha from '../images/yamaha.png'
import { Link } from "react-router-dom";

export default function Hamaya() {
    return (
        <div className="body">
            <div className="imagem-container">
            <img src={yamaha} alt="yamahalogo" className="yamaha"></img>
            </div>
            <div className="inicio">
            <Link to = "/"style={{color:"black"}}> Voltar </Link>
            </div>
        </div>
    )

}