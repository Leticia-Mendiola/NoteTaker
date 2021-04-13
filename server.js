const express = require('express');
const notes = require('./db/db.json')
const home = require('./public/index.html')
const app = express();
const PORT = 8080;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.get('/', (req, res) => res.send(home));

app.get('/api/notes', (req, res) => {
    return res.json(notes);
});

app.post('/api/notes', (req, res) => {
    const newNote = req.body;
    console.log(newNote);
    notes.push(newNote);
    res.json(newNote);
});

app.listen(PORT, () => console.log(`App listening on PORT ${PORT}`));