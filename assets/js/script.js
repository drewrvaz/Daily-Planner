// Variables for each of the hours that appear on the daily planner
var hour9 = $("#9");
var hour10 = $("#10");
var hour11 = $("#11");
var hour12 = $("#12");
var hour1 = $("#13");
var hour2 = $("#14");
var hour3 = $("#15");
var hour4 = $("#16");
var hour5 = $("#17");
// Variable to call the time and date on the calendar from moment.js
currentDay = moment();
var digitalClock = function() {
  var currentDay = moment();
}

// Function to save the information that the user inputs into the calendar
function setDailyCalendar() {
  // Sets the current date and time on the calendar
  $("#currentDay").text(currentDay.format("dddd, MMMM Do, YYYY, h:mm:ss"));
  setInterval(digitalClock, 1000);

  // Checks each of the time blocks for an input
  $(".time-block").each(function() {
    var id = $(this).attr("id");
    var hours = localStorage.getItem(id);

    if (hours !== null) {
      $(this).children(".description").val(hours);
    }
  });
}

setDailyCalendar();
var saveBtn = $(".saveBtn");

// Event listener for the save button that saves the input in local storage
$(".saveBtn").on("click", function() {
  var time = ($(this).parent().attr("id"));
  var schedule = $(this).siblings(".description").val();

  localStorage.setItem(time, schedule);
});

// Function to change the color of the input area depending on the time. Currently broken
function trackTime() {
  hour = moment().hour();
  $(".time-block").each(function() {
    var currentHour = parseInt($(this).attr("id"));

    if (currentHour > hour) {
      $(this).addClass("future");
    } else if (currentHour === hour) {
      $(this).addClass("present");
    } else {
      $(this).addClass("past");
    }
  })
} console.log(trackTime)
