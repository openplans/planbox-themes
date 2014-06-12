$(function(){
  'use strict';

  var version;
  if (Planbox.Data.project.slug == 'grfwd-v1')      version = 1;
  if (Planbox.Data.project.slug == 'grfwd')         version = 2;
  if (Planbox.Data.project.slug == 'grfwd-staging') version = 3;

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
        '  <a href="#section-the-plan" class="button large expand radius">LEARN MORE</a>' +
        '</div>';

  if (version === 3) {
    $header.append(headermarkup);
  }

  // Inject the map into the area where the highlights would go
  var $highlights = $('.project-details .medium-4').first(),
      mapmarkup = '<a class="context-map-link" href="https://openplans.github.io/planbox-themes/grandrapids-forward/images/GRapids_Context_02-01.gif" target="_blank"><img class="context-map" src="//openplans.github.io/planbox-themes/grandrapids-forward/images/context-map-thumb.gif">Study Area</a>';

  if (version === 3) {
    $highlights.html(mapmarkup);
  }
});
