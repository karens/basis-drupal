(function ($) {

"use strict";

Drupal.behaviors.toggles = {
  attach: function(context, settings) {
    var $toggles = $(context).find('[data-toggle]').once('toggle');

    $toggles.click(function(){
      var $this = $(this);
      var $target = $('[data-toggleable="' + $this.attr('data-toggle') + '"]');
      $target.toggleClass('js-toggled');
    });
  }
};

/**
 * Override tableDragHandle().
 */
Drupal.theme.prototype.tableDragHandle = function() {
  return '<a href="#" title="' + Drupal.t('Drag to re-order') + '" class="tabledrag-handle"><div class="handle"><div class="handle-inner">&nbsp;</div></div></a>';
};

})(jQuery);
