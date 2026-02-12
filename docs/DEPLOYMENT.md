```markdown
# Deployment Documentation for UniSum Backend

## Prerequisites

Before deploying the UniSum Backend application, ensure you have the following infrastructure requirements:

- **Node.js**: Version 14.x or greater
- **MySQL**: Version 5.7 or greater
- **NPM**: Package manager for Node.js
- **Environment Variables**: Properly set environment variables as specified below.

## Environment Variables

Create a `.env` file in the root of your project based on the `.env.example` file. The following environment variables are required:

| Variable          | Description                                         |
|-------------------|-----------------------------------------------------|
| `DB_HOST`         | Database host address                               |
| `DB_USER`         | Database username                                   |
| `DB_PASS`         | Database password                                   |
| `DB_NAME`         | Database name                                      |
| `DB_PORT`         | Database port (default is 3306)                    |
| `PORT`            | The port on which the application will run (default is 3000) |
| `FRONTEND_URL`    | URL of the frontend application                     |
| `BASE_URL`        | Base URL for the API                               |
| `EMAIL_USER`      | Email address for sending notifications             |
| `EMAIL_PASS`      | Password for the email account                      |
| `JWT_SECRET`      | Secret key for JWT signing                          |

## Build & Deploy

Follow these steps to build and deploy the application:

1. **Clone the Repository**:
    ```bash
    git clone https://github.com/kullaniciadi/UniSum-Backend.git
    cd UniSum-Backend
    ```

2. **Install Dependencies**:
    ```bash
    npm install
    ```

3. **Create and Configure `.env` File**:
    ```bash
    cp .env.example .env
    # Edit the .env file with your configuration
    ```

4. **Set Up the Database**:
    - Create a MySQL database using the credentials specified in your `.env` file.
    - Use Sequelize or any other method to create the necessary database schemas.

5. **Start the Application**:
    ```bash
    npm start
    ```

## Monitoring

TODO: Add monitoring instructions (Health checks, logging, alerting)

## Rollback

TODO: Add rollback instructions for a bad deploy
```