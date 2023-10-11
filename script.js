const clock = document.getElementById("clock");
const hourSelect = document.getElementById("hour");
const minuteSelect = document.getElementById("minute");
const secondSelect = document.getElementById("second");
const ampmSelect = document.getElementById("ampm");
const setAlarmButton = document.getElementById("setAlarm");
const alarmList = document.getElementById("alarmList");

setAlarmButton.addEventListener("click", setAlarm);

function setAlarm() {
  const selectedHour = hourSelect.value;
  const selectedMinute = minuteSelect.value;
  const selectedSecond = secondSelect.value;
  const selectedAmPm = ampmSelect.value;

  const alarmTime = `${selectedHour}:${selectedMinute}:${selectedSecond} ${selectedAmPm}`;

  const alarmItem = document.createElement("li");
  alarmItem.textContent = alarmTime;

  const deleteButton = document.createElement("button");
  deleteButton.textContent = "Delete";
  deleteButton.addEventListener("click", () => {
    alarmList.removeChild(alarmItem);
  });

  alarmItem.appendChild(deleteButton);
  alarmList.appendChild(alarmItem);

  scheduleAlarm(alarmTime);
}

function scheduleAlarm(time) {
  const now = new Date();
  const alarmTime = new Date(now.toDateString() + " " + time);

  const timeDiff = alarmTime - now;

  if (timeDiff < 0) {
    alert("Invalid time. Please select a future time.");
    return;
  }

  setTimeout(() => {
    alert("Alarm time: " + time);
  }, timeDiff);
}

function updateClock() {
  const now = new Date();
  const hours = now.getHours();
  const minutes = now.getMinutes();
  const seconds = now.getSeconds();
  const ampm = hours >= 12 ? "PM" : "AM";

  clock.textContent = `${String(hours).padStart(2, "0")}:${String(
    minutes
  ).padStart(2, "0")}:${String(seconds).padStart(2, "0")} ${ampm}`;
}

setInterval(updateClock, 1000);
