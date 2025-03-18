import React from "react";
import "./Cards.scss"

interface CardsProps {
    tituloCard: string,
    iconeCard: string,
    valorCard: number
}

const Cards: React.FC<CardsProps> = ({ tituloCard, iconeCard, valorCard }) => {
    return (
        <div className="card"> 
        <div className="conteudo">
            <img src={ iconeCard }/>
            <h3>{ valorCard }</h3>
            <p>{ tituloCard }</p>
        </div>
        </div>
    )
}

export default Cards