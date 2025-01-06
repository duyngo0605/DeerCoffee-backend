# README: DeerCoffee Application

## Overview
DeerCoffee is a Coffee Shop Management System designed to streamline operations for small to medium-sized coffee shops. The application includes functionalities such as order management, inventory tracking, employee scheduling, and reporting to improve efficiency and enhance customer experiences.

## Project Structure
The project consists of two main components:

- **Front-end**: Built with ReactJS to provide an intuitive user interface for administrators and staff.
- **Back-end**: Powered by Node.js and MongoDB to handle server-side logic and database management.

---

## Back-end

### Technologies Used
- **Node.js**: For server-side scripting.
- **ExpressJS**: For API development.
- **MongoDB**: For database storage.
- **Mongoose**: For object data modeling.
- **JWT**: For secure authentication.
- **Bcrypt**: For password hashing.

### Features
1. **User Management**:
   - Role-based access control (Admin/Staff).
   - Password encryption with bcrypt.

2. **Order Processing**:
   - Manage order lifecycle (create, update, cancel).

3. **Inventory and Menu Management** (Admin only):
   - CRUD operations for menu items and inventory.

4. **Employee Scheduling** (Admin only):
   - Assign shifts and track working hours.

5. **Reports**:
   - Generate sales and performance reports.

### Setup Instructions
1. Navigate to the `backend` directory:
   ```bash
   cd backend
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Set environment variables in a `.env` file:
   ```env
   PORT=5000
   MONGO_URI=<your_mongodb_connection_string>
   JWT_SECRET=<your_jwt_secret>
   ```
4. Start the server:
   ```bash
   npm start
   ```
5. API endpoints will be available at `http://localhost:5000`.

### Directory Structure
```
backend/
├── controllers/  # Handle business logic
├── models/       # Mongoose schemas
├── routes/       # API routes
├── middleware/   # Authentication and error handling
├── utils/        # Utility functions
├── server.js     # Entry point
└── config/       # Environment configuration
```

---

## Future Development
- Online ordering system.
- Customer analytics and trends.
- Integration with payroll systems for automated salary calculations.

## Contributors
- **Ngô Vũ Đức Duy**



