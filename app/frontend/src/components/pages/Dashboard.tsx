import '../../App.scss';
import Header from "./Dashboard/Header";
import Footer from "./Dashboard/Footer";
import LojasCriadas from "./Dashboard/LojasCriadas";
import Comunidades from "./Dashboard/Comunidades";
import Patrocinado from "./Dashboard/Patrocinados";
import Navbar from "../layout/Navbar/NavbarEmpresa";
import UsuariosInseridos from "./Dashboard/UsuariosImpactados";
import "./Dashboard/Cards.scss";
import Mapa from './Dashboard/Mapa';
import FooterPrincipal from "../layout/Footer/FooterCopy";
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

// interface para informações da empresa
interface Empresa {
  id: number;
  nameSponsor: string;
  sponsorLogo: string;
  instagram: string;
  whatsapp: string;
  site_web: string;
  descriptionSponsor: string;
}

// interface para total de empresas para o gráfico de usuários impactados
interface DadosTotal {
  idEmpresaPatrocinio: number;
  Total: number;
}

// interface para filtro de empresas para o gráfico de usuários impactados
interface Dados7dias {
  idEmpresaPatrocinio: number;
  Total7dias: number;
}

// interface para número de lojas criadas por empresa
interface DadosLojas {
  idEmpresaPatrocinio: number;
  quantidadelojas: number;
}

// interface para número de comunidades criadas por empresa
interface DadosComunidades {
  idEmpresaPatrocinio: number;
  quantidadeComunidades: number;
}

// interface para número de patrocinados criados por empresa
interface DadosPatrocinados {
  idEmpresaPatrocinio: number;
  quantidadePatrocinados: number;
}

function Dashboard() {
  const { idEmpresa } = useParams<{ idEmpresa: string }>();

  const [empresa, setEmpresa] = useState<Empresa | null>(null);

  useEffect(() => {
    if (idEmpresa) {
      fetch(`http://localhost:3005/empresa/${idEmpresa}`)
        .then(res => res.json())
        .then(data => setEmpresa(data))
        .catch((err) => console.error("Erro ao buscar empresa", err));
    }
  }, [idEmpresa]);

  // fetch no total de empresas para o gráfico de usuários impactados
  const [empresas1, setEmpresas1] = useState<DadosTotal[]>([]);
  const [total, setTotal] = useState<number>(0);

  useEffect(() => {
    fetch(`http://localhost:3005/empresa-dadosTotal`)
      .then(res => res.json())
      .then((data: DadosTotal[]) => {
        setEmpresas1(data);
        const empresa = data.find(item => item.idEmpresaPatrocinio === Number(idEmpresa));
        if (empresa) {
          setTotal(empresa.Total);
        }
      })
      .catch((err) => console.error("Erro ao buscar dados total", err));
  }, [idEmpresa]);

  // fetch no filtro de empresas para o gráfico de usuários impactados
  const [empresas2, setEmpresas2] = useState<Dados7dias[]>([]);
  const [total7Dias, setTotal7Dias] = useState<number>(0);

  useEffect(() => {
    fetch(`http://localhost:3005/empresa-dados7dias`)
      .then(res => res.json())
      .then((data: Dados7dias[]) => {
        setEmpresas2(data);
        const empresa = data.find(item => item.idEmpresaPatrocinio === Number(idEmpresa));
        if (empresa) {
          setTotal7Dias(empresa.Total7dias);
        }
      })
      .catch((err) => console.error("Erro ao buscar dados dos últimos 7 dias", err));
  }, [idEmpresa]);

  // fetch no número de lojas criadas por empresa
  const [empresas3, setEmpresas3] = useState<DadosLojas[]>([]);
  const [quantidadelojas, setquantidadelojas] = useState<number>(0);

  useEffect(() => {
    fetch(`http://localhost:3005/empresa-lojas`)
      .then(res => res.json())
      .then((data: DadosLojas[]) => {
        setEmpresas3(data);
        const empresa = data.find(item => item.idEmpresaPatrocinio === Number(idEmpresa));
        if (empresa) {
          setquantidadelojas(empresa.quantidadelojas);
        }
      })
      .catch((err) => console.error("Erro ao buscar dados de lojas", err));
  }, [idEmpresa]);

  // fetch no número de comunidades criadas por empresa
  const [empresas4, setEmpresas4] = useState<DadosComunidades[]>([]);
  const [quantidadeComunidades, setquantidadeComunidades] = useState<number>(0);

  useEffect(() => {
    fetch(`http://localhost:3005/empresa-comunidades`)
      .then(res => res.json())
      .then((data: DadosComunidades[]) => {
        setEmpresas4(data);
        const empresa = data.find(item => item.idEmpresaPatrocinio === Number(idEmpresa));
        if (empresa) {
          setquantidadeComunidades(empresa.quantidadeComunidades);
        }
      })
      .catch((err) => console.error("Erro ao buscar dados de comunidades", err));
  }, [idEmpresa]);

  // fetch no número de patrocinados por empresa
  const [empresas5, setEmpresas5] = useState<DadosPatrocinados[]>([]);
  const [quantidadePatrocinados, setquantidadePatrocinados] = useState<number>(0);

  useEffect(() => {
    fetch(`http://localhost:3005/empresa-patrocinados`)
      .then(res => res.json())
      .then((data: DadosPatrocinados[]) => {
        setEmpresas5(data);
        const empresa = data.find(item => item.idEmpresaPatrocinio === Number(idEmpresa));
        if (empresa) {
          setquantidadePatrocinados(empresa.quantidadePatrocinados);
        }
      })
      .catch((err) => console.error("Erro ao buscar dados de patrocinados", err));
  }, [idEmpresa]);

  return (
    <div>
      <Navbar
        linkInstagram={empresa?.instagram || ""}
        linkWpp={`https://api.whatsapp.com/send?phone=${empresa?.whatsapp || ""}`}
        linkSite={empresa?.site_web || ""}
      />
      <div>
        <Header
          logoEmpresa={empresa?.sponsorLogo || ""}
          nomeEmpresa={empresa?.nameSponsor || ""}
        />
        <div className='dashboard'>
          
            <div className='cards-dados'>
              <Patrocinado valorCard={quantidadePatrocinados} />
              <LojasCriadas valorCard={quantidadelojas} />
              <Comunidades valorCard={quantidadeComunidades} />
            </div>
            <div className='usuarios-impactados'>
              <UsuariosInseridos
                Total={total}
                ultimaSemana={total7Dias}
                idEmpresaPatrocinio={Number(idEmpresa)}
              />
            </div>
         
          <div className='distribuicao-geografica'>
            <Mapa idEmpresa={Number(idEmpresa)} />
          </div>
        </div>
        <Footer descEmpresa={empresa?.descriptionSponsor || ""} />
        <FooterPrincipal />
      </div>
    </div>
  );
}

export default Dashboard;
