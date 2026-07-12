let myARR = [0 , 1, 2, 3, 4, ];
console.log(myARR[4]);  

myARR.push(11);
myARR.push(10);


myARR.pop();
console.log(myARR);

myARR.unshift(4);
console.log(myARR);

myARR.shift();
console.log(myARR);

console.log(myARR.includes(9));
console.log(myARR.indexOf(4));

const newARR = myARR.join(',');

console.log(typeof myARR);
console.log(typeof newARR);
;
console.log("A", myARR);


const myn1=myARR.slice(1,3);
console.log(myn1);



const myn2 =myARR.splice(1,3)
console.log(myn2);

