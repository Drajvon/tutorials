const _ = require('lodash');

const user = {
  firstname: 'Kamil',
  lastname: 'Kowalski',
  city: 'Warszawa',
  street: 'Mickiewicza',
  nick: 'Drycode',
};

const data = [[1, 2],[3, 4], [5, 6]];

const newUser = _.pick(user, ['firstname', 'lastname']);
const formattedArray = _.flatten(data);

console.log(newUser);
console.log(formattedArray);
console.log('DRYCODE');
