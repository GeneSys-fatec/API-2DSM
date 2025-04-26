import '../../App.scss';
import Header from "./Dashboard_Componentes/Header";
import Footer from "./Dashboard_Componentes/Footer";
import LojasCriadas from "./Dashboard_Componentes/LojasCriadas"
import Comunidades from "./Dashboard_Componentes/Comunidades"
import Patrocinado from "./Dashboard_Componentes/Patrocinado"
import Navbar from "../layout/Navbar"
import UsuariosInseridos from "./Dashboard_Componentes/UsuariosImpactados"
import "./Dashboard_Componentes/Cards.scss"
import Mapa from './Dashboard_Componentes/Mapa';
import FooterPrincipal from "../layout/FooterCopy"
import { useEffect, useState } from 'react';

//interface para total de empresas para o grafico de usuarios impactados
interface DadosTotal {
  idEmpresaPatrocinio: number;
  Total: number;
}

//interface para filtro de empresas para o grafico de usuarios impactados
interface Dados7dias {
  idEmpresaPatrocinio: number;
  Total7dias: number;
}

function Dashboard() {

  const [empresas1, setEmpresas1] = useState<DadosTotal[]>([]);
  const [total, setTotal] = useState<number>(0);

  useEffect(() => {
    fetch(`http://localhost:3005/empresa-dadosTotal`)
      .then(res => res.json())
      .then((data: DadosTotal[]) => {
        setEmpresas1(data);
        if (data.length > 0) {
          setTotal(Number(data[0].Total));
        }
      })
      .catch((err) => console.error("Empresa não encontrada", err));
  }, []);

  // fetch no filtro de empresas para o grafico de usuarios impactados
  const [empresas2, setEmpresass] = useState<Dados7dias[]>([]);
  const [total7Dias, setTotal7Dias] = useState<number>(0);

  useEffect(() => {
    fetch(`http://localhost:3005/empresa-dados7dias`)
      .then(res => res.json())
      .then((data: Dados7dias[]) => {
        setEmpresass(data);
        if (data.length > 0) {
          setTotal7Dias(Number(data[0].Total7dias)); // converte para número se necessário
        }
      })
      .catch((err) => console.error("Empresa não encontrada", err));
  }, []);

  return (
    <div>
      <Navbar linkInstagram="https://www.instagram.com/agenciaship/" linkWpp="https://api.whatsapp.com/send?phone=5512991235705" linkSite="https://agenciaship.com.br/" ></Navbar>
      <div>
        <Header logoEmpresa="https://agenciaship.com.br/wp-content/uploads/2023/05/Design-sem-nome-6-1-300x300.png" nomeEmpresa="Agência Ship" />
        <div className='dashboard'>
          <div className='top-dashboard'>
            <div className='cards-dados'>
              <Patrocinado valorCard={322} />
              <LojasCriadas valorCard={46} />
              <Comunidades valorCard={100} />
            </div>
            <div className='usuarios-impactados'>
              <UsuariosInseridos Total={total} ultimaSemana={total7Dias} />
            </div>
          </div>
          <div className='distribuicao-geografica'>
            <Mapa />
          </div>
        </div>
        <Footer descEmpresa="Transformamos seu investimento em resultados reais, com estratégias personalizadas que conectam você ao cliente certo, no momento certo. 
Simplificamos o marketing digital para você focar no que realmente importa: crescer o seu negócio."/>
        <FooterPrincipal></FooterPrincipal>
      </div>

    </div>
  );
}


export default Dashboard;