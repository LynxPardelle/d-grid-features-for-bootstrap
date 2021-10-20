"use strict";

let wWidth = window.innerWidth;
let gridElements = document.querySelectorAll("[data-gfbs]");

function checkIfHasBP(gridElement, atr){
  let hasIt = false;
  let bp = 0;
  for (let attribute of gridElement.attributes) {
    let at = attribute.localName;
    if(at.includes(atr)){
      if(at.includes('-sm') || at.includes('-md') || at.includes('-lg') || at.includes('-xl') || at.includes('-xll')){
        switch(true){
          case at.includes('-sm'):
            bp = "576px";
          break;
          case at.includes('-md'):
            bp = "768px";
          break;
          case at.includes('-lg'):
            bp = "992px";
          break;
          case at.includes('-xl'):
            bp = "1200px";
          break;
          case at.includes('-xxl'):
            bp = "1400px";
          break;
        };
      }
    }
  }

  if(bp !== 0 && bp < wWidth){
    hasIt = true
  }

  return hasIt;
}

for (let gridElement of gridElements) {
  for (let attribute of gridElement.attributes) {
    let at = attribute.localName;

    let attValue = attribute.value;

    if ( at.includes("gfbs-") &&
      ((!at.includes('-sm') && !at.includes('-md') && !at.includes('-lg') && !at.includes('-xl') && !at.includes('-xll') && !checkIfHasBP(gridElement, at)) ||
      (at.includes('-sm') && wWidth >= "576px" && wWidth < "768px") ||
      (at.includes('-md') && wWidth >= "768px" && wWidth < "992px") ||
      (at.includes('-md') && wWidth >= "992px" && wWidth < "1200px") ||
      (at.includes('-md') && wWidth >= "1200px" && wWidth < "1400px") ||
      (at.includes('-md') && wWidth >= "1400px"))
    ) {
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
          console.log(gridElement.style.gridTemplate);
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
