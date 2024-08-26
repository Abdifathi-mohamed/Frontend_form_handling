import express from "express";

const app = express();

app.listen(8080, () => {    
    console.log('Server listening on port 8080');
});







/* 

const express = require('express');

const bodyParser = require('body-parser');

const mysql = require('mysql2');


const app = express();

const port = 3000;

app.use(bodyParser.json());


const db = mysql.createConnection({

host: 'localhost',

user: 'root', // replace with your MySQL username

password: 'root123', // replace with your MySQL password

database: 'expense_tracker'

});



db.connect((err) => {
    if (err) {
        throw err;
    }
    console.log('MySQL connected...');
});


app.post('/expenses', (req, res) => {
    const { name, amount } = req.body;
    const query = 'INSERT INTO expenses (name, amount) VALUES (?, ?)';
db.query(query, [name, amount], (err, result) => {
    if (err) {
        return res.status(500).json({ error: err.message });
    } res.status(201).json({ id: result.insertId, name, amount });
});

});


app.get('/expenses', (req, res) => {
    const query = 'SELECT * FROM expenses';
    
    db.query(query, (err, results) => {
        if (err) {
             return res.status(500).json({ error: err.message });
    } res.status(200).json(results);

    });

});


app.delete('/expenses/:id', (req, res) => {
    const { id } = req.params;
    const query = 'DELETE FROM expenses WHERE id = ?';
db.query(query, [id], (err, result) => {
    if (err) {
        return res.status(500).json({ error: err.message });
    } res.status(200).json({ message: 'Expense deleted successfully' });

});

});


app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});

*/