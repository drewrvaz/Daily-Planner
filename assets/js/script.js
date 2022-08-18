// 
var digitalClock = function() {
  // Variable to set the day and date at the top of the page
  var currentDay = moment();
  $("#currentDay").text(currentDay.format("dddd, MMMM Do, YYYY"));
};

digitalClock();
setInterval(digitalClock, 1000);

function trackTime() {
  var currentHour = moment().hour();

  $(".description"). each(function() {
    var descriptionHour = parseInt($(this).attr("id"));

    if (descriptionHour === currentHour) {
      $(this).addClass("current");
    }else if (currentHour < descriptionHour) {
      $(this).addClass("past")
    }else {
      $(this).addClass("future")
    }
  })
}