const express = require('express');
const app = express();
const path = require('path');
const sql = require('mssql');
const PORT = 3000;

app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));

const config = {
  server: 'DESKTOP-7B7IA84\\SQLEXPRESS',
  database: 'MiBaseDeDatos', 
  options: {
    encrypt: false, 
    enableArithAbort: true
  }
};

app.get('/login', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

app.post('/login', async (req, res) => {
  const { correo, contraseña } = req.body;

  try {
    await sql.connect(config);

    const query = `INSERT INTO usuario_nuevo (correo, contrasena, fecha_creacion) VALUES ('${correo}', '${contraseña}', GETDATE());`;
    console.log('Consulta SQL:', query); // Muestra la consulta en la terminal
    const result = await sql.query(query);

    if (result.rowsAffected > 0) {
      res.send(`Ingresaste con el correo: ${correo}. Los datos se han guardado en la base de datos.`);
    } else {
      res.status(500).send('Error al guardar los datos en la base de datos.');
    }
  } catch (error) {
    console.error('Error al insertar en la base de datos:', error); // Muestra el error completo en la terminal
    res.status(500).send('Error al insertar en la base de datos.');
  } finally {
    sql.close();
  }
});

app.use((req, res) => {
  res.status(404).send('Página no encontrada');
});

app.listen(PORT, () => {
  console.log(`Servidor en funcionamiento en http://localhost:${PORT}`);
});


//Comandos en terminal para ejecutar la aplicacion
//npx create-react-app login-form
// npm init -y
// npm install express
// npm install
// npm install mssql
// node app.js

//Enlaces para la aplicación
// http://localhost:3000/saludo/Profe
// http://localhost:3000