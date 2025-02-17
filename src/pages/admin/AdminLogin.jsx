import { useState } from 'react';
import './adminLogin.css';

export default function AdminLogin({ setIsAdminAuthenticated }) {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = (e) => {
    e.preventDefault();

    if (username === 'admin' && password === '123') {
      localStorage.setItem('isAdminAuthenticated', 'true'); // Define autenticação do admin
      setIsAdminAuthenticated(true);
    } else {
      alert('Usuário ou senha incorretos!');
    }
  };

  return (
    <section className="loginAdmin">
      <div className="box">
        <h2>Admin Login</h2>
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
