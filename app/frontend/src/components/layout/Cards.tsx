import React from "react";
import "./Cards.scss"

interface CardsProps {
    valorCard: number
}

const Cards: React.FC<CardsProps> = ({ valorCard }) => {
    return (
        <div className="card">
            <div className="conteudo">
                <div className="conteudo-card">
                    <img src="https://img.icons8.com/?size=100&id=G7xxWUssqjYw&format=png&color=143357" />
                    <h3>{valorCard}</h3>
                    <p>Transações Realizadas</p>
                </div>
                <div className="conteudo-card">
                    <img src="https://img.icons8.com/?size=100&id=98957&format=png&color=143357" />
                    <h3>{valorCard}</h3>
                    <p>Usuários Impactados</p>
                </div>
                <div className="conteudo-card">
                    <img src="https://img.icons8.com/?size=100&id=78230&format=png&color=143357" />
                    <h3>{valorCard}</h3>
                    <p>Lojas Criadas</p>
                </div>
                <div className="conteudo-card">
                    <img src="https://img.icons8.com/?size=100&id=xGUZ15gQQ60G&format=png&color=143357" />
                    <h3>{valorCard}</h3>
                    <p>Patrocinados</p>
                </div>
            </div>
        </div>
    )
}

export default Cards