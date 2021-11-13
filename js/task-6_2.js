// Отримати масив об'єктів користувачів за кольором очей
// (поле eyeColor).

import users from './users.js';

console.table(users);

//_______самоділяльність___________________

// const testFilter = users.filter(function (user) {
//   return user.eyeColor === 'blue';
// });

// console.table(testFilter);

// _____виконане завдання_________________

// const getUsersWithEyeColor = (users, color) => {
//   return users.filter(function (user) {
//     return user.eyeColor === color;
//   });
// };

const getUsersWithEyeColor = (users, color) =>
  users.filter((user) => user.eyeColor === color);

console.table(getUsersWithEyeColor(users, 'blue')); // [об'єкт Moore Hensley, об'єкт Sharlene Bush, об'єкт Carey Barr]
