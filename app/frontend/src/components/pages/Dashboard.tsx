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

// function getData(n: number) {
//   let dataAlvo = new Date()
//   dataAlvo.setDate(dataAlvo.getDate() -n) 
//   return dataAlvo
// }

function Dashboard() {

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
              <UsuariosInseridos ultimos3Dias={50} ultimaSemana={127} />
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