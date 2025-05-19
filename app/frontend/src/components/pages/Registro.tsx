import Cadastro from './Registro/Cadastro'
import Nav from "../layout/Navbar/NavbarVazia";
import NavbarPrincipal from "../layout/Navbar/NavbarRotas";
import FooterPrincipal from '../layout/Footer/FooterCopy';

function Registro() {
    return (
        <div>
            <div>
                <Nav/>
                <NavbarPrincipal></NavbarPrincipal>
                <hr />
                <Cadastro></Cadastro>
                <FooterPrincipal/>
            </div>
        </div>
    );
}

export default Registro;