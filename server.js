const express = require('express');
const sqlite3 = require('sqlite3').verbose();
const app = express();
const port = 3000;

app.use(express.static('public'));

let db = new sqlite3.Database('./test.db', (err) => {
    if (err) {
        console.error(err.message);
    }
    console.log('Connected to the SQLite database.');
});

app.get('/users', (req, res) => {
    let sql = `SELECT id, name, email FROM users`;

    db.all(sql, [], (err, rows) => {
        if (err) {
            throw err;
        }
        res.json(rows);
    });
});

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}/`);
});
