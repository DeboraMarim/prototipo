import './nutricao.css';

const Nutricao = () => {
    const currentDate = new Date().toLocaleDateString();

    return (
        <div className='nutricao'>

            <div className="CardNutricao">
                <h2>Dieta do Dia</h2>
                <p>{currentDate}</p>

                <div className="meal">
                    <h3>Café da manhã</h3>
                    <h3>Horário: 07:00</h3>
                    <p>Quantidade: 1 xícara de café, 2 fatias de pão integral</p>
                </div>
                <div className="meal">
                    <h3>Almoço</h3>
                    <h3>Horário: 12:30</h3>
                    <p>Quantidade: 1 prato de salada, 1 porção de arroz, 1 filé de frango grelhado</p>
                </div>
                <div className="meal">
                    <h3>Lanche da Tarde</h3>
                    <h3>Horário: 16:00</h3>
                    <p>Quantidade: 1 maçã, 1 punhado de nozes</p>
                </div>
                <div className="meal">
                    <h3>Jantar</h3>
                    <h3>Horário: 19:30</h3>
                    <p>Quantidade: 1 sopa de legumes, 1 pedaço de peixe grelhado</p>
                </div>
            </div>
        </div>
    );
};

export default Nutricao;
