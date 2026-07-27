# 🚀 Marhba Auth

<p align="center">
  <img src="./assets/banner.png" alt="Marhba Auth Banner" width="100%">
</p>

<h3 align="center">
A Secure Authentication Mobile Application built with Express, PostgreSQL, Expo & JWT
</h3>

<p align="center">

![Node.js](https://img.shields.io/badge/Node.js-22.x-green?style=for-the-badge\&logo=node.js)
![Express](https://img.shields.io/badge/Express-Backend-black?style=for-the-badge\&logo=express)
![PostgreSQL](https://img.shields.io/badge/PostgreSQL-Database-blue?style=for-the-badge\&logo=postgresql)
![Expo](https://img.shields.io/badge/Expo-Mobile-black?style=for-the-badge\&logo=expo)
![JWT](https://img.shields.io/badge/JWT-Authentication-orange?style=for-the-badge)
![Zustand](https://img.shields.io/badge/Zustand-State%20Management-brown?style=for-the-badge)

</p>

---

# 📖 Overview

**Marhba Auth** is a full-stack authentication application that connects an **Expo React Native** mobile app with an **Express.js** backend using **PostgreSQL**.

The project demonstrates a complete authentication workflow including secure user registration, login, JWT authentication, protected API routes, protected mobile screens, and persistent user sessions.

It follows modern development practices using **MVC Architecture**, **Express Middlewares**, **JWT**, **Axios Interceptors**, **Zustand**, and **Expo Secure Store**.

---

# ✨ Features

## Backend

* User Registration
* User Login
* Password Hashing with bcrypt
* JWT Authentication
* Protected API Routes
* Authentication Middleware
* Request Logger Middleware
* Validation Middlewares
* Global Error Handler
* PostgreSQL Database
* Sequelize ORM

---

## Mobile

* Register Screen
* Login Screen
* Home Screen
* Protected Navigation
* Zustand Authentication Store
* Axios Instance
* Axios Request Interceptor
* Secure Token Storage
* Session Restore
* Loading States
* Error Handling

---

# 🏗 Project Architecture

```text
                Mobile App (Expo)

                       │
                       │ Axios
                       ▼

               Express REST API

                       │
        Authentication Middleware (JWT)

                       │
                       ▼

                 Controllers (MVC)

                       │
                       ▼

                Sequelize ORM

                       │
                       ▼

                PostgreSQL Database
```

---

# 📁 Project Structure

```text
marhba-auth/
│
├── backend/
│   ├── src/
│   │   ├── config/
│   │   ├── controllers/
│   │   ├── middlewares/
│   │   ├── models/
│   │   ├── routes/
│   │   ├── services/
│   │   ├── utils/
│   │   └── app.js
│   │
│   ├── server.js
│   ├── package.json
│   └── .env
│
├── mobile/
│   ├── app/
│   │   ├── (auth)/
│   │   └── (app)/
│   │
│   ├── components/
│   ├── services/
│   ├── store/
│   ├── hooks/
│   └── package.json
│
├── assets/
│   ├── banner.png
│   ├── architecture.png
│   └── demo.gif
│
└── README.md
```

---

# 🔐 Authentication Flow

```text
Register
     │
     ▼
Hash Password (bcrypt)
     │
     ▼
Save User
     │
     ▼
Generate JWT
     │
     ▼
Store Token (Secure Store)
     │
     ▼
Authenticated Requests
     │
     ▼
Protected Screens
```

---

# 🌐 API Endpoints

| Method | Endpoint           | Description            |
| ------ | ------------------ | ---------------------- |
| POST   | /api/auth/register | Register a new user    |
| POST   | /api/auth/login    | Authenticate user      |
| GET    | /api/auth/me       | Get authenticated user |

---

# 🔒 Security

* Passwords hashed using **bcrypt**
* JWT Authentication
* Protected Express Routes
* Authorization Middleware
* Secure Token Storage
* Password never returned in API responses
* Environment Variables
* JWT Expiration
* Global Error Handling

---

# 🛠 Technologies

## Backend

* Node.js
* Express.js
* PostgreSQL
* Sequelize
* bcrypt
* JSON Web Token (JWT)
* dotenv

---

## Frontend

* React Native
* Expo
* Expo Router
* Axios
* Zustand
* Expo Secure Store

---

# 🚀 Getting Started

## Clone Repository

```bash
git clone https://github.com/your-username/marhba-auth.git
cd marhba-auth
```

---

## Backend

```bash
cd backend
npm install
npm run dev
```

---

## Mobile

```bash
cd mobile
npm install
npx expo start
```

---

# ⚙ Environment Variables

Create a `.env` file inside the backend directory.

```env
PORT=3000

DB_HOST=localhost
DB_PORT=5432
DB_NAME=marhba_db
DB_USER=postgres
DB_PASSWORD=your_password

JWT_SECRET=your_secret_key
JWT_EXPIRES_IN=7d
```

---

# 📱 Screenshots

| Login                   | Register                   | Home                   |
| ----------------------- | -------------------------- | ---------------------- |
| ![](./assets/login.png) | ![](./assets/register.png) | ![](./assets/home.png) |

---

# 🎬 Demo

<p align="center">

![](./assets/demo.gif)

</p>

---

# 🎯 Learning Objectives

* REST API Development
* Authentication Systems
* Express Middleware
* PostgreSQL Integration
* JWT Authentication
* Mobile Authentication
* Protected Navigation
* Global State Management
* Secure Session Persistence
* Full Stack Development

---

# 🚧 Future Improvements

* Email Verification
* Password Reset
* Refresh Tokens
* Role-Based Access Control (RBAC)
* User Profile Editing
* Dark Mode
* Multi-language Support
* Unit Testing
* Docker Support
* CI/CD Pipeline

---

# 👨‍💻 Author

**Marouane Ouhfid**

Full Stack & Mobile Developer

---

<p align="center">
Made with ❤️ using Express, PostgreSQL, Expo and JWT.
</p>

