function goToByScroll(id) {
  $('html,body').animate({
    scrollTop: $("#"+id).offset().top - 45
  }, 'slow');
}
