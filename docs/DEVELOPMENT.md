```markdown
# Development Documentation for UniSum Backend

## Prerequisites

- Node.js (version: TODO: Add version)
- npm (version: TODO: Add version)
- MySQL (version: TODO: Add version)

## Local Setup

Follow these steps to set up the project locally:

1. Clone the repository:
   ```bash
   git clone https://github.com/kullaniciadi/UniSum-Backend.git
   cd UniSum-Backend
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Copy the environment example file and configure your environment variables:
   ```bash
   cp .env.example .env
   # Edit the .env file with your configuration
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

## Commands

- **Start the application:**
  ```bash
  npm start
  ```

- **Run tests (no tests specified):**
  ```bash
  npm test
  ```

- **Lint commands: TODO: Add lint command**

## Environment Variables

The following environment variables are required:

- **Database Settings:**
  - `DB_HOST`: Database host address
  - `DB_USER`: Database username
  - `DB_PASS`: Database password
  - `DB_NAME`: Database name
  - `DB_PORT`: Database port (default is 3306)

- **Application Settings:**
  - `PORT`: Application port (default is 3000)

- **Frontend and API URLs:**
  - `FRONTEND_URL`: Frontend URL
  - `BASE_URL`: Base API URL

- **Email Settings:**
  - `EMAIL_USER`: Email for sending verification and password reset emails
  - `EMAIL_PASS`: Password for the email account

- **Security:**
  - `JWT_SECRET`: Secret key for JWT signing

## Troubleshooting

### Common Issues and Fixes

1. **Database Connection Issues:**
   - Ensure that the database server is running and accessible.
   - Check your `.env` configuration for correct database credentials.

2. **Environment Variables:**
   - Make sure all required environment variables are set in the `.env` file.

3. **Application Not Starting:**
   - Check for any errors in the console logs.
   - Ensure that all dependencies are installed correctly.

4. **API Not Responding:**
   - Verify that the server is running and the correct port is being accessed.
   - Check the network settings and ensure that CORS policies are correctly configured.
```