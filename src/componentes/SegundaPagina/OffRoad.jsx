import '../MainStyle.css'
import React from 'react'
import offhoad from '../images/offhoad.png'
import { Link } from "react-router-dom";

export default function OffRoad() {
    return (
        <div>
            <div className="imagem-container">
            <img src={offhoad} alt="offroadlogo" className="offroad"></img>
            </div>
            <div className="inicio">
            <Link to = "/honda"style={{color:"black"}}> Voltar </Link>
            </div>
        </div>
    )

}