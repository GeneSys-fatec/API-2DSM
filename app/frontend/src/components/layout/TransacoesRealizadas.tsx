import React from "react";
import "./TransacoesRealizadas.scss";
import { BarChart, Bar, Rectangle, ResponsiveContainer, XAxis, YAxis, CartesianGrid } from "recharts";

interface TransacoesRealizadasProps {
  totalDoisAnos: number;
  totalSeisMeses: number;
}

const info = [
  { name: "Jan", quantidade: 1234 },
  { name: "Fev", quantidade: 1321 },
  { name: "Mar", quantidade: 1432 },
  { name: "Abr", quantidade: 1132 },
  { name: "Mai", quantidade: 1390 },
  { name: "Jun", quantidade: 1234 },
  { name: "Jul", quantidade: 1321 },
  { name: "Ago", quantidade: 1432 },
  { name: "Set", quantidade: 1132 },
  { name: "Out", quantidade: 1390 }
];

const TransacoesRealizadas: React.FC<TransacoesRealizadasProps> = ({ totalDoisAnos, totalSeisMeses }) => {
  return (
    <div className="transacoes-realizadas">
      <h3>Transações Realizadas</h3>
      <p>Total últimos 2 anos: {totalDoisAnos}</p>
      <p>Total últimos 6 meses: {totalSeisMeses}</p>
      <div>
      <ResponsiveContainer width={700} height={400}>
        <BarChart
          width={500}
          height={400}
          data={info}>
          <CartesianGrid strokeDasharray="3 3"/>
          <XAxis dataKey="name" fontSize={20}/>
          <YAxis fontSize={20}/>
          <Bar dataKey="quantidade" fill="#9dda97" barSize={30} activeBar={<Rectangle fill="#143357"/>}/>
        </BarChart>
      </ResponsiveContainer>
      </div>
    </div>
    
  );
};

export default TransacoesRealizadas;