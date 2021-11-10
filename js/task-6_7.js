// Завдання 7
// Отримати загальну суму балансу (поле balance) всіх користувачів.

import users from './users.js';

console.log(users);

const calculateTotalBalance = (users) => {
  return users.reduce(function (totalBalanse, user) {
    return (totalBalanse += user.balance);
  }, 0);
};

console.log(calculateTotalBalance(users)); // 20916
