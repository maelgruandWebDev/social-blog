import React from 'react';

interface User {
  username: string;
  email: string;
}

const Profile = ({ user }: { user: User }) => {
  return (
    <div>
      <h2>Profil de {user.username}</h2>
      <p>Email: {user.email}</p>
    </div>
  );
};

export default Profile;
