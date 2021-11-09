// Завдання 6
// Отримати масив користувачів, які потрапляють у вікову категорію від min до max років (поле age).

import users from './users.js';

const getUsersWithAge = (users, min, max) => {
  // твій код
  return users.filter(function (user) {
    return (user.age > min) & (user.age < max);
  });
};

console.log(getUsersWithAge(users, 20, 30)); // [об'єкт Ross Vazquez, об'єкт Elma Head, об'єкт Carey Barr]

console.log(getUsersWithAge(users, 30, 40));
// [об'єкт Moore Hensley, об'єкт Sharlene Bush, об'єкт Blackburn Dotson, об'єкт Sheree Anthony]
