# 📈 Zerodha Clone — Full Stack Trading Platform

A full stack stock trading platform inspired by Zerodha, built with React, Node.js, Express, and MongoDB.

---

## 🔗 Live Demo

| App | Link |
|-----|------|
| 🌐 Frontend (Landing + Auth) | [zerodha-clone-lovat-eight.vercel.app](https://zerodha-clone-lovat-eight.vercel.app) |
| 📊 Dashboard | [zerodha-clone-35hm.vercel.app](https://zerodha-clone-35hm.vercel.app) |
| ⚙️ Backend API | [zerodha-clone-3o2d.onrender.com](https://zerodha-clone-3o2d.onrender.com) |

---

## ✨ Features

- 🔐 User Authentication (Signup & Login with JWT)
- 📊 Trading Dashboard with Holdings, Positions & Orders
- 🛒 Buy & Sell stocks with real-time order updates
- 📱 Minimal & professional UI design
- 🔒 Protected routes with JWT middleware
- 🌙 Responsive layout

---

## 🛠️ Tech Stack

### Frontend
![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)
![React Router](https://img.shields.io/badge/React_Router-CA4245?style=for-the-badge&logo=react-router&logoColor=white)
![Axios](https://img.shields.io/badge/Axios-5A29E4?style=for-the-badge&logo=axios&logoColor=white)

### Backend
![Node.js](https://img.shields.io/badge/Node.js-43853D?style=for-the-badge&logo=node.js&logoColor=white)
![Express.js](https://img.shields.io/badge/Express.js-404D59?style=for-the-badge)
![MongoDB](https://img.shields.io/badge/MongoDB-4EA94B?style=for-the-badge&logo=mongodb&logoColor=white)
![JWT](https://img.shields.io/badge/JWT-black?style=for-the-badge&logo=JSON%20web%20tokens)

### Deployment
![Vercel](https://img.shields.io/badge/Vercel-000000?style=for-the-badge&logo=vercel&logoColor=white)
![Render](https://img.shields.io/badge/Render-46E3B7?style=for-the-badge&logo=render&logoColor=white)

---

## 📁 Project Structure

```
zerodha-clone/
├── frontend/       → Landing page, Login & Signup (React)
├── dashboard/      → Trading dashboard (React)
└── backend/        → REST API server (Node.js + Express)
```

---

## 🚀 Run Locally

### 1. Clone the repository
```bash
git clone https://github.com/yash930596/zerodha-clone.git
cd zerodha-clone
```

### 2. Setup Backend
```bash
cd backend
npm install
```

Create a `.env` file in the backend folder:
```
MONGO_URL=your_mongodb_connection_string
JWT_SECRET=your_secret_key
PORT=3002
```

Start the backend:
```bash
node index.js
```

### 3. Setup Frontend
```bash
cd frontend
npm install
npm start
```

### 4. Setup Dashboard
```bash
cd dashboard
npm install
npm start
```

---

## 🔌 API Endpoints

| Method | Endpoint | Description | Auth Required |
|--------|----------|-------------|---------------|
| POST | `/signup` | Register new user | ❌ |
| POST | `/login` | Login user & get token | ❌ |
| GET | `/profile` | Get logged in user info | ✅ |
| GET | `/allHoldings` | Get all holdings | ✅ |
| GET | `/allPositions` | Get all positions | ✅ |
| GET | `/allOrders` | Get all orders | ✅ |
| POST | `/newOrder` | Place a new order | ✅ |

---

## 👨‍💻 Author

**Yash Giri**

[![GitHub](https://img.shields.io/badge/GitHub-100000?style=for-the-badge&logo=github&logoColor=white)](https://github.com/yash930596)

---

## 📄 License

This project is for educational purposes only and is not affiliated with Zerodha Broking Ltd.
