import './App.scss';
import Header from "./components/layout/Header";
import Footer from "./components/layout/Footer";
import Cards from "./components/layout/Cards";
import LojasCriadas from "./components/layout/LojasCriadas"
import Patrocinado from "./components/layout/Patrocinado"
import UsuariosInseridos from "./components/layout/UsuariosInseridos"
import TransacoesRealizadas from "./components/layout/TransacoesRealizadas"
import Grafico from "./components/layout/Grafico";
import "./components/layout/Cards.scss"

function App() {
  return (
    <body>
      <div>
        <Header logoEmpresa="https://agenciaship.com.br/wp-content/uploads/2023/05/Design-sem-nome-6-1-300x300.png" nomeEmpresa="Agência Ship" />
        <div className='dashboard'>
        <Patrocinado valor={322} />
        <LojasCriadas valor={46} />
        <UsuariosInseridos totalDoisAnos={50} totalSeisMeses={31} />
        <TransacoesRealizadas totalDoisAnos={100} totalSeisMeses={25} />

          <Grafico iconeCard="https://img.icons8.com/?size=100&id=111425&format=png&color=143357" tituloCard="Estados Mais Atendidos" />
        </div>
        <Footer linkInstagram="https://www.instagram.com/agenciaship/" linkWpp="https://api.whatsapp.com/send?phone=5512991235705" linkSite="https://agenciaship.com.br/" descEmpresa="Agência SHIP traça estratégias práticas para anunciar seu negócio online e encontrar clientes nas principais plataformas disponíveis para o Marketing Digital." />
      </div>
    </body>
  );
}


export default App;
