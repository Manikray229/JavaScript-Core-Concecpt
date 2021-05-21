//JSON
const person = {
    name: 'Manik',
    age: 25
}
// console.log(JSON.stringify(person))
//JSON convert back and forth 
const data = JSON.stringify(person);
const dataParsed = JSON.parse(data);
// console.log(dataParsed.name)


// /API fetch must jante hobe 
// fetch(url)
// .then(res => res.json())
// .then(data => console.log(data))

//local storage 
// localStorage.setItem('userId', 4545);
const userId = localStorage.getItem('userId');
console.log(userId);