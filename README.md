# 🎬 Movie Ticket Booking Application

A full-stack Movie Ticket Booking Application developed using React, Node.js, Express.js, and MySQL. The application allows users to explore movies and view movie details, while providing administrative functionality to manage movie information through CRUD operations.

## 🚀 Features

- **Movie Management:** Add, view, update, and delete movie records.
- **Movie Posters:** Display movie posters using image URLs.
- **Movie Details:** View information such as title, genre, language, duration, rating, and release date.
- **MySQL Database:** Store and manage movie-related information.
- **REST API:** Backend API integration using Express.js.
- **Responsive Interface:** User-friendly interface for different screen sizes.

## 🛠️ Tech Stack

### Frontend
- React.js
- Vite
- JavaScript
- CSS

### Backend
- Node.js
- Express.js
- MySQL2
- CORS
- dotenv

### Database
- MySQL

## 📂 Project Structure

```text
Movie-Ticket-Booking/
│
├── frontend/
│   ├── public/
│   ├── src/
│   │   ├── components/
│   │   ├── pages/
│   │   ├── services/
│   │   ├── App.jsx
│   │   └── main.jsx
│   └── package.json
│
├── backend/
│   ├── config/
│   ├── controllers/
│   ├── middleware/
│   ├── routes/
│   ├── .env
│   ├── server.js
│   └── package.json
│
└── README.md
```

## ⚙️ Installation and Setup

### 1. Clone the Repository

```bash
git clone YOUR_GITHUB_REPOSITORY_URL
cd Movie-Ticket-Booking
```

### 2. Database Setup

- Open MySQL Workbench.
- Create a database named `movie_ticket_booking`.
- Create the required tables.
- Configure your database connection in the backend environment file.

### 3. Backend Setup

```bash
cd backend
npm install
```

Create a `.env` file inside the backend folder:

```env
PORT=5000
DB_HOST=localhost
DB_USER=root
DB_PASSWORD=your_mysql_password
DB_NAME=movie_ticket_booking
```

Start the backend:

```bash
npm run dev
```

Backend runs at:

`http://localhost:5000`

### 4. Frontend Setup

Open another terminal:

```bash
cd frontend
npm install
npm run dev
```

Frontend runs at:

`http://localhost:5173`

## 🔄 CRUD Operations

| Operation | Description |
|---|---|
| Create | Add new movies |
| Read | Display available movies |
| Update | Modify existing movie details |
| Delete | Remove movies from the database |

## 🗄️ Database

Database Name: `movie_ticket_booking`

The database is designed to support movie booking functionality with entities such as:

- Users
- Movies
- Theatres
- Screens
- Shows
- Seats
- Bookings
- Booking_Seats
- Payments

## 📸 Application Screenshots

Add your application screenshots here:

```text
screenshots/
├── home.png
├── movies.png
├── add-movie.png
└── edit-movie.png
```

## 🎯 Learning Outcomes

Through this project, I gained practical experience in:

- Building full-stack applications.
- Developing RESTful APIs using Node.js and Express.js.
- Performing CRUD operations.
- Integrating React with a MySQL database through a backend API.
- Managing application data using MySQL.
- Organizing frontend and backend project structures.

## 👩‍💻 Author

**Keerthana**

BE Computer Science and Engineering

GitHub: [Keerthanagithub17](https://github.com/Keerthanagithub17)

---

⭐ If you find this project useful, consider giving it a star!
