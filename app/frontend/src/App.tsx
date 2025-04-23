import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Dashboard from './components/pages/Dashboard';
import Registro from './components/pages/Registro';
import Login from './components/pages/Login';
import Empresas from './components/pages/Empresas'

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Empresas />} />
        <Route path="/Dashboard" element={<Dashboard />} />
        <Route path="/Registro" element={<Registro />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </Router>
  );
}

export default App;