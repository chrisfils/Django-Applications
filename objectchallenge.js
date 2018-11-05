let example1 = {
    firstName: 'Chris'
};
let example2 = Object.assign({}, example1) ;

example2.lastName= 'Rukundo';
console.log(example1); 
console.log(example2);
