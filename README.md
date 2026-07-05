# 🚀 DevConnect

A full-stack social media platform built for developers to share ideas, interact through posts and comments, and learn modern web application architecture.

DevConnect was built from scratch using the MERN stack with a strong emphasis on clean architecture, RESTful API design, authentication, reusable React components, and scalable project structure.

---

## ✨ Features

### 🔐 Authentication

- User Registration
- User Login
- JWT Authentication
- Protected Routes
- Persistent Login using Context API

---

### 📝 Posts

- Create Posts
- View Feed
- Like / Unlike Posts
- Delete Own Posts
- Floating "Create Post" Button
- Custom Delete Confirmation Modal

---

### 💬 Comments

- Expand / Collapse Comments
- View Comments
- Create Comments
- Delete Own Comments
- Reusable Comment Components

---

### 🎨 User Interface

- Responsive Dashboard
- Modern Card-based Feed
- Relative Timestamps
- Floating Action Button
- Custom Modals
- Clean TailwindCSS Design

---

## 🏗 Tech Stack

### Frontend

- React
- React Router
- Context API
- Tailwind CSS
- Lucide React
- date-fns

### Backend

- Node.js
- Express.js
- MongoDB
- Mongoose
- JWT
- bcrypt

---

## 📂 Project Structure

```
client/
│
├── components/
│   ├── common/
│   ├── comments/
│   └── posts/
│
├── context/
├── pages/
├── services/
└── layouts/

server/
│
├── config/
├── controllers/
├── middleware/
├── models/
├── routes/
└── utils/
```

---

## ⚙️ Installation

### Clone the repository

```bash
git clone https://github.com/paras1t9/devconnect.git
```

---

### Backend

```bash
cd server
npm install
```

Create a `.env` file.

```env
PORT=3000
MONGO_URI=YOUR_MONGODB_URI
JWT_SECRET=YOUR_SECRET_KEY
```

Start the backend.

```bash
npm run dev
```

---

### Frontend

```bash
cd client
npm install
npm run dev
```

The frontend runs on

```
http://localhost:5173
```

The backend runs on

```
http://localhost:3000
```

---

## 🔑 Environment Variables

| Variable   | Description               |
| ---------- | ------------------------- |
| PORT       | Backend Port              |
| MONGO_URI  | MongoDB Connection String |
| JWT_SECRET | Secret used for JWT       |

---

## 📡 API Endpoints

### Authentication

| Method | Endpoint             | Description   |
| ------ | -------------------- | ------------- |
| POST   | `/api/auth/register` | Register User |
| POST   | `/api/auth/login`    | Login User    |

---

### Users

| Method | Endpoint             | Description    |
| ------ | -------------------- | -------------- |
| GET    | `/api/users/profile` | Logged-in User |

---

### Posts

| Method | Endpoint              | Description   |
| ------ | --------------------- | ------------- |
| GET    | `/api/posts`          | Get Posts     |
| POST   | `/api/posts`          | Create Post   |
| PATCH  | `/api/posts/:id/like` | Like / Unlike |
| DELETE | `/api/posts/:id`      | Delete Post   |

---

### Comments

| Method | Endpoint                   | Description    |
| ------ | -------------------------- | -------------- |
| GET    | `/api/posts/:id/comments`  | Get Comments   |
| POST   | `/api/posts/:id/comments`  | Create Comment |
| DELETE | `/api/comments/:commentId` | Delete Comment |

---

## 🎯 Future Improvements

- User Profiles
- Edit Posts
- Edit Comments
- Image Uploads
- Infinite Scrolling
- Real-time Notifications
- Real-time Feed using Socket.IO
- Search Functionality
- Dark Mode
- Unit & Integration Tests
- Docker Support
- CI/CD Pipeline
- Deployment

---

## 📚 What I Learned

While building DevConnect, I gained hands-on experience with:

- Designing RESTful APIs
- JWT Authentication
- MongoDB Data Modeling
- React State Management
- Context API
- Component Architecture
- CRUD Operations
- Middleware Design
- Authorization
- Pagination
- Reusable UI Components
- Full Stack Application Structure
- Debugging Frontend and Backend Together

---

## 🤝 Contributing

Contributions, issues and feature requests are welcome.

Feel free to fork the project and open a pull request.

---

## 📄 License

This project is licensed under the MIT License.

---

## 👨‍💻 Author

**Ayush Mehta**

If you found this project interesting, consider giving it a ⭐ on GitHub.