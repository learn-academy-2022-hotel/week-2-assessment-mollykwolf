// ASSESSMENT 2: Coding Practical Questions with Jest

// Please read all questions thoroughly
// Pseudo coding is REQUIRED
// If you get stuck, please leave comments to help us understand your thought process

// Use test driven development to complete the following questions
// Add appropriate dependencies: $ yarn add jest

// Reminder: The test will call your function
// Run the file with the following command: $ yarn jest

// --------------------INSTRUCTOR EXAMPLE: Create a function that takes in an array of numbers and returns an array with all the numbers multiplied by 3.

// a) Create a test with expect statements for each of the variables provided.

const numbersArray1 = [6, 7, 8, 9, 10]
// Expected output: [18, 21, 24, 27, 30]
const numbersArray2 = [24, 27, 30, 33, 36]
// Expected output: [72, 81, 90, 99, 108]

// b) Create the function that makes the test pass.

// --------------------1) Create a function that takes a object as an argument and decides if the number inside it is evenly divisible by three or not.

// a) Create a test with expect statements for each of the variables provided.

describe("divisibleByThree", () => {
  it ("returns if object1 is divisible by 3", () => {
    const object1 = { number: 15 }
    // Expected output: "15 is divisible by three"
    const object2 = { number: 0 }
    // Expected output: "0 is divisible by three"
    const object3 = { number: -7 }
    // Expected output: "-7 is not divisible by three"
    expect(divisibleByThree(object1)).toEqual("15 is divisible by three")
    expect(divisibleByThree(object2)).toEqual("0 is divisible by three")
    expect(divisibleByThree(object3)).toEqual("-7 is not divisible by three")
  })
})

// ReferenceError: divisibleByThree is not defined

// b) Create the function that makes the test pass.
//Pseudocode:
//delcare a function called divisbleByThree
//input: parameter called object
//output: a string that returns if the number inside the object is evenly divisible by three or not
//Process: takes the number inside a object and if it modulizes by three returns the string "Number is divisible by three."

const divisibleByThree = (object) => {
  const number = object.number
  if (number % 3 === 0) {
    return `${number} is divisible by three`
  } else {
    return `${number} is not divisible by three`
  }
}

// --------------------2) Create a function that takes in an array of words and returns an array with all the words capitalized.

// a) Create a test with expect statements for each of the variables provided.

describe ("capitalizedWords", () => {
  it ("takes in an array of words and returns an array with all the words capitalized.", () => {
    const randomNouns1 = ["streetlamp", "potato", "teeth", "conclusion", "nephew"]
    // Expected output: ["Streetlamp", "Potato", "Teeth", "Conclusion", "Nephew"]
    const randomNouns2 = ["temperature", "database", "chopsticks", "mango"]
    // Expected output: ["Temperature", "Database", "Chopsticks", "Mango"]
    expect (capitalizedWords(randomNouns1)).toEqual (["Streetlamp", "Potato", "Teeth", "Conclusion", "Nephew"])
    expect (capitalizeWords (randomNouns2)).toEqual (["Temperature", "Database", "Chopsticks", "Mango"])
  })
})

// ReferenceError: capitalizedWords is not defined

// b) Create the function that makes the test pass.
// Pseudocode:
//declare a function called capitalizedWords
// input: an array of strings, parameter
//output: returns an array the same length with all of the words capitalized.
//Processs: write a function that inputs an array of strings and outputs an array of the same lenght with the first letter of each string capitalized.

const randomNouns1 = ["streetlamp", "potato", "teeth", "conclusion", "nephew"]

const capitalizedWords = (array) => {
  return array.map ((value) => value.charAt(0).toUpperCase() + value.slice(1))
}
console.log(capitalizedWords(randomNouns1))
//["Streetlamp", "Potato", "Teeth", "Conclusion", "Nephew"]


// --------------------3) Create a function that takes in a string and logs the index of the first vowel.

// a) Create a test with expect statements for each of the variables provided.
describe ("firstVowel", () =>{
  it ("that takes in a string and logs the index of the first vowel", () => {
    expect (firstVowel(vowelTester1)).toEqual(1)
    expect (firstVowel(vowelTester2)).toEqual(0)
    expect (firstVowel(vowelTester3)).toEqual(2)
  })
})

// ● firstVowel › that takes in a string and logs the index of the first vowel

// ReferenceError: firstVowel is not defined

const vowelTester1 = "learn"
// Expected output: 1
const vowelTester2 = "academy"
// Expected output: 0
const vowelTester3 = "challenges"
// Expected output: 2

// b) Create the function that makes the test pass.

// Pseudocode:
//declare a fucntion called firstVowel
// input: string 
//output: the index of the first vowel 
//process: write a function that inputs a string and returns the index for the first vowel

const firstVowel = (string) => {
  return string.search(/[aeiou]/)
}
