let langEs = false;
let langEn = true;

let elementsEs = document.querySelectorAll('[data-lang="es"]')
let elementsEn = document.querySelectorAll('[data-lang="en"]')
for(let element of elementsEn){
  console.log(element);
  element.className += "d-none";
}

function SwitchLang() {
  langEs = !langEs;
  langEn = !langEn;

  switch(true){

    case langEs === true : 
    for(let element of elementsEn){
      if(!hasClass(element, 'd-none')){
        element.className += "d-none";
      }
    }
    for(let element of elementsEs){
      if(hasClass(element, 'd-none')){
        element.classList.remove("d-none");
      }
    }
    break;
    case langEn === true : 
    for(let element of elementsEn){
      if(hasClass(element, 'd-none')){
        element.className += "d-none";
      }
    }
    break;
  }
};

function hasClass(element, className) {
  return (' ' + element.className + ' ').indexOf(' ' + className+ ' ') > -1;
}