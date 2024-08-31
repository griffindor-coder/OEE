// Encapsulates all the UI assets
// Moving the ResourceModel and JSONModel to Component.js from the View1.controller.js
sap.ui.define(
  ["sap/ui/core/UIComponent", "sap/ui/model/json/JSONModel"],
  (UIComponent, JSONModel) => {
    "use strict";

    return UIComponent.extend("OEECard.Component", {
      // there are two parts here
      //  1) metadata section
      // metadata: {
      //   interfaces: ["sap.ui.core.IAsyncContentCreation"],
      //   rootView: {
      //     viewName: "OEECard.view.View1",
      //     type: "XML"
      //   },
      // },

      metadata: {
        interfaces: ["sap.ui.core.IAsyncContentCreation"],
        maanifest: "json",
      },

      //    this is the second part representing the initialization block
      //    called during the instantiation of the component
      init() {
        // call the init function of the parent similar to super()
        UIComponent.prototype.init.apply(this, arguments);
        // construct the data model
        const oData1 = {
          recipient: {
            name: "World!",
            type: "global",
          },
        };

        // instantiate the JSONModel
        const oModel = new JSONModel(oData1);

        // now set the data model on the Component directly
        this.setModel(oModel);

        // Note: This part of instantiating the resource model and setting/connecting
        // it to the Component is not needed anymore as it is taken care by "manifest.json" 
       
        // // Constructing the resource data model
        // const oData2 = {
        //   bundleName: "OEECard.i18n.i18n",
        // };
        // // instantitating the ResourceModel
        // const i18nModel = new ResourceModel(oData2);

        // // Setting the ResourceModel as a Named Model on the Component directly
        // //  we use named models when we need to define several models in parallel
        // this.setModel(i18nModel, "i18n");
      },
    });
  }
);
