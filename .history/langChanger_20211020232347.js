let langEs = false;
let langEn = true;

document.querySelectorAll('[lang="es"]').className = "d-none";

document.querySelector('#switch-lang').click(function() {
  document.querySelector('[lang="es"]').toggle();
  document.querySelector('[lang="en"]').toggle();
});

function hasClass(element, className) {
  return (' ' + element.className + ' ').indexOf(' ' + className+ ' ') > -1;
}