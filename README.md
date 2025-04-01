# Blog Application

A modern full-stack blog application built with React and Node.js, featuring user authentication, rich text editing, and image upload capabilities.

## Features

- 🔐 User Authentication with Clerk
- 📝 Rich Text Editor for Blog Posts
- 🖼️ Image Upload and Management
- 🎨 Modern UI with Tailwind CSS
- 🔄 Real-time Updates with React Query
- 📱 Responsive Design
- 🔒 Secure API Endpoints

## Tech Stack

### Frontend

- React 19 (RC)
- Vite
- Tailwind CSS
- React Query
- React Router DOM
- React Quill (Rich Text Editor)
- ImageKit.io for Image Management
- Clerk for Authentication

### Backend

- Node.js
- Express.js
- MongoDB with Mongoose
- JWT Authentication
- ImageKit.io Integration
- CORS enabled
- Environment Variables with dotenv

## Project Structure

```
blogapp/
├── frontend/           # React frontend application
│   ├── src/           # Source code
│   ├── public/        # Static assets
│   └── package.json   # Frontend dependencies
│
└── backend/           # Node.js backend application
    ├── controllers/   # Route controllers
    ├── models/        # Database models
    ├── routes/        # API routes
    ├── middlewares/   # Custom middlewares
    ├── utils/         # Utility functions
    └── package.json   # Backend dependencies
```

## Getting Started

### Prerequisites

- Node.js (v14 or higher)
- MongoDB
- ImageKit.io Account
- Clerk Account

### Installation

1. Clone the repository

```bash
git clone <repository-url>
cd blogapp
```

2. Install Frontend Dependencies

```bash
cd frontend
npm install
```

3. Install Backend Dependencies

```bash
cd ../backend
npm install
```

4. Environment Setup

- Create `.env` files in both frontend and backend directories
- Add necessary environment variables (see .env.example files)

### Running the Application

1. Start the Backend Server

```bash
cd backend
npm run dev
```

2. Start the Frontend Development Server

```bash
cd frontend
npm run dev
```

The application will be available at:

- Frontend: http://localhost:5173
- Backend: http://localhost:3000

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## License

This project is licensed under the ISC License.
