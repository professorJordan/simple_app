const express = require('express');
var cors = require('cors')
const PORT = process.env.PORT || 3001;
const app = express(),
      bodyParser = require("body-parser");

//begin app


app.use(cors())
app.use(bodyParser.json());

// place holder for the data
const users = {"name":"boopsies"};

app.get('/api/users', (req,res) => {
  console.log('api/users called!!!!')
  res.json(users);
});

app.post('/api/user', (req, res) => {
  const user = req.body.user;
  console.log('Adding user::::::::', user);
  users.push(user);
  //res.json({"user added."});
});

app.get('/', (req, res) => {
  console.log("received request")
    res.json({'message':'App Works !!!!'});
});

app.listen(PORT, () => {
    console.log(`Server listening on the port::${PORT}`);
});
