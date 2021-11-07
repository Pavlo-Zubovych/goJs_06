// Отримати масив об'єктів користувачів за кольором очей
// (поле eyeColor).

import users from './users.js';

//_______так получилось___________________

const testFilter = users.filter(function (user) {
  return user.eyeColor === 'blue';
});

console.table(testFilter);

// __тут щось роблю  не правельно_________________

const getUsersWithEyeColor = (users, color) => {
  // твій код
  users.filter(function (user) {
    return user.eyeColor === color;
  });
};

console.log(getUsersWithEyeColor(users, 'blue')); // [об'єкт Moore Hensley, об'єкт Sharlene Bush, об'єкт Carey Barr]

// Стрелки
// const add = (a, b, c) => {
//   console.log(a, b, c);
//   return a + b + c;
// };
// add(1, 2, 3);
// console.log(add(1, 2, 3));
