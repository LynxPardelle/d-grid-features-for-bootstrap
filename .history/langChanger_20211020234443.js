let langEs = false;
let langEn = true;

let elementsEs = document.querySelectorAll('[data-lang="es"]');
let elementsEn = document.querySelectorAll('[data-lang="en"]');
for (let element of elementsEn) {
  console.log(element);
  element.className += "d-none";
}

document.getElementById("switch-lang").addEventListener("click", SwitchLang());
function SwitchLang() {
  langEs = !langEs;
  langEn = !langEn;

  console.log(langEs);
  console.log(langEn);
  switch (true) {
    case langEs === true:
      for (let element of elementsEn) {
        console.log(element);
        if (!hasClass(element, "d-none")) {
          element.className += "d-none";
        }
      }
      for (let element of elementsEs) {
        console.log(element);
        console.log(element.classList);
        if (hasClass(element, "d-none")) {
          element.classList.remove("d-none");
        }
      }
      break;
    case langEn === true:
      for (let element of elementsEs) {
        console.log(element);
        if (!hasClass(element, "d-none")) {
          element.className += "d-none";
        }
      }
      for (let element of elementsEn) {
        console.log(element);
        console.log(element.classList);
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
