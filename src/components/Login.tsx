import React, { useState } from 'react';

interface User {
  username: string;
  email: string;
}

const Login = ({ setUser }: { setUser: (user: User) => void }) => {
  const [username, setUsername] = useState<string>('');
  const [email, setEmail] = useState<string>('');

  const handleLogin = () => {
    if (username && email) {
      setUser({ username, email });
    }
  };

  return (
    <div>
      <h2>Se connecter</h2>
      <input
        type="text"
        placeholder="Nom d'utilisateur"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />
      <input
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <button onClick={handleLogin}>Se connecter</button>
    </div>
  );
};

export default Login;
