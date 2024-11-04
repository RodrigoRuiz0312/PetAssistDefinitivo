const mysql = require('mysql2');

const db = mysql.createConnection({
    host: 'localhost',
    database: 'petassist',
    user: 'root',        // Intenta con un valor vacío
    password: ''     // También vacío para probar
});

db.connect(err => {
    if (err) {
        console.error('Error de conexión a MySQL:', err);
        return;
    }
    console.log('Conectado a MySQL');
});

module.exports = db;