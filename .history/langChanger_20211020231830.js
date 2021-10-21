document.querySelector('[lang="es"]').hide();

document.querySelector('#switch-lang').click(function() {
  document.querySelector('[lang="es"]').toggle();
  document.querySelector('[lang="en"]').toggle();
});