function updateClock(){
    var currentTime = new Date();
    var hours = currentTime.getHours();
    var minutes = currentTime.getMinutes();
    var seconds = currentTime.getSeconds();
    hours = (hours < 10 ? "0" : "") + hours;
    minutes = (minutes < 10 ? "0" : "") + minutes;
    seconds = (seconds < 10 ? "0" : "") + seconds;
    var amPM = hours >= 12 ? 'PM' : 'AM';

    // Convert to 12-hour format
    hours = hours % 12;
    hours = hours ? hours : 12;

    var hourString = hours;
    var minutesString = minutes;
    var secondsString = seconds;

    document.getElementById("ho").innerHTML = hourString;
    document.getElementById("mi").innerHTML = minutesString;
    document.getElementById("se").innerHTML = secondsString;
    document.getElementById("ap").innerHTML = amPM;


    
}

setInterval(updateClock, 1000);