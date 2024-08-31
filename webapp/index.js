sap.ui.define(["sap/ui/core/ComponentContainer"], (ComponentContainer) => {
  // "use strict";
  //   Text control instantiated and added as a node in the DOM
  //   "Content" is the ID of the DOM
  //   new Text({
  //     text: `Hello World`,
  //   }).placeAt("content");

  // "use strict";
  // XMLView.create({
  //   viewName: "OEECard.view.View1",
  // }).then((oView) => oView.placeAt("content"));

  // This is obselete if we are using manifest.json. can be deleted.

  "use strict";
  new ComponentContainer({
    name: "OEECard",
    settings: {
      id: "OEEcard",
    },
    async: true,
  }).placeAt("content");
});
