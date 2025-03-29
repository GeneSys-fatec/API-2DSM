import React from "react";
import "./TransacoesRealizadas.scss";

interface TransacoesRealizadasProps {
  totalDoisAnos: number;
  totalSeisMeses: number;
}

const TransacoesRealizadas: React.FC<TransacoesRealizadasProps> = ({ totalDoisAnos, totalSeisMeses }) => {
  return (
    <div className="transacoes-realizadas">
      <h3>Transações Realizadas</h3>
      <p>Total últimos 2 anos: {totalDoisAnos}</p>
      <p>Total últimos 6 meses: {totalSeisMeses}</p>
    </div>
  );
};

export default TransacoesRealizadas;