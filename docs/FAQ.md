```markdown
# FAQ

## General

### What is UniSum?
UniSum is an API developed for university grade tracking. It provides functionalities for user registration, authentication, term management, course management, GPA calculation, and support for a grade scaling system.

### What features does UniSum offer?
- User registration and authentication
- Term management
- Course management
- Grade and weighted GPA (GPA) calculation
- Support for grade scaling systems

### How do I set up the UniSum Backend?
To set up the UniSum Backend, follow these steps:

1. Clone the repository:
   ```bash
   git clone https://github.com/kullaniciadi/UniSum-Backend.git
   cd UniSum-Backend
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Copy the `.env.example` file to `.env` and configure the necessary settings:
   ```bash
   cp .env.example .env
   # Edit the .env file
   ```

4. Set up the database:
   ```bash
   # Create the database (MySQL)
   # You can use Sequelize to create the database schemas
   ```

5. Start the application:
   ```bash
   npm start
   ```

## Setup Issues

### What should I do if I encounter issues during setup?
If you encounter issues during setup, ensure the following:
- You have the required Node.js version installed.
- Your database configuration in the `.env` file is correct.
- All dependencies are properly installed. If you see errors during `npm install`, ensure your internet connection is stable and try again.

## Usage

### What are the available API endpoints?
The UniSum API provides the following endpoints:

- **Authentication**
  - `POST /auth/signup`: User registration
  - `POST /auth/login`: User login
  - `GET /auth/verify-email`: Email verification
  - `POST /auth/password-reset`: Request password reset
  - `POST /auth/reset-password`: Set a new password
  - `DELETE /auth/delete-account`: Delete user account

- **Terms**
  - `GET /terms/my-terms`: Get terms by user
  - `POST /terms`: Create a new term
  - `DELETE /terms/:id`: Delete a term
  - `PUT /terms/:termId/updateGPA`: Update term GPA

- **Courses**
  - `GET /terms/:termId/courses`: Get courses by term
  - `POST /terms/:termId/courses`: Create a new course
  - `DELETE /courses/:courseId`: Delete a course
  - `PUT /courses/:courseId/average`: Update course average
  - `PUT /courses/:courseId/updateGPA`: Update course GPA
  - `PUT /updateAllCoursesGPA/:termId`: Update GPA for all courses in a term

- **Grades**
  - `POST /grades`: Add a new grade
  - `GET /grades/courses/:courseId`: Get grades by course
  - `DELETE /grades/:gradeId`: Delete a grade
  - `PUT /grades/:gradeId`: Update a grade

- **GPA**
  - `GET /gpa`: Calculate overall GPA
  - `GET /gpa/terms/:termId`: Get term GPA

- **Grade Scales**
  - `GET /grade-scales/courses/:courseId`: Get grade scales for a course
  - `POST /grade-scales/courses/:courseId`: Save custom grade scales
  - `DELETE /grade-scales/courses/:courseId`: Delete custom grade scales
```