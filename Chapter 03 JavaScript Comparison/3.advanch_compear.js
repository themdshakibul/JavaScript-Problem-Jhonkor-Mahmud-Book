//! JavaScript Advanced Comparison Practice:

// 1. তোর কাছে 50 টাকা আছে, আর বন্ধুর কাছে আছে "50" টাকা (স্ট্রিং হিসেবে)। একটা প্রোগ্রাম লিখে দেখ, 50 == "50" দিলে আর 50 === "50" দিলে আউটপুট কী আসবে।
//! Ans:
const myBalench = 50;
const firendBalench = "50";

console.log(myBalench == firendBalench); // true
console.log(myBalench === firendBalench); // false

// 2. তোর প্রোগ্রামিং নোটবুকে "JavaScript" লিখে রেখেছিস, আর এটা একটা স্ট্রিং টাইপ ডাটা। এখন তুই দেখতে চাস "JavaScript" == 'JavaScript' আর "JavaScript" === 'JavaScript' দিলে কী আউটপুট আসবে। ব্যাখ্যা কর, কেন একই আউটপুট আসছে।
//! Ans:
const noteBook1 = "JavaScript";
const noteBook2 = "JavaScript";

// /**
//  *
//  * == (double equals)
//   এটা value কেবল চেক করে।
//   যদি ডাটা টাইপ আলাদা হয়, তখন JavaScript চেষ্টা করে type     coercion করতে।
//   এখানে: "JavaScript" এবং 'JavaScript' — দুইটাই string, তাই সরাসরি value চেক হয়।
//    *
//  */
console.log(noteBook1 == noteBook2); // true

// /**
//  * === (triple equals)
//   এটা value + type দুটোই চেক করে।
//   এখানে: "JavaScript" → string, 'JavaScript' → string
//   value এবং type উভয়ই মিলে → true
//  *
//  */
console.log(noteBook1 === noteBook2); //true

// 3. একটা প্রোগ্রাম লিখে দেখ, 25 এবং "25"-এর মধ্যে 25 == "25" এবং 25 === "25" দিলে কী আউটপুট আসবে এবং কেন সেটা হয়, সেটা কমেন্ট করে লিখ।
// //! Ans:
const num1 = 25;
const num2 = "25";
console.log(num1 == num2); // true

// tyep check kor 2 tar (value +  type) thik ache ki na
console.log(num1 === num2); // false

// 4. "apple" এবং "apple" লিখে তুলনা করলে, "apple" == "apple" এবং "apple" === "apple"-এর আউটপুট কী হবে।
// //! Ans:
const fruits1 = "apple";
const fruits2 = "apple";

console.log(fruits1 == fruits2); // true

// 5. একটা প্রোগ্রাম লিখে দেখ, "test" এবং "TEST"-এর মধ্যে "test" == "TEST" এবং "test" === "TEST"-এর আউটপুট কী হবে।

//! Ans:
const text1 = "test";
const text2 = "TEST";

// check kore value (type akoi string) karon value alada alada
console.log(text1 == text2); // false

// check kore value + type  value alda + type akoi tai string Comparison
console.log(text1 === text2); // false

// 6. variableX-এর মান 15 আর variableY-এর মান "20" দিলে variableX != variableY এবং variableX !== variableY-এর আউটপুট কী হবে।
//! Ans:
const variableX = 15;
const variableY = "20";

console.log(variableX != variableY); // true
console.log(variableX !== variableY); // true

// 7. variableA-এর মান hello আর variableB-এর মান "Hello"। এখন variableA == variableB এবং variableA === variableB চেক করার প্রোগ্রাম লিখ।

//! Ans:
// const variableA = hello;
// const variableB = "Hello";

// console.log(variableA == variableB); // erro
// console.log(variableA === variableB); //erro
