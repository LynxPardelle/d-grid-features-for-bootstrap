"use strict";

let gridElements = document.querySelectorAll("[data-gfbs]");

document.getElementById("console").innerHTML += 'gridElements' + gridElements + '<br />';

console.log(gridElements);
for (let gridElement of gridElements) {
  for(let attribute of gridElement.attributes){
    if(attribute.localName.includes('gfbs')){
      let attValue = attribute.value;
      
      console.log(attribute);
document.getElementById("console").innerHTML += 'attribute' + attribute + '<br/>';
console.log(attValue);
      document.getElementById("console").innerHTML += 'attValue' + attValue + '<br/>';
    }
  }
}

/* for(let attribute of gridElements.attributes){
  if(attribute.localName.includes('gfbs')){
    console.log(attribute);
  }
} */

document.getElementById("console").innerHTML += gridElements;
