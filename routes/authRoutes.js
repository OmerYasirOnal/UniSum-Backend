const express = require("express");
const router = express.Router();
const authMiddleware = require("../middlewares/authMiddleware");
const { 
    signup, 
    login, 
    verifyEmail, 
    requestPasswordReset, 
    resetPassword, 
    deleteAccount,
    refreshToken  // Yeni eklenen fonksiyon
} = require("../controllers/authController");

router.post("/signup", signup);
router.post("/login", login);
router.get("/verify-email", verifyEmail);
router.post("/password-reset", requestPasswordReset); // Şifre sıfırlama talebi
router.post("/reset-password", resetPassword);          // Yeni şifre belirleme
router.post("/refresh-token", refreshToken);              // Refresh token için endpoint
router.delete("/delete-account", authMiddleware, deleteAccount);  // Kullanıcı silme işlemi

module.exports = router;