console.log("Script started");

//Variable to track the number of clicks
let clicks = 0;


// Variable to store the click dispkay element
let clickDisplay = document.getElementById("click-display");

//set the initial of click display
clickDisplay.innerText = "Clicks: " + clicks;

function handleClick() {
    console.log("click");

    clicks = clicks + 1;

    //update display with new value
    clickDisplay.innerText = "Clicks: " + clicks;

    if (clicks == 10) {

        alert("level 2");
    }

}