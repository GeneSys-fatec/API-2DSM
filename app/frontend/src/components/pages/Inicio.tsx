import Nav from "../layout/Navbar/NavbarVazia";
import FooterPrincipal from "../layout/Footer/FooterCopy"
import NavbarRotas from "../layout/Navbar/NavbarRotas";
import ListaEmpresas from "./Inicio/EmpresaCard";

function Empresas() {
    return (
        <div>
            <div>
                <Nav/>
                <NavbarRotas></NavbarRotas>
                <hr />
                <ListaEmpresas></ListaEmpresas>
                <FooterPrincipal></FooterPrincipal>
            </div>
        </div>
    );
}
export default Empresas;