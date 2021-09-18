import '../MainStyle.css'
import React from 'react'
import biz from '../images/biz.png'
import { Link } from "react-router-dom";

export default function Biz() {
    return (
        <div className="body">
            <div className="imagem-container">
            <img src={biz} alt="bizlogo" className="biz"></img>
            </div>
            <div className="inicio">
            <Link to = "/honda/city"style={{color:"black"}}> Voltar </Link>
            </div>
        </div>
    )

}