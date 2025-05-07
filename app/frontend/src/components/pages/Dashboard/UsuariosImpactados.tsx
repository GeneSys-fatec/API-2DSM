import React, { useEffect, useState } from "react";
import "./UsuariosImpactados.scss";
import {
  BarChart,
  Bar,
  Rectangle,
  ResponsiveContainer,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
} from "recharts";

interface UsuariosImpactadosProps {
  Total: number;
  ultimaSemana: number;
  idEmpresaPatrocinio: number;
}

const meses = {
  "01": "Jan",
  "02": "Fev",
  "03": "Mar",
  "04": "Abr",
  "05": "Mai",
  "06": "Jun",
  "07": "Jul",
  "08": "Ago",
  "09": "Set",
  "10": "Out",
  "11": "Nov",
  "12": "Dez",
};

type UsuarioPorMes = {
  mes: string;
  total_usuarios: number;
  idEmpresaPatrocinio: number;
};

//gera uma array com os ultimos 10 meses partindo da data atual

function gerarUltimosMeses(qtd: number): string[] {
  const hoje = new Date(); //salva a data atual
  const resultado: string[] = [];

  for (let i = qtd - 1; i >= 0; i--) {
    const data = new Date(hoje.getFullYear(), hoje.getMonth() - i, 1); //guarda o mês de i meses atrás
    const ano = data.getFullYear();
    const mes = (data.getMonth() + 1).toString().padStart(2, "0"); //deixa o mês no padrão 01, 02...
    resultado.push(`${ano}-${mes}`);
  }

  return resultado;
}

const UsuariosImpactados: React.FC<UsuariosImpactadosProps> = ({
  Total,
  ultimaSemana,
  idEmpresaPatrocinio,
}) => {
  const [info, setInfo] = useState<{ name: string; quantidade: number }[]>([]);

  useEffect(() => {
  fetch(`http://localhost:3005/empresa-dados`)
    .then((res) => res.json())
    .then((data: UsuarioPorMes[]) => {
      // filtra os dados por idEmpresa recebido via props
      const dadosFiltrados = data.filter(item => item.idEmpresaPatrocinio === Number(idEmpresaPatrocinio));

      // cria um mapa com os totais por mês
      const mapaDados: Record<string, number> = {};
      dadosFiltrados.forEach((item) => {
        mapaDados[item.mes] = item.total_usuarios;
      });

      const ultimosMeses = gerarUltimosMeses(10).map((mesCompleto) => {
        const [, mes] = mesCompleto.split("-");
        return {
          name: meses[mes as keyof typeof meses],
          quantidade: mapaDados[mesCompleto] || 0,
        };
      });

      setInfo(ultimosMeses);
    })
    .catch((err) => {
      console.error("Erro ao buscar dados do gráfico:", err);
    });
}, [idEmpresaPatrocinio]);

  const CustomTooltip = ({ active, payload, label }: any) => {
    if (active && payload && payload.length) {
      const valor = payload[0].value;
      const textoUsuario = valor === 1 ? "usuário" : "usuários"; // Lógica singular/plural
  
      return (
        <div className="custom-tooltip">
          <p className="label">{label}</p>
          <p className="value">{valor} {textoUsuario}</p> {/* Exibe "1 usuário" ou "X usuários" */}
        </div>
      );
    }
    return null;
  };

  return (
    <div className="graficos">
      <div className="containerGraficos">
        <div className="dadosGraficos">
          <img src="https://img.icons8.com/?size=100&id=98957&format=png&color=143357" />
          <h3>Pessoas Impactadas</h3>
        </div>
        <div className="textoGraficos">
          <p>
            Total de impactados: <br />
            <span className="linhaPontilhada"></span>
            {Total}
          </p>
          <p>
            Na última semana: <br />
            <span className="linhaPontilhada"></span>
            {ultimaSemana}
          </p>
        </div>
        <div>
          <ResponsiveContainer width={600} height={300}>
            <BarChart width={500} height={400} data={info}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" fontSize={20} />
              <YAxis fontSize={20} />
              <Tooltip
                content={<CustomTooltip />}
                cursor={{ fill: "rgba(0, 0, 0, 0.1)" }} 
                animationDuration={200} 
              />
              <Bar
                dataKey="quantidade"
                fill="#69d6ce"
                barSize={30}
                activeBar={<Rectangle fill="#143357" />}
              />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  );
};

export default UsuariosImpactados;
