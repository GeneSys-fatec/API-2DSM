import './App.scss';
import Header from "./components/pages/Dashboard/Header";
import Footer from "./components/pages/Dashboard/Footer";
import LojasCriadas from "./components/pages/Dashboard/LojasCriadas"
import Patrocinado from "./components/pages/Dashboard/Patrocinado"
import Navbar from "./components/layout/Navbar"
import UsuariosInseridos from "./components/pages/Dashboard/UsuariosInseridos"
import Grafico from "./components/pages/Dashboard/Mapa";
import "./components/pages/Dashboard/Cards.scss"
import Mapa from './components/pages/Dashboard/Mapa';

function App() {
  return (
    <body>
      <Navbar></Navbar>
      <div>
        <Header logoEmpresa="https://agenciaship.com.br/wp-content/uploads/2023/05/Design-sem-nome-6-1-300x300.png" nomeEmpresa="Agência Ship" />
        <div className='dashboard'>
          <div className='cards-esquerda'>
            <Patrocinado valorCard={322} />
            <LojasCriadas valorCard={46} />
            <LojasCriadas valorCard={46} />
            {/* <Comunidades valorCard={10} /> Novo card */}
          </div>
          <div className='usuarios-impactados'>
            <UsuariosInseridos ultimos3Dias={50} ultimaSemana={127} />
          </div>
          <div className='distribuicao-geografica'>
            <Mapa />
          </div>
        </div>
        <Footer linkInstagram="https://www.instagram.com/agenciaship/" linkWpp="https://api.whatsapp.com/send?phone=5512991235705" linkSite="https://agenciaship.com.br/" descEmpresa="Agência SHIP traça estratégias práticas para anunciar seu negócio online e encontrar clientes nas principais plataformas disponíveis para o Marketing Digital." />
      </div>
    </body>
  );
}


export default App;
