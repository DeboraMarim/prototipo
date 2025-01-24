import { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/header/Header';
import Perfil from './components/Perfil/Perfil';
import Diario from './components/diario/Diario';
import Nutricao from './components/nutricao/Nutricao';
import Funcional from './components/funcional/Funcional';

const App = () => {
  const [selectedComponent, setSelectedComponent] = useState(''); // Estado elevado

  const Novo = () => <div>Alguma coisa extra.</div>; 

  // Renderiza o componente com base no estado
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
        return <div>Selecione uma opção no menu.</div>;
    }
  };

  return (
    <>
      <Header setSelectedComponent={setSelectedComponent} /> {/* Passa a função para atualizar o estado */}
      <main style={{ padding: '20px' }}>
        {renderComponent()} {/* Renderiza o componente selecionado */}
      </main>
    </>
  );
};

export default App;
