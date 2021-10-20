"use strict";

let gridElements = document.querySelectorAll("[data-gfbs]");
console.log(gridElements);

for (let gridElement of gridElements) {
  for (let attribute of gridElement.attributes) {
    if (attribute.localName.includes("gfbs")) {
      
      console.log(attribute);
      if(attribute.localName.includes("gfbs-custom")){
        let attValue = attribute.value;
        console.log(attValue);
        console.log(typeof attValue);
        gridElement.style.cssText += attValue;
      }
    }
  }
}
