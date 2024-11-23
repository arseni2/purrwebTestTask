let interval;
let isRunning = false;

const hourHand = document.getElementById('hour-hand');
const minuteHand = document.getElementById('minute-hand');
const secondHand = document.getElementById('second-hand');

function startClock() {
    if (!isRunning) {
        isRunning = true;
        interval = setInterval(updateClock, 1000);
        updateClock(); // Обновляем часы сразу при запуске
    }
}

function pauseClock() {
    clearInterval(interval);
    isRunning = false;
}

function updateClock() {
    const now = new Date();
    const hours = now.getHours();
    const minutes = now.getMinutes();
    const seconds = now.getSeconds();

    // Обновление углов стрелок
    const hourRotation = 30 * (hours % 12) + 0.5 * minutes;
    const minuteRotation = 6 * minutes + 0.1 * seconds;
    const secondRotation = 6 * seconds;

    hourHand.style.transform = `translateX(-50%) rotate(${hourRotation}deg)`;
    minuteHand.style.transform = `translateX(-50%) rotate(${minuteRotation}deg)`;
    secondHand.style.transform = `translateX(-50%) rotate(${secondRotation}deg)`;
}

document.getElementById('start-btn').addEventListener('click', startClock);
document.getElementById('pause-btn').addEventListener('click', pauseClock);
