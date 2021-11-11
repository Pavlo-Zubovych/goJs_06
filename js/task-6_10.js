// Завдання 10
// Отримати масив всіх умінь всіх користувачів (поле skills), при цьому не має бути повторюваних умінь і вони повинні бути відсортовані в алфавітному порядку.

import users from './users.js';

console.table(users);

const getSortedUniqueSkills = (users) => {
  return users
    .reduce(function (acc, user) {
      return (acc = [...acc, ...user.skills]);
    }, []) // отримали масив з усіма скілами всіх юзерів
    .reduce(function (acc, skill) {
      !acc.includes(skill) ? acc.push(skill) : acc;
      return acc;
    }, []) // тепер в масиві не повторюються скіли
    .sort(); // відсортували скіли в алфавітномму порядку;
};

console.log(getSortedUniqueSkills(users));

// [ 'adipisicing', 'amet', 'anim', 'commodo', 'culpa', 'elit', 'ex', 'ipsum', 'irure', 'laborum', 'lorem', 'mollit', 'non', 'nostrud', 'nulla', 'proident', 'tempor', 'velit', 'veniam' ]
