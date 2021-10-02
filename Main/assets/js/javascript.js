$(document).ready(function () {
  $(".saveBtn").on("click", function () {
    console.log("test");
    var value = $(this).siblings(".description").val();
    var time = $(this).parent().attr("id");

    localStorage.setItem(time, value);
  });

  var currentHour = moment().hours();

  var timeBlocks = $(".container").children();

  var j = 9;

  for (var i = 0; i < timeBlocks.length; i++) {
    var todo = localStorage.getItem(j);
    var currentTimeBlock = timeBlocks[i].getAttribute("id");
    var currentBlockChild = timeBlocks[i].childNodes[3];
    if (todo == null || todo == undefined) {
      currentBlockChild.append("");
    } else if (j == currentTimeBlock) {
      currentBlockChild.append(todo);
    }
    j++;
  }

  var currentDay = moment().format("dddd, MMMM Do");
  $("#currentDay").append(currentDay);

  for (var i = 0; i < timeBlocks.length; i++) {
    var currentTimeBlock = timeBlocks[i].getAttribute("id");
    var currentBlockChild = timeBlocks[i].childNodes[3];
    if (currentTimeBlock < currentHour) {
      currentBlockChild.setAttribute("class", "col-md-10 past description");
    } else if (currentTimeBlock == currentHour) {
      currentBlockChild.setAttribute("class", "col-md-10 present description");
    } else {
      currentBlockChild.setAttribute("class", "col-md-10 future description");
    }
  }
});
