import Hamburguer from '../hamburguer/Hamburguer';
import './header.css';

const Header = ({ setSelectedComponent, setIsAuthenticated }) => {
  return (
    <>
      <section className='header'>
        <div>
          <Hamburguer setSelectedComponent={setSelectedComponent} setIsAuthenticated={setIsAuthenticated} />
        </div>
        <div>
          <h1> </h1>
        </div>
      </section>
    </>
  );
};

export default Header;
