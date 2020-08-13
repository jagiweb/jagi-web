
// while loop

let final_summary = 0;
let i = 1;
while (i <= 50) {  
    final_summary += i;        
  i++;     
}
console.log(final_summary);  // 1275


// do while loop

let final_summary = 0;
let i = 1;
do {
   final_summary += number;
   i++;              
} while (i <= 50);   
console.log(final_summary);


// for loop

let final_summary = 0;
for (let i = 1; i <= 50; i++) {
   final_summary = final_summary + i;
}
console.log(final_summary);   

// for-in loop

let person = { name:"Joe", age: 30, degree: "Masters" };
for (let key in person) {
   console.log(person[key]);     // => "Joe", then 30, then "Masters"
}

// break statement

let final_summary = 0;
for (let i = 1; i <= 10000; i++) {
   final_summary += i;
   if (i === 50) {
       break;    // immediately break the loop and jump outside the for loop block
   }
}
console.log(final_summary);       // 1275

// continue statement

for (let i = 1; i <= 10; i++)
{
   if ((i % 2) != 0) {
      continue;
   }
   console.log(i);           // => 2, 4, 6, 8, 10
}


