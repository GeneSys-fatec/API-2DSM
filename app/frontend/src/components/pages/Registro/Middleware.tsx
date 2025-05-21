import { Navigate, Outlet } from 'react-router-dom';

const Middleware = () => {
  const userId = localStorage.getItem('userId');

  return userId ? <Outlet /> : <Navigate to="/registro" replace />;
};

export default Middleware;
