var vid = document.getElementById("vidContainer");
var trailerVideo = document.getElementById("trailerVid");

var infoBtn = document.getElementById("info");
var desc = document.getElementById("mainDescription");

const mondayBtn = document.getElementById("monday-btn");
const tuesdayBtn = document.getElementById("tuesday-btn");
const wednesdayBtn = document.getElementById("wednesday-btn");
const thursdayBtn = document.getElementById("thursday-btn");
const fridayBtn = document.getElementById("friday-btn");
const saturdayBtn = document.getElementById("saturday-btn");
const sundayBtn = document.getElementById("sunday-btn");

const daysOfWeek = document.querySelectorAll(".day-of-week");




mondayBtn.addEventListener("click", () => {
  showDayOfWeek("monday");
});

tuesdayBtn.addEventListener("click", () => {
  showDayOfWeek("tuesday");
});

wednesdayBtn.addEventListener("click", () => {
  showDayOfWeek("wednesday");
});

thursdayBtn.addEventListener("click", () => {
  showDayOfWeek("thursday");
});

fridayBtn.addEventListener("click", () => {
  showDayOfWeek("friday");
});

saturdayBtn.addEventListener("click", () => {
  showDayOfWeek("saturday");
});

sundayBtn.addEventListener("click", () => {
  showDayOfWeek("sunday");
});

function showDayOfWeek(day) {
  // Hide all days of the week
  for (let i = 0; i < daysOfWeek.length; i++) {
    daysOfWeek[i].style.display = "none";
  }

  // Show the selected day of the week
  const selectedDay = document.getElementById(day);
  selectedDay.style.display = "block";
}

const days = ["sunday", "monday", "tuesday", "wednesday", "thursday", "friday", "saturday"];
const today = new Date().getDay(); // Returns a number from 0-6, where 0 = Sunday, 1 = Monday, etc.
const currentDay = days[today];
showDayOfWeek(currentDay);

