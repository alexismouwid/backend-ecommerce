
// 📌 Endpoint para crear un pedido (requiere autenticación)
async function crearPedido() {
  try {
    const order = await Order.create({
      user: "661beef5b3f12345abcd6789", // Reemplaza con un ID válido de usuario
      products: [
        {
          productId: "661beef5b3f12345abcd6790", // Reemplaza con un ID válido de producto
          name: "Laptop Dell XPS 15",
          quantity: 1,
          price: 1500,
          subtotal: 1500
        }
      ],
      total: 1500,
      buyerName: "Juan Pérez",
      address: "Calle Falsa 123",
      email: "juan.perez@example.com",
      phone: "+123456789"
    });

    console.log("🛒 Pedido guardado:", order);
    mongoose.connection.close(); // Cerrar conexión después de la prueba
  } catch (error) {
    console.error("❌ Error al crear pedido:", error);
  }
}

// Llamar a la función después de que el servidor esté listo
crearPedido();

