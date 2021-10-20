"use strict";

let wWidth = window.innerWidth;
let gridElements = document.querySelectorAll("[data-gfbs]");

function checkIfHasBP(gridElement, atr) {
  let hasIt = false;
  for (let attribute of gridElement.attributes) {
    let at = attribute.localName;
    if (at.includes(atr)) {
      switch (true) {
        case at.includes("-sm") && wWidth >= 576 && wWidth < 768:
          hasIt = true;
          break;
        case at.includes("-md") && wWidth >= 768 && wWidth < 992:
          hasIt = true;
          break;
        case at.includes("-lg") && wWidth >= 992 && wWidth < 1200:
          hasIt = true;
          break;
        case at.includes("-xl") && wWidth >= 1200 && wWidth < 1400:
          hasIt = true;
          break;
        case at.includes("-xxl") && wWidth >= 1400:
          hasIt = true;
          break;
      }
    }
  }

  if (atr.includes("gt")) {
    console.log(wWidth);
    console.log(hasIt);
  }
  return hasIt;
}

for (let gridElement of gridElements) {
  for (let attribute of gridElement.attributes) {
    let at = attribute.localName;

    let attValue = attribute.value;

    if (
      at.includes("gfbs-") &&
      ((!at.includes("-sm") &&
        !at.includes("-md") &&
        !at.includes("-lg") &&
        !at.includes("-xl") &&
        !at.includes("-xxl") &&
        !checkIfHasBP(gridElement, at)) ||
        (at.includes("-sm") && wWidth >= 576 && wWidth < 768) ||
        (at.includes("-md") && wWidth >= 768 && wWidth < 992) ||
        (at.includes("-lg") && wWidth >= 992 && wWidth < 1200) ||
        (at.includes("-xl") && wWidth >= 1200 && wWidth < 1400) ||
        (at.includes("-xxl") && wWidth >= 1400))
    ) {
      switch (true) {
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
          console.log(at);
          console.log(attValue);
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
