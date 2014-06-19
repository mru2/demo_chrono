angular.module('demoChronoApp')
  .service('ColorsStore', function(){
    return [

      {
        name: 'Blanc/Beige',
        values: {
          bodyBg:     "#CFC7AO",
          bodyText:   "#4D4D4D",
          moduleBg:   "#FBFAF6",
          moduleText: "#4D4D4D",
          moduleLink: "#4D4D4D",
          tabsBg:     "#FBFAF6",
          tabsText:   "#585546"
        }
      },

      {
        name: 'Noir/Rose',
        values: {
          bodyBg:     "#140F11",
          bodyText:   "#FFFFFF",
          moduleBg:   "#080302",
          moduleText: "#ED028C",
          moduleLink: "#ED028C",
          tabsBg:     "#ED028C",
          tabsText:   "#080302"
        }
      },

      {
        name: 'Zen/Vert',
        values: {
          bodyBg:     "#D3C398",
          bodyText:   "#FFFFFF",
          moduleBg:   "#FFFFFF",
          moduleText: "#333333",
          moduleLink: "#239F3E",
          tabsBg:     "#239F3E",
          tabsText:   "#FFFFFF"
        }
      },

      {
        name: 'Turquoise/Gris',
        values: {
          bodyBg:     "#57B7B3",
          bodyText:   "#16476C",
          moduleBg:   "#E5F8FA",
          moduleText: "#16476C",
          moduleLink: "#000000",
          tabsBg:     "#CDCBC9",
          tabsText:   "#16476C"
        }
      },

      {
        name: 'Taupe/Rose',
        values: {
          bodyBg:     "#857C6B",
          bodyText:   "#FFFFFFF",
          moduleBg:   "#F9F0F1",
          moduleText: "#EA3C70",
          moduleLink: "#EA3C70",
          tabsBg:     "#EA3D70",
          tabsText:   "#FFFFFFF"
        }
      }
    ];
  });