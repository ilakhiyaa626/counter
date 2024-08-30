let counter = 0;

document.getElementById('increment').addEventListener('click', function() {
    counter++;
    document.getElementById('counter').textContent = counter;
});

document.getElementById('decrement').addEventListener('click', function() {
    if (counter > 0) {
        counter--;
    }
    document.getElementById('counter').textContent = counter;
});
