import EmpresaCard from "./Home_Componentes/Empresa-card"; 
import Nav from "../layout/NavbarVazia";
import FooterPrincipal from "../layout/Footer"
import NavbarPrincipal from "../layout/NavbarPrincipal";

function Empresas() {
    return (
        <div>
            <div>
                <Nav/>
                <NavbarPrincipal></NavbarPrincipal>
                <hr />
                <EmpresaCard></EmpresaCard>
                <FooterPrincipal></FooterPrincipal>
            </div>
        </div>
    );
}
export default Empresas;