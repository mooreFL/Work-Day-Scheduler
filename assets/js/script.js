$(document).ready(function () {
  //display current date and time using moment
  $("#currentDay").text(moment().format("MMMM Do YYYY, h:mm a"));
  //
  $(".saveBtn").on("click", function () {
    console.log(this);
    var text = $(this).siblings(".description").val(); //
    var time = $(this).parent().attr("id"); //

    // save in local storage
    localStorage.setItem(time, text);
  });
  //load any saved data from LocalStorage - do this for every hour
  $("#hour-9 .description").val(localStorage.getItem("hour-9"));
  $("#hour-10 .description").val(localStorage.getItem("hour-10"));
  $("#hour-11 .description").val(localStorage.getItem("hour-11"));
  $("#hour-12 .description").val(localStorage.getItem("hour-12"));
  $("#hour-13 .description").val(localStorage.getItem("hour-13"));
  $("#hour-14 .description").val(localStorage.getItem("hour-14"));
  $("#hour-15 .description").val(localStorage.getItem("hour-15"));
  $("#hour-16 .description").val(localStorage.getItem("hour-16"));
  $("#hour-17 .description").val(localStorage.getItem("hour-17"));

  function timeEquiv() {
    //get the current hour using moment, disregard the minutes in the format by using "HH"
    var currentHour = moment("4/3/2021 12:00").format("HH");

    // calls for dialogue class and returns each of the dialogues
    $(".dialogue").each(function () {
        //grabs the id of the dialogues and removes the "hour-" to return only the integer. 
        //square brackets with 1 returns the first attribute
      var rowHour = parseInt($(this).attr("id").split("hour-")[1]);
      //logs the previous lines result and the current hour
      console.log(rowHour, currentHour);

      //if statement to assign class depending on current time
      if (rowHour < currentHour) {
        $(this).addClass("previous");
      } else if (rowHour == currentHour) {
        $(this).addClass("present");
      } else {
        $(this).addClass("future");
      }
    });
  }
  timeEquiv(); //
});


