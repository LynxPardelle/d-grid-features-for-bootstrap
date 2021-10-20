# d-grid-features-for-bootstrap
Display Grid Features for Bootstrap


Para empezar a usarlo, sólo descarga el d-grid.js, enlaza bootstrap, copia esto al final del código:
<script src="./d-grid.js"></script>

y usa la clase d-grid en el contenedor que quieras usarlo.

Para configurar cada atributo de grid que necesitas, solo añade los atributos data-gfbs y data-gfbs- + lo que necesitas abreviado y como valor lo que necesites de la propiedad a la que se referencia, por ejemplo:

data-gfbs-gtc : grid-template-columns;
data-gfbs-gtr : grid-template-rows;

<div>
  <div class="d-grid bg-dark" data-gfbs data-gfbs-gtc="repeat(4, 1fr)" data-gfbs-gtr="repeat(2, 50px)" >
    <div class="bg-primary p-1">
      1
    </div>

    <div class="bg-secondary p-1">
      2
    </div>
    <div class="bg-warning p-1">
      3
    </div>
    <div class="bg-danger p-1">
      4
    </div>
    <div class="bg-success p-1">
      5
    </div>
    <div class="bg-info p-1">
      6
    </div>
  </div>
</div>
  
  
Más adelante haré la documentación completa, mientras te recomiendo que revises el d-grid.js y el index.html para ver más ejemplos de uso.
