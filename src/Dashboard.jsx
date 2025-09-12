<<<<<<< HEAD
import { useEffect, useState } from 'react';
import { getMe, logout, getSecret } from './api';

export default function Dashboard({ user, setUser }) {
  const [secret, setSecret] = useState('');

  useEffect(() => {
    getMe().then(data => {
      if (data.user) setUser(data.user);
    });
  }, []);

  const handleLogout = async () => {
    await logout();
    setUser(null);
  };

  const fetchSecret = async () => {
    const data = await getSecret();
    setSecret(data.message || data.error);
  };

  return (

    <div>

      <h2>Welcome, {user?.username}</h2>

      <div className="buttons-vertical">
        <button onClick={handleLogout}>Logout</button>
        <hr className="divider" />      
        <button style={{height: "80px"}} onClick={fetchSecret}>Get secret message</button>
      </div>
      
      <p className='secretMsg'>{secret}</p>

    </div>

  );

}
=======
import { useEffect, useState } from 'react';
import { getMe, logout } from './api';

export default function Dashboard({ user, setUser }) {
  const [secret, setSecret] = useState('');

  useEffect(() => {
    getMe().then(data => {
      if (data.user) setUser(data.user);
    });
  }, []);

  const handleLogout = async () => {
    await logout();
    setUser(null);
  };

  const fetchSecret = async () => {
    const res = await fetch(`${import.meta.env.VITE_API_URL}/api/auth/secret`, {
      credentials: 'include',
    });
    const data = await res.json();
    setSecret(data.message || data.error);
  };

  return (
    <div>

      <h2>Welcome, {user?.username}</h2>

      <div className="buttons-vertical">
      <button onClick={handleLogout}>Logout</button>
      <hr className="divider" />      
      <button style={{height: "80px"}}onClick={fetchSecret}>Get secret message</button>
      </div>

      <p className='secretMsg'>{secret}</p>

    </div>
  );
}
>>>>>>> 5be6ea3fee4677609a468473a29dffcc10e79c92
