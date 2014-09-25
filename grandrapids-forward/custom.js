$(function(){
  'use strict';

  var version;
  if (Planbox.Data.project.slug == 'grfwd-v1-old')  version = 1;
  if (Planbox.Data.project.slug == 'grfwd-v2-old')  version = 2;
  if (Planbox.Data.project.slug == 'grfwd')         version = 3;

  // Init the image gallery interactivity
  $(document).on('click', '.grfwd-thumb-link', function(evt) {
    evt.preventDefault();
    var $this = $(this),
        $context = $this.parents('.grfwd-image-gallery'),
        imageUrl = $this.attr('data-url');

    $context.find('.grfwd-thumb-link').removeClass('active');
    $this.addClass('active');

    $context.find('.grfwd-image').attr('src', imageUrl);
  });

  // Init the get involved form toggles
  $(document).on('click', '.grfwd-toggle-link', function(evt) {
    evt.preventDefault();
    var $this = $(this),
        $context = $this.parent('.panel');

    $context.find('.grfwd-toggle-target').removeClass('hide');
    $this.addClass('hide');

  });

  // Init the news toggles
  $(document).on('click', '.toggle-section-link', function(evt) {
    evt.preventDefault();
    $(this).parent().siblings('.toggle-section-target').removeClass('hide');
    $(this).hide();

  });

  // Inject the tagline and action buttons into the project header
  var $header = $('.project-header'),
      headermarkup =
        '<div class="columns large-12">' +
        '  <h1 class="project-tagline">Help shape the future of Downtown Grand Rapids and the Grand River corridor.</h1>' +
        '</div>' +
        '<div class="columns large-6">' +
        '  <a href="#section-get-involved" class="button large expand radius">GET INVOLVED</a>' +
        '</div>' +
        '<div class="columns large-6">' +
        '  <a href="#section-downtown" class="button large expand radius">LEARN MORE</a>' +
        '</div>';

  if (version === 3) {
    $header.append(headermarkup);
  }


  // Inject social links into the header
  var $header = $('.project-header'),
      socialbuttons = 
        '<ul class="social-media-list right">' +
        '  <li><a class="" href="http://facebook.com/grfwd" target="_blank"><img src="//openplans.github.io/planbox-themes/grandrapids-forward/images/social-facebook.gif"></a></li>' +
        '  <li><a class="" href="http://instagram.com/grfwd" target="_blank"><img src="//openplans.github.io/planbox-themes/grandrapids-forward/images/social-instagram.gif"></a></li>' +
        '  <li><a class="" href="http://twitter.com/grfwd" target="_blank"><img src="//openplans.github.io/planbox-themes/grandrapids-forward/images/social-twitter.gif"></a></li>' +
        '</ul>';

  if (version === 3) {
    $header.prepend(socialbuttons);
  }

  if (Planbox.Data.project.slug == 'grfwd-staging')  {
    $header.append(headermarkup);
    $header.prepend(socialbuttons);
  }


  // Init the timeline toggles
  $(document).on('click', '.event-title', function() {
    $(this).next('.row').find('.event-description').toggle();
  });
  $(document).on('click', '.event-datetime', function() {
    $(this).next('.event-description').toggle('fast');
  });

});
