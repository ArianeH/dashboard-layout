$(document).ready(function () {

  $('.accordion-toggle').on('click', function(){
    var accordion = $(this);
    var accordionContent = accordion.next('.accordion-content');
    accordion.children(':first').children('.indicator').toggleClass('fa-angle-left fa-angle-down');
    accordion.children(':first').toggleClass('open');
    accordionContent.slideToggle(250);
  });

  displayDate();

});

function displayDate() {
  var date = new Date();
  var dateFormatted = $.datepicker.formatDate('DD dd MM yy', new Date());
  var minutes = date.getMinutes();

  if(minutes < 10) {
    minutes = '0'  + minutes
  }

  var timeSuffix = 'pm'

  if(date.getHours() < 12 ) {
    timeSuffix = 'am'
  }

  document.getElementById('time').innerHTML = dateFormatted + ' ' + date.getHours() + '.' + minutes + timeSuffix;
}
