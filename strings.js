// "use strictly";

// const myname = "Peter";
// const animal = "cat";
// const cat = "Mandu";

// const text = `My name is ${myname}.
// I have a ${animal} called ${cat}.`;

// console.log(text);

// const len = myname.length;

// console.log(`${myname} is ${len} characters long`);

// const letter = myname[0];

// console.log(`The first letter of ${myname} is ${letter}`);

// const headmaster = "Albus Percival Wulfric Brian Dumbledore";
// const total = headmaster.length;
// const lettertwo = headmaster[2];
// const lettersix = headmaster[6];

// const str1 = "   There is     space here /n  ";
// const str2 = str1.trim();

// console.log(str1);
// console.log(str2);

// const firstname = headmaster.substring(0,5);

// console.log(firstname);
// console.log(headmaster.substring(29));

// const painter = "bob-ross";

// console.log(painter.includes("-"));
// // Returns true

// const ninja = "naruto uzumaki"

// console.log(ninja.endsWith("maki"));
// // Returns true


// Exercise 10
// .replaceAll
const sentence = "The   quick brown  fox jumps over   the lazy dog.  The fox   is happy."

const notriple = sentence.replaceAll("   ", " ");
const nodouble = notriple.replaceAll("  ", " ");


// Exercise 14
// .split

const fullname = "Harry James Potter";

//splits the string where spaces are
fullname.split(" ") 
//output: [ "Harry", "James", "Potter" ]

//splits the string where space are and returns the second
fullname.split(" ")[1];


// Exercise 15

const uppercaseName = "Thordur"

uppercaseName.toUpperCase();

// Exercise 19

const longText = "    This is a long text with space before and after    ";

//trims before and after
longText.trim() 

// trims before
longText.trimStart()

// trims after 
longText.trimEnd()