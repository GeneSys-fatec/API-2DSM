import React from "react";
import "./Grafico.scss"

interface GraficoProps {
    iconeCard: string,
    tituloCard: string
}

const Grafico: React.FC<GraficoProps> = ({ iconeCard, tituloCard }) => {
    return (
        <div className="graficos">
            <div className="containerGraficos">
            <img className="imgGrafico" src={ iconeCard }></img>
            <h3>{ tituloCard }</h3>
            </div>
        </div>
    )
}

export default Grafico