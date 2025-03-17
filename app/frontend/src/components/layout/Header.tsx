import React from "react";

interface HeaderProps {
    nomeEmpresa: string
    logoEmpresa: string
}

const Header: React.FC<HeaderProps> = ({ nomeEmpresa, logoEmpresa }) => {
    return (
        <div>
            <img src={ logoEmpresa }/>
            <h2>Conheça a</h2>
            <h1>{ nomeEmpresa }</h1>
        </div>
    )
}

export default Header