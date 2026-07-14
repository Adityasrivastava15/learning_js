// const tinderuser = newobject()

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

// console.log(tinderuser3.name.fullname)
 
const object1 = {1: "one", 2: "two", 3: "three"}   
const object2 = {1: "one", 2: "two", 3: "three"}

const object3 = Object.assign({}, object1, object2)

// console.log(object3)

const object4 = {...object1, ...object2}

// console.log(object4)


//de-structuring of objects mean extracting the values from the object and storing 
// them in variables


let adi = {
    name: "Aditya",
    age: 18,
    isloggedin: true,
    lastlogin: ["monday", "friday"]
}


let adi2=adi
adi2.age=20


let {name:firstName}=adi //de-structuring of adi object
let {age}=adi2


console.log(firstName)
console.log(age)

//++++++++++  NJSON API  ++++++++

// {
//     "name": "Aditya",
//     "batch": "B43WD",
//     "fees": 100000
// }
