import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Dashboard from './components/pages/Dashboard';
import Registro from './components/pages/Registro';
import Login from './components/pages/Login';
import Empresas from './components/pages/Inicio';
import Patrocinio from './components/pages/Patrocinio';
import Middleware from './components/pages/Registro/Middleware';

function App() {
  return (
    <Router>
      <Routes>
        {/* Rotas protegidas dentro do Middleware */}
        <Route element={<Middleware />}>
          <Route path="/empresas-disponiveis" element={<Patrocinio />} />
        </Route>

        {/* Rotas públicas */}
        <Route path="/" element={<Empresas />} />
        <Route path="/registro" element={<Registro />} />
        <Route path="/login" element={<Login />} />
        <Route path="/dashboard/:idEmpresa" element={<Dashboard />} />
        <Route path="/dashboard/" element={<Dashboard />} />
      </Routes>
    </Router>
  );
}

export default App;
