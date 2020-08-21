import express from 'express';
import solc from 'solc';

const app = express();
//const port = 80;

//const server = require('http').createServer();
const port = process.env.PORT || 80;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get('/translate', (req, res) => {
  var input = req.body;

  var output = JSON.parse(solc.compile(JSON.stringify(input)));

  res.send(output);
});

app.listen(port, () => {
  console.log(`Listening at http://localhost:${port}`)
});