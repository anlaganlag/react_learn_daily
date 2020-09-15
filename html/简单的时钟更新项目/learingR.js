function getClockTime() {
  // Get the Current Time
  let date = new Date();
  // Serialize clock time
  let time = {
    hours: date.getHours(),
    minutes: date.getMinutes(),
    seconds: date.getSeconds(),
    ampm: "AM",
  };
  // Convert to civilian time
  if (time.hours == 12) {
    time.ampm = "PM";
  } else if (time.hours > 12) {
    time.ampm = "PM";
    time.hours -= 12;
  }
  // Prepend a 0 on the hours to make double digits
  if (time.hours < 10) {
    time.hours = "0" + time.hours;
  }
  // prepend a 0 on the minutes to make double digits
  if (time.minutes < 10) {
    time.minutes = "0" + time.minutes;
  }

  // prepend a 0 on the seconds to make double digits
  if (time.seconds < 10) {
    time.seconds = "0" + time.seconds;
  }
  // Format the clock time as a string "hh:mm:ss tt"
  return time.hours + ":" + time.minutes + ":" + time.seconds + " " + time.ampm;
}
const pTime = document.querySelector("p");

setInterval(() => {
  pTime.innerHTML = getClockTime();
}, 1000);
