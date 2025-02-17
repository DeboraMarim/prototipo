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
              // title: 'Informações do Usuário',
              html: `

                  <div class="profile-container">
        <h1 class="text-3xl font-bold mb-6 text-center" style="color: var(--orange1)">Informações do Usuário</h1>
        
        <div class="section">
            <p><strong>Nome:</strong> ${userInfo.name}</p>
            <p><strong>Idade:</strong> ${userInfo.age} anos</p>
            <p><strong>Data de Nascimento:</strong> ${userInfo.dateOfBirth}</p>
        </div>

        <div class="section">
            <p><strong>Endereço:</strong> ${userInfo.address.city}, ${userInfo.address.state} - CEP: ${userInfo.address.zipCode}</p>
            <p><strong>Telefone:</strong> ${userInfo.contact.phone}</p>
            <p><strong>E-mail:</strong> ${userInfo.contact.email}</p>
        </div>

        <div class="section">
            <p><strong>Estado Civil:</strong> ${userInfo.personal.maritalStatus}</p>
            <p><strong>CPF:</strong> ${userInfo.personal.cpf}</p>
        </div>

        <div class="section">
            <p><strong>Profissão:</strong> ${userInfo.profession.jobTitle} na ${userInfo.profession.company}</p>
            <p><strong>Formação:</strong> ${userInfo.profession.education} pela ${userInfo.profession.institution}</p>
            <p><strong>Idiomas:</strong> ${userInfo.languages.join(", ")}</p>
        </div>

        <div class="section">
            <p><strong>Altura:</strong> ${userInfo.health.height} m</p>
            <p><strong>Peso:</strong> ${userInfo.health.weight} kg</p>
            <p><strong>IMC:</strong> ${userInfo.health.imc}</p>
            <p><strong>Meta de Saúde:</strong> ${userInfo.health.healthGoal}</p>
            <p><strong>Restrições Alimentares:</strong> ${userInfo.health.dietaryRestrictions.join(", ")}</p>
            <p><strong>Nível de Atividade:</strong> ${userInfo.health.activityLevel}</p>
        </div>

        <div class="section">
            <p><strong>Hobbies:</strong> ${userInfo.interests.hobbies.join(", ")}</p>
            <p><strong>Esportes Favoritos:</strong> ${userInfo.interests.sports.join(", ")}</p>
            <p><strong>Gêneros Musicais:</strong> ${userInfo.interests.favoriteMusicGenres.join(", ")}</p>
        </div>
        <div class="section">
            <p><strong>Metas Pessoais:</strong> ${userInfo.additional.personalGoals.join("; ")}</p>
            <p><strong>Data de Registro:</strong> ${userInfo.additional.registrationDate}</p>
        </div>
    </div>
            `,
            
              // icon: 'info',
              confirmButtonText: 'Fechar',
            });
          };
        

  return (
    <div className="perfil">
       <div>

       <div className="card-section"> 
{/* section banner  */}

<div className="cardbannera">
        <div className="profile-container">
        <img 
                  src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&amp;ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&amp;auto=format&amp;fit=crop&amp;w=150&amp;h=150" 
                  alt="Ana Pricilla" 
                  className="w-32 h-32 rounded-full border-4 border-white object-cover" 
                />            <div className="profile-info">
                <h1 className="profile-name">Ana Pricilla</h1>
                <div className="profile-details">
                    <span>25 anos</span>
                    <span>•</span>
                    <span>
                        <svg className="location-icon" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"></path>
                        </svg>
                        Goiânia
                    </span>
                </div>
            </div>
        </div>
    </div>

{/* fim section banner  */}
        
        <button onClick={showUserInfo}>
            Mais Informações
        </button>
      </div>



      <div className = "Ndashboard">
        {/* <!-- Card 1 - Estado Emocional --> */}
        <div className="Ncard">
            <div className="Ncard-header">Estado Emocional</div>
            <div className="Ncard-content">
                <div className="Ninfo-item">
                    <svg viewBox="0 0 24 24">
                        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm3.5-9c.83 0 1.5-.67 1.5-1.5S16.33 8 15.5 8 14 8.67 14 9.5s.67 1.5 1.5 1.5zm-7 0c.83 0 1.5-.67 1.5-1.5S9.33 8 8.5 8 7 8.67 7 9.5 7.67 11 8.5 11zm3.5 6.5c2.33 0 4.31-1.46 5.11-3.5H6.89c.8 2.04 2.78 3.5 5.11 3.5z"></path>
                    </svg>
                    <span className="Ninfo-label">Feliz</span>
                    <span className="Ninfo-value">75%</span>
                </div>
                <div className="Ninfo-item">
                    <svg viewBox="0 0 24 24">
                        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm3.5-9c.83 0 1.5-.67 1.5-1.5S16.33 8 15.5 8 14 8.67 14 9.5s.67 1.5 1.5 1.5zm-7 0c.83 0 1.5-.67 1.5-1.5S9.33 8 8.5 8 7 8.67 7 9.5 7.67 11 8.5 11zm3.5 3c-2.33 0-4.31 1.46-5.11 3.5h10.22c-.8-2.04-2.78-3.5-5.11-3.5z"></path>
                    </svg>
                    <span className="Ninfo-label">Ansioso</span>
                    <span className="Ninfo-value">15%</span>
                </div>
                <div className="Ninfo-item">
                    <svg viewBox="0 0 24 24">
                        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm3.5-9c.83 0 1.5-.67 1.5-1.5S16.33 8 15.5 8 14 8.67 14 9.5s.67 1.5 1.5 1.5zm-7 0c.83 0 1.5-.67 1.5-1.5S9.33 8 8.5 8 7 8.67 7 9.5 7.67 11 8.5 11zm3.5 3c-2.33 0-4.31 1.46-5.11 3.5h10.22c-.8-2.04-2.78-3.5-5.11-3.5z"></path>
                    </svg>
                    <span className="Ninfo-label">Triste</span>
                    <span className="Ninfo-value">10%</span>
                </div>
            </div>
        </div>

        {/* <!-- Card 2 - Medidas Corporais --> */}
        <div className="Ncard">
            <div className="Ncard-header">Medidas Corporais</div>
            <div className="Ncard-content">
                <div className="Ninfo-item">
                    <svg viewBox="0 0 24 24">
                        <path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 16H5V5h14v14z"></path>
                        <path d="M12 6c-3.31 0-6 2.69-6 6s2.69 6 6 6 6-2.69 6-6-2.69-6-6-6zm0 10c-2.21 0-4-1.79-4-4s1.79-4 4-4 4 1.79 4 4-1.79 4-4 4z"></path>
                    </svg>
                    <span className="Ninfo-label">Peso Atual</span>
                    <span className="Ninfo-value">75 kg</span>
                </div>
                <div className="Ninfo-item">
                    <svg viewBox="0 0 24 24">
                        <path d="M13 6.99h3L12 3 8 6.99h3v10.02H8L12 21l4-3.99h-3z"></path>
                    </svg>
                    <span className="Ninfo-label">Altura</span>
                    <span className="Ninfo-value">1.75 m</span>
                </div>
                <div className="Ninfo-item">
                    <svg viewBox="0 0 24 24">
                        <path d="M16 11c1.66 0 2.99-1.34 2.99-3S17.66 5 16 5c-1.66 0-3 1.34-3 3s1.34 3 3 3zm-8 0c1.66 0 2.99-1.34 2.99-3S9.66 5 8 5C6.34 5 5 6.34 5 8s1.34 3 3 3zm0 2c-2.33 0-7 1.17-7 3.5V19h14v-2.5c0-2.33-4.67-3.5-7-3.5zm8 0c-.29 0-.62.02-.97.05 1.16.84 1.97 1.97 1.97 3.45V19h6v-2.5c0-2.33-4.67-3.5-7-3.5z"></path>
                    </svg>
                    <span className="Ninfo-label">IMC</span>
                    <span className="Ninfo-value">24.5</span>
                </div>
            </div>
        </div>

        {/* <!-- Card 3 - Metas Diárias --> */}
        <div className="Ncard">
            <div className="Ncard-header">Metas Diárias</div>
            <div className="Ncard-content">
                <div className="Ninfo-item">
                    <svg viewBox="0 0 24 24">
                        <path d="M12 2c-5.52 0-10 4.48-10 10s4.48 10 10 10 10-4.48 10-10-4.48-10-10-10zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm.5-13h-1v6l5.2 3.2.8-1.3-4.5-2.7z"></path>
                    </svg>
                    <span className="Ninfo-label">Água</span>
                    <span className="Ninfo-value">2.5 L</span>
                </div>
                <div className="Ninfo-item">
                    <svg viewBox="0 0 24 24">
                        <path d="M13.49 5.48c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zm-3.6 13.9l1-4.4 2.1 2v6h2v-7.5l-2.1-2 .6-3c1.3 1.5 3.3 2.5 5.5 2.5v-2c-1.9 0-3.5-1-4.3-2.4l-1-1.6c-.4-.6-1-1-1.7-1-.3 0-.5.1-.8.1l-5.2 2.2v4.7h2v-3.4l1.8-.7-1.6 8.1-4.9-1-.4 2 7 1.4z"></path>
                    </svg>
                    <span className="Ninfo-label">Exercícios</span>
                    <span className="Ninfo-value">60 min</span>
                </div>
                <div className="Ninfo-item">
                    <svg viewBox="0 0 24 24">
                        <path d="M11 9H9V2H7v7H5V2H3v7c0 2.12 1.66 3.84 3.75 3.97V22h2.5v-9.03C11.34 12.84 13 11.12 13 9V2h-2v7zm5-3v8h2.5v8H21V2c-2.76 0-5 2.24-5 4z"></path>
                    </svg>
                    <span className="Ninfo-label">Alimentação</span>
                    <span className="Ninfo-value">1800 kcal</span>
                </div>
            </div>
        </div>
    </div>


    
  </div>
    </div>
  );
};

export default Perfil;
