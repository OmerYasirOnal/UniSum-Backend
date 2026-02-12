```markdown
# Architecture Documentation for UniSum Backend

## Overview
UniSum is a backend API developed for university grade tracking. The system provides functionalities such as user registration, authentication, term management, course management, and GPA calculation. The architecture is built using Node.js with Express framework, and utilizes MySQL for database management.

## Components

### Major Components/Services
- **User Management**: Handles user registration, authentication, and account management.
- **Term Management**: Manages academic terms, including creation and retrieval of terms related to a user.
- **Course Management**: Facilitates the creation, retrieval, and management of courses within a term.
- **Grade Management**: Responsible for adding, updating, and deleting grades associated with courses.
- **GPA Calculation**: Computes the GPA based on the user's courses and grades.
- **Grade Scale Management**: Manages custom grade scales for courses.
- **Email Service**: Sends verification and password reset emails to users.

## Data Flow
1. **User Registration**: A user submits their registration details via `/auth/signup`, which are processed and stored.
2. **Authentication**: The user can log in through `/auth/login`, receiving a JWT for authenticated requests.
3. **Term Operations**: Users can create and manage terms at `/terms` endpoints.
4. **Course Operations**: Courses are created and managed via `/terms/:termId/courses`.
5. **Grade Operations**: Grades can be added and managed through `/grades` endpoints.
6. **GPA Calculation**: The GPA can be calculated for users through `/gpa` and for specific terms via `/gpa/terms/:termId`.

## Technology Stack
- **Language**: JavaScript (Node.js)
- **Framework**: Express
- **Database**: MySQL
- **ORM**: Sequelize
- **Email Service**: Nodemailer

## Setup Instructions
To set up the UniSum backend, follow the commands below:

1. Clone the repository:
    ```bash
    git clone https://github.com/kullaniciadi/UniSum-Backend.git
    cd UniSum-Backend
    ```

2. Install dependencies:
    ```bash
    npm install
    ```

3. Copy the environment configuration:
    ```bash
    cp .env.example .env
    # Edit the .env file with the necessary settings
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

## API Documentation

### Authentication Routes
- **POST /auth/signup**
  - Request body: `{ email, password, university, department }`
  - Response: `{ success, message, verificationLink }`

- **POST /auth/login**
  - Request body: `{ email, password }`
  - Response: `{ token, refreshToken, user }`

### Term Routes
- **GET /terms/my-terms**
  - Response: `[{ id, user_id, class_level, term_number, gpa }]`

- **POST /terms**
  - Request body: `{ user_id, class_level, term_number }`
  - Response: `{ id, user_id, class_level, term_number }`

### Course Routes
- **GET /terms/:termId/courses**
  - Response: `[{ id, term_id, user_id, name, credits, average, gpa }]`

- **POST /terms/:termId/courses**
  - Request body: `{ term_id, user_id, name, credits }`
  - Response: `{ id, term_id, user_id, name, credits }`

### Grade Routes
- **POST /grades**
  - Request body: `{ course_id, grade_type, score, weight }`
  - Response: `{ id, course_id, grade_type, score, weight }`

### GPA Routes
- **GET /gpa**
  - Response: `{ gpa }`

- **GET /gpa/terms/:termId**
  - Response: `{ gpa, totalCredits, courseDetails: [{ courseId, credits, average, gpa }] }`

## Diagrams
TODO: Add component diagrams and data flow diagrams.
```