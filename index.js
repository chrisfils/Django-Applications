let example1 = ['Chris',5,true];
let example2 = example1.map((Element) => {
    return Element;
});

example2.push(11);


console.log(example1);
console.log(example2);
