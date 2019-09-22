import * as express from 'express';
import { Request, Response } from 'express';
import * as bodyParser from 'body-parser';

import { User } from './interfaces';

const app = express();
const port = 3000

app.use(bodyParser.json());

const users: User[] = [
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

app.get('/users', (req: Request, res: Response): void => {
  res.send({ users });
});

app.get('/users/:id', (req: Request, res: Response): void => {
  const id = Number(req.params.id);

  const user = users.find(user => user.id === id);

  res.send(user);
});


app.listen(port, () => console.log(`Example app listening on port ${port}!`));
