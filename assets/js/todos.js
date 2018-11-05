// "Check-off" functionality
$("ul").on("click", "li", function() {
	$(this).toggleClass("completed");
});

// Click on "X" to delete todo item
$("ul").on("click", "span", function(event) {
	// Prevent event bubbling	
	event.stopPropagation();

	// Fade out list item cleanly
	$(this).parent().fadeOut(500, function() {
		$(this).remove(); // Remove item from the DOM
	});
})

// Adding new list items
$("input[type='text']").keypress(function(event) {
	// If enter is pressed
	if(event.which === 13) {
		// Grab new todo text from input
		var todoText = $(this).val();

		// Remove text from input box
		$(this).val("");

		// Create a new li containing todoText
		$("ul").append("<li> <span><i class='fa fa-trash'></i></span> " + todoText + "</li>")
	}
})