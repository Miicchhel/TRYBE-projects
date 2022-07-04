document.cookie = 'email = michel.ferreira.melo@gmail.com';
document.cookie = 'github = www.github.com/Miicchhel';

const myCookie = document.cookie;
console.log(myCookie);

document.cookie = 'email = maria.luciana@upe.br';
const newCookie = document.cookie;
console.log(newCookie);

document.cookie = 'email=;expires=Tue,01 Dec 2020 12:00:00 UTC';