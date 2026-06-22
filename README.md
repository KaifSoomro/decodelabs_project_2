# ✨ Quote App

A modern full-stack MERN application where users can discover, search, and share inspirational quotes through a beautiful SaaS-inspired interface.

Built with React, Node.js, Express, MongoDB, React Query, and Tailwind CSS.

---

## 🚀 Live Features

### 📝 Create Quotes
Share your thoughts with the world by adding your own inspirational quotes.

### 🔍 Smart Search
Instantly search quotes by:
- Quote content
- Author's full name

### ⚡ Fast & Responsive
Powered by React Query for efficient data fetching and caching.

### 🎨 Modern SaaS Design
- Glassmorphism UI
- Smooth animations
- Premium card layouts
- Responsive design
- Beautiful gradients

### ⏳ Skeleton Loading
Elegant loading states improve user experience while data is being fetched.

---

## 🛠️ Tech Stack

### Frontend
- React.js
- React Router DOM
- Tailwind CSS
- TanStack React Query
- React Hot Toast
- Lucide React

### Backend
- Node.js
- Express.js
- MongoDB
- Mongoose
- Helmet
- CORS
- Dotenv

---

### 🏠 Home Page
- Hero Section
- How It Works
- Featured Quotes
- Modern Footer

### 📚 Quotes Page
- Search Quotes
- Responsive Quote Cards
- Skeleton Loading States

### ➕ Add Quote Page
- Beautiful SaaS Form
- Validation Ready
- Responsive Design

---

## 📂 Folder Structure

```bash
Aura-Quotes
│
├── backend
│   ├── config
│   ├── controllers
│   ├── models
│   ├── routes
│   └── server.js
│
├── frontend
│   ├── src
│   │   ├── components
│   │   ├── pages
│   │   ├── App.jsx
│   │   └── main.jsx
│   │
│   └── public
│
└── README.md
```

---

### 2️⃣ Install Backend Dependencies

```bash
cd backend
npm install
```

### 3️⃣ Start Backend

```bash
npm run dev
```

### 4️⃣ Install Frontend Dependencies

```bash
cd frontend
npm install
```

### 5️⃣ Start Frontend

```bash
npm run dev
```

---

## 📡 API Routes

### Add Quote

```http
POST /api/v1/quotes/post
```

#### Request Body

```json
{
  "fullName": "Kaif Soomro",
  "quote": "Success comes from consistency."
}
```

---

### Get All Quotes

```http
GET /api/v1/quotes/get-all-quotes
```

---

## 🎯 Learning Objectives

This project demonstrates:

- REST API development
- MongoDB integration
- Mongoose Models
- React Query
- CRUD Operations
- State Management
- Search Functionality
- Responsive Design
- Modern UI/UX Principles

---

## 👨‍💻 Developer

### Kaif Soomro

MERN Stack Developer passionate about building scalable web applications and modern SaaS experiences.

## ⭐ Support

If you found this project useful, consider giving it a star on GitHub.

It helps others discover the project and motivates further improvements.

Made with ❤️ using the MERN Stack.