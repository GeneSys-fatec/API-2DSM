import React from "react";
import "./Footer.scss"

interface FooterProps {
    // linkInstagram: string,
    // linkWpp: string,
    // linkSite: string,
    descEmpresa: string
}

const Footer: React.FC<FooterProps> = ({  descEmpresa }) => {
    return (
        <footer className="footer">
            
            <div className="texto">
                <h1>Sobre</h1>
                <p>{descEmpresa}</p>
            </div>
        </footer>
    )
}

export default Footer