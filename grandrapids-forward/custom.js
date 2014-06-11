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
        markup = '<!-- This is a test -->';

    if (Planbox.Data.project.slug == 'grfwd-staging') {
      $header.append(markup);
    }
  });
});