// 1.write a javascript code to add an element to the end of an array using the push method.
// Example: [1,2,3] -> [1,2,3,4]

// code.
var a = [1,2,3];
a.push(4);

console.log(a)    //output---[1,2,3,4]

// 2.write a javascript code to remove the last element from an array using the pop method.
// Example: [1,2,3,4] -> [1,2,3]

// code.
var b = [1,2,3,4];
b.pop();

console.log(b)    //output--- [ 1, 2, 3 ]

// 3.write a javascript code to add an element to the begining of an array using the Unshift method.
// Example: [2,3,4] -> [1,2,3,4]

// code.
var c = [2,3,4];
c.unshift(1);

console.log(c)    //output--- [ 1, 2, 3, 4 ]

// 4.write a javascript code to remove the first element from an array using the shift method.
// Example: [1,2,3,4] -> [2,3,4]

// code.
var d = [1,2,3,4];
d.shift();

console.log(d)    //output--- [ 2, 3, 4 ]

// 5.write a javascript code to convert an array into a string using the join method.
// Example: [1,2,3] -> "123"

// code.
var e = [1,2,3];
let x = e.join('');

console.log(x)     //output--- "123"

                          //choose correct answer

// 1. What will be the output of [1, 2, 3, 4].pop() ? 
       
// (A) [1, 2, 3, 4]
// (B) [1, 2, 3]     [B-Right answer]
// (C) [2, 3, 4]
// (D) Error

// Ans:[B]

// how:
var f = [1,2,3,4];
f.pop();

console.log(f) //output--- [ 1, 2, 3 ]

// 2. What will be the output of [1, 2, 3].push(4) ? 
      
// (A) [1, 2, 3]
// (B) [1, 2, 3, 4]    [B-Right answer]
// (C) [4, 1, 2, 3]
// (D) Error

// Ans:[B]

// how.
var g = [1,2,3];    
g.push(4);         

console.log(g)       //output-- [1, 2, 3, 4 ]

// 3. What will be the output of [1, 2, 3, 4].shift() ? 
      
// (A) [1, 2, 3, 4]
// (B) [2, 3, 4]      [B-Right answer]
// (C) [1, 2, 3]
// (D) Error

// Ans:[B]

// how.
var h = [1,2,3,4];  
h.shift();      

console.log(h)       //output-- [ 2, 3, 4 ]

// 4. What will be the output of [2, 3, 4].unshift(1) ? 
      
// (A) [2, 3, 4]
// (B) [1, 2, 3, 4]     [B-Right answer]
// (C) [1, 3, 4]
// (D) Error

// Ans:[B]

// how.
var i = [2,3,4];    
i.unshift(1);       

console.log(i)      //output-- [1, 2, 3, 4 ]


// 5. What will be the output of [1, 2, 3].join("") ?  
      
// (A) 123       [A-Right answer]
// (B) [1, 2, 3]
// (C) 1 2 3
// (D) Error

// Ans:[A]

// how.
var j = [1,2,3];
let y = j.join("");
console.log(y)        //output-- "123"

