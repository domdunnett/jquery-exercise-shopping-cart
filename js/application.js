jQuery(document).ready(function() {

	// var totalPrice = 0;

  // Deletes item in shopping cart and updates total price on clicking delete button
	$(document).on('click', '.delete-button', function() {
	  
	  var currentRow = $(this).parent().parent();

	  currentRow.fadeOut(300, function() { 
	  	$(this).remove(); 
			calculateTotal();
	  });

	});

	// Dyanmically adds a new row in the smae style at the top of the list 
	$('#add-button').on('click', function() {
		var additionalItem = $('#add-item').val();
		var additionalItemPrice = Number($('#add-price').val()).toFixed(2);
	  $('#top-of-list').fadeIn(300, function() {
	  	$(this).before(
	      "<div class=\"row\" id=\"top-of-list\"> \
	        <div class=\"item-name col-xs-4\">"
	          + additionalItem +
	        "</div> \
	        <div class=\"item-price col-xs-3\" data-price=\"" + additionalItemPrice + "\">"
	          + "$" + additionalItemPrice +
	        "</div> \
	        <div class=\"item-qty col-xs-3\"> \
	          <label>QTY</label> \
	          <input class=\"quantity\"> \
	          <button class= \"delete-button btn btn-primary\"><span class=\"glyphicon glyphicon-trash\" aria-hidden=\"true\"></span> Delete</button> \
		      </div> \
	        <div class=\"item-subtotal col-xs-2\">$0.00</div>"
	  	)
	  });
	});

	// This updates the total price with every keystroke
	$(document).on('keyup', '.quantity', function() {

		var currentInputQuantity = $(this);
		calculateSubTotal(currentInputQuantity);
		calculateTotal();

  });

  //This function calculates the total of the quantities input in the input fields
	function calculateTotal() {
		
		var priceArray = $('.item-price');
		var quantityArray = $('.quantity');
		var totalPrice = 0;
		var priceOfItems;

		for (var i = 0; i < priceArray.length; i++) {
			var item = Number($(priceArray[i]).data('price'));
			var quantity = Number($(quantityArray[i]).val());
			if (isNaN(quantity) === false) {
				priceOfItems = item * quantity;	
				totalPrice += priceOfItems;
			}
		}
		
		$('#total-price').text('$'+totalPrice.toFixed(2));
		return totalPrice;
	}

	// This function calculates the subtotal on each keypress
	function calculateSubTotal(inputQuantity) {

		var itemPrice = Number(inputQuantity.parent().siblings('.item-price').data('price'));
		var itemQuantity = Number(inputQuantity.val());
		var subTotal = itemPrice * itemQuantity;

		if (isNaN(subTotal) === false) {
			inputQuantity.parent().siblings('.item-subtotal').text('$'+subTotal.toFixed(2));
		}
		else {
			inputQuantity.parent().siblings('.item-subtotal').text('$0.00');
		}

	}

});