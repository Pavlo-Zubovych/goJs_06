// Завдання 3
// Отримати масив імен користувачів за статтю (поле gender).

import users from './users.js';

console.table(users);

const getUsersWithGender = (users, gender) => {
  // твій код
  return users.filter(function (user) {
    return user.gender === gender;
  });
};

console.table(getUsersWithGender(users, 'male')); // [ 'Moore Hensley', 'Ross Vazquez', 'Carey Barr', 'Blackburn Dotson' ]

console.table(getUsersWithGender(users, 'female'));
