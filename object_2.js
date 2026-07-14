const tinderuser = newobject()

const tinderuser2 = {}

tinderuser2.name = "John Doe"
tinderuser2.age = 30
tinderuser2.isloggedin = true 

// console.log(tinderuser2)

const tinderuser3 = { 
    id: "adi@gmail.com",
    name:{
        fullname: "Aditya",
        lastname: "Kumar"
    },
    age: 25,
    isloggedin: false
    }

console.log(tinderuser3.name.fullname)
 
const object1 = {1: "one", 2: "two", 3: "three"}   
const object2 = {1: "one", 2: "two", 3: "three"}

const object3 = Object.assign({}, object1, object2)

console.log(object3)

const object4 = {...object1, ...object2}

console.log(object4)