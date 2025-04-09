import './App.scss';
import Header from "./components/pages/Dashboard/Header";
import Footer from "./components/pages/Dashboard/Footer";
import LojasCriadas from "./components/pages/Dashboard/LojasCriadas"
import Patrocinado from "./components/pages/Dashboard/Patrocinado"
import UsuariosInseridos from "./components/pages/Dashboard/UsuariosInseridos"
import TransacoesRealizadas from "./components/pages/Dashboard/TransacoesRealizadas"
import Grafico from "./components/pages/Dashboard/Mapa";
import "./components/pages/Dashboard/Cards.scss"

function App() {
  return (
    <body>
      <div>
        <Header logoEmpresa="https://agenciaship.com.br/wp-content/uploads/2023/05/Design-sem-nome-6-1-300x300.png" nomeEmpresa="Agência Ship" />
        <div className='dashboard'>
          <Patrocinado valorCard={322} />
          <LojasCriadas valorCard={46} />
          <div className='estatisticas'>
            <UsuariosInseridos ultimos3Dias={50} ultimaSemana={127} />
            <TransacoesRealizadas ultimos3Dias={10} ultimaSemana={25} />
          </div>
          <Grafico iconeCard="https://img.icons8.com/?size=100&id=111425&format=png&color=143357" tituloCard="Estados Mais Atendidos" />
        </div>
        <Footer linkInstagram="https://www.instagram.com/agenciaship/" linkWpp="https://api.whatsapp.com/send?phone=5512991235705" linkSite="https://agenciaship.com.br/" descEmpresa="Agência SHIP traça estratégias práticas para anunciar seu negócio online e encontrar clientes nas principais plataformas disponíveis para o Marketing Digital." />
      </div>
    </body>
  );
}


export default App;
