$(function() {

	// Get the form.
	var form = $('#contact-form');

	// Get the messages div.
	var formMessages = $('.form-message');

	// Set up an event listener for the contact form.
	$(form).submit(function(e) {
		// Stop the browser from submitting the form.
		e.preventDefault();
		var jsonData = {};
		// Serialize the form data.
		  var formData = $(form).serializeArray();
		  $.each(formData, function(i, field){
			jsonData[field.name] = field.value;
		  });	

		  console.log(jsonData);
		  
		// Submit the form using AJAX.
		$.ajax({
			type: 'POST',
			url: $(form).attr('action'),
			data: JSON.stringify(jsonData),
			contentType: 'application/json'
		})
		.done(function(response) {
			// Make sure that the formMessages div has the 'success' class.
			$(window).alert("Form Submitted");

			// Clear the form.
			$('#contact-form input,#contact-form textarea').val('');
		})
		.fail(function(data) {


			// Set the message text.
			if (data.responseText !== '') {
				$(window).alert(data.responseText);
			} else {
				$(window).alert('Oops! An error occured and your message could not be sent.');
			}
		});
	});

});
