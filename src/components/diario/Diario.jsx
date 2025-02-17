import './diario.css';
// import FloatingLabel from 'react-bootstrap/FloatingLabel';
// import Form from 'react-bootstrap/Form';
import { Doughnut } from 'react-chartjs-2';

import {
    Chart as ChartJS,
    ArcElement,
    Tooltip,
    Legend,
} from 'chart.js';

ChartJS.register(ArcElement, Tooltip, Legend);

const Diario = () => {


    const consistencyData = {
        labels: ['Concluído', 'Pendente'],
        datasets: [
            {
                data: [71, 29],
                backgroundColor: ['#ff9b2f', '#bdbfbf'],
                hoverBackgroundColor: ['#B90423', '#bdbfbf'],
            },
        ],
    };

    const hydrationData = {
        labels: ['Consumido', 'Meta Restante'],
        datasets: [
            {
                data: [14, 2],
                backgroundColor: ['#ff9b2f', '#bdbfbf'],
                hoverBackgroundColor: ['#B90423', '#e0e0e0'],
            },
        ],
    };

    return (
        <div className="Dcontainer">
            <header className="Dheader">
                <h1 className="Dtext-3xl font-bold text-white text-center">Meu Diário</h1>
            </header>

            <div className="Dcard">
                <h2 className="Dtext-xl font-semibold mb-4">Pílulas da Mente Magra</h2>
                <p className="italic text-gray-600">A mudança começa em pequenos passos.</p>
            </div>

            <div className="TXcard">
                <h2 className="Dtext-xl font-semibold mb-4">Escreva no Diário</h2>
                <textarea
                    className="Dw-full p-4 border rounded-lg"
                    rows="5"
                    placeholder="Escreva aqui seus pensamentos do dia..."
                ></textarea>
                <button className="Dsave-btn mt-4">Salvar</button>
            </div>



            <div className="Dcard">
                <h2 className="text-xl font-semibold mb-4">Como Você Está se Sentindo?</h2>
                <div className="Dflex flex-wrap justify-center gap-2">
                    <button className="Dmood-btn">😊 Feliz</button>
                    <button className="Dmood-btn">😔 Triste</button>
                    <button className="Dmood-btn">😡 Com Raiva</button>
                    <button className="Dmood-btn">😨 Ansioso</button>
                </div>
            </div>

            <div className="CHcard">
                <h2 className="text-xl font-semibold mb-4">Checklist do Dia</h2>
                <div className="space-y-2">
                    <label className="flex items-center">
                        <input type="checkbox" className="mr-2" />
                        Bebi 2 litros de água
                    </label>
                    <label className="flex items-center">
                        <input type="checkbox" className="mr-2" />
                        Meditei sobre as pílulas diárias
                    </label>
                    <label className="flex items-center">
                        <input type="checkbox" className="mr-2" />
                        Escrevi no diário
                    </label>
                    <label className="flex items-center">
                        <input type="checkbox" className="mr-2" />
                        Marquei o humor do dia
                    </label>
                    <label className="flex items-center">
                        <input type="checkbox" className="mr-2" />
                        Concluí a meta de atividade física
                    </label>
                    <label className="flex items-center">
                        <input type="checkbox" className="mr-2" />
                        Dormi 8 horas
                    </label>
                    <label className="flex items-center">
                        <input type="checkbox" className="mr-2" />
                        Segui a dieta correta
                    </label>
                </div>
            </div>

            {/* Gráficos corrigidos */}
            <div className="Dgrid md:grid-cols-2 gap-4">
                <div className="Dcard">
                    <h2 className="text-xl font-semibold mb-4">Consistência nas Atividades</h2>
                    <div className="Dchart-container">
                        <Doughnut data={consistencyData} />
                    </div>
                    <p className="text-center mt-4">Registros no diário: 71%</p>
                </div>

                <div className="Dcard">
                    <h2 className="text-xl font-semibold mb-4">Hidratação Semanal</h2>
                    <div className="Dchart-container">
                        <Doughnut data={hydrationData} />
                    </div>
                    <p className="text-center mt-4">Água consumida esta semana: 14L</p>
                </div>
            </div>
        </div>
    );
};

export default Diario;
