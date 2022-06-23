let currentLang = document.documentElement.lang;

let elementsEs = document.querySelectorAll('[lang="es"]');
let elementsEn = document.querySelectorAll('[lang="en"]');

if(currentLang === "en"){
  for (let element of elementsEs) {
    element.classList.add("d-none");
  }
} else {
  for (let element of elementsEn) {
    element.classList.add("d-none");
  }
}

// document.getElementById("switch-lang").addEventListener("click", SwitchLang());
function SwitchLang(lang) {
  currentLang = lang;
  document.documentElement.lang = lang;
  switch (true) {
    case currentLang === "es":
      document.documentElement.lang = "es";
      for (let element of elementsEn) {
        if (!hasClass(element, "d-none") && element.nodeName !== "HTML") {
          element.classList.add("d-none");
        }
      }
      for (let element of elementsEs) {
        if (hasClass(element, "d-none")) {
          element.classList.remove("d-none");
        }
      }
      break;
    case currentLang === "en":
      document.documentElement.lang = "en";
      for (let element of elementsEs) {
        if (!hasClass(element, "d-none") && element.nodeName !== "HTML") {
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
