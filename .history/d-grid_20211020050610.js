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
        case at.includes("ai"):
          gridElement.style.alignItems = attValue;
        break;
        case at.includes("pi"):
          gridElement.style.placeItems = attValue;
        break;
        case at.includes("jc"):
          gridElement.style.justifyContent = attValue;
        break;
        case at.includes("ac"):
          gridElement.style.alignContent = attValue;
        break;
        case at.includes("pc"):
          gridElement.style.placeContent = attValue;
        break;
        case at.includes("gac"):
          gridElement.style.gridAutoColumns = attValue;
        break;
        case at.includes("gar"):
          gridElement.style.gridAutoRows = attValue;
        break;
        case at.includes("gaf"):
          gridElement.style.gridAutoFlow = attValue;
        break;
        case at.includes("grid"):
          gridElement.style.grid = attValue;
        break;

        /* Item */
        case at.includes("gcs"):
          gridElement.style.gridColumnStart = attValue;
        break;
        case at.includes("gce"):
          gridElement.style.gridColumnEnd = attValue;
        break;
        case at.includes("gc"):
          gridElement.style.gridColumn = attValue;
        break;
        case at.includes("grs"):
          gridElement.style.gridRowStart = attValue;
        break;
        case at.includes("gre"):
          gridElement.style.gridRowEnd = attValue;
        break;
        case at.includes("gr"):
          gridElement.style.gridRow = attValue;
        break;
        case at.includes("iga"):
          gridElement.style.gridArea = attValue;
        break;
        case at.includes("js"):
          gridElement.style.justifySelf = attValue;
        break;
        case at.includes("as"):
          gridElement.style.alignSelf = attValue;
        break;
        case at.includes("ps"):
          gridElement.style.placeSelf = attValue;
        break;
      }
    }
  }
}
