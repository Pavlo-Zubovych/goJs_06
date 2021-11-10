// const users = [
//   { name: 'Mango', daysActive: 15 },
//   { name: 'Poly', daysActive: 4 },
//   { name: 'Ajax', daysActive: 27 },
//   { name: 'Chelsey', daysActive: 2 },
// ];

// const sortByActiveDays = (a, b) => a.daysActive - b.daysActive;

// console.log(users.sort(sortByActiveDays));

// Завдання 9
// Масив імен (поле name) людей, відсортованих в залежності від кількості їх друзів (поле friends)

import users from './users.js';

console.table(users);

const getNamesSortedByFriendsCount = (users) => {
  const sortByFriendsCount = (a, b) => a.friends.length - b.friends.length;
  return users.sort(sortByFriendsCount);
  // твій код
};

console.table(getNamesSortedByFriendsCount(users));
// [ 'Moore Hensley', 'Sharlene Bush', 'Elma Head', 'Carey Barr', 'Blackburn Dotson', 'Sheree Anthony', 'Ross Vazquez' ]
