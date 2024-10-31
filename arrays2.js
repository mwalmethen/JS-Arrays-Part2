/** Task 1
 * isArrayLengthOdd(numbers):
 * - receives array `numbers`
 * - returns true if array has an odd number of elements
 * - returns false otherwise
 *
 * e.g.
 * isArrayLengthOdd([1, 2, 3]) -> true
 * isArrayLengthOdd([1, 2, 3, 4]) -> flase
 */


// This function reads the number of array element & tells if its even or add!
function isArrayLengthOdd(numbers) { 
    numbers = [1, 2, 3]; // list of array of numbers for know the output should be true if we add a number it will be false

    if (numbers.length % 2) {
        console.log(`True!`); // Odd number 
    } else 
    console.log(`False!`) // Even number

  }
  isArrayLengthOdd(); // Calling function */



  /** Task 2
 * isArrayLengthEven(numbers):
 * - receives array `numbers`
 * - returns true if array has an even number of elements
 * - returns false otherwise
 *
 * e.g.
 * isArrayLengthEven([1, 2, 3]) -> false
 * isArrayLengthEven([1, 2, 3, 4]) -> true
 */

  // This function reads the length of numbers in a array and provides true if the array is even!
function isArrayLengthEven(numbers) {
    if (numbers.length % 2 === 0) {
        console.log(`True!`) // Even number 
    } else 
    console.log(`False!`) // Odd number 
  }
  isArrayLengthEven([1, 2, 3, 4]); // Calling function output should be True!
  



/** Task 3 
 * addLailaToArray(instructors):
 * - receives array `instructors`
 * - returns a new array that's a copy of array `instructors` with additional string "Laila"
 *
 * e.g.
 * addLailaToArray(["Mshary", "Hasan"]) -> ["Mshary", "Hasan", "Laila"]
 */


// Function to add an instructor to the list ! Yay :) 
function addLailaToArray(instructors) {
    instructors.push("Laila"); // Adding Laila to the list
    console.log(instructors); // priting instructors on the terminal
  }
  addLailaToArray(["Mshary", "Hasan"]) // Calling function output laila should be adeed to the list 


/** Task 4
 * eliminateTeam(teams):
 * - receives array `teams`
 * - removes the last element from the array and return it
 *
 * e.g.
 * eliminateTeam(["Brazil", "Germany", "Italy"]) -> "Italy"
 */


// This function removes elements in an arrray 
function eliminateTeam(teams) {
    teams.pop(); // removing the last element in the array
    console.log(teams); // priting teams after elimination on the terminal
  }
  eliminateTeam(["Brazil", "Germany", "Italy"]); // Calling function the output should remove italy



/** Challenge 1
 * secondHalfOfArrayIfItIsEven(fruits):
 * - receives array `fruits`
 * - returns a new array that's the second half of the original array if it has an even number of elements
 * - returns an empty array if it has an odd number of elements
 *
 * e.g.
 * secondHalfOfArrayIfItIsEven(["apple", "orange", "banana", "kiwi"]) -> ["banana", "kiwi"]
 * secondHalfOfArrayIfItIsEven(["apple", "orange", "banana", "kiwi", "blueberry"]) -> []
 */


// This function reads the number of elements in an array as before and slices the second half of the array if the array is even number 
function secondHalfOfArrayIfItIsEven(fruits) {
    if (fruits.length % 2 === 0) {
        const halfOFruits = fruits.length / 2; // if this condition is true output should be ["banana", "kiwi"] 
        console.log(fruits.slice(halfOFruits));
    } else 
    console.log([]); 
  }
  secondHalfOfArrayIfItIsEven(["apple", "orange", "banana", "kiwi", "blueberry"]); // Calling function output should be [] for now 




/** Challenge 2
 * youGottaCalmDown(shout):
 * - receives a string `shout`
 * - returns the string `shout` with at most one exclamation mark (!) at the end.
 *
 * e.g.
 * youGottaCalmDown("HI!!!!!!!!!!") -> "HI!"
 * youGottaCalmDown("Taylor Schwift!!!!!!!!!!!") -> "Taylor Schwift!"
 * youGottaCalmDown("Hellooooo") -> "Hellooooo"
 *
 * Hint:
 * - Use number method .indexOf()
 * - Use string method .slice()
 */

// This function removes the number of ! marks to at least one 
function youGottaCalmDown(shout) {
  shout_index = shout.indexOf("!");  // making sure we read the first string with "!"

  if (shout_index === -1) {  // if there is no "!" mark in the string we return string
    return shout;
  } else 
  return shout.slice(0, shout_index + 1); // else start from the first index and add only one ! mark
}
console.log(youGottaCalmDown("Hi!!!!!")); // Calling function and output should be Hi! for this case
