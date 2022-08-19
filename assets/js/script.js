var hour9 = $("#9");
var hour10 = $("#10");
var hour11 = $("#11");
var hour12 = $("#12");
var hour1 = $("#13");
var hour2 = $("#14");
var hour3 = $("#15");
var hour4 = $("#16");
var hour5 = $("#17");
currentDay = moment();
var digitalClock = function() {
  var currentDay = moment();
}

function setDailyCalendar() {
  $("#currentDay").text(currentDay.format("dddd, MMMM Do, YYYY"));
  setInterval(digitalClock, 1000);

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

$(".saveBtn").on("click", function() {
  var time = ($(this).parent().attr("id"));
  var schedule = $(this).siblings(".description").val();

  localStorage.setItem(time, schedule);
});

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
