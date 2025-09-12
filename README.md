# User Authentication System


This is the **frontend** of the *User Authentication System* project, built with **React + Vite** and deployed on **GitHub Pages**.  
It communicates with the backend hosted on **Render** to provide full user registration, login, logout and protected route access functionality. <br><br>



## Live demo

- **Frontend:** [https://d00055a.github.io/User_authentication_system](https://d00055a.github.io/User_authentication_system)  
- **Backend API:** [https://user-authentication-backend-3dvc.onrender.com](https://user-authentication-backend-3dvc.onrender.com) <br><br>



## Technologies used

- **React 19** – UI library
- **Vite** – Development server & build tool
- **JavaScript (ESM)** – Application logic
- **CSS** – Custom styling (with responsiveness and animations)
- **gh-pages** – Deployment to GitHub Pages
- **Fetch API** – Communication with backend <br><br>


## Local setup

1. **Clone the repository**
   
   ```bash
   git clone https://github.com/d00055a/User_authentication_system.git
   cd User_authentication_system 

2. **Install dependencies**

   ```bash
   npm install

3. **Create a .env file** in the frontend root:

   ```Env
   VITE_API_URL=http://localhost:4000

4. **Run the development server**

   ```bash
   npm run dev
   
Open http://localhost:5173 in your browser. <br><br>


## Deploy to GitHub Pages

1. In .env, set the backend production URL:
   
   ```bash
   VITE_API_URL=https://user-authentication-backend-3dvc.onrender.com

2. Build and deploy:

   ```bash
   npm run deploy    

<br><br>

## Features

- **Register** – Creates a new user and sets an httpOnly JWT cookie.

- **Login** – Authenticates the user and maintains the session via cookie.

- **Logout** – Clears the cookie and ends the session.

- **/me** – Retrieves the logged-in user’s data.

- **/secret** – Protected route returning a message only for authenticated users.  <br><br>


  License © 2025 Daniel Dedja. All rights reserved.


   



