import '../MainStyle.css'
import React from 'react'
import pop from '../images/pop.png'
import { Link } from "react-router-dom";

export default function Pop() {
    return (
        <div className="body">
            <div className="imagem-container">
            <img src={pop} alt="poplogo " className="pop"></img>
            </div>
            <div className="inicio">
            <Link to = "/honda/city"style={{color:"black"}}> Voltar </Link>
            </div>
        </div>
    )

}