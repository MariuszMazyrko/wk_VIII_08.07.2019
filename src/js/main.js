const text__box = document.querySelector('.text__box--js');
const load = document.querySelector('.button__load--js');
const save = document.querySelector('.button__save--js');



console.log(load);
console.log(save);
console.log(text__box);

save.addEventListener('click', (e) => {
    e.preventDefault();
    console.log(text__box.value)
    localStorage.setItem('text__box--js', text__box.value);
})

load.addEventListener('click', (e) => {
    e.preventDefault();
    text__box.value = localStorage.getItem('text__box--js');
})



// focusInput.addEventListener('keyup', (e) => {
//     console.log(e.value);
// });

// if (localStorage.getItem('focusInput').length > 0) {
//     focusInput.value = localStorage.getItem('focusInput');
// }

// focusInput.addEventListener('keyup', (e) => {
//     localStorage.setItem('focusInput', e.target.value);
// });

const person = {
    name: 'Mariusz',
    age: 39
}

console.log(person);
const jsonPerson = JSON.stringify(person);
console.log(jsonPerson);

localStorage.setItem('person', jsonPerson);

const getItemPerson = localStorage.getItem('person');

const newPerson = JSON.parse(getItemPerson);
console.log(newPerson);


localStorage.setItem('imie', 'Mariusz');
localStorage.setItem('nazwisko', 'Mazyrko');