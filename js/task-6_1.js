// Завдання 1
// Отримати масив імен всіх користувачів (поле name).
import { users } from './users.js';
const userName = [];
const getUserNames = (users) => {
  // твій код
  userName.push(users.name);
};

console.log(getUserNames(users));
// [ 'Moore Hensley', 'Sharlene Bush', 'Ross Vazquez', 'Elma Head', 'Carey Barr', 'Blackburn Dotson', 'Sheree Anthony' ]
