// Завдання 8
// Масив імен всіх користувачів у яких є друг із зазначеним ім'ям.

import users from './users.js';

console.table(users);

// const getUsersWithFriend = (users, friendName) => {
//   return users.reduce(function (acc, user) {
//     if (user.friends.includes(friendName)) {
//       acc.push(user.name);
//     }
//     return acc;
//   }, []);
//   // твій код
// };

const getUsersWithFriend = (users, friendName) =>
  users.reduce((acc, user) => {
    if (user.friends.includes(friendName)) {
      acc.push(user.name);
    }
    return acc;
  }, []);

console.log(getUsersWithFriend(users, 'Briana Decker'));
// [ 'Sharlene Bush', 'Sheree Anthony' ]
console.log(getUsersWithFriend(users, 'Goldie Gentry'));
// [ 'Elma Head', 'Sheree Anthony' ]
