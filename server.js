const express = require('express');

const path = require('path');

const routes = require('./routes');

const app = express();
const port = 3000;

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, './views'));

app.use(express.static(path.join(__dirname, './static')));

app.use('/', routes());

app.get('/speakers', (req, res) => {
  res.sendFile(path.join(__dirname, './static/speakers.html'));
});

app.get('/feedback', (req, res) => {
  res.sendFile(path.join(__dirname, './static/feedback.html'));
});

app.get('/Hillary_Goldwynn', (req, res) => {
  res.sendFile(path.join(__dirname, './static/Hillary_Goldwynn.html'));
});

app.listen(port, () => {
  console.log(`Server running in port: ${port}`);
});
