/* global QUnit */
QUnit.config.autostart = false;

sap.ui.getCore().attachInit(function () {
	"use strict";

	sap.ui.require([
		"comnl4b./zlanguage/test/unit/AllTests"
	], function () {
		QUnit.start();
	});
});
