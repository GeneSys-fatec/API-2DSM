import React from "react";

interface GraficoProps {
    iconeCard: string,
    tituloCard: string
}

const Grafico: React.FC<GraficoProps> = ({ iconeCard, tituloCard }) => {
    return (
        <div>
            <img src={ iconeCard }></img>
            <h3>{ tituloCard }</h3>
        </div>
    )
}

export default Grafico