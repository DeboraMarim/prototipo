import './diario.css';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';
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
                data: [71, 29], // Percentual de consistência (Concluído e Pendente)
                backgroundColor: ['#ff9b2f', '#bdbfbf'],
                hoverBackgroundColor: ['#B90423', '#bdbfbf'],
            },
        ],
    };

    const hydrationData = {
        labels: ['Consumido', 'Meta Restante'],
        datasets: [
            {
                data: [14, 2], // Água consumida (em litros) e meta restante
                backgroundColor: ['#ff9b2f', '#bdbfbf'],
                hoverBackgroundColor: ['#B90423', '#e0e0e0'],
            },
        ],
    };


    return (
        <div className='diario'>
            {/* Cabeçalho */}
            <header className='diario-header'>
                <h1>Meu Diário</h1>
            </header>

            {/* Pílulas da Mente Magra */}
            <section className='pilulas'>
                <h2>Pílulas da Mente Magra</h2>
                <div className='pilulas-container'>
                    <p><em>"A mudança começa em pequenos passos."</em></p>
                </div>
            </section>

            {/* Espaço para o Diário */}
            <section className='diario-texto'>
                <h2>Escreva no Diário</h2>


      <FloatingLabel controlId="floatingTextarea2">
        <Form.Control
          as="textarea"
          placeholder="Escreva aqui seus pensamentos do dia..."
          style={{ height: '100px', color: 'black' }}
        />
      </FloatingLabel>
                {/* <textarea 
                    placeholder='Escreva aqui seus pensamentos do dia...' 
                    rows='10'>
                </textarea> */}
                <button className='salvar'>Salvar</button>
            </section>

            {/* Mood Tracker */}
            <section className='mood-tracker'>
                <h2>Como Você Está se Sentindo?</h2>
                <div className='moods'>
                    <button className='mood'>😊 Feliz</button>
                    <button className='mood'>😔 Triste</button>
                    <button className='mood'>😡 Com Raiva</button>
                    <button className='mood'>😨 Ansioso</button>
                </div>
            </section>

            {/* Checklist Diária */}
            <section className='checklist'>
                <h2>Checklist do Dia</h2>
                <ul>
                    <li><input type='checkbox' /> Bebi 2 litros de água</li>
                    <li><input type='checkbox' /> Meditei sobre as pílulas diárias</li>
                    <li><input type='checkbox' /> Escrevi no diário</li>
                    <li><input type='checkbox' /> Marquei o humor do dia</li>
                    <li><input type='checkbox' /> Concluí a meta de atividade física</li>
                    <li><input type='checkbox' /> Dormi 8 horas</li>
                    <li><input type='checkbox' /> Segui a dieta correta</li>
                </ul>
            </section>

            {/* Dashboards de Desempenho */}
            <section className='dashboards'>
    <h2>Desempenho</h2>


                <div className='grafico'>
                    <h3>Consistência nas Atividades</h3>
                    <Doughnut data={consistencyData} />
                    <p>Registros no diário: 71%</p>
                </div>

                {/* Dashboard de Hidratação */}
                <div className='grafico'>
                    <h3>Hidratação Semanal</h3>
                    <Doughnut data={hydrationData} />
                    <p>Água consumida esta semana: 14L</p>
                </div>


    {/* Dashboard de Consistência nas Atividades */}
    <div className='grafico'>
        <h3>Consistência nas Atividades</h3>
        <p>Registros no diário: 5/7 dias (71%)</p>
        <p>Pílulas diárias concluídas: 6/7 (85%)</p>
        <p>Checklist diário concluído: 4/7 dias (57%)</p>
    </div>

    {/* Dashboard de Desempenho Físico */}
    <div className='grafico'>
        <h3>Desempenho Físico</h3>
        <p>Água consumida esta semana: 14L</p>
        <p>Metas de atividade física concluídas: 5/7 dias (71%)</p>
        <p>Média de horas de sono por dia: 7.5h</p>
    </div>

    {/* Dashboard de Desempenho Emocional */}
    <div className='grafico'>
        <h3>Desempenho Emocional</h3>
        <p>Média de humor: 😊 Feliz</p>
        <p>Sentimentos registrados: 5/7 dias (71%)</p>
        <p>Picos de ansiedade reduzidos: 3 vezes esta semana</p>
    </div>
</section>

        </div>
    );
};

export default Diario;
