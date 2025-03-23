const mongoose = require("mongoose");

// 📌 Definir el esquema del pedido
const OrderSchema = new mongoose.Schema({
  user: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true }, // Relación con usuario
  products: [
    {
    
      name: { type: String, required: true }, // Nombre del producto
      quantity: { type: Number, required: true }, // Cantidad comprada
      price: { type: Number, required: true }, // Precio unitario
      subtotal: { type: Number, required: true } // Precio total por producto (price * quantity)
    }
  ],
  total: { type: Number, required: true }, // Suma de todos los subtotales
  buyerName: { type: String, required: true }, // Nombre del comprador
  address: { type: String, required: true }, // Dirección de envío
  email: { type: String, required: true }, // Correo del comprador
  phone: { type: String, required: true }, // Teléfono del comprador
  createdAt: { type: Date, default: Date.now } // Fecha de creación del pedido
});

// 📌 Crear el modelo de Pedido
const Order = mongoose.model("Order", OrderSchema);

module.exports = Order; // Exportar el modelo para usarlo en otros archivos

