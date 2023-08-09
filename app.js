const express = require('express');
const app = express();
const PORT = 3000;

app.get('/', (req, res) => {
  res.send('¡Hola! Esta es una apicación para la materia de LIS.');
});

app.get('/saludo/:nombre', (req, res) => {
  const nombre = req.params.nombre;
  //Sustituir en "nombre", el valor en el enlace
  res.send(`¡Hola, ${nombre}! Bienvenido a nuestro ejemplo con Node.js.`);
});

app.use((req, res) => {
  res.status(404).send('Página no encontrada');
});


app.listen(PORT, () => {
  console.log(`Servidor en funcionamiento en http://localhost:${PORT}`);
});


//Comandos en terminal para ejecutar la aplicacion
// npm init -y
// npm install express
// node app.js

//Enlaces para la aplicación
// http://localhost:3000/saludo/Profe
// http://localhost:3000