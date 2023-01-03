function activateBlackout() {
    // Select all divs and inputs on the page
    const divs = document.querySelectorAll('div, input');
    // Loop through the divs and inputs, setting the background and color properties
    for (let i = 0; i < divs.length; i++) {
        if (!(divs[i].className.includes("i-button left") || divs[i].textContent.startsWith("Report Thi"))) {
            divs[i].style.background = `rgba(1, 0, 9, ${(0.5 + (i + 1) / (divs.length))})`;
            if (divs[i].style.color === '#555') {
                divs[i].style.color = 'white';
            }
        }
    }
}

function runBlackout() {
    //Runs the Dark Mode function when the page loads, 1ms after it loads, 1 second after it loads, 5 seconds after
    activateBlackout()
    setTimeout(() => {
        activateBlackout()
    }, 1);
    setTimeout(() => {
        activateBlackout()
    }, 1000);

    setTimeout(() => {
        activateBlackout()
    }, 5000);
}

//Runs the script on launch
runBlackout()

//Checks for if you navigate to a new page, and if so then reruns the dark mode script
const selectElements = document.querySelectorAll('[class*=MetricButton]');
for (const selectElement of selectElements) {
     selectElement.addEventListener('click', (event) => {
        runBlackout()
    })
}
