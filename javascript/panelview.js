// this has been modified for Boostrap 4
var paneljson = '';

function genPanel(paneljson) {
    var $panel = $('#panelview-test').panelview({
        data: paneljson
    }); 

}
// $(function() {
//     var $panel = $('#panelview-test').panelview({
//           data: paneljson
//         }); 
// });


/* =========================================================
 * bootstrap-panelview.js v1.0.0
 * ========================================================= */

;(function ($, window, document, undefined) {
	/*global jQuery, console*/
	'use strict';
	var pluginName = 'panelview';
	var _default = {};

	_default.settings = {
		injectStyle: true,
		levels: 1,

		emptyIcon: 'fa',
		nodeIcon: '',
		selectedIcon: '',

		color: undefined, // '#000000',
		backColor: undefined, // '#FFFFFF',
		warningColor: 'rgba(240, 173, 78, .5)',
		successColor: 'rgba(92, 184, 92, .5)',

		enableLinks: false,
		highlightSelected: true,

		// Event handlers
		onNodeSelected: undefined,
		onNodeUnselected: undefined,
	};

	_default.options = {
		silent: false,
		ignoreChildren: false,
	};

	var Panel = function (element, options) {
		this.$element = $(element);
		this.elementId = element.id;
		this.styleId = this.elementId + '-style';
		this.init(options);
		return {
			// Options (public access)
			options: this.options,

			// Initialize / destroy methods
			init: $.proxy(this.init, this),
			remove: $.proxy(this.remove, this),

			// Get methods
			getNode: $.proxy(this.getNode, this),
			getParent: $.proxy(this.getParent, this),
			getSiblings: $.proxy(this.getSiblings, this),
			getSelected: $.proxy(this.getSelected, this),
			getUnselected: $.proxy(this.getUnselected, this),

			// Select methods
			selectNode: $.proxy(this.selectNode, this),
			unselectNode: $.proxy(this.unselectNode, this),
			toggleNodeSelected: $.proxy(this.toggleNodeSelected, this),

		};
	};

	Panel.prototype.init = function (options) {
		this.panel = [];
		this.nodes = [];
		if (options.data) {
			if (typeof options.data === 'string') {
				options.data = $.parseJSON(options.data);
			}
			this.panel = $.extend(true, [], options.data);
			delete options.data;
		}
		this.options = $.extend({}, _default.settings, options);

		this.destroy();
		this.setInitialStates({ nodes: this.panel }, 0);
		this.render();
	};

	Panel.prototype.remove = function () {
		this.destroy();
		$.removeData(this, pluginName);
		$('#' + this.styleId).remove();
	};

	Panel.prototype.destroy = function () {
		if (!this.initialized) return;
		this.$wrapper.remove();
		this.$wrapper = null;

		// Reset this.initialized flag
		this.initialized = false;
	};

	/*
		Recurse the panel structure and ensure all nodes have
		valid initial states.  User defined states will be preserved.
		For performance we also take this opportunity to
		index nodes in a flattened structure
	*/
	Panel.prototype.setInitialStates = function (node, level) {
		if (!node.nodes) return;
		level += 1;

		var parent = node;
		var _this = this;
		$.each(node.nodes, function checkStates(index, node) {

			// nodeId : unique, incremental identifier
			node.nodeId = _this.nodes.length;

			// parentId : transversing up the panel
			node.parentId = parent.nodeId;

			// if not provided set selectable default value
			if (!node.hasOwnProperty('selectable')) {
				node.selectable = true;
			}

			// where provided we should preserve states
			node.state = node.state || {};

			// set selected state; unless set always false
			if (!node.state.hasOwnProperty('selected')) {
				node.state.selected = false;
			}

			// index nodes in a flattened structure for use later
			_this.nodes.push(node);

			// recurse child nodes and transverse the panel
			if (node.nodes) {
				_this.setInitialStates(node, level);
			}
		});
	};


	// Looks up the DOM for the closest parent list item to retrieve the
	// data attribute nodeid, which is used to lookup the node in the flattened structure.
	Panel.prototype.findNode = function (target) {
		var nodeId = target.closest('li.list-group-item').attr('data-nodeid');
		var node = this.nodes[nodeId];
		if (!node) {
			console.log('Error: node does not exist');
		}
		return node;
	};

	Panel.prototype.toggleSelectedState = function (node, options) {
		if (!node) return;
		this.setSelectedState(node, !node.state.selected, options);
	};

	Panel.prototype.setSelectedState = function (node, state, options) {
		if (state === node.state.selected) return;
		if (state) {
			// If multiSelect false, unselect previously selected
			if ((ctrl && cmd) || (!ctrl && !cmd))  {
				$.each(this.findNodes('true', 'g', 'state.selected'), $.proxy(function (index, node) {
					this.setSelectedState(node, false, options);
				}, this));
			}
			// Continue selecting node
			node.state.selected = true;
			if (!options.silent) {
				this.$element.trigger('nodeSelected', $.extend(true, {}, node));
			}
		}
		else {
			// Unselect node
			node.state.selected = false;
			if (!options.silent) {
				this.$element.trigger('nodeUnselected', $.extend(true, {}, node));
			}
		}
	};

	Panel.prototype.render = function () {
		if (!this.initialized) {
			// Setup first time only components
			this.$element.addClass(pluginName);
			this.$wrapper = $(this.template.list);
			this.injectStyle();
			this.initialized = true;
		}
		this.$element.empty().append(this.$wrapper.empty());
		// Build panel
		this.buildPanel(this.panel, 0);
	};

	// Starting from the root node, and recursing down the
	// structure we build the panel one node at a time
	Panel.prototype.buildPanel = function (nodes, level) {
		if (!nodes) return;
		level += 1;
		var _this = this;
		$.each(nodes, function addNodes(id, node) {
			var panelItem = $(_this.template.item)
				.addClass('node-' + _this.elementId)
				.addClass(node.state.selected ? 'node-selected' : '')
				.attr('data-nodeid', node.nodeId)
				.attr('style', _this.buildStyleOverride(node))
				.attr('sbol-link', node.sbol)
				.attr('has-children', node.children)
				.attr('child-num', node.childNum);

			// Add indent/spacer to mimic panel structure
			for (var i = 0; i < (level - 1); i++) {
				panelItem.append(_this.template.indent);
			}

			// Add text
			if (_this.options.enableLinks) {
				// Add hyperlink
				panelItem
					.append($(_this.template.link)
						.attr('href', node.href)
						.append(node.text)
					);
			}
			else {
				// otherwise just text
				var suffix;
				if (node.hasData[0] == 0) {
					suffix = ': insufficient data';
				} else if (node.hasData[0] == 1) {
					suffix = ': sufficient data';
				}
				panelItem
					.append(node.text)
					.append(suffix);
			}

			// Add item to the panel
			_this.$wrapper.append(panelItem);
			// Recursively add child nodes //removed from panelview
			// if (node.nodes) {
			// 	return _this.buildPanel(node.nodes, level);
			// }
		});
	};

	// Define any node level style override for
	// 1. selectedNode
	// 2. node|data assigned color overrides
	Panel.prototype.buildStyleOverride = function (node) {
		if (node.state.disabled) return '';
		var backColor = node.backColor;

		if (node.hasData[0] == 0) {
			backColor = this.options.warningColor;
		} else if (node.hasData[0] == 1) {
			backColor = this.options.successColor;
		}

		return 'background-color:' + backColor + ';';
	};

	// Add inline style into head
	Panel.prototype.injectStyle = function () {
		if (this.options.injectStyle && !document.getElementById(this.styleId)) {
			$('<style type="text/css" id="' + this.styleId + '"> ' + this.buildStyle() + ' </style>').appendTo('head');
		}
	};

	// Construct panels style based on user options
	Panel.prototype.buildStyle = function () {
		var style = '.node-' + this.elementId + '{';
		if (this.options.color) {
			style += 'color:' + this.options.color + ';';
		}
		return this.css + style;
	};

	Panel.prototype.template = {
		list: '<ul class="list-group"></ul>',
		item: '<li class="list-group-item"></li>',
		indent: '<span class="indent"></span>',
		icon: '<span class="icon"></span>',
		link: '<a href="#" style="color:inherit;"></a>',
	};

	Panel.prototype.css = '.panelview .list-group-item{cursor:pointer;padding: 4px;}}'
	/**
		Returns a single node object that matches the given node id.
		@param {Number} nodeId - A node's unique identifier
		@return {Object} node - Matching node
	*/
	Panel.prototype.getNode = function (nodeId) {
		return this.nodes[nodeId];
	};

	/**
		Returns the parent node of a given node, if valid otherwise returns undefined.
		@param {Object|Number} identifier - A valid node or node id
		@returns {Object} node - The parent node
	*/
	Panel.prototype.getParent = function (identifier) {
		var node = this.identifyNode(identifier);
		return this.nodes[node.parentId];
	};

	/**
		Returns an array of sibling nodes for a given node, if valid otherwise returns undefined.
		@param {Object|Number} identifier - A valid node or node id
		@returns {Array} nodes - Sibling nodes
	*/
	Panel.prototype.getSiblings = function (identifier) {
		var node = this.identifyNode(identifier);
		var parent = this.getParent(node);
		var nodes = parent ? parent.nodes : this.panel;
		return nodes.filter(function (obj) {
				return obj.nodeId !== node.nodeId;
			});
	};

	/**
		Returns an array of selected nodes.
		@returns {Array} nodes - Selected nodes
	*/
	Panel.prototype.getSelected = function () {
		return this.findNodes('true', 'g', 'state.selected');
	};

	/**
		Returns an array of unselected nodes.
		@returns {Array} nodes - Unselected nodes
	*/
	Panel.prototype.getUnselected = function () {
		return this.findNodes('false', 'g', 'state.selected');
	};    

	/**
		Set a node state to selected
		@param {Object|Number} identifiers - A valid node, node id or array of node identifiers
		@param {optional Object} options
	*/
	Panel.prototype.selectNode = function (identifiers, options) {
		this.forEachIdentifier(identifiers, options, $.proxy(function (node, options) {
			this.setSelectedState(node, true, options);
		}, this));

		this.render();
	};

	/**
		Set a node state to unselected
		@param {Object|Number} identifiers - A valid node, node id or array of node identifiers
		@param {optional Object} options
	*/
	Panel.prototype.unselectNode = function (identifiers, options) {
		this.forEachIdentifier(identifiers, options, $.proxy(function (node, options) {
			this.setSelectedState(node, false, options);
		}, this));

		this.render();
	};

	/**
		Toggles a node selected state; selecting if unselected, unselecting if selected.
		@param {Object|Number} identifiers - A valid node, node id or array of node identifiers
		@param {optional Object} options
	*/
	Panel.prototype.toggleNodeSelected = function (identifiers, options) {
		this.forEachIdentifier(identifiers, options, $.proxy(function (node, options) {
			this.toggleSelectedState(node, options);
		}, this));

		this.render();
	};

	// /**
	// 	Reveals a given panel node, expanding the panel from node to root.
	// 	@param {Object|Number|Array} identifiers - A valid node, node id or array of node identifiers
	// 	@param {optional Object} options
	// */
	// Panel.prototype.revealNode = function (identifiers, options) {
	// 	this.forEachIdentifier(identifiers, options, $.proxy(function (node, options) {
	// 		var parentNode = this.getParent(node);
	// 		while (parentNode) {
	// 			this.setExpandedState(parentNode, true, options);
	// 			parentNode = this.getParent(parentNode);
	// 		};
	// 	}, this));

	// 	this.render();
	// };

	/**
		Common code for processing multiple identifiers
	*/
	Panel.prototype.forEachIdentifier = function (identifiers, options, callback) {
		options = $.extend({}, _default.options, options);
		if (!(identifiers instanceof Array)) {
			identifiers = [identifiers];
		}
		$.each(identifiers, $.proxy(function (index, identifier) {
			callback(this.identifyNode(identifier), options);
		}, this));	
	};

	/*
		Identifies a node from either a node id or object
	*/
	Panel.prototype.identifyNode = function (identifier) {
		return ((typeof identifier) === 'number') ?
						this.nodes[identifier] :
						identifier;
	};

	/**
		Find nodes that match a given criteria
		@param {String} pattern - A given string to match against
		@param {optional String} modifier - Valid RegEx modifiers
		@param {optional String} attribute - Attribute to compare pattern against
		@return {Array} nodes - Nodes that match your criteria
	*/
	Panel.prototype.findNodes = function (pattern, modifier, attribute) {
		modifier = modifier || 'g';
		attribute = attribute || 'text';

		var _this = this;
		return $.grep(this.nodes, function (node) {
			var val = _this.getNodeValue(node, attribute);
			if (typeof val === 'string') {
				return val.match(new RegExp(pattern, modifier));
			}
		});
	};

	/**
		Recursive find for retrieving nested attributes values
		All values are return as strings, unless invalid
		@param {Object} obj - Typically a node, could be any object
		@param {String} attr - Identifies an object property using dot notation
		@return {String} value - Matching attributes string representation
	*/
	Panel.prototype.getNodeValue = function (obj, attr) {
		var index = attr.indexOf('.');
		if (index > 0) {
			var _obj = obj[attr.substring(0, index)];
			var _attr = attr.substring(index + 1, attr.length);
			return this.getNodeValue(_obj, _attr);
		}
		else {
			if (obj.hasOwnProperty(attr)) {
				return obj[attr].toString();
			}
			else {
				return undefined;
			}
		}
	};

	var logError = function (message) {
		if (window.console) {
			window.console.error(message);
		}
	};

	// Prevent against multiple instantiations,
	// handle updates and method calls
	$.fn[pluginName] = function (options, args) {
		var result;
		this.each(function () {
			var _this = $.data(this, pluginName);
			if (typeof options === 'string') {
				if (!_this) {
					logError('Not initialized, can not call method : ' + options);
				}
				else if (!$.isFunction(_this[options]) || options.charAt(0) === '_') {
					logError('No such method : ' + options);
				}
				else {
					if (!(args instanceof Array)) {
						args = [ args ];
					}
					result = _this[options].apply(_this, args);
				}
			}
			else if (typeof options === 'boolean') {
				result = _this;
			}
			else {
				$.data(this, pluginName, new Panel(this, $.extend(true, {}, options)));
			}
		});

		return result || this;
	};

})(jQuery, window, document);