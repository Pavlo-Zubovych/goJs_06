// Завдання 1
// Отримати масив імен всіх користувачів (поле name).

import users from './users.js';

console.log(users);

// const getUserNames = (users) => {
//   // твій код
//   const userName = [];
//   users.forEach(function (user) {
//     userName.push(user.name);
//   });
//   return userName;
// };

const getUserNames = (users) => {
  // твій код
  const userName = [];
  users.forEach((user) => userName.push(user.name));
  return userName;
};

console.log(getUserNames(users));
// [ 'Moore Hensley', 'Sharlene Bush', 'Ross Vazquez', '
//Elma Head', 'Carey Barr', 'Blackburn Dotson', 'Sheree Anthony' ]
