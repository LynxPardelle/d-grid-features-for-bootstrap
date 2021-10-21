let langEs = false;
let langEn = true;

let elementsEs = document.querySelectorAll('[data-lang="es"]')
let elementsEs = document.querySelectorAll('[data-lang="en"]')
for(let element of elementsEn){
  element.className += "d-none";
}

function SwitchLang() {

  if(hasClass(element, 'd-none')){
    document.querySelector('[lang="es"]').toggle();
    document.querySelector('[lang="en"]').toggle();
  }
};

function hasClass(element, className) {
  return (' ' + element.className + ' ').indexOf(' ' + className+ ' ') > -1;
}