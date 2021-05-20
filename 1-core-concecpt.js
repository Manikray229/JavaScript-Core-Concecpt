// 1 variable : let, const 
let money = 20;
money = 12 ;

const name = "Manik" ;


//boolean 
let isConfident = true

//object 
const person = {
    name : "Manik",
    age: 22,
    city: "Dinajpur",
}



// dynamic string 

const statement = `this person ${name} with age ${person.age}`


//condition 
if(money > 20 && age >= 45){

}
else{

}

//array
const numbers = [54, 54, 45, 56,];
const friends = ['Manik', 'Mani Ray'];
//array maje object o rakte pari 
const products = [{name: 'laptop', price:53}, {name:'mobile', price: 545}, {name: 'iphone', price: 42}];

//loop jante hobe , for and while loop, for loop must valo vabe jante hobe 
for (let i = 0; i < numbers.length; i++) {
    const number = numbers[i];
    
}

// function must be jantei hobe , regular function and arrow function ,
//arrow function valo jante hobe, na hole samne agano jabe na 
//regular function 
function add (num1, num2){
    return num1 + num2;
}

const result = add(45, 77);
console.log(result)

//arrow function, jodi single parameter  thake...
const fiveTimes = num1 => num1*5 ;

// arrow function , jodi double parameter theke,,
const add2 = ( num1, num2) => num1 + num2 ;

// jodi function ar vitor onek gula kaj korte hoy.
const doMath = (x, y) =>{
    const sum = x + y;
    return sum ;
}