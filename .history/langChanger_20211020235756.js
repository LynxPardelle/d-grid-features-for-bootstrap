let langEs = false;
let langEn = true;

let elementsEs = document.querySelectorAll('[lang="es"]');
let elementsEn = document.querySelectorAll('[lang="en"]');

console.log(document.documentElement.outerHTML.getAtribute('lang'));

for (let element of elementsEn) {
  element.classList.add("d-none");
}

// document.getElementById("switch-lang").addEventListener("click", SwitchLang());
function SwitchLang() {
  langEs = !langEs;
  langEn = !langEn;

  console.log(langEs);
  console.log(langEn);
  switch (true) {
    case langEs === true:
      for (let element of elementsEn) {
        if (!hasClass(element, "d-none")) {
          element.classList.add("d-none");
        }
      }
      for (let element of elementsEs) {
        if (hasClass(element, "d-none")) {
          element.classList.remove("d-none");
        }
      }
      break;
    case langEn === true:
      for (let element of elementsEs) {
        if (!hasClass(element, "d-none")) {
          element.classList.add("d-none");
        }
      }
      for (let element of elementsEn) {
        if (hasClass(element, "d-none")) {
          element.classList.remove("d-none");
        }
      }
      break;
  }
}

function hasClass(element, className) {
  return (" " + element.className + " ").indexOf(" " + className + " ") > -1;
}
