# BookSphere

## Overview

BookSphere is a full-stack web application built using the MERN (MongoDB, Express.js, React, Node.js) stack. It provides a seamless platform for users to explore, review, and purchase books. The project consists of three main directories:

- **Frontend**: The user-facing interface built with React.
- **Backend**: The API and database management powered by Node.js, Express.js, and MongoDB.
- **Admin**: The administrative dashboard for managing books, users, and orders.

## Features

- User authentication (Login/Register)
- Browse and search books
- Add books to cart and checkout
- Admin dashboard for managing books, users, and orders
- Responsive UI

## Tech Stack

- **Frontend**: React, Redux, Tailwind CSS
- **Backend**: Node.js, Express.js, MongoDB, JWT Authentication
- **Admin**: React-based admin panel

## Installation

### Prerequisites

Ensure you have the following installed on your system:

- Node.js
- MongoDB
- Express.js
- React.js

### Steps to Run the Project

1. **Clone the repository**

   git clone https://github.com/Panja004/BookSphere.git
   cd BookSphere

2. **Setup Backend**

   cd backend
   npm install
   npm run server

3. **Setup Frontend**

   cd ../frontend
   npm install
   npm run dev

4. **Setup Admin Panel**

   cd ../admin
   npm install
   npm run dev

5. **Access the Application**
   - Frontend: `http://localhost:4000`
   - Backend API: `http://localhost:5173`
   - Admin Panel: `http://localhost:5174`

## Environment Variables

Create a `.env` file in the `backend` directory and configure the following:

MONGO_URI="your_mongodb_connection_string"
CLDN_NAME="your_cloudinary_name"
CLDN_API_KEY="your_cloudinary_api_key"
CLDN_API_SECRET="your_cloudinary_api_secret"
JWT_SECRET="your_jwt_secret"
ADMIN_EMAIL="your_admin_email"
ADMIN_PASS="your_admin_password"
STRIPE_SECRET_KEY="your_stripe_secret_key"
PORT=5000

Create a .env file in the frontend directory and configure the following:

VITE_BACKEND_URL="http://localhost:4000"

Create a .env file in the admin directory and configure the following:

VITE_BACKEND_URL="http://localhost:4000"

## Contributing

Contributions are welcome! Please fork the repository and submit a pull request.

## License

This project is licensed under the MIT License.

## Contact

For any inquiries, reach out to [**anishpanj026@gmail.com**](mailto:anishpanj026@example.com)
