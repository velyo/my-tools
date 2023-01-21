// KnockoutJs Custom Bidning Handler - Indexer
// ////////////////////////////////////////////////////////////////////////////////////////////////

ko.bindingHandlers.indexerPrefix = {
	init: function(element, valueAccessor, allBindingsAccessor, viewModel, bindingContext) {
		ko.indexerPrefix = valueAccessor();
	}
};
ko.virtualElements.allowedBindings.indexerPrefix = true;

ko.bindingHandlers.indexer = (function() {
	function render(element, valueAccessor, allBindingsAccessor, viewModel, bindingContext) {
		var property = valueAccessor();
		if(typeof property === "string") {
			$(element).attr("name", ko.indexerPrefix + "[" + bindingContext.$index() + "]." + property);
			if(property in viewModel) {
				if (ko.isWriteableObservable(viewModel[property]))
					ko.applyBindingsToNode(element, { value: viewModel[property], valueUpdate: 'afterkeydown' });
				else if(ko.isComputed(viewModel[property]))
					ko.applyBindingsToNode(element, { value: viewModel[property] });
				else
					$(element).val(ko.utils.unwrapObservable(viewModel[property]));
			}
		}
		else if(typeof property === "object") {
			var prefix = property.prefix || ko.indexerPrefix;
			var value = property.value || property.field;
			$(element).attr("name", prefix + "[" + bindingContext.$index() + "]." + property.field);
			if(value in viewModel) {
				if (ko.isWriteableObservable(viewModel[value])) {
					if($(element).is('select[multiple]'))
						ko.applyBindingsToNode(element, { selectedOptions: viewModel[value], valueUpdate: 'afterkeydown' });
					else
						ko.applyBindingsToNode(element, { value: viewModel[value], valueUpdate: 'afterkeydown' });
				}
				else if(ko.isComputed(viewModel[property]))
					ko.applyBindingsToNode(element, { value: viewModel[property] });
				else
					$(element).val(ko.utils.unwrapObservable(viewModel[value]));
			}
		}
		else {
			console.error("Invalid indexer binding!");
		}
	};

	return{init: render, update: render};
})();