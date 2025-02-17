import './nutricao.css';

const Nutricao = () => {
    const currentDate = new Date().toLocaleDateString();

    return (
        <div className='nutricao'>

            <div className="CardNutricao">
                <div className='nutri'>
                <h2>Dieta do Dia</h2>
                <p>{currentDate}</p>
                </div>


                <div className="meal-section">
            <h2 className="meal-title">Café da Manhã</h2>
            <p className="meal-time">Horário: 07:00</p>
            <ul className="meal-items">
                <li>1 xícara de café</li>
                <li>2 fatias de pão integral</li>
            </ul>
        </div>

        <div className="meal-section">
            <h2 className="meal-title">Almoço</h2>
            <p className="meal-time">Horário: 12:30</p>
            <ul className="meal-items">
                <li>1 prato de salada</li>
                <li>1 porção de arroz</li>
                <li>1 filé de frango grelhado</li>
            </ul>
        </div>

        <div className="meal-section">
            <h2 className="meal-title">Lanche da Tarde</h2>
            <p className="meal-time">Horário: 16:00</p>
            <ul className="meal-items">
                <li>1 maçã</li>
                <li>1 punhado de nozes</li>
            </ul>
        </div>

        <div className="meal-section">
            <h2 className="meal-title">Jantar</h2>
            <p className="meal-time">Horário: 19:30</p>
            <ul className="meal-items">
                <li>1 sopa de legumes</li>
                <li>1 pedaço de peixe grelhado</li>
            </ul>
        </div>


        </div>   
        </div>
    );
};

export default Nutricao;
