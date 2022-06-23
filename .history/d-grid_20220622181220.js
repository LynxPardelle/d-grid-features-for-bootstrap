"use strict";

let alreadyCreatedClasses = [];
let alreadyCreatedClassesNames = [];

async function GridCreate() {
  try {
    let sheets = [...document.styleSheets];
    let filetedSheet = [];
    for (let sheet of sheets) {
      if (sheet.href?.includes("gfbs-styles")) {
        filetedSheet.push(sheet);
      }
    }
    sheets = filetedSheet;
    let startTimeGridCreat = performance.now();
    // let wWidth = window.innerWidth;
    let gridElements = document.querySelectorAll("[data-gfbs]");
    let gfbsStringed = "";
    let gfbsStringedSM = "";
    let gfbsStringedMD = "";
    let gfbsStringedLG = "";
    let gfbsStringedXl = "";
    let gfbsStringedXXL = "";
    for (let gridElement of gridElements) {
      let newClasses = [];
      for (let attribute of gridElement.attributes) {
        let at = attribute.localName;
        let attValue = attribute.value;

        if (at.includes("gfbs-")) {
          let gfb = at.replace("data-", "");
          let newRandomClassName;
          do {
            newRandomClassName = await randomString(8);
          } while (
            alreadyCreatedClassesNames.includes(`${gfb}-${newRandomClassName}`)
          );
          let gfbStringed = `.${gfb}-${newRandomClassName}`;
          let aCrClMessage;
          for (let aCrCl of alreadyCreatedClasses) {
            let aClass = aCrCl.split("DIVISOR")[0];
            let aAttVal = aCrCl.split("DIVISOR")[1];
            if (attValue === aAttVal) {
              newClasses.push(aClass);
              aCrClMessage = "continue";
            }
          }
          if (aCrClMessage === "continue") {
            continue;
          }
          /* let cssRules = sheets.map((s) =>
            [...s.cssRules]
              .reverse()
          );
          console.log(cssRules); */
          if (
            sheets
              .map((s) =>
                [...s.cssRules]
                  .reverse()
                  .find((i) => i.cssText.includes(gfbStringed))
              )
              .filter((i) => i)
              .pop()
          ) {
            continue;
          }
          alreadyCreatedClasses.push(
            `${gfb}-${newRandomClassName}DIVISOR${attValue}`
          );
          newClasses.push(`${gfb}-${newRandomClassName}`);
          let gfbSplited = await gfb.split("-");
          let hasBP = false;
          let property = gfbSplited[1];
          if (
            gfbSplited[2] === "sm" ||
            gfbSplited[2] === "md" ||
            gfbSplited[2] === "lg" ||
            gfbSplited[2] === "xl" ||
            gfbSplited[2] === "xxl"
          ) {
            hasBP = true;
          }

          switch (property) {
            // Container
            case "custom":
              gfbStringed += `{${attValue}}`;
              break;
            case "gtc":
              gfbStringed += `{gridTemplateColumns:${attValue};}`;
              break;
            case "gtr":
              gfbStringed += `{gridTemplateRows:${attValue};}`;
              break;
            case "gta":
              gfbStringed += `{gridTemplateAreas:${attValue};}`;
              break;
            case "gt":
              gfbStringed += `{gridTemplate:${attValue};}`;
              break;
            case "cg":
              gfbStringed += `{columnGap:${attValue};}`;
              break;
            case "rg":
              gfbStringed += `{rowGap:${attValue};}`;
              break;
            case "gap":
              gfbStringed += `{gap:${attValue};}`;
              break;
            case "ji":
              gfbStringed += `{justifyItems:${attValue};}`;
              break;
            case "ai":
              gfbStringed += `{alignItems:${attValue};}`;
              break;
            case "pi":
              gfbStringed += `{placeItems:${attValue};}`;
              break;
            case "jc":
              gfbStringed += `{justifyContent:${attValue};}`;
              break;
            case "ac":
              gfbStringed += `{alignContent:${attValue};}`;
              break;
            case "pc":
              gfbStringed += `{placeContent:${attValue};}`;
              break;
            case "gac":
              gfbStringed += `{gridAutoColumns:${attValue};}`;
              break;
            case "gar":
              gfbStringed += `{gridAutoRows:${attValue};}`;
              break;
            case "gaf":
              gfbStringed += `{gridAutoFlow:${attValue};}`;
              break;
            case "grid":
              gfbStringed += `{grid:${attValue};}`;
              break;

            // Item
            case "gcs":
              gfbStringed += `{gridColumnStart:${attValue};}`;
              break;
            case "gce":
              gfbStringed += `{gridColumnEnd:${attValue};}`;
              break;
            case "gc":
              gfbStringed += `{gridColumn:${attValue};}`;
              break;
            case "grs":
              gfbStringed += `{gridRowStart:${attValue};}`;
              break;
            case "gre":
              gfbStringed += `{gridRowEnd:${attValue};}`;
              break;
            case "gr":
              gfbStringed += `{gridRow:${attValue};}`;
              break;
            case "iga":
              gfbStringed += `{gridArea:${attValue};}`;
              break;
            case "js":
              gfbStringed += `{justifySelf:${attValue};}`;
              break;
            case "as":
              gfbStringed += `{alignSelf:${attValue};}`;
              break;
            case "ps":
              gfbStringed += `{placeSelf:${attValue};}`;
              break;
          }
          for (let cssProperty of gfbStringed.split(";")) {
            if (!cssProperty.includes("!important") && cssProperty.length > 5) {
              gfbStringed = gfbStringed.replace(
                cssProperty,
                cssProperty + " !important"
              );
            }
          }

          if (gfbStringed.includes("{") && gfbStringed.includes("}")) {
            if (hasBP === true) {
              gfbStringed = gfbStringed.replace(/\//g, "");
              switch (gfbSplited[2]) {
                case "sm":
                  gfbsStringedSM += gfbStringed;
                  break;
                case "md":
                  gfbsStringedMD += gfbStringed;
                  break;
                case "lg":
                  gfbsStringedLG += gfbStringed;
                  break;
                case "xl":
                  gfbsStringedXl += gfbStringed;
                  break;
                case "xxl":
                  gfbsStringedXXL += gfbStringed;
                  break;
              }
            } else {
              gfbsStringed += gfbStringed + "DIVGFB";
            }
          }
        }
      }
      /* Here gridElement will get the newClasses */
      for (let newClass of newClasses) {
        gridElement.classList.add(newClass.split("DIVISOR")[0]);
      }
    }
    if (gfbsStringed !== "") {
      for (let gfb of gfbsStringed.split("DIVGFB")) {
        if (gfb !== "") {
          await createCSSRules(gfb);
        }
      }
    }
    if (gfbsStringedSM !== "") {
      await createCSSRules(
        `@media only screen and (min-width: 576px) {${gfbsStringedSM}}`
      );
    }
    if (gfbsStringedMD !== "") {
      await createCSSRules(
        `@media only screen and (min-width: 768px) {${gfbsStringedMD}}`
      );
    }
    if (gfbsStringedLG !== "") {
      await createCSSRules(
        `@media only screen and (min-width: 992px) {${gfbsStringedLG}}`
      );
    }
    if (gfbsStringedXl !== "") {
      await createCSSRules(
        `@media only screen and (min-width: 1200px) {${gfbsStringedXl}}`
      );
    }
    if (gfbsStringedXXL !== "") {
      await createCSSRules(
        `@media only screen and (min-width: 1400px) {${gfbsStringedXXL}}`
      );
    }
    var endTimeGridCreat = performance.now();
    let gfbTimer = document.getElementById("gfbTimer");
    if (gfbTimer) {
      console.log(
        `Call to GridCreat() took ${
          endTimeGridCreat - startTimeGridCreat
        } milliseconds`
      );
      gfbTimer.innerHTML = `
      <p class="my-0">
      Call to GridCreat() took ${
        endTimeGridCreat - startTimeGridCreat
      } milliseconds
      </p>
      `;
    }
  } catch (err) {
    console.log(err);
  }
}
async function createCSSRules(rule) {
  try {
    let sheets = [...document.styleSheets];
    let filetedSheet = [];
    for (let sheet of sheets) {
      if (sheet.href?.includes("gfbs-styles")) {
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
    console.log(ruleOriginal);
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

async function randomString(length) {
  let result = "";
  const characters =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  const charactersLength = characters.length;
  for (let i = 0; i < length; i++) {
    result += characters.charAt(Math.floor(Math.random() * charactersLength));
  }
  return result;
}

/* const checkIfHasBP = (gridElement, atr) => {
    let hasIt = false;
    for (let attribute of gridElement.attributes) {
      let at = attribute.localName;
      if (at.includes(atr)) {
        switch (true) {
          case "-sm" && wWidth >= 576 && wWidth < 768:
            hasIt = true;
            break;
          case "-md" && wWidth >= 768 && wWidth < 992:
            hasIt = true;
            break;
          case "-lg" && wWidth >= 992 && wWidth < 1200:
            hasIt = true;
            break;
          case "-xl" && wWidth >= 1200 && wWidth < 1400:
            hasIt = true;
            break;
          case "-xxl" && wWidth >= 1400:
            hasIt = true;
            break;
        }
      }
    }

    return hasIt;
  }; */

if (window) {
  window.onload = GridCreate();
  window.addEventListener("resize", GridCreate);
}

if (typeof exports != "undefined") {
  exports.GridCreate = GridCreate(() => {
    GridCreate();
  });
  exports.createCSSRules = exportcreateCSSRules((rule) => {
    return createCSSRules(rule);
  });
}
