
$(function() {
  $(".accordion-wrap .accordion-section").eq(0).find('.section-sub-menu').addClass('active')
  $(".section-name").click(function(e){
    e.preventDefault();
    $(".section-name").removeClass('active')
    $(this).addClass("active")
    $(".section-sub-menu").removeClass('active')
    $(this).next(".section-sub-menu").addClass('active')
     })
  })




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







