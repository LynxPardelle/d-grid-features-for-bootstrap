let langEs = false;
let langEn = true;

let elementsEs = document.querySelectorAll('[data-lang="en"]')
for(let element of elementsEs){
  element.className = "d-none";
}

document.querySelector('#switch-lang').click(function() {
  document.querySelector('[lang="es"]').toggle();
  document.querySelector('[lang="en"]').toggle();
});

function hasClass(element, className) {
  return (' ' + element.className + ' ').indexOf(' ' + className+ ' ') > -1;
}