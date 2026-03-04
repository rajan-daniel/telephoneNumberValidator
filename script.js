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
        //replace all subseqent #'s with 5 except the first "1" found in the string
        let firstDigitFound = false;
        const convertedInputTo5 = input.replace(/\d/g, (digit) => {
            if (!firstDigitFound && digit === "1") {
                firstDigitFound = true; // 
                return digit;
            }
            return "5"; // Replace all other digits with '5'
        });
        console.log(convertedInputTo5);
        for (let i = 0; i < validFormats.length; i++) {
            if (validFormats[i] === convertedInputTo5) {
                return true;
            }
        }
        return false;
    } else {
        //replace all numbers in input string with 5's and check against the table//
        const convertedInputTo5 = input.replace(/\d/g, "5");
        console.log(convertedInputTo5);
        for (let i = 0; i < validFormats.length; i++) {
            if (validFormats[i] === convertedInputTo5) {
                return true;
            }
        }
        return false;
    }
}
//check if entry is true of false, if true add list element valid, if false invalid and send as list element
checkBtn.addEventListener("click", () => {
    //add list element display correct info
    const thisInput = input.value;
    if (isValid(thisInput)) {
        addResult("Valid US number: " + thisInput);
    } else {
        addResult("Invalid US number: " + thisInput);
    }

    //clean up the text box.
    input.value = ""
});

//clear button should clear the results list
clearBtn.addEventListener("click", () => {
    results.innerHTML = '';
});