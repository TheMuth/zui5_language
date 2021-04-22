sap.ui.define(
  ["sap/ui/core/mvc/Controller"],
  /**
   * @param {typeof sap.ui.core.mvc.Controller} Controller
   */
  function (Controller) {
    "use strict";

    return Controller.extend("com.nl4b.zlanguage.controller.Main", {
      onInit: function () {
        var vData = {
          firstName: "Leon",
          lastName: "Boeijen",
          language: sap.ui
            .getCore()
            .getConfiguration()
            .getLanguage()
            .substring(0, 2)
            .toUpperCase(),
          datum: new Date(),
        };
        var oModel = new sap.ui.model.json.JSONModel();
        oModel.setData(vData);
        this.getOwnerComponent().setModel(oModel, "myData");
      },

      onAfterRendering: function () {
        var butId =
          "btn" +
          this.getOwnerComponent()
            .getModel("myData")
            .getProperty("/language")
            .substring(0, 2)
            .toUpperCase();
        var oOldButton = this.getView().byId(butId);
        oOldButton.setType(sap.m.ButtonType.Emphasized);
      },

      onClick: function () {
        var i18n = this.getOwnerComponent()
          .getModel("i18n")
          .getResourceBundle();
        alert(
          i18n.getText("hello") +
            " " +
            this.getOwnerComponent()
              .getModel("myData")
              .getProperty("/firstName") +
            " " +
            this.getOwnerComponent().getModel("myData").getProperty("/lastName")
        );
      },

      onChangeLanguage: function (oEvent) {
        var vLanguage = oEvent.getSource().data("language");
        sap.ui.getCore().getConfiguration().setLanguage(vLanguage);
        oEvent.getSource().setType(sap.m.ButtonType.Emphasized);
        var butId =
          "btn" +
          this.getOwnerComponent()
            .getModel("myData")
            .getProperty("/language")
            .substring(0, 2)
            .toUpperCase();
        var oOldButton = this.getView().byId(butId);
        oOldButton.setType(sap.m.ButtonType.Default);
        this.getOwnerComponent()
          .getModel("myData")
          .setProperty("/language", vLanguage);
      },
    });
  }
);
