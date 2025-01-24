import './Perfil.css';
import Swal from 'sweetalert2';

const Perfil = () => {

        // Dados fictícios do usuário (substitua pelos dados reais)
        const userInfo = {
            name: "Ana Pricilla",
            age: 25,
            dateOfBirth: "1998-05-12",
            address: {
              city: "Goiânia",
              state: "GO",
              zipCode: "74000-000",
            },
            contact: {
              phone: "(62) 99999-1234",
              email: "ana.pricilla@example.com",
            },
            personal: {
              maritalStatus: "Solteira",
              cpf: "123.456.789-00",
              rg: "1234567-0",
            },
            profession: {
              jobTitle: "Designer Gráfico",
              company: "Studio Creativo",
              position: "Diretora de Arte",
              education: "Bacharel em Design",
              institution: "Universidade Federal de Goiás",
            },
            languages: ["Português", "Inglês intermediário"],
            health: {
              weight: 62,
              height: 1.68,
              imc: 21.9,
              healthGoal: "Perder 3 kg",
              dietaryRestrictions: ["Lactose"],
              activityLevel: "Moderado",
            },
            interests: {
              hobbies: ["Pintura", "Yoga", "Leitura"],
              favoriteBookGenre: "Ficção científica",
              favoriteSeries: ["Black Mirror", "Stranger Things"],
              sports: ["Corrida", "Yoga"],
              favoriteMusicGenres: ["Pop", "Indie"],
              favoriteRestaurant: "Bistrô da Cidade",
            },
            additional: {
              personalGoals: ["Aprender fotografia", "Economizar R$ 5.000 em 2025"],
              registrationDate: "2025-01-14",
            },
          };
          
    

        const showUserInfo = () => {
            Swal.fire({
              title: 'Informações do Usuário',
              html: `
              <p><strong>Nome:</strong> ${userInfo.name}</p>
              <p><strong>Idade:</strong> ${userInfo.age} anos</p>
              <p><strong>Data de Nascimento:</strong> ${userInfo.dateOfBirth}</p>
              <p><strong>Endereço:</strong> ${userInfo.address.city}, ${userInfo.address.state} - CEP: ${userInfo.address.zipCode}</p>
              <p><strong>Telefone:</strong> ${userInfo.contact.phone}</p>
              <p><strong>E-mail:</strong> ${userInfo.contact.email}</p>
              <p><strong>Estado Civil:</strong> ${userInfo.personal.maritalStatus}</p>
              <p><strong>CPF:</strong> ${userInfo.personal.cpf}</p>
              <p><strong>Profissão:</strong> ${userInfo.profession.jobTitle} na ${userInfo.profession.company}</p>
              <p><strong>Formação:</strong> ${userInfo.profession.education} pela ${userInfo.profession.institution}</p>
              <p><strong>Idiomas:</strong> ${userInfo.languages.join(", ")}</p>
              <p><strong>Altura:</strong> ${userInfo.health.height} m</p>
              <p><strong>Peso:</strong> ${userInfo.health.weight} kg</p>
              <p><strong>IMC:</strong> ${userInfo.health.imc}</p>
              <p><strong>Meta de Saúde:</strong> ${userInfo.health.healthGoal}</p>
              <p><strong>Restrições Alimentares:</strong> ${userInfo.health.dietaryRestrictions.join(", ")}</p>
              <p><strong>Nível de Atividade:</strong> ${userInfo.health.activityLevel}</p>
              <p><strong>Hobbies:</strong> ${userInfo.interests.hobbies.join(", ")}</p>
              <p><strong>Esportes Favoritos:</strong> ${userInfo.interests.sports.join(", ")}</p>
              <p><strong>Gêneros Musicais:</strong> ${userInfo.interests.favoriteMusicGenres.join(", ")}</p>
              <p><strong>Metas Pessoais:</strong> ${userInfo.additional.personalGoals.join("; ")}</p>
              <p><strong>Data de Registro:</strong> ${userInfo.additional.registrationDate}</p>
            `,
            
              icon: 'info',
              confirmButtonText: 'Fechar',
            });
          };
        

  return (
    <div className="perfil">
       <div>

       <div className="card-section"> 
        
        <img src="https://avatars0.githubusercontent.com/u/64324001?s=460&u=ef614660812090b9963e9e7645cf5e94ed9d25de&v=4" alt=""/>
        <p className="name">Ana Pricilla<span>| 25</span></p>
        <p className="location">Goiânia</p>
        <button onClick={showUserInfo}>
            Mais Informações
        </button>
      </div>




    <article className="card assignment-card course-id-2">
      <header className="card-header card-backgrund-color">
        <h2>Resumo Emocional</h2>
      </header>
      <section className="card-body">
        <div className="card-info">
          <div className="card-info-element">
            <div className="card-info-description">Feliz</div>
            <div className="card-info-value">40%</div>
          </div>
          <div className="card-info-element">
            <div className="card-info-description">Ansioso</div>
            <div className="card-info-value">20%</div>
          </div>
          <div className="card-info-element">
            <div className="card-info-description">Triste</div>
            <div className="card-info-value">10%</div>
          </div>
        </div>
      </section>
      {/* <footer className="card-footer">
        <p><span className="ml-checkmark card-footer-icon card-backgrund-color"></span> <span className="card-footer-text">Meu Diário </span>
        </p>
      </footer> */}
    </article>


    <article className="card assignment-card course-id-4">
      <header className="card-header card-backgrund-color">
        <h2>Evolução Física</h2>
      </header>
      <section className="card-body">
        <div className="card-info">
          <div className="card-info-element">
            <div className="card-info-description">Peso atual</div>
            <div className="card-info-value">86 kg</div>
          </div>
          <div className="card-info-element">
            <div className="card-info-description">altura</div>
            <div className="card-info-value">1,65</div>
          </div>
          <div className="card-info-element">
            <div className="card-info-description">IMC</div>
            <div className="card-info-value">31,59</div>
          </div>
        </div>
      </section>
      {/* <footer className="card-footer">
        <p><span className="ml-checkmark card-footer-icon card-backgrund-color"></span> <span className="card-footer-text">Meu Diário </span>
        </p>
      </footer> */}
    </article>

    
  </div>
    </div>
  );
};

export default Perfil;
