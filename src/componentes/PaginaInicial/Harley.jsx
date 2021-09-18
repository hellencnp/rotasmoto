import '../MainStyle.css'
import React from 'react'
import harley from '../images/harley.png'
import { Link } from "react-router-dom";

export default function Harley() {
    return (
        <div className="body">
            <div className="imagem-container">
            <img src={harley} alt="harleylogo" className="harley"></img>
            </div>
            <div className="inicio">
            <Link to = "/"style={{color:"black"}}> Voltar </Link>
            </div>
        </div>
    )

}