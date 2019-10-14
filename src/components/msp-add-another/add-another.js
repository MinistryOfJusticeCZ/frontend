mspFrontend.AddAnother = function(container) {
	this.container = $(container);
	this.container.on('click', '.msp-add-another__remove-button', $.proxy(this, 'onRemoveButtonClick'));
	this.container.on('click', '.msp-add-another__add-button', $.proxy(this, 'onAddButtonClick'));
	this.container.find('.msp-add-another__add-button, msp-add-another__remove-button').prop('type', 'button');
};

mspFrontend.AddAnother.prototype.onAddButtonClick = function(e) {
	var item = this.getNewItem();
	this.updateAttributes(this.getItems().length, item);
	this.resetItem(item);
	var firstItem = this.getItems().first();
	if(!this.hasRemoveButton(firstItem)) {
		this.createRemoveButton(firstItem);
	}
	this.getItems().last().after(item);
	item.find('input, textarea, select').first().focus();
};

mspFrontend.AddAnother.prototype.hasRemoveButton = function(item) {
	return item.find('.msp-add-another__remove-button').length;
};

mspFrontend.AddAnother.prototype.getItems = function() {
	return this.container.find('.msp-add-another__item');
};

mspFrontend.AddAnother.prototype.getNewItem = function() {
	var item = this.getItems().first().clone();
	if(!this.hasRemoveButton(item)) {
		this.createRemoveButton(item);
	}
	return item;
};

mspFrontend.AddAnother.prototype.updateAttributes = function(index, item) {
	item.find('[data-name]').each(function(i, el) {
		el.name = $(el).attr('data-name').replace(/%index%/, index);
		el.id = $(el).attr('data-id').replace(/%index%/, index);
		($(el).prev('label')[0] || $(el).parents('label')[0]).htmlFor = el.id;
	});
};

mspFrontend.AddAnother.prototype.createRemoveButton = function(item) {
	item.append('<button type="button" class="govuk-button msp-button--secondary msp-add-another__remove-button">Remove</button>');
};

mspFrontend.AddAnother.prototype.resetItem = function(item) {
	item.find('[data-name], [data-id]').each(function(index, el) {
		if(el.type == 'checkbox' || el.type == 'radio') {
			el.checked = false;
		} else {
			el.value = '';
		}
	});
};

mspFrontend.AddAnother.prototype.onRemoveButtonClick = function(e) {
	$(e.currentTarget).parents('.msp-add-another__item').remove();
	var items = this.getItems();
	if(items.length === 1) {
		items.find('.msp-add-another__remove-button').remove();
	}
	items.each($.proxy(function(index, el) {
		this.updateAttributes(index, $(el));
	}, this));
	this.focusHeading();
};

mspFrontend.AddAnother.prototype.focusHeading = function() {
	this.container.find('.msp-add-another__heading').focus();
};