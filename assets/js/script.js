var digitalClock = function() {
  // Variable to set the day and date at the top of the page
  var currentDay = moment();
  $("#currentDay").text(currentDay.format("dddd, MMMM Do, YYYY"));
};

digitalClock();
setInterval(digitalClock, 1000);

// Function to save and call the values from local storage for the user
$(document).ready(function() {
  trackTime();

  $("#hour9 .description").val(localStorage.getItem("hour9"));
  $("#hour10 .description").val(localStorage.getItem("hour10"));
  $("#hour11 .description").val(localStorage.getItem("hour11"));
  $("#hour12 .description").val(localStorage.getItem("hour12"));
  $("#hour13 .description").val(localStorage.getItem("hour13"));
  $("#hour14 .description").val(localStorage.getItem("hour14"));
  $("#hour15 .description").val(localStorage.getItem("hour15"));
  $("#hour16 .description").val(localStorage.getItem("hour16"));
  $("#hour17 .description").val(localStorage.getItem("hour17"));

})

// Tracks the current time so that it can be compared to change the background color of the input areas
function trackTime() {
  var currentHour = moment().hour();

  // Function to change the background color of the description area based on the time of day
  $(".description").each(function() {
    var descriptionHour = parseInt($(this).attr("id"));

    // Changes the color depending on past, present, or future
    if (descriptionHour === currentHour) {
      $(this).addClass("present");
    }else if (descriptionHour < currentHour) {
      $(this).addClass("past");
    }else {
      $(this).addClass("future");
    }
  })
}

// When you click the save button, the user input is saved in local storage
$(".saveBtn").on("click", function() {
  localStorage.setItem($(this).parent().attr("id"), $(this).prev().val());
})