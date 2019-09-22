const firstInput = document.querySelector<HTMLInputElement>('#first');
const secondInput = document.querySelector<HTMLInputElement>('#second');
const button = document.querySelector('button');
const usersButton = document.querySelector('#usersButton');
const resultField = document.querySelector('#result');
const usersList = document.querySelector('ul');

const isNotEmpty = () => {
  const firstValue = firstInput.value;
  const secondValue = secondInput.value;

  return firstValue !== '' && secondValue !== '';
}

const displayResult = (result) => {
  resultField.textContent = result;
}

const addTwoNumbers = () => {
  const firstValue = firstInput.value;
  const secondValue = secondInput.value;

  return firstValue + secondValue;
}

const onButtonClick = (event) => {
  event.preventDefault();

  if (!isNotEmpty()) {
    throw new Error('Input cannot be empty');
  }

  const result = addTwoNumbers();
  displayResult(result);
}

const getUsers = async () => {
  const response = await fetch('https://jsonplaceholder.typicode.com/userss');
  const users = response.json();

  return users;
}

const displayUsers = (users) => {
  const documentFragment = document.createDocumentFragment();

  users.forEach(user => {
    const liElement = document.createElement('li');
    liElement.textContent = user.name;

    documentFragment.appendChild(liElement);
  });

  usersList.appendChild(documentFragment);
}

const onUsersButtonClick = async (event) => {
  event.preventDefault();

  const users = await getUsers();
  displayUsers(users);
}

button.addEventListener('click', onButtonClick);
usersButton.addEventListener('click', onUsersButtonClick);
