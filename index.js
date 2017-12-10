$(document).ready(function () {
  $('.accordion-toggle').on('click', function(){

    var accordion = $(this);
    var accordionContent = accordion.next('.accordion-content');
    accordion.children(':first').children('.indicator').toggleClass('fa-angle-left fa-angle-down');
    accordion.children(':first').toggleClass('open');
    accordionContent.slideToggle(250);

  });
});
