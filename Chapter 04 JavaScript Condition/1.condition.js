// avaScript Condition Practice:

// 1. তোর আম্মু বলছে, 6টার আগে বাসায় ফিরলে তোকে নাস্তা খাওয়াবে । আর দেরি করলে ঝাড়ুর বাড়ি দিবে । এই শর্তের জন্য কোড কর ।

//! Ans:

const time = 6;
if (time < 6) {
  console.log("Bashay 6 tar age firle toke nasta khawabo");
} else {
  console.log("Deri korle jharur bari ");
}

// 2. একটা মোবাইল অ্যাপে যদি লগইন সফল হয়, তাহলে "Welcome!" দেখাবে। যদি ব্যর্থ হয়, "Get Lost!" দেখাবে। এই শর্তের জন্য প্রোগ্রাম লিখ।
//! Ans:
const appLoging = true;

if (appLoging) {
  console.log("Welcome");
} else {
  console.log("Get Lost!");
}

// 3. তুই যদি 5 কি. মি. দৌড়াস, তাহলে তোকে চকলেট খেতে দিবে। যদি না দৌড়াস, তাহলে তোর মোটা ভুঁড়ি হবে। এই শর্তের জন্য প্রোগ্রাম লিখ।
//! Ans:

const ramFivekm = true;

if (ramFivekm) {
  console.log("Choklet dibo");
} else {
  console.log("tahole tormar vuri hobe ");
}

// 4. ধর, তোর বাবা বলেছে, যদি তুই পরীক্ষায় 80-এর বেশি পেয়ে পাস করিস, তাহলে তোকে বাইক কিনে দিবে। কিন্তু যদি কম হয়, তাহলে বাইক দিবে না। একটা প্রোগ্রাম লিখে দেখ, তুই বাইক পাবি কি না, যদি তোর নম্বর 85 হয়।
//! Ans:

const number = 75;

if (number > 80) {
  console.log("baba bike kine dibe");
} else {
  console.log("Tahole bike kine dibo na");
}

// 5. যদি মুভির শো রাত 9টার আগে হয়, তাহলে তুই মুভি দেখবি। যদি পরে হয়, তাহলে বাসায় গিয়ে নাকে তেল দিয়ে ঘুমাবি। এর জন্য প্রোগ্রাম লিখ।
//! Ans:

const muvieShow = 20; // 8 ta

if (muvieShow < 21) {
  //
  console.log("Muvie dekhte jabo");
} else {
  console.log("Bashay giye ghumabo");
}

// 6. তাপমাত্রা 30 ডিগ্রি বা তার বেশি হয়, তাহলে এয়ার কন্ডিশনার চালাবি। আর কম হলে কম্বল মুড়ি দিয়েই ঘুমাবি। এর জন্য কোড লিখ।
//! Ans:

const temperature = 32;

if (temperature >= 30) {
  console.log("Air conditioning");
} else {
  console.log("Just sleep under the blanket");
}
