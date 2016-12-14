(function($){
  var bio = "<p>My name is Kevin Brown, and I attended The Iron Yard in Greenville, SC.  I am familiar with HTML, CSS, SCSS, JavaScript, Backbone, Handlebars, & React.</p>"
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

  function handleAboutMe(){
    $('.about-me').replaceWith('<p>My name is Kevin Brown</p>');
    console.log('working');
  };

  $('#about-button').on('click', function (){
    $('.about-me').replaceWith(`<div class="row center-align"><h3>About Me</h3><div class="bio">${bio}</div></div>`);
  });
})(jQuery);
