import React, { useState, useEffect } from 'react';
import Login from './components/Login';
import Profile from './components/Profile';
import Feed from './components/Feed';
import Storage from './components/Storage';

const App = () => {
  const [user, setUser] = useState<{ username: string; email: string } | null>(null);

  // Charger l'utilisateur depuis le stockage
  useEffect(() => {
    const storedUser = Storage.getUser();
    if (storedUser) {
      setUser(storedUser);
    }
  }, []);

  // Sauvegarder l'utilisateur lors de la connexion
  const handleLogin = (userData: { username: string; email: string }) => {
    Storage.saveUser(userData);
    setUser(userData);
  };

  return (
    <div>
      {!user ? (
        <Login setUser={handleLogin} />
      ) : (
        <>
          <Profile user={user} />
          <Feed />
        </>
      )}
    </div>
  );
};

export default App;
