let marvelheroes = ["Iron Man", "Thor", "Hulk",];   
let dcheroes = ["Batman", "Superman", "Wonder Woman", ]

marvelheroes.push(dcheroes);
dcheroes.push(marvelheroes);

console.log(marvelheroes);
console.log(marvelheroes[2]);

let allheroes = marvelheroes.concat(dcheroes);
console.log(allheroes);

let allheroes2 = [...marvelheroes, ...dcheroes];
console.log(allheroes2);



let newarray = [1, 2, 3, [4, 5 , 7, 8], 9, 10, 11, [12, 13, 14, 15, [16, 17], 18, 19, 20]]; 
let newarray2 = newarray.flat(2);
console.log(newarray2); 

//++++++++ conversion of string to array++++++++++++


console.log(Array.isArray("Hello World"));
console.log(Array.from("Hello World"));


//+++++++converting multiplr variables into array++++++++++++

let a = 1;
let b = 2;
let c = 3;

const arr = Array.of(a, b, c);
console.log(arr);