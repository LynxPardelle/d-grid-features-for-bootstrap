let currentLang = document.documentElement.lang;

let elementsEs = document.querySelectorAll('[lang="es"]');
let elementsEn = document.querySelectorAll('[lang="en"]');

for (let element of elementsEn) {
  element.classList.add("d-none");
}

// document.getElementById("switch-lang").addEventListener("click", SwitchLang());
async function SwitchLang() {
  let currentLang = await (() => {
    if (currentLang === "es") {
      document.documentElement.lang = "en";
      return "en";
    } else {
      document.documentElement.lang = "es";
      return "es";
    }
  });
  let Switched = await (() => {
    switch (true) {
      case currentLang === "es":
        document.documentElement.lang = "es";
        for (let element of elementsEn) {
          console.log(element);
          if (!hasClass(element, "d-none") && element.nodeName !== "HTML") {
            element.classList.add("d-none");
          }
        }
        for (let element of elementsEs) {
          if (hasClass(element, "d-none")) {
            element.classList.remove("d-none");
          }
        }
        return true;
        break;
      case currentLang === "en":
        document.documentElement.lang = "en";
        for (let element of elementsEs) {
          console.log(element);
          console.log(element.nodeName);
          if (!hasClass(element, "d-none") && element.nodeName !== "HTML") {
            element.classList.add("d-none");
          }
        }
        for (let element of elementsEn) {
          if (hasClass(element, "d-none")) {
            element.classList.remove("d-none");
          }
        }
        return true;
        break;
    }
  });
}

function hasClass(element, className) {
  return (" " + element.className + " ").indexOf(" " + className + " ") > -1;
}
