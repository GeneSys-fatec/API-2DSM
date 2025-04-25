import Nav from "../layout/NavbarVazia";
import FooterPrincipal from "../layout/Footer"
import NavbarPrincipal from "../layout/NavbarPrincipal";
import ListaEmpresas from "./Home_Componentes/Empresa-card";

function Empresas() {
    return (
        <div>
            <div>
                <Nav/>
                <NavbarPrincipal></NavbarPrincipal>
                <hr />
                <ListaEmpresas></ListaEmpresas>
                <FooterPrincipal></FooterPrincipal>
            </div>
        </div>
    );
}
export default Empresas;