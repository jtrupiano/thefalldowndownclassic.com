function goToByScroll(id) {
  $('html,body').animate({
    scrollTop: $("#"+id).offset().top - 45
  }, 'slow');
}

$(function() {
  $("a[rel^='prettyPhoto']").prettyPhoto({
    theme: 'facebook', 
    slideshow: 5000
  });
});

