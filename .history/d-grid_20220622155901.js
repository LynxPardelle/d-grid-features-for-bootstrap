"use strict";

let alreadyCreatedClasses = [];

async function gridCreate() {
  try {
    let sheets = [...document.styleSheets];
    let filetedSheet = [];
    for (let sheet of sheets) {
      if (sheet.href?.includes("gfbs-styles")) {
        filetedSheet.push(sheet);
      }
    }
    sheets = filetedSheet;
    let startTimeCSSCreate = performance.now();
    // let wWidth = window.innerWidth;
    let gridElements = document.querySelectorAll("[data-gfbs]");
    let gfbs = [];
    for (let gridElement of gridElements) {
      for (let attribute of gridElement.attributes) {
        let at = attribute.localName;
        let attValue = attribute.value;
      }
      console.log(gridElement);
    }
    let gfbsStringed = "";
    let gfbsStringedSM = "";
    let gfbsStringedMD = "";
    let gfbsStringedLG = "";
    let gfbsStringedXl = "";
    let gfbsStringedXXL = "";
  } catch (err) {
    console.log(err);
  }

  /* const checkIfHasBP = (gridElement, atr) => {
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

    return hasIt;
  }; */

  /* 
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
          (at.includes("-sm") &&
            wWidth >= 576 &&
            (!at.includes("-md") || (at.includes("-md") && wWidth < 768)) &&
            (!at.includes("-lg") || (at.includes("-lg") && wWidth < 992)) &&
            (!at.includes("-xl") || (at.includes("-xl") && wWidth < 1200)) &&
            (!at.includes("-xll") || (at.includes("-xxl") && wWidth < 1400))) ||
          (at.includes("-md") &&
            wWidth >= 768 &&
            (!at.includes("-lg") || (at.includes("-lg") && wWidth < 992)) &&
            (!at.includes("-xl") || (at.includes("-xl") && wWidth < 1200)) &&
            (!at.includes("-xll") || (at.includes("-xxl") && wWidth < 1400))) ||
          (at.includes("-lg") &&
            wWidth >= 992 &&
            (!at.includes("-xl") || (at.includes("-xl") && wWidth < 1200)) &&
            (!at.includes("-xll") || (at.includes("-xxl") && wWidth < 1400))) ||
          (at.includes("-xl") &&
            wWidth >= 1200 &&
            (!at.includes("-xll") || (at.includes("-xxl") && wWidth < 1400))) ||
          (at.includes("-xxl") && wWidth >= 1400))
      ) {
        switch (true) {
          /* Container */
  /*
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
          */

  /* Item */
  /*
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
  } */
}
async function createCSSRules(rule) {
  try {
    let sheets = [...document.styleSheets];
    let filetedSheet = [];
    for (let sheet of sheets) {
      if (sheet.href?.includes("bef-styles")) {
        filetedSheet.push(sheet);
      }
    }
    sheets = filetedSheet;
    let sheet;
    if (sheets[sheets.length - 1]) {
      sheet = sheets[sheets.length - 1];
    } else {
      sheet = sheets.pop();
    }
    let ruleI;
    ruleI = rule;
    let selector = "";
    let props = "";
    let propsArr = [];
    let ruleOriginal = "";
    if (ruleI && !ruleI.split("{")[0].includes("@media")) {
      selector = ruleI.split("{")[0];
      // CSS (& HTML) reduce spaces in selector to one.
      selector = selector.replace("\n", "").replace(/\s+/g, " ");
      let findRule = (s) =>
        [...s.cssRules].reverse().find((i) => i.cssText.includes(selector));
      ruleOriginal = await sheets
        .map(findRule)
        .filter((i) => i)
        .pop();

      props = ruleI.split("{")[1].split("}")[0];
      props = props.trim();
      if (props.lastIndexOf(";") === props.length - 1) {
        props = props.substring(0, props.length - 1);
      }
      if (props.includes("\n")) {
        let propsN = "";
        props.split("\n").forEach((prop) => {
          prop = prop.trim();
          propsN += " " + prop;
        });
        props = propsN.trim();
      }
      propsArr = props.split(/\s*;\s*/).map((i) => i.split(/\s*:\s*/));
    } else {
      let i = 0;
      let newRule = {
        rule: "",
        prop: "",
      };
      for (let ruleISplit of ruleI.split("{")) {
        if (i === 0) {
          ruleOriginal = [];
          i++;
          continue;
        }
        selector = ruleISplit.includes("}")
          ? ruleISplit.split("}")[ruleISplit.split("}").length - 1]
          : ruleISplit;
        // CSS (& HTML) reduce spaces in selector to one.
        if (selector !== "") {
          selector = selector.replace("\n", "").replace(/\s+/g, " ");
          let findRule = (s) =>
            [...s.cssRules].reverse().find((i) => i.cssText.includes(selector));
          let posibleRule = await sheets
            .map(findRule)
            .filter((i) => i)
            .pop();

          if (posibleRule != undefined) {
            newRule.rule = posibleRule;
          }
        } else {
          props = ruleISplit.includes("}")
            ? ruleISplit.split("}")[0]
            : ruleISplit;

          // CSS (& HTML) reduce spaces in selector to one.
          if (props !== "") {
            props = props.replace("\n", "").replace(/\s+/g, " ");
            if (props.lastIndexOf(";") === props.length - 1) {
              props = props.substring(0, props.length - 1);
            }
            if (props.includes("\n")) {
              let propsN = "";
              props.split("\n").forEach((prop) => {
                prop = prop.trim();
                propsN += " " + prop;
              });
              props = propsN.trim();
            }
            let propArr = props.split(/\s*;\s*/).map((i) => i.split(/\s*:\s*/));
            if (newRule.rule != "") {
              newRule.prop = propArr;
              ruleOriginal.push(newRule);
              newRule = {
                rule: "",
                prop: "",
              };
            }
          }
        }
      }
    }
    if (
      (typeof ruleOriginal === "string" && ruleOriginal !== "") ||
      (typeof ruleOriginal === "object" && ruleOriginal[0])
    ) {
      if (ruleOriginal[0]) {
        for (let ruleO of ruleOriginal) {
          console.log(ruleO);
          for (let [prop, val] of ruleO.prop) {
            console.log(prop);
            console.log(val);
            prop = prop
              .replace(/-(.)/g, (a) => {
                return a.toUpperCase();
              })
              .replace(/-/g, "");
            console.log(ruleO.rule);
            ruleO.rule.cssRules[0].style[prop] = await val.split(
              / *!(?=important)/
            );
            console.log(ruleO.rule.cssRules[0]);
          }
        }
      } else {
        for (let [prop, val] of propsArr) {
          console.log(prop);
          prop = prop
            .replace(/-(.)/g, (a) => {
              return a.toUpperCase();
            })
            .replace(/-/g, "");
          ruleOriginal.style[prop] = val.split(/ *!(?=important)/);
        }
      }
    } else {
      await sheet.insertRule(ruleI, sheet.cssRules.length);
    }
  } catch (err) {
    console.log(err);
  }
}

if (window) {
  window.onload = gridCreate();
  window.addEventListener("resize", gridCreate);
}

if (typeof exports != "undefined") {
  exports.gridCreate = gridCreate(() => {
    gridCreate();
  });
  exports.createCSSRules = exportcreateCSSRules((rule) => {
    return createCSSRules(rule);
  });
}
