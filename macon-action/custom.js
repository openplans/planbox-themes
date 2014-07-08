$(function(){
  'use strict';

  var version;
  if (Planbox.Data.project.slug == 'macon-action-plan')  version = 1;

  // Init the image gallery interactivity
  $(document).on('click', '.macon-action-thumb-link', function(evt) {
    evt.preventDefault();
    var $this = $(this),
        $context = $this.parents('.macon-action-image-gallery'),
        imageUrl = $this.attr('data-url');

    $context.find('.macon-action-thumb-link').removeClass('active');
    $this.addClass('active');

    $context.find('.macon-action-image').attr('src', imageUrl);
  });

  // Init the get involved form toggles
  $(document).on('click', '.macon-action-toggle-link', function(evt) {
    evt.preventDefault();
    var $this = $(this),
        $context = $this.parent('.panel');

    $context.find('.macon-action-toggle-target').removeClass('hide');
    $this.addClass('hide');

  });

  // Inject the tagline and action buttons into the project header
  var $header = $('.project-header'),
      headermarkup =
        // '<div class="columns large-12">' +
        // '  <h1 class="project-tagline">An intriguing tag line about the project.</h1>' +
        // '</div>' +
        '<div class="columns large-6">' +
        '  <a href="#section-get-involved" class="button large expand radius">GET INVOLVED</a>' +
        '</div>' +
        '<div class="columns large-6">' +
        '  <a href="#section-urban-core" class="button large expand radius">LEARN MORE</a>' +
        '</div>';

  if (version === 1) {
    $header.append(headermarkup);
  }

  // Inject the map into the area where the highlights would go
  var $highlights = $('.project-details .medium-4').first(),
      mapmarkup = 
        '<h4>Why are we working on a plan for Macon\'s "Urban Core"?</h4>' + 
        '<p>The "Urban Core" refers to Downtown Macon and nearby neighborhoods. The urban core is where the City was first established, and it remains a center of employment, entertainment, and institutions, as well as home to a collection of historic and diverse neighborhoods and communities. The urban core is the heart of Macon.</p>' + 
        '<h4>MAP in the NEWS</h4>' + 
        '<p><a href="http://bit.ly/1libF4x">Have you seen the new green spaces on Cherry Street?</a></p>';

  if (version === 1) {
    $highlights.html(mapmarkup);
  }

  // Inject social links into the header
  var $header = $('.project-header'),
      socialbuttons = 
        '<ul class="social-media-list right">' +
        '  <li><a class="" href="http://facebook.com/MaconActionPlan" target="_blank"><img src="//openplans.github.io/planbox-themes/grandrapids-forward/images/social-facebook.gif"></a></li>' +
        '  <li><a class="" href="http://instagram.com/MaconActionPlan" target="_blank"><img src="//openplans.github.io/planbox-themes/grandrapids-forward/images/social-instagram.gif"></a></li>' +
        '  <li><a class="" href="http://twitter.com/MaconActionPlan" target="_blank"><img src="//openplans.github.io/planbox-themes/grandrapids-forward/images/social-twitter.gif"></a></li>' +
        '</ul>';

  if (version === 1) {
    $header.prepend(socialbuttons);
  }

});
