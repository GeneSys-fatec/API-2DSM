import React from "react";
import "./Header.scss"

interface HeaderProps {
    nomeEmpresa: string
    logoEmpresa: string
}

const Header: React.FC<HeaderProps> = ({ nomeEmpresa, logoEmpresa }) => {
    return (
        <div className="header">
            <img className="logo" src={ logoEmpresa }/>
            <div className="container">
            <h2>Conheça a</h2>
            <h1>{ nomeEmpresa }</h1>
            </div>
        </div>
    )
}

export default Header