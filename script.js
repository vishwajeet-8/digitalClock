let digitalTime = () => {
  setInterval(function () {
    let date = new Date();
    let hours = date.getHours();
    let minutes = date.getMinutes();
    let seconds = date.getSeconds();
    let year = date.getFullYear();

    let month = [
      "jan",
      "feb",
      "march",
      "april",
      "may",
      "june",
      "july",
      "aug",
      "sep",
      "oct",
      "nov",
      "dec",
    ];
    let monthName = month[date.getMonth()];

    let week = [
      "sunday",
      "monday",
      "tuesday",
      "wednesday",
      "thursday",
      "friday",
      "saturday",
    ];
    let weekName = week[date.getDay()];

    hours < 10 ? (hours = "0" + hours) : (hours = hours);
    minutes < 10 ? (minutes = "0" + minutes) : (minutes = minutes);
    seconds < 10 ? (seconds = "0" + seconds) : (seconds = seconds);

    let clk_elem = document.getElementById("clock");
    clk_elem.innerHTML = `<b><font size="7">${hours}:${minutes}:${seconds}</font><br><font size="4">${weekName} ${monthName} ${year} </font></b><br>(24 hour format)`;
  }, 1000);
};

digitalTime()
