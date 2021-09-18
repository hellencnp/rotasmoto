import '../MainStyle.css'
import React from 'react'
import suzuki from '../images/suzuki.png'
import { Link } from "react-router-dom";

export default function Suzuki() {
    return (
        <div className="body">
            <div className="imagem-container">
            <img src={suzuki} alt="suzukilogo" className="suzuki"></img>
            </div>
            <div className="inicio">
            <Link to = "/"style={{color:"black"}}> Voltar </Link>
            </div>
        </div>
    )

}