import './funcional.css';

const Funcional = () => {
    return (
        <div className="funcional">
            <h5>Treinos Funcionais disponíveis!</h5>
            <div className="videos">
                <iframe 
                    width="100%" 
                    height="315" 
                    src="https://www.youtube.com/embed/ukUcBeZ0LgU" 
                    title="Treino 1" 
                    frameBorder="0" 
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                    allowFullScreen
                ></iframe>
                <iframe 
                    width="100%" 
                    height="315" 
                    src="https://www.youtube.com/embed/XPaHa_W546I" 
                    title="Treino 2" 
                    frameBorder="0" 
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                    allowFullScreen
                ></iframe>
                <iframe 
                    width="100%" 
                    height="315" 
                    src="https://www.youtube.com/embed/5SJCTGFuCuw" 
                    title="Treino 3" 
                    frameBorder="0" 
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                    allowFullScreen
                ></iframe>
                <iframe 
                    width="100%" 
                    height="315" 
                    src="https://www.youtube.com/embed/KiTdPcZS1yE" 
                    title="Treino 4" 
                    frameBorder="0" 
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                    allowFullScreen
                ></iframe>
            </div>
        </div>
    );
};

export default Funcional;
