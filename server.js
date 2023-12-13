const express = require('express');
const bodyParser = require('body-parser');

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/', (req, res) => {
  res.json({ message: 'Welcome to the application.' });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});

const { Pool } = require('pg');

const pool = new Pool({
  user: 'douramirez',
  host: 'localhost',
  database: 'miestacionamiento',
  password: 'Douglasl123',
  port: 5432,
});

pool.on('connect', () => {
  console.log('connected to the db');
});

app.get('/historial', async (req, res) => {
  const { rows } = await pool.query('SELECT * FROM historial');
  res.send(rows);
});

app.post('/historial', async (req, res) => {
  const { direccion, precio, estado } = req.body;
  await pool.query('INSERT INTO historial (direccion, precio, estado) VALUES ($1, $2, $3)', [direccion, precio, estado]);
  res.status(201).send('Arriendo added');
});