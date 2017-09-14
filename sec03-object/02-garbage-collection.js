function marry (man, women) {
    women.husband = man;
    man.wife = women;

    return {
        father: man,
        mother: women,
    }
}

let family = marry(
    {
        name: 'John',
    },
    {
        name: 'Ann'
    }
);

console.log(family);
// return { father: { name: 'John', wife: { name: 'Ann', husband: [Circular] } },
//          mother: { name: 'Ann', husband: { name: 'John', wife: [Circular] } } }

console.log(family.father.wife.husband.wife.husband.name);
