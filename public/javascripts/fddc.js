function goToByScroll(id) {
  $('html,body').animate({
    scrollTop: $("#"+id).offset().top - 45
  }, 'slow');
}

$(function() {
  $('#whos_cumming img').hover(
    function() {
      $(this).parent().addClass("hover");
    }, 
    function() {
      $(this).parent().removeClass("hover");
    }
  );
});
