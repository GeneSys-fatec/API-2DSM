import React from "react";

interface LojasCriadasProps {
  valorCard: number;
}

const LojasCriadas: React.FC<LojasCriadasProps> = ({ valorCard }) => {
  return (
    <div className="card">
      <div className="conteudo">
        <div className="conteudo-card">
          <img className="card-icone" src="https://img.icons8.com/?size=100&id=78230&format=png&color=143357" />
          <div className="dados-card">
            <h3 className="card-valor" >{valorCard}</h3>
            <p className="card-titulo" >Lojas Criadas</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LojasCriadas;
