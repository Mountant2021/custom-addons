odoo.define('my_field_widget', function (require) {
	"use strict";

	var AbstractField = require('web.AbstractField');
	var field_registry = require('web.field_registry');

	var colorField = AbstractField.extend({
		className: 'o_int_colorpicker',
		tagName: 'span',
		supportedFieldTypes: ['integer'],
		events: {
			'click .o_color_pill': 'clickPill',
		},
		init: function () {
			this.totalColor = 10;
			this._super.apply(this, arguments);
		},
		_renderEdit: function () {
			this.$el.empty();
			for (var i = 0; i < this.totalColor; i++) {
				var className = "o_color_pill o_color_" + i;
				if (this.value == i) {
					className += " active";
				}
				this.$el.append($('<span>', {
					class: className,
					'data-val': i,
				}));
			}
		},
		_renderReadonly: function () {
			var className = "o_color_pill active readonly o_color_" + this.value;
			this.$el.append($('<span>', {
				'class': className,
			}));
		},
		clickPill: function (e) {
			var $target = $(e.currentTarget);
			var data = $target.data();
			this._setValue(data.val.toString());
		}
	});

	field_registry.add('int_color', colorField);

	return {
		colorField: colorField,
	};
});
