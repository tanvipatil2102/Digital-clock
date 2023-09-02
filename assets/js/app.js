let cl = console.log;

const setZero = num => (num < 10) ? "0" + num : num;

const currentTime = () => {
    let d = new Date();
    let hr = d.getHours();
    let min = d.getMinutes();
    let sec = d.getSeconds();
    let session = "AM";

    session = (hr > 12) ? "PM" : "AM";

    hr = (hr > 12) ? hr - 12 : hr;

    let result = `${setZero(hr)} : ${setZero(min)} : ${setZero(sec)}  ${session}`;

    
    const digitalClock = document.getElementById("digitalClock");
    digitalClock.innerHTML = result;
    setTimeout(currentTime, 1000);
};

currentTime();