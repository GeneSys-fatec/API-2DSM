import Login from './Registro/Login'
import FooterPrincipal from '../layout/Footer/FooterCopy';
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
                <FooterPrincipal/>
            </div>
        </div>
    );
}
 
 
export default Registro;