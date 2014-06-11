$(function(){
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
  $(function() {
    var $header = $('.project-header'),
        markup =
          '<div class="columns large-12">' +
          '  <h1 class="project-tagline">What is the future of Downtown Grand Rapids and the Grand River corridor?</h1>' +
          '</div>' +
          '<div class="columns large-6">' +
          '  <a href="#section-get-involved" class="button large expand radius">GET INVOLVED</a>' +
          '</div>' +
          '<div class="columns large-6">' +
          '  <a href="#section-the-plan" class="button large expand radius">LEARN MORE</a>' +
          '</div>';

    if (Planbox.Data.project.slug == 'grfwd-staging') {
      $header.append(markup);
    }
  });
});