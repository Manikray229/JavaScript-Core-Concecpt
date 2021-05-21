//array destructuring 
// const numbers = [46, 55];
// const x = numbers[0];
// const y = numbers[1]
// console.log(x, y);

// const [x, y]= [46, 55];
// console.log(x, y);

// const numbers =[45, 54, 24, 54, 21, 21];
// const [x, y ] = numbers ;
// console.log(x, y)

// function boxify(num1){
//     return num1 , num1 + 5;
// }

// let [box1, box2] = boxify(8);
// console.log(box1, box2);


//object destructuring 

// const person = {name: 'Manik', age: 23, id: 45};
// const {name, age } = person ;
// console.log(name, age) 

//three dots 
const numbers = [45, 65, 41, 65];
const newNumbers = [...numbers, 45, 45]
console.log(newNumbers)