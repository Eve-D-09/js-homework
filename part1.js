// 1. Store series of variables a: a string, a number, a boolean;

var dogName = 'Lota';
var dogAge = 2;
var isBig = true;
var isAngry = false;
var dogColor;




//  2. Add two numbers;
 var numDecimal1 = 5.5;
 var numDecimal2 = 11.7;

 sum = numDecimal1 + numDecimal2;



//  3. Use the shorthand to add 1 to a number

numDecimal1++;

// 4. Use the shorthand to remove 1 from a number

numDecimal2--;
numDecimal2-= 1;

// 5. Concatenate two string

var dayTemp = 5;
var dayWeather = 'Showers';

// console.log(`${dayWeather} and ${dayTemp} degrees in Brussels`);

//  6. Create an IF statement which checks if a variable matches another variable, if so it should console log a message


var accountBalance = 150;
var purchasePrice = 200;

if (accountBalance <= 100 || purchasePrice >= 100) {
   return ('Insufficient found');
} 




// 7. Extend one of the IF statements to check if two things are true, if so show a message

var todayTemp = 10;
var todayCond = "rainy";


if ( todayTemp <= 10 && todayCond ) {
  //  console.log(`No spring today...`);
} else  ( todayTemp > 15) 
  {
  //  console.log(`Spring is coming!`)
};




// 8. Store in a variable someone’s name, age and height. Choose between an object and an array.

var mySelf = {
  name: "Eve",
  age: 20,
  height: 169,
  location: {
   city: "Brussels",
   postcode: 1950,
   country: "Belgium",
   isFrench: true,
 }
}

var person = { name: 'Olivia', age: 7, height: 120 };


