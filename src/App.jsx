<<<<<<< HEAD
import { useState } from 'react';
import AuthForm from './AuthForm';
import Dashboard from './Dashboard';
import './App.css';

export default function App() {
  const [user, setUser] = useState(null);

  return (

    <div className='app'> 

     <header className='app-header'>
      <h1>User authentication system</h1>
     </header>

     <section className='content'>

        <p className='description'>Authentication demo</p>

      {user 
            ? <div className="fade-in"><Dashboard user={user} setUser={setUser} /></div> 
            : <div className="fade-in"><AuthForm setUser={setUser} /></div>
      }

     </section>

      <footer className="app-footer">
        <p>© 2025 Daniel Dedja. All rights reserved.</p>
      </footer>

    </div>

  );
}
=======
import { useState } from 'react';
import AuthForm from './AuthForm';
import Dashboard from './Dashboard';
import './App.css';

export default function App() {
  const [user, setUser] = useState(null);

  return (

    <div className='app'> 

     <header className='app-header'>
      <h1>User authentication system</h1>
     </header>

     <section className='content'>

        <p className='description'>Authentication demo</p>

         {user ? <Dashboard user={user} setUser={setUser} /> : <AuthForm setUser={setUser} />}

     </section>

      <footer className="app-footer">
        <p>© 2025 Daniel Dedja. All rights reserved.</p>
      </footer>

    </div>

  );
}
>>>>>>> 5be6ea3fee4677609a468473a29dffcc10e79c92
