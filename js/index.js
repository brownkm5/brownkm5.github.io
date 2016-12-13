(function($){

  // sets up mobile nav bar motion
  $(function(){
    $('.button-collapse').sideNav();
  });

  // sets up slider of projects
  $(document).ready(function(){
      $('.slider').slider({full_width: true});
    });

  // shows and hides the project info when the screenshot is hovered over
  $('.project').hover(function(){
    $('.slider').slider('pause');
    $('.caption').show();
  },
  function(){
    $('.slider').slider('start');
    $('.caption').hide();
  });

})(jQuery);
