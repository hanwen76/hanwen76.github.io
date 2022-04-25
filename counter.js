var count = 0;

function incrementClick() {
    updateDisplay(++count);
}

function decrementClick() {
    updateDisplay(--count);
}

function resetCounter() {
    count = 0;
    updateDisplay(count);
}

function updateDisplay(val) {
    document.getElementById("counter-label").innerHTML = val;
}