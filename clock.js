userName.innerHTML = prompt("Please Type Your Name");

window.onload = function showTime() {
    let time = new Date();

    let hours = time.getHours();
    let minutes = time.getMinutes();
    let seconds = time.getSeconds();

    let days = ["Pazar", "Pazartesi", "Salı", "Çarşamba", "Perşembe", "Cuma", "Cumartesi"];
    let day = time.getDay();

    minutes = checkTime(minutes);
    seconds = checkTime(seconds);

    document.getElementById("clock").innerHTML = hours + ":" + minutes + ":" + seconds + " " + days[day];
    setTimeout(showTime, 1000);
}

function checkTime(i) {
    if (i < 10) {i = "0" + i};
    return i;
}