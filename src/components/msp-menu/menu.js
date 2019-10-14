mspFrontend.Menu = function(params) {
	this.container = params.container;
	this.menu = this.container.find('.msp-menu__wrapper');
	if(params.menuClasses) {
		this.menu.addClass(params.menuClasses);
	}
	this.menu.attr('role', 'menu');
	this.mq = params.mq;
	this.buttonText = params.buttonText;
	this.buttonClasses = params.buttonClasses || '';
	this.keys = { esc: 27, up: 38, down: 40, tab: 9 };
	this.menu.on('keydown', '[role=menuitem]', $.proxy(this, 'onButtonKeydown'));
	this.createToggleButton();
	this.setupResponsiveChecks();
	$(document).on('click', $.proxy(this, 'onDocumentClick'));
};

mspFrontend.Menu.prototype.onDocumentClick = function(e) {
	if(!$.contains(this.container[0], e.target)) {
	  this.hideMenu();
  }
};

mspFrontend.Menu.prototype.createToggleButton = function() {
	this.menuButton = $('<button class="govuk-button msp-menu__toggle-button ' + this.buttonClasses + '" type="button" aria-haspopup="true" aria-expanded="false">'+this.buttonText+'</button>');
	this.menuButton.on('click', $.proxy(this, 'onMenuButtonClick'));
	this.menuButton.on('keydown', $.proxy(this, 'onMenuKeyDown'));
};

mspFrontend.Menu.prototype.setupResponsiveChecks = function() {
	this.mql = window.matchMedia(this.mq);
	this.mql.addListener($.proxy(this, 'checkMode'));
	this.checkMode(this.mql);
};

mspFrontend.Menu.prototype.checkMode = function(mql) {
	if(mql.matches) {
		this.enableBigMode();
	} else {
		this.enableSmallMode();
	}
};

mspFrontend.Menu.prototype.enableSmallMode = function() {
	this.container.prepend(this.menuButton);
	this.hideMenu();
	this.removeButtonClasses();
	this.menu.attr('role', 'menu');
	this.container.find('.msp-menu__item').attr('role', 'menuitem');
};

mspFrontend.Menu.prototype.enableBigMode = function() {
	this.menuButton.detach();
	this.showMenu();
	this.addButtonClasses();
	this.menu.removeAttr('role');
	this.container.find('.msp-menu__item').removeAttr('role');
};

mspFrontend.Menu.prototype.removeButtonClasses = function() {
	this.menu.find('.msp-menu__item').each(function(index, el) {
		if($(el).hasClass('msp-button--secondary')) {
			$(el).attr('data-secondary', 'true');
			$(el).removeClass('msp-button--secondary');
		}
		$(el).removeClass('govuk-button');
	});
};

mspFrontend.Menu.prototype.addButtonClasses = function() {
	this.menu.find('.msp-menu__item').each(function(index, el) {
		if($(el).attr('data-secondary') == 'true') {
			$(el).addClass('msp-button--secondary');
		}
		$(el).addClass('govuk-button');
	});
};

mspFrontend.Menu.prototype.hideMenu = function() {
	this.menuButton.attr('aria-expanded', 'false');
};

mspFrontend.Menu.prototype.showMenu = function() {
	this.menuButton.attr('aria-expanded', 'true');
};

mspFrontend.Menu.prototype.onMenuButtonClick = function() {
	this.toggle();
};

mspFrontend.Menu.prototype.toggle = function() {
	if(this.menuButton.attr('aria-expanded') == 'false') {
		this.showMenu();
		this.menu.find('[role=menuitem]').first().focus();
	} else {
		this.hideMenu();
		this.menuButton.focus();
	}
};

mspFrontend.Menu.prototype.onMenuKeyDown = function(e) {
	switch (e.keyCode) {
		case this.keys.down:
			this.toggle();
			break;
	}
};

mspFrontend.Menu.prototype.onButtonKeydown = function(e) {
	switch (e.keyCode) {
		case this.keys.up:
			e.preventDefault();
			this.focusPrevious(e.currentTarget);
			break;
		case this.keys.down:
			e.preventDefault();
			this.focusNext(e.currentTarget);
			break;
		case this.keys.esc:
			if(!this.mq.matches) {
				this.menuButton.focus();
				this.hideMenu();
			}
			break;
		case this.keys.tab:
			if(!this.mq.matches) {
				this.hideMenu();
			}
	}
};

mspFrontend.Menu.prototype.focusNext = function(currentButton) {
	var next = $(currentButton).next();
	if(next[0]) {
		next.focus();
	} else {
		this.container.find('[role=menutiem]').first().focus();
	}
};

mspFrontend.Menu.prototype.focusPrevious = function(currentButton) {
	var prev = $(currentButton).prev();
	if(prev[0]) {
		prev.focus();
	} else {
		this.container.find('[role=menutiem]').last().focus();
	}
};