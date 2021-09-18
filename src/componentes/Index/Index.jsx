import '../MainStyle.css'
import React from 'react'
import inicio from '../images/inicio.png'

export default function Index() {
    return (
        <div className="body">
            <div className="indeximage">
            <img src={inicio} alt="moto"></img>
            </div>
        </div>
    )

}