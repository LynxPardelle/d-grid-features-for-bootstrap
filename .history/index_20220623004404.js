function CreateNewGridSample() {
  let gridContainer = document.getElementById("grid-container");

  const sectionOptions = [
    `
    <section
      class="d-grid w-75 mx-auto my-4"
      data-gfbs
      data-gfbs-custom="background-color: black; padding: 1rem;"
      data-gfbs-custom-sm="background-color: pink; padding: 2rem;"
      data-gfbs-custom-md="background-color: orange; padding: 3rem;"
      data-gfbs-gt='
      [row1-start] "a a b ." 12.5px [row1-end]
      [row2-start] "a a b ." 12.5px [row2-end]
      [row3-start] "c c b d" 12.5px [row3-end]
      [row4-start] "c c b d" 12.5px [row4-end]
      [row5-start] "e e e d" 12.5px [row5-end]
      [row6-start] "e e e d" 12.5px [row6-end]
      [row7-start] ". f f f" 12.5px [row7-end]
      [row8-start] ". f f f" 12.5px [row8-end]
      [row9-start] "g g g g" 25px [row9-end]
      / 2fr 1fr 1fr 3fr'
      data-gfbs-gt-sm='
      [row1-start] "a b b ." 25px [row1-end]
      [row2-start] "a b b ." 25px [row2-end]
      [row3-start] "c c c ." 25px [row3-end]
      [row4-start] "c c c ." 25px [row4-end]
      [row5-start] "e e d d" 25px [row5-end]
      [row6-start] "e e d d" 25px [row6-end]
      [row7-start] ". f f ." 25px [row7-end]
      [row8-start] ". f f ." 25px [row8-end]
      [row9-start] "g g g g" 50px [row9-end]
      / 1fr 2fr 2fr 1fr'
      data-gfbs-gt-md='
      [row1-start] "a a a b" 37.5px [row1-end]
      [row2-start] "a a a b" 37.5px [row2-end]
      [row3-start] "c c d d" 37.5px [row3-end]
      [row4-start] "c c d d" 37.5px [row4-end]
      [row5-start] "e e d d" 37.5px [row5-end]
      [row6-start] "e e d d" 37.5px [row6-end]
      [row7-start] "f f f f" 37.5px [row7-end]
      [row8-start] "g g g g" 37.5px [row8-end]
      [row9-start] "g g g g" 75px [row9-end]
      / 1fr 2fr 2fr 1fr'
      data-gfbs-gt-lg='
      [row1-start] "a a b ." 50px [row1-end]
      [row2-start] "a a b ." 50px [row2-end]
      [row3-start] "c c b d" 50px [row3-end]
      [row4-start] "c c b d" 50px [row4-end]
      [row5-start] "e e e d" 50px [row5-end]
      [row6-start] "e e e d" 50px [row6-end]
      [row7-start] ". f f f" 50px [row7-end]
      [row8-start] ". f f f" 50px [row8-end]
      [row9-start] "g g g g" 100px [row9-end]
      / 1fr 2fr 2fr 1fr'
      data-gfbs-gt-xl='
      [row1-start] "a a b ." 62.5px [row1-end]
      [row2-start] "a a b ." 62.5px [row2-end]
      [row3-start] "c c b d" 62.5px [row3-end]
      [row4-start] "c c b d" 62.5px [row4-end]
      [row5-start] "e e e d" 62.5px [row5-end]
      [row6-start] "e e e d" 62.5px [row6-end]
      [row7-start] ". f f f" 62.5px [row7-end]
      [row8-start] ". f f f" 62.5px [row8-end]
      [row9-start] "g g g g" 125px [row9-end]
      / 1fr 2fr 2fr 1fr'
      data-gfbs-gt-xxl='
      [row1-start] "a a b ." 87.5px [row1-end]
      [row2-start] "a a b ." 87.5px [row2-end]
      [row3-start] "c c b d" 87.5px [row3-end]
      [row4-start] "c c b d" 87.5px [row4-end]
      [row5-start] "e e e d" 87.5px [row5-end]
      [row6-start] "e e e d" 87.5px [row6-end]
      [row7-start] ". f f f" 87.5px [row7-end]
      [row8-start] ". f f f" 87.5px [row8-end]
      [row9-start] "g g g g" 150px [row9-end]
      / 1fr 2fr 2fr 1fr'
      data-gfbs-gap="0.5rem"
      >
  `,
    `<section class="d-grid bg-dark" data-gfbs data-gfbs-gtc="repeat(4, 1fr)" data-gfbs-gtr="repeat(2, 50px)" >`,
    `<section class="d-grid bg-light" data-gfbs data-gfbs-gta='"f f b c c a"" f f d e e a"'>`,
  ];

  gridContainer.innerHTML += `
  ${sectionOptions[Math.floor(Math.random() * sectionOptions.length)]}
        <!-- data-gfbs-cg="1rem"
        data-gfbs-rg="1rem" -->
        <div
          data-gfbs
          data-gfbs-iga="a"
          data-gfbs-iga-sm="g"
          class="bg-primary p-1"
        >
          1
        </div>
  
        <div data-gfbs data-gfbs-iga="b" class="bg-secondary p-1">2</div>
        <div data-gfbs data-gfbs-iga="c" class="bg-warning p-1">3</div>
        <div
          data-gfbs
          data-gfbs-iga="d"
          data-gfbs-iga-lg="f"
          class="bg-danger p-1"
        >
          4
        </div>
        <div data-gfbs data-gfbs-iga="e" class="bg-success p-1">5</div>
        <div data-gfbs data-gfbs-iga="f" data-gfbs-iga-md="a" class="bg-info p-1">
          6
        </div>
      </section>
  `;
  GridCreate();
}
