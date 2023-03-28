

// 1. Create a function that accepts two numbers, adds them and returns the result

function sumDecimal(x, y) {
    var result = x + y;
    console.log(result)
  };

sumDecimal(51.99, 108.90)



// 2. Create a defensive check inside the function that handles if the inputs to the function are invalid/non existent


var pointSystem = ["Three-pointer!","Two-pointer","Free-throw","Missed-shot.."]

function basketballPoints(points) {
  if (points === 3) {
    return pointSystem[0];
  } else if (points === 2) {
    return pointSystem[1];
  } else if (points === 1) {
    return pointSystem[2];
  } else {
    return pointSystem[3];
  }
}

console.log(basketballPoints(2));

//  3. Create an array containing a few items
var oddNumbers = [1,3,5,7,9,11,13,15];

// console.log(oddNumbers[2])

// 4. Loop over array using  a) for...of

var wildAnimals = ["cheetah", "lion", "panther", "tiger", "leopard"];

// for (var item of wildAnimals) {
//      console.log(item);
//    }

//  b) for...each 

var wildHerbs = ['sage', 'basil', 'oregano', 'mint','elderberry']

// wildHerbs.forEach((item) => {
//      console.log(item)
//    });

// c) for... full one


var carNames = ["BMW","Lexus","Volvo","Audi","Volkswagen", "Mercedes"];

for (let i = 0; i <= 7; i++) {
     console.log(carNames);  
          
 };

//  just another for loop ex.

for(var i = 20; i < 150; i += 15) {
  console.log(i);
};


 // 5. Create an object

var musicBand = {
    name: 'Arctic Monkeys',
    genre: 'alternative rock',
    album: 'The Car',
    year: 2022,
    location: 'London',
    frontman: 'Alex Turner',

}

// 6. Add an item to the above object (using . syntax)

musicBand.cityOfOrigin = 'Sheffield';

//  7. Add an item to the above object dynamically (using the [] syntax)

var item = 'drummer';
musicBand[item] = 'Matt Helders';

// console.log(musicBand)

//  8. Loop over the object using for in

var countryOfResidence = {
    name: 'Belgium',
    capital: 'Brussels',
    population: '11.9mln',
    languages: ['Dutch', 'French', 'German', 'English'],
    currency: 'euro',
    countryCode: 32,
}

for (var item in countryOfResidence) {
    console.log(item, countryOfResidence[item])
  };

console.log(countryOfResidence);








