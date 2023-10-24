// Пошук елементів

// Отже, ми вже знаємо що DOM - елемент - це об'єкт з властивостями і
// методами.Саме час навчитися швидко знаходити елемент за довільним
// CSS - селектором.Група методів elem.querySelector * - це сучасний
// стандарт для пошуку елементів.Вони дозволяють знайти елемент або
// групу елементів за CSS - селектором будь - якої складності.

// element.querySelector(selector);

// Використовується, якщо необхідно знайти тільки один, найчастіше
// унікальний елемент.

// Повертає перший знайдений елемент всередині element, що
// відповідає CSS - селектору selector.
// Якщо нічого не знайдено, поверне null.

//element.querySelectorAll(selector);

// Використовується, якщо необхідно знайти колекцію елементів, тобто
// отримати масив посилань на елементи з однаковим селектором.
// Наприклад, всі елементи списку з класом menu - item.

// Повертає псевдомасив всіх елементів всередині element, які
// відповідають CSS - селектору selector.
// Якщо нічого не знайдено, поверне порожній масив.

// const listWithId = document.querySelector('#menu');
// listWithId.style.textTransform = 'uppercase'
// listWithId.style.fontSize = '22px'
// console.log(listWithId)

// const listWithClass = document.querySelector('.menu')
// console.log(listWithClass)

// const menuItemsByTagName = document.querySelectorAll('li')
// console.log(menuItemsByTagName)

// const menuItemsByClass = document.querySelectorAll('.menu-item')
// console.log(menuItemsByClass)

// const firstMenuItem = document.querySelector('.menu-item')
// firstMenuItem.style.color = 'tomato'
// console.log(firstMenuItem)