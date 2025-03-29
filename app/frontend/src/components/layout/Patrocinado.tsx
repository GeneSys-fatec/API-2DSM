import React from "react";
interface PatrocinadosProps {
  valorCard: number;
}

const Patrocinados: React.FC<PatrocinadosProps> = ({ valorCard }) => {
  return (
    <div className="card">
      <div className="conteudo">
        <div className="conteudo-card">
          <img src="https://img.icons8.com/?size=100&id=xGUZ15gQQ60G&format=png&color=143357" />
          <div className="dados-card">
            <h3>{valorCard}</h3>
            <p>Patrocinados</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Patrocinados;
