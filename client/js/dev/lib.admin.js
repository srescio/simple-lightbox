/**
 * Admin
 * @package Simple Lightbox
 * @subpackage Admin
 * @author Archetyped
 */

/* global SLB, postboxes, pagenow */

if ( typeof jQuery !== 'undefined' && typeof SLB !== 'undefined' && SLB.attach ) { (function ($) {

SLB.attach('Admin', {
	/**
	 * Initialization routines 
	 */
	init: function() {
		if ( postboxes ) {
			postboxes.add_postbox_toggles(pagenow);
		}
	},
});

$(document).ready(function() {
	SLB.Admin.init();
});

})(jQuery);}