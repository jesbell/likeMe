const { Pool } = require("pg");

// datos conexión
const nameUser = "";
const passUser = "";

const pool = new Pool({
    user: nameUser,
    host: 'localhost',
    password: passUser,
    database: "likeme",
    port: 5432,
});

const conectarDB = async () => {
    try {
        const res = await pool.query(`SELECT NOW()`);
        console.log("Conexion exitosa, fecha y hora actuales:", res.rows[0]);
    } catch (error) {
        console.error("Error al conectar a la Base de datos", error);
    }
}
//Llamar a la funcion de conectarDB
conectarDB();


module.exports = pool;

