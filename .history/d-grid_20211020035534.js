"use strict";

let gridElements = document.querySelectorAll("[data-gfbs]");

for (let gridElement of gridElements) {
  for(let attribute of gridElement.attributes){
    if(attribute.localName.includes('gfbs')){
      console.log(attribute);
    }
  }
}

/* for(let attribute of gridElements.attributes){
  if(attribute.localName.includes('gfbs')){
    console.log(attribute);
  }
} */

console.log(gridElements);

document.getElementById("console").innerHTML += "<p>hola</p><br/>";
document.getElementById("console").innerHTML += gridElements;