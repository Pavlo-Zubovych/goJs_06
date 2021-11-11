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
