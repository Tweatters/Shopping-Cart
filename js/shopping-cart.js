$(document).ready(function() {
	var $enterItem = $('#enter-item');
	var $currency = $('#item-price');
	var $quantity = $('#quantity');
	var template = $('<div class="row viewed"><div class="column pad"><a href="#" class="button delete" title="Delete Item">Delete</a><a href="#" class="button edit" title="Edit Item">Edit</a><a href="#" class="button hold" title="Put Item On Layaway">Hold</a></div><div class="column output-margin item" id="item"></div><div class="column output-margin price"></div><div class="column output-margin amount"></div><div class="column output-margin total"></div></div>');

	$('.update').on("click", function(event) {
		event.preventDefault();
		var itemName = $enterItem.val();
		var price = $currency.val();
		var amount = $quantity.val();
		var newItem = template.clone();

		$('.item', newItem).text(itemName);
		$('.price', newItem).text("$"+price);
		$('.amount', newItem).text(amount);
		$('.total', newItem).text("$"+(price * amount));

		$('.cart-list').append(newItem);
	});
});