/**
 * Drupal.media.display
 *
 * Base class used to provide the display and options for any component
 * deriving from this class.  Components who derive are expected to provide
 * the elements that they define by implementing the getElements method.
 */
Drupal.media = Drupal.media ? Drupal.media : {};
(function($, media) {

  /**
   * Constructor
   *
   * @param - The jQuery context this component resides.
   * @param - The options for this component.
   */
  media.display = function(context, options) {

    if (context) {

      // Set the display and options.
      this.display = $(context);
      this.options = options;

      // Extend all display elements.
      this.options.elements = this.options.elements || {};
      jQuery.extend(this.options.elements, this.getElements());
    }

    // Derive from plugin
    media.plugin.call(this, context, options);
  };

  // Define the prototype for all controllers.
  media.display.prototype = new media.plugin();
  media.display.prototype.constructor = media.display;
  media.display.prototype = jQuery.extend(media.display.prototype, {

    /**
     * Returns all the jQuery elements that this component uses.
     *
     * @return - An object which defines all the jQuery elements that this component uses.
     */
    getElements:function() { return {}; },

    /**
     * Returns if this component is valid and exists within the DOM.
     */
    isValid:function() {
      return (this.display.length > 0);
    }
  });
})(jQuery, Drupal.media);