import '../MainStyle.css'
import React from 'react'
import fan from '../images/fan.png'
import { Link } from "react-router-dom";

export default function Cgfan() {
    return (
        <div className="body">
            <div className="imagem-container">
            <img src={fan} alt="fanlogo" className="fan"></img>
            </div>
            <div className="inicio">
            <Link to = "/honda/city"style={{color:"black"}}> Voltar </Link>
            </div>
        </div>
    )

}