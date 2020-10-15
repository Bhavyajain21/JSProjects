const secondhand = document.querySelector(".second-hand");
const minshand = document.querySelector(".min-hand");
const hourhand = document.querySelector(".hour-hand");

function setDate() {
    const now = new Date();
    const seconds = now.getSeconds();
    // console.log(seconds);
    const secondsDegrees = ((seconds / 60) * 360) + 90;
    secondhand.style.transform = `rotate(${secondsDegrees}deg)`;
    const minutes = now.getMinutes();
    console.log(minutes);
    const minutesDegrees = ((minutes / 60) * 360) + 90;
    minshand.style.transform = `rotate(${minutesDegrees}deg)`;
    const hours = now.getHours();
    console.log(hours);
    const hourDegrees = ((hours / 12) * 360) + 90;
    hourhand.style.transform = `rotate(${hourDegrees}deg)`;
}
setInterval(setDate, 1000);