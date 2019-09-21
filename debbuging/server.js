const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const port = 3000

app.use(bodyParser.json());

const users = [
  { 
    id: 1,
    name: 'Michał',
    lastname: 'Kowalski' 
  },
  { 
    id: 2,
    name: 'Jan',
    lastname: 'Kowalski' 
  },
  { 
    id: 3,
    name: 'Kamil',
    lastname: 'Kowalski' 
  }
];

app.get('/users', (req, res) => {
  res.send({ users });
});

app.get('/users/:id', (req, res) => {
  const id = Number(req.params.id);

  const user = users.find(user => user.id === id);

  res.send(user);
});


app.listen(port, () => console.log(`Example app listening on port ${port}!`));
