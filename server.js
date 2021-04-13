const express = require('express');
const notes = require('./db/db.json')
const app = express();
const PORT = 8080;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.get('/api/notes', (req, res) => {
    return res.json(notes);
  });

app.listen(PORT, () => console.log(`App listening on PORT ${PORT}`));