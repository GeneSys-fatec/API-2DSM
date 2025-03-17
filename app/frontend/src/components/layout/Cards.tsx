import React from "react";
<<<<<<< HEAD
import "./Cards.scss"
=======
interface CardsProps {
    tituloCard: string,
    iconeCard: string,
    valorCard: number
}
>>>>>>> 26329ad1df3102368b38ccbd1caa98ce535cc17f

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