const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const port = process.env.PORT || 4567;

const db = require('./src/db/db.js');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/api/hello', (req, res) => {
  res.send({ express: 'Hello From Express' });
});

app.get('/test', (req, res) => {
    db.test();
    res.send('yeet');
})

app.post('/api/world', (req, res) => {
  console.log(req.body);
  res.send(
    `I received your POST request. This is what you sent me: ${req.body.post}`,
  );
});

app.listen(port, () => console.log(`Listening on port ${port}`));