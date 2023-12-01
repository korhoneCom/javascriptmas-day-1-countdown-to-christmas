const countdownDisplay = document.getElementById("countdown-display")

function renderCountdown(){
    const christmas = 25
    // Task:
    // - Get today's date (you only need the day).
    const today = new Date();
    // - Calculate remaining days.
    const countdown = christmas - today.getDate();
    // - Display remaining days in countdownDisplay.
    countdownDisplay.innerText = countdown;
}
 
renderCountdown()
