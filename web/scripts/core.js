/*jslint browser: true, ass: true, white: true */
(function(win, doc) {
	"use strict";
	var dom = win.$ = function(selector) {
		return new dom.prototype.init(selector);
	},
	rQuickMatch = /^(?:#([\w\-]+))|(?:\.([\w\-]+))|([\w\-]+)$/;

	dom.prototype = {
		init:function dom(selector) {
			var i, match, elements = [];

			if (typeof selector === "string" && selector.length) {
				match = rQuickMatch.exec(selector.trim());

				if (match) {
					if (match[1]) {
						elements = [doc.getElementById(match[1])];
						if ((elements[0]===null) ||(elements[0]==undefined)) {
							elements=[];
						}
					} else if(match[2]) {
						elements = doc.getElementsByClassName(match[2]);
					} else if (match[3]) {
						elements = doc.getElementsByTagName(match[3]);
					}
				} else {
					elements = doc.querySelectorAll(selector);
				}
			}
			this.length = elements.length;

			if (this.length) {
				for (i = 0; i<this.length; i+=1) {
					this[i] = elements[i];
				}
			}
			return this;
		},
		on:function(eventName, callback) {
			var i;
			for (i = 0; i < this.length; i+=1) {
				this[i].addEventListener(eventName, callback, false);
			}
			return this;
		},
		addClass:function(cssClass) {
			var classNames = cssClass.trim().split(" "), len = this.length, elements = this;
			if (classNames.length) {
				classNames.forEach(function(c) {
					var i;
					for (i = 0; i<len; i+=1) {
						if (!elements[i].classList.contains(c)) {
							elements[i].classList.add(c);
						}
					}
				});
			}
			return this;
		},
		removeClass:function(cssClass) {
			var classNames = cssClass.trim().split(" "), len = this.length, elements = this;
			if (classNames.length) {
				classNames.forEach(function(c) {
					var i;
					for (i = 0; i< len; i+=1) {
						elements[i].classList.remove(c);
					}
				});
			}
			return this;
		},
		html:function() {
			var i, s = [], len = this.length, elements = this;

			for(i = 0; i<len; i+=1) {
				s.push(elements[i].innerHTML);
			}

			return s.join("");
		},
		text:function(text) {
			var i, s = [], len = this.length, elements = this;
			
			if (typeof text === "string") {
				for(i=0; i<len; i+=1) {
					elements[i].textContent = text;
				}
			} else {
				for(i = 0; i<len; i+=1) {
					s.push(elements[i].textContent);
				}
				return s.join("");
			}
		}
	};

	// To instantiate a "dom" object, using the "init" function
	dom.prototype.init.prototype = dom.prototype;

}(window, document));