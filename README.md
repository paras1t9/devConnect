# DevConnect

A modern full-stack social networking platform built with the MERN stack.

DevConnect is designed to provide developers with a platform to connect, share ideas, showcase projects, and collaborate with others. This project is being developed with a strong focus on software architecture, clean code principles, scalability, and production-ready practices rather than simply building features.

---

## Features

### Authentication

* User Registration
* User Login
* JWT Authentication
* Protected Routes
* Persistent Sessions
* Automatic Session Restoration

### Frontend

* React + Vite
* React Router
* Context API for Authentication
* Nested Routing
* Application Shell Architecture
* Reusable Components

### Backend

* Node.js
* Express.js
* MongoDB
* Mongoose
* JWT Authentication
* RESTful APIs

---

## Tech Stack

### Frontend

* React
* React Router DOM
* Vite
* Context API
* JavaScript (ES6+)

### Backend

* Node.js
* Express.js
* MongoDB
* Mongoose
* JWT
* bcrypt

---

## Project Structure

```text
client/
│
├── src/
│   ├── components/
│   │   ├── auth/
│   │   └── common/
│   │
│   ├── context/
│   │   └── AuthContext.jsx
│   │
│   ├── layouts/
│   │   ├── MainLayout.jsx
│   │   ├── Navbar.jsx
│   │   └── Sidebar.jsx
│   │
│   ├── pages/
│   │
│   ├── services/
│   │   └── api.js
│   │
│   ├── App.jsx
│   └── main.jsx
│
└── ...

server/
│
├── config/
├── controllers/
├── middleware/
├── models/
├── routes/
└── index.js
```

---

## Architecture

DevConnect follows a layered architecture where each component has a single responsibility.

```
BrowserRouter
│
├── Public Routes
│   ├── Login
│   └── Register
│
└── Protected Routes
        │
        ▼
   ProtectedRoute
        │
        ▼
    MainLayout
    ├── Navbar
    ├── Sidebar
    └── Outlet
          │
          ├── Dashboard
          └── About
```

### Design Principles

* Single Responsibility Principle
* Separation of Concerns
* Single Source of Truth
* Encapsulation
* Component Composition
* Low Coupling & High Cohesion

---

## Authentication Flow

```
User Login
      │
      ▼
Backend validates credentials
      │
      ▼
JWT generated
      │
      ▼
Stored in localStorage
      │
      ▼
AuthProvider restores session
      │
      ▼
ProtectedRoute verifies authentication
      │
      ▼
MainLayout renders authenticated pages
```

---

## Installation

### Clone the repository

```bash
git clone https://github.com/paras1t9/devConnect.git
```

### Install Backend Dependencies

```bash
npm install
```

### Install Frontend Dependencies

```bash
cd client
npm install
```

---

## Running the Project

### Start Backend

```bash
npm run dev
```

### Start Frontend

```bash
cd client
npm run dev
```

---

## Environment Variables

Create a `.env` file in the backend root.

```env
MONGO_URI=your_mongodb_connection_string

JWT_SECRET=your_secret_key
```

---

## Current Progress

### Completed

* User Authentication
* JWT Authorization
* Protected Routes
* Auth Context
* Session Restoration
* API Service Layer
* Nested Routing
* Main Layout
* Navbar
* Sidebar
* Application Shell

### In Progress

* Tailwind CSS Integration
* Responsive Layout
* Sidebar Collapse Animation

### Planned Features

* User Profiles
* Social Feed
* Create Posts
* Likes & Comments
* Search
* Notifications
* Real-time Messaging
* File Uploads
* Dark Mode
* Performance Optimization
* Testing
* Deployment

---

## Learning Goals

This project is intentionally being developed using production-grade engineering practices.

Topics covered include:

* React Architecture
* Component Design
* State Management
* REST API Design
* Authentication
* Routing
* Clean Code
* Software Design Principles
* Scalable Frontend Architecture

---

## Contributing

Contributions, suggestions, and feedback are welcome.

1. Fork the repository.
2. Create a new feature branch.
3. Commit your changes.
4. Open a Pull Request.

---

## License

This project is licensed under the MIT License.
