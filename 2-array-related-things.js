const number = [54, 74, 877, 45, 45];
const friends = ['Manik ', 'liton', 'shuvo'];

//ei ta k array of object bole
const products = [
    {id:1, name: 'laptop', price: 445},
    {id:2, name: 'mobile', price: 665},
    {id:3, name: 'watch', price: 454}, 
    {id:4, name: 'tablet', price:20},
]


//nap
const names = products.map(product => product.name);
const prices = products.map(pd => pd.price);
console.log(names);
console.log(prices)