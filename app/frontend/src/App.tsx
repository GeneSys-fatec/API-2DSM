import './App.scss';
import Header from "./components/layout/Header";
import Footer from "./components/layout/Footer";
import Cards from "./components/layout/Cards";
import Grafico from "./components/layout/Grafico";
import "./components/layout/Cards.scss"

function App() {
  return (
    <div>
      <Header logoEmpresa="https://agenciaship.com.br/wp-content/uploads/2023/05/Design-sem-nome-6-1-300x300.png" nomeEmpresa="Agência Ship" />
      {/*<div className='card'>
      <Cards iconeCard="https://img.icons8.com/?size=100&id=G7xxWUssqjYw&format=png&color=143357" valorCard={0} tituloCard="Transações Realizadas"/>
      <Cards iconeCard="https://img.icons8.com/?size=100&id=98957&format=png&color=143357" valorCard={0} tituloCard="Usuários Impactados"/>
      <Cards iconeCard="https://img.icons8.com/?size=100&id=78230&format=png&color=143357" valorCard={0} tituloCard="Lojas Criadas"/>
      <Cards iconeCard="https://img.icons8.com/?size=100&id=xGUZ15gQQ60G&format=png&color=143357" valorCard={0} tituloCard="Patrocinados"/>
      </div>*/}
      <div className='dashboard'>
      <Cards valorCard={0}/>
      <Grafico iconeCard="https://img.icons8.com/?size=100&id=111425&format=png&color=143357" tituloCard="Estados Mais Atendidos"/>
      </div>
      <Footer linkInstagram="https://www.instagram.com/agenciaship/" linkWpp="https://api.whatsapp.com/send?phone=5512991235705" linkSite="https://agenciaship.com.br/" descEmpresa="Agência SHIP traça estratégias práticas para anunciar seu negócio online e encontrar clientes nas principais plataformas disponíveis para o Marketing Digital."/>
    </div>
  );
}


export default App;
