sap.ui.define(
  ["sap/ui/core/mvc/Controller", "sap/m/MessageToast"],
  (Controller, MessageToast) => {

  // "this" refers to the Controller instance of the class sap.ui.core.mvc.Controller 
    return Controller.extend("OEECard.controller.HelloPanel", {
      onShowHello() {
        const oBundle = this.getView().getModel("i18n").getResourceBundle();
        const sRecipient1 = this.getView()
          .getModel()
          .getProperty("/recipient/name");
        const sRecipient2 = this.getView()
          .getModel()
          .getProperty("/recipient/type");
        const sMsg = oBundle.getText("helloMsg", [sRecipient2, sRecipient1]);
        MessageToast.show(sMsg);
      },

      async onOpenDialog() {
        // create dialog lazily
        // ?? nullish coalescing assignment operator, only evaluates the right-hand side operand
        // & assigns to the left-hand side operand if the left hand is null or undefined

        this.oDialogInstance ??= await this.loadFragment({
          name: "OEECard.view.HelloDialog",
        });

        this.oDialogInstance.open();
      },

      onExitDialog() {
        this.byId("helloDialog").close();
      },

      onYesDialog() {
        this.byId("helloDialog").close();
      },
    });
  }
);
