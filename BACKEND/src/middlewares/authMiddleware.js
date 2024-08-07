// middleware/authMiddleware.js
const jwt = require("jsonwebtoken");
const secret = process.env.JWT_SECRET; // Asegúrate de que esta variable esté definida en tu .env

const authenticateToken = (req, res, next) => {
  const authHeader = req.headers["authorization"];
  const token = authHeader && authHeader.split(" ")[1]; // Obtén el token del encabezado Authorization

  if (!token) return res.status(401).json({ error: "Token requerido" });

  jwt.verify(token, secret, (err, user) => {
    if (err) return res.status(403).json({ error: "Token inválido" });

    req.user = user;
    next();
  });
};

module.exports = { authenticateToken };
