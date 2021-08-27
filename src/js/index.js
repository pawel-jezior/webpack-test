import moment from 'moment';
import '../scss/main.scss';

const helloInConsole = "Hello";
const someNumber = 123;

console.log(moment().format('dddd'));


console.log("hello");
console.log(helloInConsole);
console.log(someNumber);

console.log(
  `Cześć to po angielsku ${helloInConsole}, a to jest jakas liczba - ${someNumber} :)`
);

const mainTitle = document.querySelector(".main__title--js");

console.log(mainTitle);

mainTitle.innerHTML = `Cześć to po angielsku ${helloInConsole}, a to jest jakas liczba - ${someNumber} :)`;

const greet = (myName) => console.log(`Cześć ${myName}`);

greet("Kamil");

const whiteTable = {
  height: 60,
  weight: 90,
  makePoem: (nameOfBeauty) =>
    console.log(`My Darling ${nameOfBeauty} I don't want live without you...`),
  color: "white",
  nameOfTable: "White Table",
  myOwner: "Pawel is my owner",
  onWall: true,
  ownerData: {
    ownerName: "Pawel",
    ownerAge: 29,
  },
};

console.log(whiteTable.makePoem("Diana"));
console.log(
  `Dimensions of table are ${whiteTable.height} x ${whiteTable.weight} :)`
);

console.log(whiteTable.ownerData.ownerAge);

const buttonMenuMobile = document.querySelector(".button__menu--js");

buttonMenuMobile.addEventListener('click', () => { 
  const standardMenu = document.querySelector(".navigation__links_div");
  standardMenu.classList.toggle('navigation__links__open');

})

