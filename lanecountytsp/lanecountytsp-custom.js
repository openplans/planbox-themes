$(function() {
  $('body').on('change', '[name="share_type"]', function() {
    var selected = $(this).val();

    $('.desc').removeClass('hide');
    $('.desc-label').addClass('hide');

    if (selected == 'a need') {
      $('.need-desc').removeClass('hide');
    }
    else if (selected == 'a deficiency') {
      $('.deficiency-desc').removeClass('hide');
    }
    else if (selected == 'an idea') {
      $('.idea-desc').removeClass('hide');
    }

  });
});
