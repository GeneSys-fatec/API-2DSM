
import ListaEmpresasDisponiveis from './Inicio/EmpresasDisponiveis';
import Nav from "../layout/Navbar/NavbarVazia";
import NavbarPrincipal from "../layout/Navbar/NavbarRotas";
import FooterPrincipal from '../layout/Footer/FooterCopy';

function Patrocinio() {
    return (
        <div>
            <div>
                <Nav/>
                <NavbarPrincipal></NavbarPrincipal>
                <hr />
                <ListaEmpresasDisponiveis></ListaEmpresasDisponiveis>
                <FooterPrincipal></FooterPrincipal>
            </div>
        </div>
    );
}

export default Patrocinio;