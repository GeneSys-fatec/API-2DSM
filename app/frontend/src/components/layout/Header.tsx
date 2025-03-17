import React from "react";
import "./Header.scss"

const Header = () => {
    return (
        <div className="header">
            <img className = "logo" src="https://agenciaship.com.br/wp-content/uploads/2023/05/Design-sem-nome-6-1-150x150.png" alt="Logo" />
            <div className="container">
                <h2>CONHEÇA A</h2>
                <h1>AGÊNCIA SHIP</h1>
            </div>
        </div>
    )
}

export default Header