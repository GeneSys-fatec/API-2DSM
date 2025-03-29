import React from "react";
import "./LojasCriadas.scss";

interface LojasCriadasProps {
  valor: number;
}

const LojasCriadas: React.FC<LojasCriadasProps> = ({ valor }) => {
  return (
    <div className="lojas-criadas">
      <h3>Lojas Criadas</h3>
      <p>{valor}</p>
    </div>
  );
};

export default LojasCriadas;
