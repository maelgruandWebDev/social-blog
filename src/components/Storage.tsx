const Storage = {
  saveUser: (user: { username: string; email: string }) => {
    localStorage.setItem('user', JSON.stringify(user));
  },
  
  getUser: (): { username: string; email: string } | null => {
    const user = localStorage.getItem('user');
    return user ? JSON.parse(user) as { username: string; email: string } : null;
  },

  clearUser: () => {
    localStorage.removeItem('user');
  }
};

export default Storage;
