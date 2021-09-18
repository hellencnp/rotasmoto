import '../MainStyle.css'
import React from 'react'
import tanque from '../images/tanque.png'
import { Link } from "react-router-dom";

export default function Tanque() {
    return (
        <div className="body">
            <div className="imagem-container">
            <img src={tanque} alt="tanquelogo" className="tanque"></img>
            </div>
            <div className="inicio">
            <Link to = "/honda/city/cgtitan"style={{color:"black"}}> Voltar </Link>
            </div>
        </div>
    )

}