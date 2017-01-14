(function ($) {

  'use strict';

  /**
   * Tests for background-blend-mode used on some hero elements
   *
   * @return {boolean} True if browser supports background-blend-mode.
   */
  Drupal.featureDetect.backgroundBlendMode = function () {
    var $body = $('body');
    var $testElement = $('<div style="background-blend-mode: luminosity; width: 0; height: 0;"></div>');

    if ($body.hasClass('has-background-blend-mode')) {
      return true;
    }
    else if ($body.hasClass('no-background-blend-mode')) {
      return false;
    }
    else {
      $body.append($testElement);
      if ($testElement.css('background-blend-mode') === 'luminosity') {
        $('body').addClass('has-background-blend-mode');
        $testElement.remove();
        return true;
      }
      else {
        $body.addClass('no-background-blend-mode');
        $testElement.remove();
        return false;
      }
    }
  };

  $(document).ready(function () {
    Drupal.featureDetect.backgroundBlendMode();
    Drupal.featureDetect.flexbox();
  });

})(jQuery);
