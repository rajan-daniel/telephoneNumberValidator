// get elements
const input = document.getElementById("textInput");
const results = document.getElementById("history");
const checkBtn = document.getElementById("check-button");
const clearBtn = document.getElementById("clear-button");

//create valid phone # formats table
const validFormats = {
    1: "1 555-555-5555",
    2: "1 (555) 555-5555",
    3: "1(555)555-5555",
    4: "1 555 555 5555",
    5: "15555555555",
    6: "5555555555",
    7: "555-555-5555",
    8: "(555)555-5555",
}

// functions
//add <li> to history UL>
const addResult = (input) => {
    const li = document.createElement("li");
    li.textContent = input;
    results.appendChild(li);
};

//#isValid checker & addResult invoke if match
const isValid = (input) => {
    //
    
}

//update page when BTN clicked clear or other







// resultants

// extras