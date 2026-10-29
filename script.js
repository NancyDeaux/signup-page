// Day 1 - Variables and console.log
// "let" creates a variable: a named box that stores a value.
// Text inside quotes is called a "string".
let clubName = "The Painter's Club";
// This prints: Welcome to The Painter's Club
console.log("Welcome to " + clubName);

let meetingDay = "Saturdays";
// This prints: We meet on Saturdays
console.log("We meet on " + meetingDay);


// A function is a set of steps we can save and run whenever we want.
// Defining it does NOT run it yet. It just saves the steps.
function sayHi() {
  console.log("Hi! Thanks for visiting!");
}

// Call the function
// Writing the name with () after it runs the function.
sayHi();

// Another function
function sayBye() {
  console.log("Goodbye!");
}

// We can call a function as many times as we want.
// This prints "Goodbye!" two times.
sayBye();
sayBye();

// Day 2 - Getting HTML elements
// document.querySelector() finds an element on the HTML page.
// The # means "find the element with this id".
// We save each element in a variable so we can use it later.
let nextButton = document.querySelector("#next-btn"); // the button
let nextMeeting = document.querySelector("#next-meeting"); // the empty paragraph


// When this function runs, it puts text inside the empty paragraph.
// .textContent is the text inside an element. Setting it changes
// what shows on the page.
function showNextMeeting() {
  nextMeeting.textContent = "Our next meeting is Saturday, November 7 at 2 PM.";
}

// Attach an event listener to button
// An event listener waits for something to happen (an "event").
// Here it waits for a "click" on the button, then runs showNextMeeting.
// Notice there are NO () after showNextMeeting. We are handing the function
// to the button to run LATER, not running it right now.
nextButton.addEventListener("click", showNextMeeting);


// Variable for themeButton that holds #theme-btn
let themeButton = document.querySelector("#theme-btn");

function toggleTheme() {
  // Toggle the "dark-theme" class on the body element
  document.body.classList.toggle("dark-theme");
}
themeButton.addEventListener("click", toggleTheme);