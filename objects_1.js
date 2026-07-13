//+++++++OBJECT literals+++++++//

const mysyn = Symbol("hlo");

const me = {
    name: "aditya",
    age: 18,
    city: "Noida",
    isloggedIn: true,
    lastLogin: [ "tuesday", "sunday" ],
    [mysyn]: "mykey",
};

//mysyn is a symbol which is used as a key in the object. 
// It is a unique identifier and cannot be accessed using dot notation or bracket
//  notation with a string. It can only be accessed using the symbol itself.

console.log(me.name);
console.log(me["city"]);  //another way to access the object properties
console.log(me[mysyn]);
console.log(typeof me[mysyn]);

//object.freeze() method freezes an object. A frozen object can no longer be changed


//functions inside objects are called methods. We can also override the methods of an object.


me.greet = function() {    
console.log("hey how are you..");
}

console.log(me.greet()); 

me.greet = function() {
    console.log(`hey how are you..., ${me.name}`); //overriding the greet method
}
console.log(me.greet());

