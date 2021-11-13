// Завдання 5
// Отримати користувача (не масив) по email (поле email, він унікальний).

import users from './users.js';

console.table(users);

// const getUserWithEmail = (users, email) => {
//   return users.find(function (user) {
//     return user.email === email;
//   });
// };

const getUserWithEmail = (users, email) =>
  users.find((user) => user.email === email);

console.log(getUserWithEmail(users, 'shereeanthony@kog.com')); // {об'єкт користувача Sheree Anthony}
console.log(getUserWithEmail(users, 'elmahead@omatom.com')); // {об'єкт користувача Elma Head}
