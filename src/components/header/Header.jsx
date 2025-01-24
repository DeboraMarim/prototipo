import Hamburguer from '../hamburguer/Hamburguer';
import './header.css';

const Header = ({ setSelectedComponent }) => {
  return (
    <>
      <section className='header'>
        <div>
          <Hamburguer setSelectedComponent={setSelectedComponent} />
        </div>
        <div>
          <h1>Bem-vinda,  Fernanda!</h1>
        </div>
      </section>
    </>
  );
};

export default Header;
