import { useState } from 'react';
import './login.css';

export default function Login({ setIsAuthenticated }) {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = (e) => {
    e.preventDefault(); // Previne o recarregamento da página

    if (username === 'ana' && password === '123') {
      localStorage.setItem('isAuthenticated', 'true'); // Salva login no localStorage
      setIsAuthenticated(true); // Atualiza estado para exibir a Home
    } else {
      alert('Usuário ou senha incorretos!');
    }
  };

  return (
    <section className="login">
      <div className="box">
        <h2>Login</h2>
        <form onSubmit={handleLogin}>
          <div className="inputbox">
            <input 
              type="text" 
              value={username} 
              onChange={(e) => setUsername(e.target.value)} 
              required 
            />
            <label>Usuário</label>
          </div>
          <div className="inputbox">
            <input 
              type="password" 
              value={password} 
              onChange={(e) => setPassword(e.target.value)} 
              required 
            />
            <label>Senha</label>
          </div>
          <input type="submit" value="Entrar" />
        </form>
      </div>
    </section>
  );
}
