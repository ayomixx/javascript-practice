const myVariable = "Mathematics";

// the length property
console.log("Every good boy does fine".length);

// string methods
// charAt method
console.log(myVariable.charAt(8));
// indexOf method
console.log(myVariable.indexOf("mat"));
console.log(myVariable.indexOf("Mat"));
// Lastindexof method: Instead of giving us the index of the first occurence of
// a variable or group of variables, it shows us the last occurrence of the variable provided.
console.log(myVariable.lastIndexOf("at"));
console.log(myVariable.lastIndexOf("ath"));

// slice method: accepts starting and ending parameters, and returns the characters from the start position
// to the end position
console.log(myVariable.slice(5, 8));
// In this case, 5 is the starting position, 8 is the ending position

// Touppercase and Tolowercase method
console.log(myVariable.toUpperCase());
console.log(myVariable.toLowerCase());

// include methods return boolean data
console.log(myVariable.includes("div"));
console.log(myVariable.includes("mat"));

// split method: spits the screen wherever the character provided occurs
console.log(myVariable.split("e"));
console.log(myVariable.split());
console.log("John, Joe, Dave".split(","));
console.log("Every good boy does fine".split(" "));

// Numbers data types
// Integers: whole numbers
const myNumber = 42;
console.log(myNumber);

// Floating point numbers: decimal numbers
const myFloat = 42.01;
console.log(myFloat);
const myString = "42";
console.log(myString);
console.log(myNumber === myFloat);
console.log(myNumber === myString);
console.log(myString + 3);
// We can change a string data type to a number data type by using the "Number" function
console.log(Number(myString) + 3);
console.log(Number(myString) === myNumber);
// The examples below cannot be converted to a number using the "Number" function
console.log(Number("Esther"));
console.log(Number(undefined));
// Boolean data is different from the rest though, true will return the value 1
// and false will return the value 0
console.log(Number(true));
console.log(Number(false));

// Number methods
// The Number.IsInteger () method determins whether the passed value is an integer
console.log(Number.isInteger(myString));
// The Number.parseFloat() method parses an argument and returns a floating point number.
// If a number cannot be parse, it returns NaN
console.log(Number.parseFloat(myString));
// ToFixed method formats a number according to how many decimal points you provide as the parameter.
console.log(Number.parseFloat(myString).toFixed(2));
// The parseInt() method parses an argument and returns an integer

// toSting method returns a string represnting a number
console.log(myFloat.toString());
// To verify that this has been converted to a string, we can use the typeof keyword
console.log(typeof myFloat.toString());

// Chaining is using several methods chained together.
// The Number.isNan() method determines whether the passed value is NaN and its type is Number.
// The global isNan method determines whether a value is a number or not, it doesnt determine whether
// it is a number data type.
console.log(Number.isNaN("Esther"));
console.log(isNaN("Esther"));

// Math methods and properties
// The PI method
console.log(Math.PI);
// The trunc method truncates every value after the decimal point
console.log(Math.trunc(Math.PI));
// The round method rounds off the value to the nearest integer
console.log(Math.round(Math.PI));
console.log(Math.round(3.4));
console.log(Math.round(4.5));
// The ceil method is a short form for the ceiling method as the number will always be rounded up
// no matter the decimal
console.log(Math.ceil(3.4));
// The floor method always rounds the number down no matter the decimal
console.log(Math.floor(3.4));
// The power method takes 2 values, the base number and the exponent
console.log(Math.pow(2, 4));
console.log(Math.pow(5, 2));
// The min method returns the smallest number from 0 or the numbers given
// The max method returns the largest number given
console.log(Math.min(2, 5, 9));
console.log(Math.max(2, 5, 9));

// The Math.random() method provides a random number from 0 but not more than 1
console.log(Math.random());
console.log(Math.floor(Math.random() * 10) + 1);
// You should use the Math.floor() method and not the Math.ceil() method when generating
// a random number from 1 to 10
