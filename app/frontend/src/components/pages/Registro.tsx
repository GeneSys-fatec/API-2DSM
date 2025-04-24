import Cadastro from './Registro_Componentes/Cadastro'
import Nav from "../layout/NavbarVazia";
import NavbarPrincipal from "../layout/NavbarPrincipal";

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