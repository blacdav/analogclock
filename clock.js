const hour = document.querySelector('.hour');
const mins = document.querySelector('.mins');
const secs = document.querySelector('.secs');

function setDate() {
    const now = new Date();
    const seconds = now.getSeconds();
    const secsDeg = ((seconds / 60) * 360) + 90;
    secs.style.transform =`rotate(${secsDeg}deg)`;

    const minutes = now.getMinutes();
    const minsDeg = ((minutes / 60) * 360) + 90;
    mins.style.transform =`rotate(${minsDeg}deg)`;

    const hours = now.getHours();
    const hourDeg = ((hours / 12) * 360) + 90;
    hour.style.transform =`rotate(${hourDeg}deg)`;

}

setInterval(setDate, 1000);