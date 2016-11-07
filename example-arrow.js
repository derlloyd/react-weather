var names = ['Guy', 'Mark', 'Terry'];

names.forEach(function(name) {
    console.log('foreach ', name);
});

names.forEach((name) => {
    console.log('arrow func ', name)
});

names.forEach((name) => console.log(name));

// expression version, all in 1 line
var returnMe = (name) => name + '!';

console.log(returnMe('Jeff'));``

// expression version, multiple lines
function add(a, b) {
    return a + b;
};


var addStatement = (a, b) => {
    a + b
};



// addExpression = 

console.log(add(2, 4));
console.log(add(0, 9));


