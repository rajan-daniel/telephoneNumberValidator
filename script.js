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

//#isValid checker & addResult invoke if match
const isValid = (input) => {
    //create table of valid formats accepted
    const validFormats = [
        "1 555-555-5555",
        "1 (555) 555-5555",
        "1(555)555-5555",
        "1 555 555 5555",
        "15555555555",
        "1555555555",
        "155-555-5555",
        "(155)555-5555",
        "5555555555",
        "555-555-5555",
        "(555)555-5555",
    ];
    //1 start check
    if (input.match(/\d/)?.[0] === "1") {
        console.log(input.indexOf(input.match(/\d/)));
        const convertedInputTo5 = input[input.indexOf(input.match(/\d/))] + input.slice(1).replace(/\d/g, "5");
        console.log(convertedInputTo5);
        for (let i = 0; i < validFormats.length; i++) {
            if (validFormats[i] === convertedInputTo5) {
                return true;
            }
        }
        return false;
    } else {
        const convertedInputTo5 = input.replace(/\d/g, "5");
        console.log(convertedInputTo5);
        for (let i = 0; i < validFormats.length; i++) {
            if (validFormats[i] === convertedInputTo5) {
                return true;
            }
        }
        return false;
    }
    //replace all numbers in input string with 5's and check against the table//
}
console.log(isValid("(115)515-5535"));
//update page when BTN clicked clear or other







// resultants

// extras