import { useState, useEffect } from 'react';
import { useNavigate } from "react-router-dom";
import { MdSpaceDashboard } from "react-icons/md";
import { CgPill } from "react-icons/cg";
import { BsFillPeopleFill } from "react-icons/bs";
import { GiGymBag } from "react-icons/gi";
import { FaBowlFood, FaMoneyCheckDollar } from "react-icons/fa6";

import Dashboards from "./itens/Dashboards";
import Pills from './itens/Pills';
import Alunas from './itens/Alunas';
import Treinos from './itens/Treinos';
import Dietas from './itens/Dietas';
import Financeiro from './itens/Financeiro';

import './adminPanel.css';

const AdminPanel = () => {
  const navigate = useNavigate();
  const [dateTime, setDateTime] = useState(new Date());
  const [selectedComponent, setSelectedComponent] = useState(<Dashboards />); // Define o componente inicial

  useEffect(() => {
    const interval = setInterval(() => {
      setDateTime(new Date());
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("isAdminAuthenticated");
    navigate("/admin");
    window.location.reload();
  };

  return (
    <section className="adminPainel">
      <div className="menuLateral">
        <h2>Admin Panel</h2>
        <div className='h5menus'>
          <h5 onClick={() => setSelectedComponent(<Dashboards />)}>
            <MdSpaceDashboard /> Dashboards
          </h5>
          <h5 onClick={() => setSelectedComponent(<Pills />)}>
            <CgPill /> Pílulas Diárias
          </h5>
          <h5 onClick={() => setSelectedComponent(<Alunas />)}>
            <BsFillPeopleFill /> Alunas
          </h5>
          <h5 onClick={() => setSelectedComponent(<Treinos />)}>
            <GiGymBag /> Treinos
          </h5>
          <h5 onClick={() => setSelectedComponent(<Dietas />)}>
            <FaBowlFood /> Dietas
          </h5>
          <h5 onClick={() => setSelectedComponent(<Financeiro />)}>
            <FaMoneyCheckDollar /> Financeiro
          </h5>
        </div>
      </div>

      <div className="painelContent">
        <div className="headerADM">
          <h4>Bem Vindo, Administrador</h4>
          <h4>{dateTime.toLocaleString()}</h4>
          <button onClick={handleLogout} style={{ marginBottom: "10px" }}>Sair</button>
        </div>

        <div className='componentesShow'>
          {selectedComponent} {/* Renderiza o componente selecionado */}
        </div>
      </div>
    </section>
  );
};

export default AdminPanel;
