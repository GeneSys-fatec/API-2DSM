import Login from './Registro/Login'

import Nav from "../layout/Navbar/NavbarVazia"
import NavbarPrincipal from "../layout/Navbar/NavbarRotas";
 
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