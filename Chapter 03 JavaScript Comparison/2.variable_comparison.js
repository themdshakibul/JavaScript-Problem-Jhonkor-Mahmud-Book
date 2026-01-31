//! JavaScript Variable Comparison Practice:

/**
 * 
 * > বড় কি না চেক করবে
   < ছোট কি না চেক করবে
   == সমান সমান কি না চেক করবে
   != অসমান (ডিফারেন্ট কি না ) চেক করবে
   >= বড় অথবা সমান কি না চেক করবে
   <= ছোট অথবা সমান কি না চেক করবে
   

   আমরা ইতোমধ্যে অনেক ধরনের তুলনা সম্পর্কে জেনে গেছি। এই তুলনা সম্পর্কে আরও অনেক কিছু জানব পরবর্তীতে।
 * 
 */

// 1. তোর ছোট ভাইয়ের বয়স 10 বছর, আর তোর বয়স 15 বছর। একটা প্রোগ্রাম লিখে দেখ, তোর ছোট ভাইয়ের বয়স কি তোর বয়স থেকে কম বা সমান কি না।
//! Ans:

const brotherAge = 10;
const myAge = 15;
console.log(brotherAge <= myAge);

// 2. একটা পরীক্ষায় পাস মার্কস 33। ধর, তুই 45 পেয়েছিস। চেক কর, তুই পাস করেছিস কি না।
//! Ans:

const passMark = 33;
const myMark = 45;

console.log(passMark < myMark);

// 3. দুইটা ভেরিয়েবলে জাম্বুরা আর কদবেলের দাম রাখা হলো। জাম্বুরা কি কদবেলের চেয়ে সস্তা কি না, সেটার তুলনা কর।
//! Ans:
const jambura = 50;
const kodbel = 30;
console.log(jambura < kodbel);

// 4. তুই 10টা বই পড়েছিস, আর তোর বন্ধু পড়ছে 10টা। চেক কর, তোরা কি সমান সংখ্যক বই পড়েছিস কি না।
//! Ans:

const yourBooks = 10;
const firendBooks = 10;

console.log(yourBooks == firendBooks);

// Output: true

// 5. তোর কাছে 15টা বিস্কুট আর তোর বন্ধুর কাছে 20টা। চেক কর, তুই কি তোর বন্ধুর থেকে কম বিস্কুট পেয়েছিস কি না।
//! Ans:

const biscuit = 15;
const firendBiscuit = 20;

console.log(biscuit < firendBiscuit);

// 6. একটা ফুটবল ম্যাচে রিয়াল মাদ্রিদ 2টা গোল করছে, আর বার্সা 3টা গোল করছে। চেক কর, রিয়াল মাদ্রিদ কি বার্সার চেয়ে কম গোল করেছে কি না।
//! Ans:

const realMadrid = 2;
const Barcha = 3;

console.log(realMadrid < Barcha);

// Output: true

// 7. তোর নাম "Rahim", আর তোর বন্ধুর নাম "Karim"। চেক কর, তোর নাম কি তোর বন্ধুর নামের সমান কি না।
//! Ans:

const myName = "Rahim"
const friendName = "Karim"

console.log(myName == friendName)

// Output: false

// 8. তুই আজকে পড়াশোনা করেছিস (true), আর তোর বন্ধু পড়াশোনা করেনি (false)। চেক কর, তোরা কি একই রকম কাজ করেছিস কি না।
//! Ans:

const studytoday = true
const friendStudy = false

console.log(studytoday === friendStudy)
