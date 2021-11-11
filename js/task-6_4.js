// Завдання 4
// Отримати масив тільки неактивних користувачів (поле isActive).

import users from './users.js';

console.table(users);

const getInactiveUsers = (users) => {
  // твій код
  return users.filter(function (user) {
    return !user.isActive;
  });
};

console.table(getInactiveUsers(users));
// [об'єкт Moore Hensley,
// об'єкт Ross Vazquez,
// об'єкт Blackburn Dotson]
