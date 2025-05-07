import Cadastro from './Registro/Cadastro'
import Nav from "../layout/Navbar/NavbarVazia";
import NavbarPrincipal from "../layout/Navbar/NavbarRotas";

function Registro() {
    return (
        <div>
            <div>
                <Nav/>
                <NavbarPrincipal></NavbarPrincipal>
                <hr />
                <Cadastro></Cadastro>
                
            </div>
        </div>
    );
}

export default Registro;