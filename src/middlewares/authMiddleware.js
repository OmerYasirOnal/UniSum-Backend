const jwt = require('jsonwebtoken');

const authMiddleware = (req, res, next) => {
  const authHeader = req.headers.authorization;

  // 1) Authorization başlığı hiç yoksa
  if (!authHeader) {
    return res.status(401).json({ message: "No Authorization header" });
  }

  // 2) Format kontrolü: 'Bearer ' ile başlamalı
  if (!authHeader.startsWith('Bearer ')) {
    return res.status(401).json({ message: "Invalid Authorization format" });
  }

  // 3) Token'ı ayıklayıp doğrula
  try {
    const token = authHeader.replace('Bearer ', '').trim();
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    req.user = decoded;
    next();
  } catch (error) {
    return res.status(401).json({ 
      message: "Invalid token",
      error: error.message 
    });
  }
};

module.exports = authMiddleware;