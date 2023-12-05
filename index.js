/**
 * A function to start the program by welcoming the user
 */
function start() {
  //welcomin the user with an alert window
  alert("Welcome to Array Based Number Processing!!!");
  //a do while loop to validate name
  let user;
  do {
    //creating a user variable to hold user name and accepting name input
    user = prompt("Please enter your name(only letters): ");
  } while (!/^[a-zA-Z\s]+$/.test(user));

  //displaying a welcome alert message to the user
  alert(`Welcome ${user}!`);
  //calling the accept function
  accept();
}

/**
 * A function to accept the user input array
 */
function accept() {
  //creating a variable to accept input
  let input;
  do {
    input = prompt("Please, enter a list of numbers separated by a comma: ");
  } while (!input || !/^\s*-?\d+(\s*,\s*-?\d+)*\s*$/.test(input));
  //creating an array and spliting the input string based on comma and mapping each number to the array
  const numbers = input.split(",").map(Number);
  //creating a variable to store the result of the process function and calling the function
  let total = process(numbers);
  alert(`The sum of the numbers is ${total}`);
  //checking the condition if the number is larger than 50 and displaying message
  if (total > 50) {
    alert("That is a big number!!!");
  } else {
    alert("That is a small number!!!");
  }
  //do while loop to check if user wants to continue adding numbers
  do {
    //variable to accept user choice
    let continueAdding = prompt(
      "Do you want to continue adding numbers(yes/no): "
    );
    if (
      continueAdding.toLowerCase() === "yes" ||
      continueAdding.toLowerCase() === "y"
    ) {
      accept();
    } else {
      alert("Thank you, Hope you enjoyed our program!");
    }
  } while (
    continueAdding.toLowerCase() !== "yes" ||
    continueAdding.toLowerCase() !== "y" ||
    continueAdding.toLowerCase() !== "no" ||
    continueAdding.toLowerCase() !== "n"
  );
}

/**
 * A function to process the array and return the total
 * @param {Array} arr
 * @returns {Number}
 */
function process(arr) {
  //creating a total variable to store the sum
  let total = 0;
  //creating a new array to hold the larger numbers
  const newArr = [];
  //looping through the array
  for (let i = 0; i < arr.length - 1; i++) {
    //checking if the current number is greater than or equal to the next number and adding it to the new array
    if (arr[i] >= arr[i + 1]) {
      newArr.push(arr[i]);
    }
  }
  //adding the last element of the array to the new array
  newArr.push(arr[arr.length - 1]);
  //looping through the new array and summing the elements
  for (let num of newArr) {
    total += num;
  }
  return total;
}
