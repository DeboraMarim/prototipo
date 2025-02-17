import { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/header/Header';
import Perfil from './components/Perfil/Perfil';
import Diario from './components/diario/Diario';
import Nutricao from './components/nutricao/Nutricao';
import Funcional from './components/funcional/Funcional';
import Login from './pages/login/Login';

const App = () => {
  const [selectedComponent, setSelectedComponent] = useState('');
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    const auth = localStorage.getItem('isAuthenticated');
    if (auth === 'true') {
      setIsAuthenticated(true);
    }
  }, []);

  const Novo = () => <div>Alguma coisa extra.</div>;

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
      case 'Novo':
        return <Novo />;
      default:
        return <Perfil />;
    }
  };

  if (!isAuthenticated) {
    return <Login setIsAuthenticated={setIsAuthenticated} />;
  }

  return (
    <>
      <Header setSelectedComponent={setSelectedComponent} setIsAuthenticated={setIsAuthenticated} />
      <main style={{ padding: '20px' }}>
        {renderComponent()}
      </main>
    </>
  );
};

export default App;
