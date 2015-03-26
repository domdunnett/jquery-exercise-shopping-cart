jQuery(document).ready(function() {

	var totalPrice = Number($('#total-price').val());

  // Deletes item in shopping cart and updates total price on clicking delete button
	$('.delete-button').click(function() {
	  $(this).parent().parent().fadeOut();
	  var itemPrice = Number($(this).parent().parent().find('.item-price').data('price'));
	  var numOfItems = Number($(this).parent().find('.quantity').val());
	  totalPrice -= itemPrice * numOfItems;
	  $('#total-price').text('$'+totalPrice.toFixed(2));
	});

	// At the moment this simply adds a row with the input from each 
	$('#add-button').click(function() {
		var additionalItem = $('#add-item').val();
		var additionalItemPrice = $('#add-price').val();
	  $('#top-of-list').prepend("<div>"+ additionalItem + " at " +additionalItemPrice+"</div>").attr('class', 'row');
	  // $('#top-of-list').prepend(
	  // 		"<div>" + additionalItem + "</div>").attr('class', 'item-name col-xs-6'
	  // 		);
	  // $('#top-of-list').prepend(
	  // 		"<div>" + additionalItemPrice + "</div>").attr('class', 'item-price col-xs-3'
	  // );
	  // $('#top-of-list').prepend(
			// "<div>" + additionalItemPrice + "</div>").attr('class', 'item-price col-xs-3'
			// );

	});

	// This updates the total price with every keystroke
	$('.quantity').keyup(function() {
		var itemPrice = Number($(this).parent().parent().find('.item-price').data('price'));
		var numOfItems = Number($(this).val());
		var newPrice = numOfItems * itemPrice;
		totalPrice += newPrice;
		$('#total-price').text('$'+totalPrice.toFixed(2));
	});




});
