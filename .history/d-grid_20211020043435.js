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
          console.log(gridElement.style.gridTemplateAreas);
        break;
        case at.includes("ga"):
          gridElement.style.gridArea = attValue;
        break;
      }
    }
  }
}
