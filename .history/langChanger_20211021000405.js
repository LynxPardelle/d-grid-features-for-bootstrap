let currentLang = document.documentElement.lang;

let elementsEs = document.querySelectorAll('[lang="es"]');
let elementsEn = document.querySelectorAll('[lang="en"]');


for (let element of elementsEn) {
  element.classList.add("d-none");
}

// document.getElementById("switch-lang").addEventListener("click", SwitchLang());
function SwitchLang() {
  if(currentLang === 'es'){
    currentLang = 'en';
    document.documentElement.lang = 'en';
  } else {
    currentLang = 'es';
    document.documentElement.lang = 'es';
  }
  switch (true) {
    case currentLang === 'es':
      document.documentElement.lang = 'es';
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
    case currentLang === 'en':
      document.documentElement.lang = 'en';
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
