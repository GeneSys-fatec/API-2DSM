import React from "react";
import "./UsuariosInseridos.scss";

interface UsuariosImpactadosProps {
  totalDoisAnos: number;
  totalSeisMeses: number;
}

const UsuariosImpactados: React.FC<UsuariosImpactadosProps> = ({ totalDoisAnos, totalSeisMeses }) => {
  return (
    <div className="usuarios-impactados">
      <h3>Usuários Impactados</h3>
      <p>Total últimos 2 anos: {totalDoisAnos}</p>
      <p>Total últimos 6 meses: {totalSeisMeses}</p>
    </div>
  );
};

export default UsuariosImpactados;