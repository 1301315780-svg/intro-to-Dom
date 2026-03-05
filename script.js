console.log("Script started");

//Variable to track the number of clicks
let clicks = 0;

// click value
let clickValue = 1;


// Variable to store the click dispkay element
let clickDisplay = document.getElementById("click-display");

// Variable for level display
let levelDisplay = document.getElementById("level-display")

//set the initial of click display
clickDisplay.innerText = "Clicks: " + clicks;

function handleClick() {
    console.log("click");

    clicks = clicks + clickValue;

    //update display with new value
    clickDisplay.innerText = "Clicks: " + clicks;

    if (clicks == 10) {

        alert("level 2");
    }
    levelDisplay.innerText = "Level 2";
    clickValue = 2;

}