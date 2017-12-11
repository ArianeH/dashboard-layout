$(document).ready(function () {
  $('.accordion-toggle').on('click', function(){

    var accordion = $(this);
    var accordionContent = accordion.next('.accordion-content');
    accordion.children(':first').children('.indicator').toggleClass('fa-angle-left fa-angle-down');
    accordion.children(':first').toggleClass('open');
    accordionContent.slideToggle(250);

  });

  var date = new Date();
  var n = date.toDateString();
  var time = date.toLocaleTimeString();

  document.getElementById('time').innerHTML = n + ' ' + time;
});
