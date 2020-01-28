const express = require('express');

const app = express();
const port = 4567;

app.use('/.well-known/acme-challenge', express.static('certs'));

app.listen(port, () => console.log(`Listening on port ${port}`));