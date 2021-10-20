"use strict";

let gridElements = document.querySelectorAll("[data-gfbs]");
console.log(gridElements);

for (let gridElement of gridElements) {
  for (let attribute of gridElement.attributes) {
    if (attribute.localName.includes("gfbs-")) {
      
      console.log(attribute);

      let at = attribute.localName
      let attValue = attribute.value;
      console.log(attValue);
      console.log(typeof attValue);
      switch(true){
        /* Container */
        case at.includes("custom"):
          gridElement.style.cssText += attValue;
        break;
        case at.includes("gtc"):
          gridElement.style.gridTemplateColumns = attValue;
        break;
        case at.includes("gtr"):
          gridElement.style.gridTemplateRows = attValue;
        break;
        case at.includes("gta"):
          gridElement.style.gridTemplateAreas = attValue;
        break;
        case at.includes("gt"):
          gridElement.style.gridTemplate = attValue;
        break;
        case at.includes("cg"):
          gridElement.style.columnGap = attValue;
        break;
        case at.includes("rg"):
          gridElement.style.rowGap = attValue;
        break;
        case at.includes("gap"):
          gridElement.style.gap = attValue;
        break;
        case at.includes("ji"):
          gridElement.style.justifyItems = attValue;
        break;

        /* Item */
        case at.includes("iga"):
          gridElement.style.gridArea = attValue;
        break;
      }
    }
  }
}
