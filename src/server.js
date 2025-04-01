require("dotenv").config(); // .env dosyasındaki değişkenlerin yüklenmesi

const bcrypt = require("bcryptjs");
const crypto = require("crypto");
bcrypt.setRandomFallback(() => crypto.randomBytes(16));

const express = require("express");
const cors = require("cors");
const { connectDB } = require("./config/db");
const path = require("path");

const app = express();

// Statik dosyaları servis et: public klasörü
app.use(express.static(path.join(__dirname, "public")));

// Trust proxy if using one
app.set('trust proxy', true);

// Security and parsing middleware
app.use(cors({
    origin: '*', // herkese açık
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
    allowedHeaders: ['Content-Type', 'Authorization'],
    credentials: true
}));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Import routes
const routes = {
    auth: require("./routes/authRoutes"),
    term: require("./routes/termRoutes"),
    course: require("./routes/courseRoutes"),
    grade: require("./routes/gradeRoutes"),
    gpa: require("./routes/gpaRoutes"),
    gradeScale: require("./routes/gradeScaleRoutes")
};

// Route registration
app.use("/auth", routes.auth);
app.use("/", routes.course);
app.use("/terms", routes.term);
app.use("/grades", routes.grade);
app.use("/gpa", routes.gpa);
app.use("/grade-scales", routes.gradeScale);

// Reset Password GET route (HTML form)
app.get("/reset-password", (req, res) => {
    res.sendFile(path.join(__dirname, "public", "resetPassword.html"));
});

// 404 error handling middleware
app.use((req, res) => {
    res.status(404).json({
        status: 'error',
        message: "Route not found",
        path: req.originalUrl,
        method: req.method,
        timestamp: new Date().toISOString()
    });
});

// General error handling middleware
app.use((err, req, res, next) => {
    const statusCode = err.statusCode || 500;
    res.status(statusCode).json({
        status: 'error',
        message: statusCode === 500 ? "Internal Server Error" : err.message,
        timestamp: new Date().toISOString()
    });
});

// Server initialization
const PORT = process.env.PORT || 3000;
const startServer = async () => {
    try {
        await connectDB();
        app.listen(PORT, () => {
            console.log(`Server running on port ${PORT}`);
        });
    } catch (error) {
        console.error('Server failed to start:', error.message);
        process.exit(1);
    }
};
startServer();

module.exports = app;