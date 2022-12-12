// ASSESSMENT 2: Coding Conceptual Questions

// Examine the following examples.

// First, predict the outcome based on your understanding of the code.
// Then, uncomment the console.log() and verify the output. Briefly explain why your initial answer was correct or incorrect.

// --------------------1) What will this log?

const cohort = "Hotel 2022"
console.log(cohort.split())

// a) Your answer: "H" "o" "t" "e" "l" " " "2" "0" "2" "2"
// b) Verify and explain: ['H', 'o', 't', 'e', l', ' ', '2', '0',
  // '2', '2'] 
  // The spilt method inputs a a string and returns an array with the string being split into elements in the array. 

// --------------------2) What will this log?

const greeter = (name) => {
  `Hello, ${name}!`
}
console.log(greeter("LEARN Student"))

// a) Your answer: undefined
// b) Verify and explain: All functions need to have a return. If there is no return the output will be undefined.

// --------------------3) What will this log?

const multipliedByTwo = [4, 5, 6, 7, 8].map((number) => number * 2)
console.log(multipliedByTwo)

// a) Your answer: [ 8, 10, 12, 14, 16 ]
// b) Verify and explain:  The .map is a higher order function and iterates across all of the values and creates a new array with all elements multiplied by two. If there is only one line of code to be executed, we can remove the return keyword as the return is implied.

// --------------------4) What will this log?

const onlyOdds = [11, 12, 13, 14, 15].filter((number) => number % 2 !== 0)
console.log(onlyOdds)

// a) Your answer: [ 11, 13, 15 ]
// b) Verify and explain: Filter returns a subset of the original array that meets a defined condition. If the condition is met, the element will be returned.

// --------------------5) What will this log?

const myCodingSkills = {
  languages: ["JavaScript", "Ruby"],
  frameworks: ["React", "Ruby on Rails"],
  databases: "PostgreSQL",
  versionControl: "GitHub"
}
console.log(myCodingSkills.languages[0])

// a) Your answer: JavaScript
// b) Verify and explain: myCodingSkills is an object. The console.log is logging the 0 indexed element of the key(languages) from the object.

// --------------------STRETCH: What will this log?

class Learn {
  constructor(name) {
    this.student = name
    this.cohort = "Hotel"
    this.year = 2022
  }
}
const learnStudent = new Learn("George")
console.log(learnStudent)

// a) Your answer: Learn { student: 'George', cohort: 'Hotel', year: 2022 }
// b) Verify and explain: Learn is a class. Classes contain data and actions. There are keywords used to create and access information within a class. A constructor is a special method for creating and initializing objects. The argument George is passed to the contructor which sets the value of student, cohort, and year. 
