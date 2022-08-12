// Variable to set the day and date at the top of the page
var currentDay = moment();
$("#currentDay").text(currentDay.format("dddd, MMMM do, YYYY"));