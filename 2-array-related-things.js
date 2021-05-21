const number = [54, 74, 877, 45, 45];
const friends = ['Manik ', 'liton', 'shuvo'];

//ei ta k array of object bole
const products = [
    {id:1, name: 'laptop', price: 445},
    {id:2, name: 'mobile', price: 665},
    {id:3, name: 'watch', price: 54}, 
    {id:4, name: 'tablet', price:20},
]


//onek gula property theke ekta value nite hobe , map use korte hobe

const names = products.map(product => product.name);
const prices = products.map(pd => pd.price);

//jodi multi line arrow function likhi , tahole return korte hobe
const prices2 = products.map(pd => {
    //jodi ar o kaj thake , shudu last a return kore dite hobe..
    return pd.price;
})

console.log(names);
console.log(prices2)

//forEach
products.forEach(product => console.log(product.name));

//filter, kom dami product gula nibo
 
const cheaper = products.filter(pd => pd.price < 100);

console.log(cheaper);

// remove an item using filter 
const remaining = products.filter(pd => pd.id !=3 )
console.log(remaining);

//find 
const hasWatch = products.find(pd => pd.name === 'watch');
console.log(hasWatch);