import React from "react";
import "./Footer.scss"

const Footer = () => {
    return (
        <div className="footer">
            <div className="contatos">
                <img src="https://img.icons8.com/?size=100&id=Xy10Jcu1L2Su&format=png&color=000000"     alt="Instagram" />
                <img src="https://img.icons8.com/?size=100&id=16713&format=png&color=000000" alt="WhatsApp" />
                <img src="https://img.icons8.com/?size=100&id=QiwSMfboPt2R&format=png&color=000000" alt="Site" />
            </div>
            <div className="texto">
                <h1>Sobre</h1>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero repellendus quo, maiores incidunt debitis recusandae id rerum, totam dolorem facilis aliquid fugiat, temporibus maxime consequuntur repudiandae unde et sit voluptas.</p>
            </div>
        </div>
    )
}

export default Footer