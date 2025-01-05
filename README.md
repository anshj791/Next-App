# Next.js Dynamic Homepage and Login Page

This README provides comprehensive instructions on setting up and running the project for the internship assignment. The goal is to develop a dynamic homepage and login page using Next.js with TypeScript, integrate with a MySQL database using stored procedures, and build an API layer for seamless communication between the frontend and backend.

## Project Overview

The project consists of the following key features:

1. **Dynamic Homepage**: A fully functional homepage displaying data fetched dynamically from a MySQL database.
2. **Login Page**: A login interface with form validation and authentication logic.
3. **API Integration**: REST APIs built using Next.js API routes to connect the frontend with backend business logic.
4. **Database Integration**: Use of MySQL stored procedures to implement business logic and efficient data handling.

### Technologies Used
- **Framework**: Next.js with TypeScript
- **Database**: MySQL
- **API Layer**: Next.js API routes

### Objectives
- Design and implement a scalable, dynamic, and functional homepage.
- Create a secure and user-friendly login page.
- Leverage MySQL stored procedures for backend business logic.
- Build and integrate REST APIs for seamless data binding to frontend components.

---

## Prerequisites

1. **Node.js**: Install Node.js version 16 or higher. [Download Node.js](https://nodejs.org/)
2. **MySQL**: Set up a local or remote MySQL server. [Download MySQL](https://dev.mysql.com/downloads/)
3. **Dependencies**: Ensure you have `npm` or `yarn` installed to manage packages.

---

## Project Setup

### 1. Clone the Repository
To get started, clone the repository to your local machine:
```bash
git clone <repository-url>
cd <repository-directory>
```

### 2. Install Dependencies
Install the necessary dependencies using the package manager of your choice:
```bash
npm install
```

### 3. Configure Environment Variables
Create a `.env.local` file in the root directory to store sensitive configuration values. Add the following keys:
```env
DB_HOST=<your-database-host>
DB_USER=<your-database-user>
DB_PASSWORD=<your-database-password>
DB_NAME=<your-database-name>
```
Ensure these values match your MySQL database configuration.

### 4. Set Up the Database
1. Import the provided database schema:
   ```bash
   mysql -u <DB_USER> -p <DB_NAME> < schema.sql
   ```
2. Execute the stored procedure scripts:
   ```bash
   mysql -u <DB_USER> -p <DB_NAME> < procedures.sql
   ```

---

## Running the Application

### Development Mode
Start the development server with hot-reloading enabled:
```bash
npm run dev
```
Access the application at [http://localhost:3000](http://localhost:3000).

### Production Mode
1. Build the project:
   ```bash
   npm run build
   ```
2. Start the production server:
   ```bash
   npm start
   ```

---

## Project Structure

The project follows a modular and scalable folder structure:
```
.
├── components
│   ├── Header.tsx
│   ├── Footer.tsx
│   ├── Homepage.tsx
│   └── LoginForm.tsx
├── pages
│   ├── index.tsx
│   └── signin.tsx
├── pages/api
│   ├── homepage.ts
│   └── login.ts
├── public
├── styles
│   └── globals.css
├── .env.local
├── schema.sql
├── procedures.sql
└── README.md
```
### Key Directories and Files

1. **components**: Contains reusable functional components.
2. **pages**: Includes all the pages for the application (`index.tsx` for homepage and `signin.tsx` for login).
3. **pages/api**: Contains API routes for the homepage and login functionalities.
4. **schema.sql**: SQL file defining the database schema.
5. **procedures.sql**: SQL file defining stored procedures for business logic.

---

## Detailed Functionalities

### 1. Homepage
- Dynamically fetches and displays content from the database.
- Utilizes a stored procedure to retrieve data efficiently.
- Responsive layout designed using Next.js functional components.

### 2. Login Page
- Implements client-side and server-side form validation.
- Authenticates user credentials via a stored procedure accessed through the API.
- Provides error handling for invalid credentials.

### 3. Stored Procedures
- Encapsulates business logic for modularity and performance.
- Handles database queries such as fetching homepage content and validating login credentials.

---

## API Endpoints

### 1. Homepage Data
**Endpoint**: `/api/homepage`
**Method**: GET
**Description**: Fetches dynamic content for the homepage using a MySQL stored procedure.
**Response Example**:
```json
{
  "status": "success",
  "data": [
    {
      "id": 1,
      "title": "Welcome to Our Platform",
      "description": "Explore dynamic content here."
    }
  ]
}
```

### 2. Login Authentication
**Endpoint**: `/api/login`
**Method**: POST
**Description**: Authenticates user credentials by validating against the database.
**Request Example**:
```json
{
  "email": "user@example.com",
  "password": "securepassword"
}
```
**Response Example**:
```json
{
  "status": "success",
  "message": "Login successful"
}
```

---

## How to Test

1. **Homepage**:
   - Access `/` to verify dynamic content fetched from the database.
   - Inspect network requests to ensure API calls are made correctly.

2. **Login Page**:
   - Navigate to `/signin` and test the login functionality with valid and invalid credentials.
   - Verify error handling and redirection upon successful login.

---

## Deployment Instructions

1. **Hosting**: Deploy the application to a hosting provider like Vercel or AWS.
2. **Environment Variables**: Configure the production environment variables on the hosting platform.
3. **Database**: Ensure the MySQL server is accessible from the hosting environment.
4. **Domain**: Map a custom domain to the deployed application for production use.

---

## Deliverables

1. Fully functional and dynamic homepage and login page.
2. MySQL database schema (`schema.sql`) and stored procedure scripts (`procedures.sql`).
3. Well-documented and modular code.
4. This README file for detailed setup and usage instructions.

---

## Challenges and Solutions

### Challenge 1: Setting Up Environment Variables
- **Solution**: Used `.env.local` to store sensitive data and ensured it is not tracked by version control.

### Challenge 2: API Integration
- **Solution**: Utilized Next.js API routes to build and test REST APIs effectively.

### Challenge 3: Responsive Design
- **Solution**: Leveraged CSS modules and Next.js built-in styling support for responsiveness.

---

## Future Enhancements

1. **Add User Registration**: Implement a signup page with user registration functionality.
2. **Enhanced Security**: Use JWT for token-based authentication.
3. **Performance Optimization**: Introduce server-side caching for frequently accessed data.

---

## Contact Information

For any queries or assistance, please reach out to [Ansh] or the project team. Thank you for reviewing this assignment!
