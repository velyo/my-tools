// KnockoutJs Custom Bidning Handler - Miscellaneous
// ////////////////////////////////////////////////////////////////////////////////////////////////

ko.bindingHandlers.pack = {
	init : function(element, valueAccessor, allBindingsAccessor, viewModel, bindingContext) {
		$(element).html(valueAccessor() + " / " + viewModel.size);
	}
};
ko.bindingHandlers.money = {
	init : function(element, valueAccessor, allBindingsAccessor, viewModel, bindingContext) {
		$(element).html("$" + valueAccessor());
	}
};