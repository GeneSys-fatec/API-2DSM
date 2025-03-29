import React from "react";
import "./Patrocinado.scss";

interface PatrocinadosProps {
  valor: number;
}

const Patrocinados: React.FC<PatrocinadosProps> = ({ valor }) => {
  return (
    <div className="patrocinados">
      <h3>Patrocinados</h3>
      <p>{valor}</p>
    </div>
  );
};

export default Patrocinados;
