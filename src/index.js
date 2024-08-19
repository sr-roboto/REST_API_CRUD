import { app } from './app.js';
import { connectDb } from './utils/db.js';
import { PORT } from './config.js';

// ponemos en escucha al servidor
app.listen(PORT, '0.0.0.0', async () => {
  await connectDb();
  console.log(`🌌 Servidor inicializado en el puerto: ${PORT} 🌌`);
});
