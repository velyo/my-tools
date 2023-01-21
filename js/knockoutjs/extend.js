// KnockoutJs Custom Extenders
// ////////////////////////////////////////////////////////////////////////////////////////////////

ko.extenders.trackChange = function (target, track) {
    if (track) {
        target.isDirty = ko.observable(false);
        target.originalValue = target();
        target.subscribe(function (newValue) {
            // use != not !== so numbers will equate naturally
            target.isDirty(newValue != target.originalValue);
        });
    }
    return target;
};

ko.extenders.trackUpdate = function (target, track) {
    if (track) {
        target.isDirty = ko.observable(false);
        target.originalValue = target();
        target.subscribe(function (newValue) {
            // use != not !== so numbers will equate naturally
        	if(target.originalValue !== null) {
        		target.isDirty(newValue != target.originalValue);
        	}
        	else {
        		target.originalValue = newValue;
        	}
        });
    }
    return target;
};