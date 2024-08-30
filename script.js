let counter = 0;

document.getElementById('increment').addEventListener('click', function() {
    incrementCounter();
});

document.getElementById('decrement').addEventListener('click', function() {
    decrementCounter();
});

function incrementCounter() {
    counter++;
    document.getElementById('counter').textContent = counter;
}

function decrementCounter() {
    if (counter > 0) {
        counter--;
    }
    document.getElementById('counter').textContent = counter;
}

document.addEventListener('keydown', function(event) {
    if (event.key === "ArrowUp") {
        incrementCounter();
    } else if (event.key === "ArrowDown") {
        decrementCounter();
    }
});
