$(window).on('load', function() {
  setTimeout(function(){
    $('#content').fadeIn('slow');
    $('#content').removeClass('loading');
  }, 100);
});