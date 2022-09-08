
$(".section-sub-menu").eq(0).show()
$(".section-name").click(function(e){

  e.preventDefault();
  $(this).toggleClass("active")
  $(".section-sub-menu").hide()
  // $(this).removeClass("active")
  $(this).next(".section-sub-menu").slideDown(700)

})



// let index = $(".section-sub-menu").index()


    // else display.innerHTML = 'LIVE NOW';




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


