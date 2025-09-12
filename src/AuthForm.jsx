import { useState } from 'react';
import { register, login } from './api';

export default function AuthForm({ setUser }) {
  const [mode, setMode] = useState('login');
  const [form, setForm] = useState({ username: '', email: '', emailOrUsername: '', password: '' });
  const [error, setError] = useState('');

  const handleChange = e => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async e => {
    e.preventDefault();
    setError('');
    const data = mode === 'login'
      ? await login({ emailOrUsername: form.emailOrUsername, password: form.password })
      : await register({ username: form.username, email: form.email, password: form.password });

    if (data.error) setError(data.error);
    else setUser(data.user);
  };

  return (
    <div>

      <h2>{mode === 'login' ? 'Login' : 'Register'}</h2>

      <form onSubmit={handleSubmit} className='form'>

        {mode === 'register' && (

            <>
            <input name="username" placeholder="Username" onChange={handleChange} required />
            <input name="email" placeholder="Email" onChange={handleChange} required />
            </>

        )}

        {mode === 'login' && (
          <input name="emailOrUsername" placeholder="Email or Username" onChange={handleChange} required />
        )}

             <input name="password" type="password" placeholder="Password" onChange={handleChange} required />

             <div className='buttons'>
                <button type="submit">{mode === 'login' ? 'Login' : 'Register'}</button>

                <button onClick={() => setMode(mode === 'login' ? 'register' : 'login')}>
                 {mode === 'login' ? 'Create account' : 'Back to login'}
                 </button>
             </div>  

      </form>

      {error && <p className='errorStyle'>{error}</p>}


    </div>

  );

}

        
