import React from "react";
import "./Grafico.scss";
import { BarChart, Bar, Rectangle, ResponsiveContainer, XAxis, YAxis, CartesianGrid } from "recharts";

interface TransacoesRealizadasProps {
  ultimos3Dias: number;
  ultimaSemana: number;
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

const TransacoesRealizadas: React.FC<TransacoesRealizadasProps> = ({ ultimos3Dias, ultimaSemana }) => {
  return (
    <div className="graficos">
      <div className="containerGraficos">
        <div className="dadosGraficos">
          <img src="https://img.icons8.com/?size=100&id=G7xxWUssqjYw&format=png&color=143357" />
          <h3>Transações Realizadas</h3>
        </div>
        <div className="textoGraficos">
          <p>Nos últimos 3 dias: <br /><span className="linhaPontilhada"></span>{ultimos3Dias}</p>
          <p>Na última semana: <br /><span className="linhaPontilhada"></span>{ultimaSemana}</p>
        </div>
        <div>
          <ResponsiveContainer width={600} height={300}>
            <BarChart
              width={500}
              height={400}
              data={info}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" fontSize={20} />
              <YAxis fontSize={20} />
              <Bar dataKey="quantidade" fill="#9dda97" barSize={30} activeBar={<Rectangle fill="#143357" />} />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  );
};

export default TransacoesRealizadas;