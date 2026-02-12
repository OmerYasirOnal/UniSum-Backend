```markdown
# UniSum API Documentation

## API Overview

UniSum is a backend API developed for university grade tracking, providing endpoints for user registration, authentication, term management, course management, grade management, and GPA calculation.

## Setup Instructions

To set up the UniSum backend, follow these steps:

1. Clone the repository:
   ```bash
   git clone https://github.com/kullaniciadi/UniSum-Backend.git
   cd UniSum-Backend
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Copy the example environment configuration:
   ```bash
   cp .env.example .env
   # Edit the .env file with your actual configuration
   ```

4. Set up the database (MySQL):
   ```bash
   # Create the database
   # You can use Sequelize to create the database schemas
   ```

5. Start the application:
   ```bash
   npm start
   ```

## API Endpoints

### Authentication

#### **POST /auth/signup**
- **Description:** User registration
- **Request:**
  - Body:
    ```json
    {
      "email": "user@example.com",
      "password": "securepassword",
      "university": "University Name",
      "department": "Department Name"
    }
    ```
- **Response:**
  - Status 201:
    ```json
    {
      "success": true,
      "message": "verification_email_sent",
      "verificationLink": "https://example.com/verify?token=abc123"
    }
    ```

#### **POST /auth/login**
- **Description:** User login
- **Request:**
  - Body:
    ```json
    {
      "email": "user@example.com",
      "password": "securepassword"
    }
    ```
- **Response:**
  - Status 200:
    ```json
    {
      "token": "eyJhbGciOiJIUzI1NiIsInR...",
      "refreshToken": "xyz123",
      "user": {
        "id": 1,
        "email": "user@example.com",
        "university": "University Name",
        "department": "Department Name"
      }
    }
    ```

#### **POST /auth/password-reset**
- **Description:** Request password reset
- **Request:**
  - Body:
    ```json
    {
      "email": "user@example.com"
    }
    ```
- **Response:**
  - Status 200:
    ```json
    {
      "success": true,
      "message": "password_reset_email_sent"
    }
    ```

#### **POST /auth/reset-password**
- **Description:** Set new password
- **Request:**
  - Body:
    ```json
    {
      "token": "resetToken",
      "password": "newsecurepassword"
    }
    ```
- **Response:**
  - Status 200:
    ```json
    {
      "success": true,
      "message": "Password updated successfully."
    }
    ```

#### **DELETE /auth/delete-account**
- **Description:** Delete user account
- **Request:** Requires authentication
- **Response:**
  - Status 200:
    ```json
    {
      "success": true,
      "message": "account_deleted_successfully"
    }
    ```

---

### Terms

#### **POST /terms**
- **Description:** Create a new term
- **Request:**
  - Body:
    ```json
    {
      "user_id": 1,
      "class_level": "1",
      "term_number": 1
    }
    ```
- **Response:**
  - Status 201:
    ```json
    {
      "id": 1,
      "user_id": 1,
      "class_level": "1",
      "term_number": 1
    }
    ```

#### **GET /terms/my-terms**
- **Description:** Retrieve terms for the authenticated user
- **Response:**
  - Status 200:
    ```json
    [
      {
        "id": 1,
        "user_id": 1,
        "class_level": "1",
        "term_number": 1
      }
    ]
    ```

#### **DELETE /terms/:id**
- **Description:** Delete a term
- **Response:**
  - Status 200:
    ```json
    {
      "message": "Dönem başarıyla silindi"
    }
    ```

---

### Courses

#### **POST /terms/:termId/courses**
- **Description:** Create a new course
- **Request:**
  - Body:
    ```json
    {
      "name": "Mathematics",
      "credits": 3
    }
    ```
- **Response:**
  - Status 201:
    ```json
    {
      "id": 1,
      "term_id": 1,
      "user_id": 1,
      "name": "Mathematics",
      "credits": 3,
      "average": 0,
      "gpa": 0
    }
    ```

#### **GET /terms/:termId/courses**
- **Description:** Retrieve all courses for a specific term
- **Response:**
  - Status 200:
    ```json
    [
      {
        "id": 1,
        "name": "Mathematics",
        "credits": 3
      }
    ]
    ```

#### **DELETE /courses/:courseId**
- **Description:** Delete a course
- **Response:**
  - Status 200:
    ```json
    {
      "message": "Course and related grades deleted successfully."
    }
    ```

---

### Grades

#### **POST /grades**
- **Description:** Add a new grade
- **Request:**
  - Body:
    ```json
    {
      "course_id": 1,
      "grade_type": "Midterm",
      "score": 85,
      "weight": 50
    }
    ```
- **Response:**
  - Status 201:
    ```json
    {
      "id": 1,
      "course_id": 1,
      "grade_type": "Midterm",
      "score": 85,
      "weight": 50
    }
    ```

#### **GET /grades/courses/:courseId**
- **Description:** Retrieve grades for a specific course
- **Response:**
  - Status 200:
    ```json
    [
      {
        "id": 1,
        "course_id": 1,
        "grade_type": "Midterm",
        "score": 85,
        "weight": 50
      }
    ]
    ```

---

### GPA

#### **GET /gpa**
- **Description:** Calculate GPA for the authenticated user
- **Response:**
  - Status 200:
    ```json
    {
      "gpa": 3.5
    }
    ```

#### **GET /gpa/terms/:termId**
- **Description:** Calculate GPA for a specific term
- **Response:**
  - Status 200:
    ```json
    {
      "gpa": 3.5,
      "totalCredits": 6,
      "courseDetails": [
        {
          "courseId": 1,
          "credits": 3,
          "average": 85,
          "gpa": 3.5
        }
      ]
    }
    ```

---

### Grade Scales

#### **GET /grade-scales/courses/:courseId**
- **Description:** Retrieve custom grade scales for a specific course
- **Response:**
  - Status 200:
    ```json
    [
      {
        "id": 1,
        "course_id": 1,
        "letter": "AA",
        "min_score": 90,
        "gpa": 4.0
      }
    ]
    ```

#### **POST /grade-scales/courses/:courseId**
- **Description:** Save custom grade scales for a specific course
- **Request:**
  - Body:
    ```json
    {
      "gradeScales": [
        {
          "letter": "AA",
          "min_score": 90,
          "gpa": 4.0
        }
      ]
    }
    ```
- **Response:**
  - Status 200:
    ```json
    [
      {
        "id": 1,
        "course_id": 1,
        "letter": "AA",
        "min_score": 90,
        "gpa": 4.0
      }
    ]
    ```

#### **DELETE /grade-scales/courses/:courseId**
- **Description:** Delete custom grade scales for a specific course
- **Response:**
  - Status 200:
    ```json
    {
      "message": "Custom grade scales deleted successfully"
    }
    ```

---

## Authentication

- The API uses JWT for authentication. Ensure that your requests include the `Authorization` header with the format `Bearer <token>`.

## Examples

### cURL Example for User Signup
```bash
curl -X POST http://localhost:3000/auth/signup \
-H "Content-Type: application/json" \
-d '{"email": "user@example.com", "password": "securepassword", "university": "University Name", "department": "Department Name"}'
```

### cURL Example for User Login
```bash