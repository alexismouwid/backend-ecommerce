const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const dotenv = require("dotenv");
const app = express();
const { Auth, isAuthenticated} = require("./routes/auth"); // Importamos solo Auth

dotenv.config();
const port = process.env.PORT || 3000;
const databaseUrl = process.env.DATABASE_URL;

mongoose
  .connect(databaseUrl) // Cambia "tudatabase" por el nombre de tu base de datos
  .then(() => console.log("✅ Conectado a MongoDB"))
  .catch((err) => console.error("Error conectando a MongoDB:", err));
// Middleware
app.use(cors());
app.use(express.json());

// Rutas de autenticación
app.post("/login", Auth.login);
app.post("/register", Auth.register);
app.post("/orders", isAuthenticated, Auth.createOrder);
app.get('/orders/user', isAuthenticated, Auth.getUserOrders);

app.listen(port, () => console.log(`🚀 Servidor corriendo en puerto ${port}`));
