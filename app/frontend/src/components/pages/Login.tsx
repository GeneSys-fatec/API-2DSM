import Login from './Registro_Componentes/Login'

import Nav from "../layout/NavbarVazia"
import NavbarPrincipal from "../layout/NavbarPrincipal";
 
function Registro() {
    return (
        <div>
            <div>
                <Nav/>
                <NavbarPrincipal></NavbarPrincipal>
                <hr />
                <Login></Login>
            </div>
        </div>
    );
}
 
 
export default Registro;