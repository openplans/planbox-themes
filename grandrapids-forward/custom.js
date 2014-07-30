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

  // Inject the map into the area where the highlights would go
  var $highlights = $('.project-details .medium-4').first(),
      // mapmarkup = '<a class="context-map-link" href="https://openplans.github.io/planbox-themes/grandrapids-forward/images/GRapids_Context_02-01.gif" target="_blank"><img class="context-map" src="//openplans.github.io/planbox-themes/grandrapids-forward/images/context-map-thumb.gif">Study Area</a>';
      mapmarkup = '<iframe width="100%" height="500" frameborder="0" src="https://a.tiles.mapbox.com/v4/openplans.in9pjka1/attribution,zoompan,zoomwheel,geocoder,legend,share.html?access_token=pk.eyJ1Ijoib3BlbnBsYW5zIiwiYSI6ImZRQzRPYnMifQ.f75KI3Q9rFXRY2Zciz6DKw#12/42.9793/-85.6733"></iframe>';
  if (version === 3) {
    $highlights.html(mapmarkup);
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
    $highlights.html(mapmarkup);
    $header.prepend(socialbuttons);
  }
});
