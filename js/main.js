'use strict';

var getTargetHTML = function getTargetHTML(elem) {

	var id = elem.getAttribute('data-show-id');
	var target = document.querySelector('[data-id="' + id + '"]');

	return target.outerHTML;
};

Array.prototype.forEach.call(document.querySelectorAll('[data-show-id]'), function (elem) {

	var html = getTargetHTML(elem);

	elem.onclick = basicLightbox.create(html).show;
});
