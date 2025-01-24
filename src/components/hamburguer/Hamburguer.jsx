import './hamburguer.css';

const Hamburguer = ({ setSelectedComponent }) => {
  function menuOnClick() {
    document.getElementById("menu-bar").classList.toggle("change");
    document.getElementById("nav").classList.toggle("change");
    document.getElementById("menu-bg").classList.toggle("change-bg");
  }

  function handleOptionClick(option) {
    setSelectedComponent(option); // Atualiza o componente selecionado
    menuOnClick(); // Fecha o menu
  }

  return (
    <>
      <div id="menu">
        <div id="menu-bar" onClick={menuOnClick}>
          <div id="bar1" className="bar"></div>
          <div id="bar2" className="bar"></div>
          <div id="bar3" className="bar"></div>
        </div>
        <nav className="nav" id="nav">
          <ul>
            <li><a href="#" onClick={() => handleOptionClick('Perfil')}>Perfil</a></li>
            <li><a href="#" onClick={() => handleOptionClick('Diário')}>Diário</a></li>
            <li><a href="#" onClick={() => handleOptionClick('Nutrição')}>Nutrição</a></li>
            <li><a href="#" onClick={() => handleOptionClick('Funcional')}>Funcional</a></li>
            <li><a href="#" onClick={() => handleOptionClick('Novo')}>Novo</a></li>
          </ul>
        </nav>
      </div>
      <div className="menu-bg" id="menu-bg"></div>
    </>
  );
};

export default Hamburguer;
