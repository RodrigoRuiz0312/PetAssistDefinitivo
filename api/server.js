const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const bcrypt = require('bcrypt'); // Importa bcrypt
const app = express();
const db = require('./db');

app.use(cors());
app.use(bodyParser.json());

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Servidor corriendo en el puerto ${PORT}`);
});

// Ruta para registrar un nuevo usuario
app.post('/api/registro', (req, res) => {
    const { usuario, contraseña, tipo } = req.body;
    
    // Hash de la contraseña
    const hashedPassword = bcrypt.hashSync(contraseña, 10);
    
    db.query('INSERT INTO usuarios (usuario, contraseña, tipo) VALUES (?, ?, ?)', [usuario, hashedPassword, tipo], (err, result) => {
        if (err) {
            return res.status(500).send('Error al registrar el usuario');
        }
        res.status(201).send({ message: 'Usuario registrado con éxito' });
    });
});

// Ruta para iniciar sesión
app.post('/api/login', (req, res) => {
    const { usuario, contraseña } = req.body;
    
    db.query('SELECT * FROM usuarios WHERE usuario = ?', [usuario], (err, results) => {
        if (err) {
            return res.status(500).send('Error en la base de datos');
        }
        if (results.length === 0) {
            return res.status(401).json({ message: 'Usuario no encontrado' });
        }
        
        const user = results[0];
        
        // Verifica la contraseña
        if (bcrypt.compareSync(contraseña, user.contraseña)) {
            res.json({ message: 'Login exitoso', user: user });
        } else {
            res.status(401).json({ message: 'Contraseña incorrecta' });
        }
    });
});