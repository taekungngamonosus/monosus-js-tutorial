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
console.log(family.father.wife.husband.wife.husband.name); // Circular