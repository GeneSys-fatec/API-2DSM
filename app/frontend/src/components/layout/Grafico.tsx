import React from "react";
import "./Grafico.scss";
import { PieChart, Pie, Cell } from "recharts";

interface GraficoProps {
    iconeCard: string;
    tituloCard: string;
}

const data = [
    { name: "SP", quantidade: 48.2 },
    { name: "RJ", quantidade: 7.4 },
    { name: "MG", quantidade: 22.1 },
    { name: "GO", quantidade: 25.6 },
    { name: "PR", quantidade: 13.7 }
];

const colors = ["#17f9ff", "#00b4fc", "#005bc5", "#012677", "#001449"];

const Grafico: React.FC<GraficoProps> = ({ iconeCard, tituloCard }) => {
    return (
        <div className="graficos">
            <div className="containerGraficos">
                <div className="texto-foto">
                    <img className="imgGrafico" src={iconeCard} alt="Ícone do Gráfico" />
                    <h3 className="titulo-grafico">{tituloCard}</h3>
                </div>
                <div className="grafico">
                    <PieChart width={700} height={400}>
                        <Pie
                            data={data}
                            cx="50%"
                            cy="50%"
                            labelLine={false}
                            label={({ name, quantidade, x, y, midAngle, innerRadius, outerRadius, percent }) => {
                                const RADIAN = Math.PI / 180;
                                const radius = innerRadius + (outerRadius - innerRadius) * 0.1 ;
                                const xPos = radius * Math.cos(-midAngle * RADIAN) + x;
                                const yPos = radius * Math.sin(-midAngle * RADIAN) + y;
                                return (
                                    <text x={xPos} y={yPos} fill="black" textAnchor="middle" dominantBaseline="central" fontSize={15}>
                                        {`${name}: ${quantidade}%`}
                                    </text>
                                );
                            }}
                            outerRadius={120}
                            fill="#8884d8"
                            dataKey="quantidade"
                        >
                            {data.map((entry, index) => (
                                <Cell key={`cell-${index}`} fill={colors[index % colors.length]} />
                            ))}
                        </Pie>
                    </PieChart>

                </div>
            </div>
        </div>
    );
};

export default Grafico;
