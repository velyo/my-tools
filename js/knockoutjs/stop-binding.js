// KnockoutJs Custom Bidning Handler - StopBindings
// ////////////////////////////////////////////////////////////////////////////////////////////////

ko.bindingHandlers.stopBindings = {
    init: function() {
        return { controlsDescendantBindings: true };
    }
};
ko.virtualElements.allowedBindings.stopBindings = true;

//execute a handler for the enter key
ko.bindingHandlers.enterkey = {
    init: function (element, valueAccessor, allBindingsAccessor, viewModel) {
       var allBindings = allBindingsAccessor();

        $(element).on('keypress', 'input, textarea, select', function (e) {
            var keyCode = e.which || e.keyCode;
            if (keyCode !== 13) {
                return true;
            }

            var target = e.target;
            target.blur();

            allBindings.enterkey.call(viewModel, viewModel, target, element);

            return false;
        });
    }
};