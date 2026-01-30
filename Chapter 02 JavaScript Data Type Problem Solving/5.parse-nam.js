//! JavaScript Parse Practice:

// 1. ধর তুই একটা মজার অঙ্ক করছিস। তুই ‘20’ লিখে ফেললি, কিন্তু সেটা স্ট্রিং আকারে। স্ট্রিং থেকে আসল সংখ্যায় কনভার্ট করে তার সাথে 10 যোগ করতে পারবি?

//! Ans:
let num = "20";
let numbers = parseInt(num) + 10;
console.log(Number(numbers));

// Output = 30

// 2. তোর কাছে একটা ভগ্নাংশ আকারে মান আছে, যেমন '3.14159'। এই মানটা পূর্ণসংখ্যায় রূপান্তর করার জন্য একটা প্রোগ্রাম লিখ।

//! Ans:
let number = parseInt("3.14159");
console.log(number);

// 3. তুই 'premikBoy' নামের একটা স্ট্রিংকে সংখ্যা বানানোর চেষ্টা কর। দেখ কী আউটপুট দেয়।

//! Ans:
let text = parseInt("premikBoy");
console.log(text);

// 4. তুই 3.456 আর 2.789 যোগ করলি। আউটপুটে তুই দশমিকের পর মাত্র 2 ঘর পর্যন্ত দেখতে চাস। কীভাবে দেখাবি? একটা প্রোগ্রাম লিখ।

//! Ans:
let first = 3.456;
let second = 2.789;

let total = first + second;
console.log(total.toFixed(2)); //toFixed mane last er 2 numbers Output show hobe

// 5. ধর, তুই '56.78' আর '12.34' স্ট্রিং আকারে পাইলি। এখন এই দুইটা যোগ করে কীভাবে আসল সংখ্যা বের করবি? সেটা বের করার একটা প্রোগ্রাম লিখ।

//! Ans:
const num1 = Number("56.78");
const num2 = Number("12.34");
const totalnumbers = num1 + num2;
console.log(totalnumbers);

// 6. ধর, তোর কাছে '10.5678' আর '5.4321' আছে। তুই আউটপুটে দশমিকের পর 1 ঘর পর্যন্ত দেখতে চাস। সেটা কীভাবে দেখাবি?

//! Ans:
const a = "10.5678";
const b = "5.4321";

// age convert korlam numbera 
const sum = Number(a) + Number(b);
// toFixed diye . pore 1 number show korabo 
console.log(sum.toFixed(1));

// 7. এখন '42.45689754'-কে দশমিকের পর 3 ঘর পর্যন্ত রাউন্ড কর।

//! Ans:
const numebrs = parseFloat("42.45689754");
console.log(numebrs.toFixed(3));

