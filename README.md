# Fitness Center Management System


A full-stack **User Authentication System** built with **React (Vite)** on the frontend and **Node.js / Express** on the backend, implementing secure authentication, authorization and protected routes using **JWT**.

The application demonstrates real-world authentication flows, including secure password hashing, session management and role-based access to protected endpoints.

## Features

- User registration with secure password hashing (bcrypt)

- User login with JWT-based authentication

- Session handling via httpOnly cookies

- Logout functionality

- Protected routes accessible only to authenticated users

- Authenticated user data retrieval (/me)

- Secure API endpoint protection (/secret)

## Architecture

- **Frontend**: React + Vite (GitHub Pages)

- **Backend**: Node.js + Express (hosted on Render)

- **Communication**: REST API via Fetch API

- **Authentication**: JWT stored in httpOnly cookies

- **Database**: MongoDB (via backend)
  
## Technologies used

- **React 19** – UI library
- **Vite** – Development server & build tool
- **JavaScript (ESM)** – Application logic
- **CSS** – Custom styling (with responsiveness and animations)
- **gh-pages** – Deployment to GitHub Pages
- **Fetch API** – Communication with backend <br><br>

## Live demo

- **Frontend:** [https://d00055a.github.io/User_authentication_system](https://d00055a.github.io/User_authentication_system)  
- **Backend API:** [https://user-authentication-backend-3dvc.onrender.com](https://user-authentication-backend-3dvc.onrender.com) <br><br>

- Please note: it may take up to 1 minute for the backend service to wake up (free hosting delay). Once loaded, everything works smoothly !<br><br>


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

<br>

## Features

- **Register** – Creates a new user and sets an httpOnly JWT cookie.

- **Login** – Authenticates the user and maintains the session via cookie.

- **Logout** – Clears the cookie and ends the session.

- **/me** – Retrieves the logged-in user’s data.

- **/secret** – Protected route returning a message only for authenticated users.  <br><br><br>


  License © 2025 Daniel Dedja. All rights reserved.


   



