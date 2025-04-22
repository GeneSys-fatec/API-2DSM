import Navbar from "../layout/Navbar"
import Cadastro from './Registro_Componentes/Cadastro'
 
 
function Registro() {
    return (
        <body>
            <Navbar linkInstagram="https://www.instagram.com/agenciaship/" linkWpp="https://api.whatsapp.com/send?phone=5512991235705" linkSite="https://agenciaship.com.br/" ></Navbar>
            <div>
                <Cadastro></Cadastro>
            </div>
        </body>
    );
}
 
 
export default Registro;