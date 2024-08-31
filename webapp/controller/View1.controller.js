sap.ui.define(
  ["sap/ui/core/mvc/Controller", "sap/m/MessageToast"],
  (Controller, MessageToast) => {
    "use strict";

    return Controller.extend("OEECard.controller.View1", {
      // onInit() {
      //   // construct the data model
      //   const oData1 = {
      //     recipient: {
      //       name: "World!",
      //       type: "global"
      //     },
      //   };

      //   // instantiate the JSONModel
      //   const oModel = new JSONModel(oData1);

      //   // now set the data model on the view
      //   this.getView().setModel(oModel);

      //   // Constructing the resource data model
      //   const oData2 = {
      //     bundleName: "OEECard.i18n.i18n",
      //   };
      //   // instantitating the ResourceModel
      //   const i18nModel = new ResourceModel(oData2);

      //   // Setting the ResourceModel or i18n on the view as the Named Model
      //   //  we use named models when we need to define several models in parallel
      //   this.getView().setModel(i18nModel, "i18n");
      // },


      // Note: This is now refactored and moved to HelloPanel.controller.js. 

      // onShowHello() {
      //   const oBundle = this.getView().getModel("i18n").getResourceBundle();
      //   const sRecipient1 = this.getView().getModel().getProperty("/recipient/name");
      //   const sRecipient2 = this.getView().getModel().getProperty("/recipient/type");
      //   const sMsg = oBundle.getText("helloMsg", [sRecipient2, sRecipient1]);

        
      //   MessageToast.show(sMsg);
      // },
    });
  }
);