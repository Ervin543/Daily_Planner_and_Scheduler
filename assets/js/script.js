//-- this var targets all of the save buttons in the html --//
var buttons = $('.saveBtn');

//-- this function will save the text that has been entered by the user through local storage, and that saved text will persist after the page has been refreshed --//
buttons.on('click', function (e) {
  console.log ($(this).siblings('textarea').val())
  localStorage.setItem($(this).siblings('textarea').attr('id'),$(this).siblings('textarea').val())
})
for (let i = 0; i < localStorage.length; i++) {
  $('#'+ i).val(localStorage.getItem(i))
  
}

//-- this var will display the current date below the header text --//
var currentDay = dayjs();
$('#currentDay').text(currentDay.format('MM/DD/YYYY'));

//-- the code below checks to see if the current time needs to be updated at certain intervals --//
timeUpdater ();
setInterval(timeUpdater, 15000);

function timeUpdater() {
  //-- this var retrieves the current number of hours --//
  var currentHour = dayjs().hour();
  
  //-- this code loops over each time block and checks to see if it needs a specific background color to be applied based on the current time --//
 $('.time-block').each(function () {
   var timeBlock = parseInt($(this).attr('id').split('-')[1]);
   
   //-- the code here checks to see if we've moved past the current hour and applies a new class to the div element that houses the time-block classes --//
   if (timeBlock < currentHour) {
     $(this).addClass('past');
    } else if (timeBlock === currentHour) {
      $(this).removeClass('past');
      $(this).addClass('present');
    } else {
    $(this).removeClass('past');
    $(this).removeClass('present');
    $(this).addClass('future');
  }
})
}