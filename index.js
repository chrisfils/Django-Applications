let example1 = {
    firstName: 'Chris',
    lastName: 'Israel',
    address: {
        city: 'Kigali',
        province: 'Kigali city'
    },
    age: 30,
    cats: ['Milo','Tito','Achiles']
};
example1.age = 31;
console.log(Object.keys(example1))