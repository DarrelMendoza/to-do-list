const express = require('express');
const mysql = require('mysql');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(bodyParser.json());

// Configure MySQL connection
const db = mysql.createConnection({
  host: 'localhost',
  user: 'admin',
  password: 'admin',
  database: 'todo'
});

// Connect to MySQL
db.connect((err) => {
  if (err) throw err;
  console.log('Connected to the database');
});

app.get('/todos', (req, res) => {
  let sql = 'SELECT * FROM todos';
  db.query(sql, (err, results) => {
    if(err) throw err;
    res.send(results);
  });
});

app.post('/todos', (req, res) => {
  let task = req.body;
  let sql = 'INSERT INTO todos SET ?';
  db.query(sql, task, (err, result) => {
    if(err) throw err;
    res.send(result);
  });
});

app.delete('/todos/:id', (req, res) => {
  let sql = `DELETE FROM todos WHERE id = ${req.params.id}`;
  db.query(sql, (err, result) => {
    if(err) throw err;
    res.send(result);
  });
});

app.put('/todos/:id', (req, res) => {
  let sql = `UPDATE todos SET task = '${req.body.task}' WHERE id = ${req.params.id}`;
  db.query(sql, (err, result) => {
    if(err) throw err;
    res.send(result);
  });
});

const port = 5000;
app.listen(port, () => console.log(`Server started on port ${port}`));
