// Variable to set the day and date at the top of the page
var currentDay = moment();
$("#currentDay").text(currentDay.format("dddd, MMMM do, YYYY"));

var saveBtn = document.getElementById("#saveBtn")
var descritpion = $("#description")

var currentHour = 

saveBtn.addEventListener("click", storeDescription)
console.log("click")
function storeDescription() {
  localStorage.setItem("description", JSON.stringify(descritpion))
}