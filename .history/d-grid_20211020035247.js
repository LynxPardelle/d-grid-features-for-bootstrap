"use strict";

let gridElements = document.querySelector("[data-gfbs]");

for (let gridElement of gridElements) {
  for(let attribute of gridelement.attributes){
    if(attribute.localName.includes(gfbs)){
      console.log(attribute);
    }
  }
}

console.log(gridElements);

document.getElementById("console").innerHTML += "<p>hola</p><br/>";
document.getElementById("console").innerHTML += gridElements;
