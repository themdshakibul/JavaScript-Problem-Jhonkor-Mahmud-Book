// Javascript Math Operator Problem  Practice

// 1. ধর, তুই 100 টাকা আয় করেছিস। তার মধ্যে 40 টাকা খরচ করছিস। বাকি টাকা কত রইল, সেটা বের করার একটা প্রোগ্রাম লিখ।

// Ans:
const totalMoney = 100;
const spending = 40;

moneyLeft = totalMoney - spending;
console.log("How much money is left :", moneyLeft);

// 2. তোর কাছে 10টা পেন্সিল আছে। প্রতিবার তুই একসাথে 2টা পেন্সিল ব্যবহার করবি। কত বার ব্যবহার করতে পারবি?

// Ans:

const pencils = 10;
const everDayPencils = 2;

timecanuse = pencils / everDayPencils;
console.log("How many time use Pencils :", timecanuse);

// 3. প্রোগ্রাম লিখে বের কর।তোর কাছে 60 টাকা আছে। তুই যদি প্রতিবার 15 টাকা করে খরচ করিস, কয়বার খরচ করতে পারবি? এবং খরচের পর কয় টাকা বাকি থাকবে, সেটা বের করতে একটা প্রোগ্রাম লিখ।

// Ans:

const totalmoney = 60;
const everyTime = 15;

let spendMoneyTimes = totalmoney / everyTime;

let afterSpending = totalmoney % everyTime;

console.log("Times to Spend :", spendMoneyTimes.toFixed(0));
console.log("Money left after spending :", afterSpending);

// 4. ধর, তুই দুইটা স্ট্রিং লিখলি "Hello" আর "World"। এই দুইটা স্ট্রিংকে একসাথে জোড়া দিয়ে কীভাবে "HelloWorld" বানানো যায়, সেটা দেখানোর জন্য একটা প্রোগ্রাম লিখ।

// Ans:

const name1 = "Hello";
const name2 = "World";

console.log("Combain theme :", name1.concat(name2));

// 5. তুই যদি 153 কেজি চাল আর 261 কেজি ডাল কিনলি, তাহলে তুই কয় কেজি জিনিস কিনেছিস? মোট কেজি বের করার একটা প্রোগ্রাম লিখ।
// Ans:

const rice = 153;
const lentils = 261;

bought = rice + lentils;
console.log("Kilogram ot the items :", bought);

// 6. তোর কাছে 500 টাকা আছে, প্রতিবার তুই 75 টাকা খরচ করবি। কয়বার খরচ করতে পারবি আর শেষে কয় টাকা বাকি থাকবে, সেটা বের করার একটা প্রোগ্রাম লিখ।
// Ans:

const myMoney = 500;
const everyTime1 = 75;

let moneySpend = Math.floor(myMoney / everyTime1);
let moneyLef = myMoney % everyTime1;

console.log("Money times con spending :", moneySpend);
console.log("Money will be left in the end :", moneyLef);

// 7. তুই 8-কে 3 দিয়ে ভাগ দিলে ভাগফল কত আর ভাগশেষ কত, সেটা বের করার জন্য একটা প্রোগ্রাম লিখ।

// Ans:

const dividend = 8;
const divisor = 3;

let quotient = Math.floor(dividend / divisor);
let remiender = dividend % divisor;

console.log("Quotient :", quotient);
console.log("Remiender :", remiender);

// 8. তুই 50-কে 9 দিয়ে ভাগ দিলে শুধু ভাগশেষ কত থাকে, সেটা বের করার একটা প্রোগ্রাম লিখ।
// Ans:

const dividend1 = 50;
const dividend2 = 9;

remienderTimes = dividend1 % dividend2;

console.log("Remiender Total :", remienderTimes);

// 9. তুই "Bangla" আর "desh" স্ট্রিং যোগ করে "Bangladesh" বানাতে চাস। কীভাবে করবি, সেটা দেখানোর একটা প্রোগ্রাম লিখ।
// Ans:
const bangla = "Bangla";
const desh = "desh";

combain = bangla.concat(desh);
console.log("Combain name :", combain);

// 10. ধর, একদিন ঘুম থেকে উঠে ক্ষিধার চোটে তুই ছোটখাটো একটা রাক্ষস হয়ে গেছস। তারপর থেকে প্রতিদিন 4 কেজি চালের ভাত খেয়ে ফেলস। এখন যদি তোকে 12 মন (480 কেজি) চাল দেয়া হয় থাকে, তাহলে এই চাল দিয়ে তোর কত দিন যাবে। আবার একমাস যদি 30 দিনে হয়, তাহলে এই 12 মন চাল দিয়ে তোর কত মাস যাবে।
// Ans:
const totalRice = 480; //in kg
const dailyConsumption = 4; //kg per day

const daysInMonth = 30;

let daylist = totalRice / dailyConsumption;
let monthLast = daylist / dailyConsumption;

console.log("Rice will last for Day :", daylist, "days");
console.log("Rice will last for Month :", monthLast, "month");

// এগুলো প্র্যাকটিস করে করে তোর প্রোগ্রামিংয়ের বেসিক মজবুত করতে পারবি।
