const advertising = document.querySelector('.adv');
const books = document.querySelectorAll('.book');
const bookstick = document.querySelector('.books');
const book4 = books[4].querySelector('a');
const book2 = books[0].querySelectorAll('li');
const book5 = books[5].querySelectorAll('li');
const book6 = books[2].querySelector('ul');

books[1].after(books[0]);
books[4].after(books[3]);
bookstick.append(books[2]);

document.body.style.backgroundImage = 'url(./image/adv.jpg)';

book4.textContent = 'Книга 3. this и Прототипы Объектов';

advertising.remove();

book2[0].after(book2[1]);
book2[1].after(book2[3]);
book2[3].after(book2[6]);
book2[6].after(book2[8]);
book2[8].after(book2[4]);
book2[4].after(book2[5]);
book2[5].after(book2[7]);
book2[7].after(book2[9]);

book5[1].after(book5[9]);
book5[9].after(book5[3]);
book5[4].after(book5[2]);
book5[2].after(book5[6]);
book5[7].after(book5[5]);
book5[5].after(book5[8]);

book6.insertAdjacentHTML('beforeend', '<li> Глава 8: За пределами ES6 </li>');

const book6p8 = book6.querySelectorAll('li');
book6p8[10].after(book6p8[9]);