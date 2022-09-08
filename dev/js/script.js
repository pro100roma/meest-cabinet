

$('.gumb').click(function(){
  $(this).toggleClass('open');
  $('.bottom-header.mobile').slideToggle(700)
})



var date;
var display = document.getElementById('time'); 
setInterval(function(){ 
    date = new Date();
    var currenthours = date.getHours();
    var hours;
    var minutes;
    var secondes;
    if (currenthours != 24){
        if (currenthours < 24)
            hours = 23 - currenthours;
        else hours = 21 + (24 - currenthours);
        minutes = 60 - date.getMinutes();
        secondes = 60 - date.getSeconds();
    $(".hours").text(hours + ':')
    $(".minutes").text(minutes + ':')
    $(".secondes").text(secondes)
    // display.innerHTML = hours + ':' + minutes + ':' +secondes;
    }
    else display.innerHTML = 'LIVE NOW';
},1000);




$(function() {
  $(".hed-accordion").click(function(e){

    e.preventDefault();
    var $this = $(this);

    if (!$this.hasClass("accordion-active")) {
      $(".sub-accord").slideUp(700);
      $(".hed-accordion").removeClass("accordion-active");
    }

    $this.toggleClass("accordion-active");
    $this.find('.sub-accord').slideToggle();
  });
  
});


