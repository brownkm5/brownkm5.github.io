
(function($){

  // bio used in header
  var bio = "<p>Thank you for looking at my portfolio! My name is Kevin Brown and I'm a Junior Front End Developer living in Greenville, SC.  I am a College of Charleston alumni, and I recently graduated from The Iron Yard in Greenville. I am currently looking for a Junior-Dev position doing front end programming.</p>"
//I would say something like, “Thank you for taking a look at my portfolio! My name is Kevin Brown and I am a Junior Front End Engineer currently living in Greenville, SC. When I’m not behind my computer, I like to…” then continue on talking in a personable way about some of your interests. I would have two links to your resume, a PDF they can open in another tab to quickly view, and a PDF that will immediately download it. (One for people browsing and one for recruiters who need a copy). I wouldn’t mention your major at College of Charleston since it’s on your resume
  // sets up mobile nav bar motion
  $(function(){
    $('.button-collapse').sideNav();
  });
//no longer use the slider for displaying projects
  // // sets up slider of projects
  // $(document).ready(function(){
  //     $('.slider').slider({full_width: true});
  //   });
  //
  // // shows and hides the project info when the screenshot is hovered over
  // $('.project').hover(function(){
  //   $('.slider').slider('pause');
  //   $('.caption').show();
  // },
  // function(){
  //   $('.slider').slider('start');
  //   $('.caption').hide();
  // });

  // replaces starting header with bio info
  function handleAboutMe(){
    $('.about-me').replaceWith(`
      <div class="row center-align">
        <h3 class='black-text'>About Me</h3>
        <div class="col s12">
          <div class="card blue-grey darken-1">
            <div class="card-content white-text">
              <img class='headshot' src="images/headshot.jpg">
              <div class="bio">${bio}</div>
            </div>
          </div>
        </div>
      </div>
    `);
  };
  $('#about-button').on('click', handleAboutMe);

})(jQuery);
