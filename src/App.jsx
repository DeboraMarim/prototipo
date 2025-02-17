import { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/header/Header';
import Perfil from './components/Perfil/Perfil';
import Diario from './components/diario/Diario';
import Nutricao from './components/nutricao/Nutricao';
import Funcional from './components/funcional/Funcional';
import Login from './pages/login/Login';
import AdminLogin from './pages/admin/AdminLogin.jsx';
import AdminPanel from './pages/admin/AdminPanel';

const App = () => {
  const [selectedComponent, setSelectedComponent] = useState('');
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [isAdminAuthenticated, setIsAdminAuthenticated] = useState(false);

  useEffect(() => {
    const auth = localStorage.getItem('isAuthenticated');
    const adminAuth = localStorage.getItem('isAdminAuthenticated');

    if (auth === 'true') setIsAuthenticated(true);
    if (adminAuth === 'true') setIsAdminAuthenticated(true);
  }, []);

  const renderComponent = () => {
    switch (selectedComponent) {
      case 'Perfil':
        return <Perfil />;
      case 'Diário':
        return <Diario />;
      case 'Nutrição':
        return <Nutricao />;
      case 'Funcional':
        return <Funcional />;
      default:
        return <Perfil />;
    }
  };

  return (
    <Router>
      <Routes>
        {/* Login do usuário */}
        <Route path="/" element={isAuthenticated ? <Navigate to="/home" /> : <Login setIsAuthenticated={setIsAuthenticated} />} />

        {/* Login do admin */}
        <Route path="/admin" element={isAdminAuthenticated ? <Navigate to="/admin-panel" /> : <AdminLogin setIsAdminAuthenticated={setIsAdminAuthenticated} />} />

        {/* Página principal do usuário comum */}
        <Route
          path="/home"
          element={
            isAuthenticated ? (
              <>
                <Header setSelectedComponent={setSelectedComponent} setIsAuthenticated={setIsAuthenticated} />
                <main style={{ padding: '20px' }}>
                  {renderComponent()}
                </main>
              </>
            ) : (
              <Navigate to="/" />
            )
          }
        />

        {/* Painel do administrador */}
        <Route
          path="/admin-panel"
          element={isAdminAuthenticated ? <AdminPanel /> : <Navigate to="/admin" />}
        />
      </Routes>
    </Router>
  );
};

export default App;
