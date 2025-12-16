# Fitness Center Management System


A full-stack **User Authentication System** built with **React (Vite)** on the frontend and **Node.js + Express** on the backend, implementing secure authentication, authorization and protected routes using **JWT**.

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
  
## Tech Stack

**Frontend**

**React 19** – UI library

**Vite** – Development server & build tool

**JavaScript (ESM)** – Application logic

**CSS** – Custom styling, responsiveness & animations

**gh-pages** – Deployment to GitHub Pages

**Backend**

**Node.js & Express** – REST API

**MongoDB** – User data storage

**bcrypt** – Password hashing

**JWT** – Authentication & authorization

## Live demo

- **Frontend** :
https://d00055a.github.io/User_authentication_system

- **Backend API**:
https://user-authentication-backend-3dvc.onrender.com

- **Note**: The backend is hosted on Render (free tier), so the first request may take up to **1 minute** to wake up.


## Run Locally

**Frontend**
   
   ```bash
   git clone https://github.com/d00055a/User_authentication_system.git
   cd User_authentication_system   
   npm install
   ```
 
**Install dependencies**

   ```bash
   npm install
   ```

- Create a **.env** file in the frontend root:

   ```Env
   VITE_API_URL=http://localhost:4000
   ```
- Run the development server:

   ```bash
   npm run dev
   ```
   
- Open:
  
  ```arduino
  http://localhost:5173 in your browser.
  ```


## Deploy to GitHub Pages

- Update **.env** with the production backend URL:
   
   ```Env
   VITE_API_URL=https://user-authentication-backend-3dvc.onrender.com
   ```

- Build and deploy:

   ```bash
   npm run deploy
   ```   


## Purpose

This project was built to practice and demonstrate:

- Secure authentication & authorization

- JWT-based session management

- Full-stack frontend ↔ backend communication

- Real-world deployment and environment configuration

<br/><br/>


  License © 2025 Daniel Dedja. All rights reserved.


   



