// get elements
const input = document.getElementById("textInput");
const results = document.getElementById("history");
const checkBtn = document.getElementById("check-button");
const clearBtn = document.getElementById("clear-button");

// functions
//add <li> to history UL>
const addResult = (input) => {
    const li = document.createElement("li");
    li.textContent = input;
    results.appendChild(li);
};

//#isValid checker
const isValid = (input) => {
    //check if letters or anything not # insta return false
    const notNumbers = new RegExp("[^0-9]");
    return !notNumbers.test(input);
}
console.log(isValid(""));
//update page when BTN clicked clear or other







// resultants

// extras