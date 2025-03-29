import React, { useState } from 'react';

interface Post {
  id: number;
  username: string;
  content: string;
}

const Feed = () => {
  const [posts, setPosts] = useState<Post[]>([
    { id: 1, username: 'Mael', content: 'Bonjour tout le monde!' },
    { id: 2, username: 'Pedro', content: 'Salut! Je suis sur ce réseau social.' }
  ]);

  return (
    <div>
      <h2>Fil d'actualités</h2>
      {posts.map((post) => (
        <div key={post.id}>
          <h3>{post.username}</h3>
          <p>{post.content}</p>
        </div>
      ))}
    </div>
  );
};

export default Feed;
