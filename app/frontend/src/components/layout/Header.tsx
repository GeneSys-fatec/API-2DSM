import React from "react";
import "./Header.scss"

interface HeaderProps {
    nomeEmpresa: string
    logoEmpresa: string
}

const Header: React.FC<HeaderProps> = ({ nomeEmpresa, logoEmpresa }) => {
    return (
<<<<<<< HEAD
        <div className="header">
            <img className = "logo" src="https://agenciaship.com.br/wp-content/uploads/2023/05/Design-sem-nome-6-1-150x150.png" alt="Logo" />
            <div className="container">
                <h2>CONHEÇA A</h2>
                <h1>AGÊNCIA SHIP</h1>
            </div>
=======
        <div>
            <img src={ logoEmpresa }/>
            <h2>Conheça a</h2>
            <h1>{ nomeEmpresa }</h1>
>>>>>>> 26329ad1df3102368b38ccbd1caa98ce535cc17f
        </div>
    )
}

export default Header