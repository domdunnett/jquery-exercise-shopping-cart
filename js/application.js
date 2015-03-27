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
	  $('#top-of-list').before(
	      "<div class=\"row\"> \
	        <div class=\"item-name col-xs-6\">"
	          + additionalItem +
	        "</div> \
	        <div class=\"item-price col-xs-3\" data-price=\"10.00\">"
	          + "$" + additionalItemPrice +
	        "</div> \
	        <div class=\"item-qty col-xs-3\"> \
	          <label>QTY</label> \
	          <input class=\"quantity\"> \
	          <button class= \"delete-button\">Delete</button> \
        </div>" 
	  	);
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
