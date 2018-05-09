sap.ui.define([
	"sap/ui/model/json/JSONModel",
	"sap/ui/Device",
	"sap/ui/model/odata/v2/ODataModel"
], function(JSONModel, Device, ODataModel) {
	"use strict";

	return {

		createDeviceModel: function() {
			var oModel = new JSONModel(Device);
			oModel.setDefaultBindingMode("OneWay");
			return oModel;
		},

		createNorthwindModel: function() {
			var sUrl = "/destinations/Northwind/V2/OData/OData.svc/";
			var oModel = new ODataModel(sUrl);
			oModel.setDefaultBindingMode("OneWay");
			return oModel;
		}
	};
});