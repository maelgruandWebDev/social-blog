import React, { useState } from 'react';

interface Post {
  id: number;
  username: string;
  content: string;
  date: string;
}

const Post = ({ post }: { post: Post }) => {
  const [likes, setLikes] = useState<number>(0);

  const handleLike = () => {
    setLikes(likes + 1);
  };

  return (
    <div className="post">
      <div className="post-header">
        <h3>{post.username}</h3>
        <span>{post.date}</span>
      </div>
      <div className="post-content">
        <p>{post.content}</p>
      </div>
      <div className="post-footer">
        <button onClick={handleLike}>👍 {likes}</button>
      </div>
    </div>
  );
};

export default Post;
