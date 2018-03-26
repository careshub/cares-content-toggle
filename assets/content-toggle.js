(function($) {
	"use strict";

	var hashBase = new Date().getTime();

	// Add unique IDs and ARIA attributes, and update element visibility on page load.
	$( "#content .toggle-container" ).each( function( i, item ){
		var expanded = $( item ).hasClass( "toggle-open" ),
			trigger  = $( item ).find( ".toggle-trigger" ),
			content  = $( item ).find( ".toggle-content" ),
			hash     = hashBase + "-" + i;

		// Make sure that the content trigger has a unique ID.
		if ( ! trigger.attr( "id" ) ) {
			trigger.attr( "id", "toggleable-content-trigger-" + hash );
		}

		// Make sure that the content container has a unique ID.
		if ( ! content.attr( "id" ) ) {
			content.attr( "id", "toggleable-content-container-" + hash );
		}

		// Let screen readers know that the trigger controls the content
		trigger.attr({
			"aria-controls": content.attr( "id" ),
			"aria-expanded": expanded,
		});

		// Add the labelled by attribute.
		content.not( "[aria-labelledby]" )
			.attr( "aria-labelledby", trigger.attr( "id" ) );

		/*
		 * If the content does not have the class "toggle-open"
		 * it should be hidden at page load.
		 */
		if ( ! expanded ) {
			// Make sure it has the closed class.
			$( item ).addClass( "toggle-closed" );

			content.hide();
		}
	});

	// Open and close the content container on click.
	$( "#content" ).on( "click", ".toggle-trigger", function(e) {
		e.preventDefault();
		var toggleable   = $( this ).closest( ".toggle-container" ),
			was_expanded = toggleable.hasClass( "toggle-open" );

		toggleable.find( ".toggle-content" ).slideToggle();

		// Add or remove classes.
		if ( was_expanded ) {
			toggleable.removeClass( "toggle-open" ).addClass( "toggle-closed" );
		} else {
			toggleable.removeClass( "toggle-closed" ).addClass( "toggle-open" );

			// Fire an action, letting other scripts know that a container has been expanded.
			$( toggleable ).trigger( "toggle-content-shown", toggleable.id );
		}

		// Update the ARIA status.
		$( this ).attr(	"aria-expanded", ! was_expanded );
	});
}(jQuery));
