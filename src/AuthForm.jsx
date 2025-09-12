import { useState, useEffect } from 'react';
import { register, login } from './api';

export default function AuthForm({ setUser }) {
  const [mode, setMode] = useState('login');
  const [form, setForm] = useState({
    username: '',
    email: '',
    emailOrUsername: '',
    password: ''
  });
  const [error, setError] = useState('');

  useEffect(() => {
    setError('');
  }, [mode]);

  const handleChange = e => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async e => {
    e.preventDefault();
    setError('');

    const currentMode = mode; 

    const data = mode === 'login'
      ? await login({ emailOrUsername: form.emailOrUsername, password: form.password })
      : await register({ username: form.username, email: form.email, password: form.password });


    if (mode === currentMode && data.error) {
      setError(data.error);
    } else if (data.user) {
      setUser(data.user);
    }
  };

  const switchMode = () => {
    setMode(prev => (prev === 'login' ? 'register' : 'login'));
    setError('');
  };

  return (
    <div>
      <h2>{mode === 'login' ? 'Login' : 'Register'}</h2>

      <form onSubmit={handleSubmit} className="form">
        {mode === 'register' && (
          <>
            <input
              name="username"
              placeholder="Username"
              onChange={handleChange}
              required
            />
            <input
              type="email"
              name="email"
              placeholder="Email"
              onChange={handleChange}
              required
            />
          </>
        )}

        {mode === 'login' && (
          <input
            name="emailOrUsername"
            placeholder="Email or Username"
            onChange={handleChange}
            required
          />
        )}

        <input
          name="password"
          type="password"
          placeholder="Password"
          onChange={handleChange}
          required
        />

        <div className="buttons">
          <button type="submit">
            {mode === 'login' ? 'Login' : 'Register'}
          </button>

          <button type="button" onClick={switchMode}>
            {mode === 'login' ? 'Create account' : 'Back to login'}
          </button>
        </div>
      </form>

      {error && <p className="errorStyle">{error}</p>}
    </div>

  );

}
