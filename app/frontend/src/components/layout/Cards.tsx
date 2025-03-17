import React from "react";
interface CardsProps {
    tituloCard: string,
    iconeCard: string,
    valorCard: number
}

const Cards: React.FC<CardsProps> = ({ tituloCard, iconeCard, valorCard }) => {
    return (
        <div>
            <img src={ iconeCard }/>
            <h3>{ valorCard }</h3>
            <p>{ tituloCard }</p>
        </div>
    )
}

export default Cards