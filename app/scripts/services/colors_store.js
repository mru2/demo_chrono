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
        name: "Nouveau1",
        values: {
          bodyBg: "#FFFFFF", bodyText: "#4C4C4C", moduleBg: "#DFEEFF", moduleText: "#333333", moduleLink: "#1122CC",
          tabsText: '#FFFFFF',
          tabsBg: '#92C5FF'
        }
      },

      {
        name: "Nouveau2",
        values: {
          bodyBg: "#ffffff", bodyText: "#96c461", moduleBg: "#e4e4e4", moduleText: "#333333", moduleLink: "#cc1111",        
          tabsText: '#FFFFFF',
          tabsBg: '#7F0505'
        }
      },

      {
        name: "Nouveau3",
        values: {
          bodyBg: "#140f11",

          bodyText: "#ed80b9",

          moduleBg: "#faeded",

          moduleLink: "#e2007a",

          moduleText: "#e2007a",

          tabsText: '#FFFFFF',

          tabsBg: '#950051'
        }
      },

      {
        name: "Nouveau4",
        values: {
          bodyBg: "#57B7B3", bodyText: "#16476C", moduleBg: "#E5F8FA", moduleText: "#16476C", moduleLink: "#000000",
          tabsText: '#FFFFFF',
          tabsBg: '#286A68'
        }
      },

      {
        name: "Nouveau5",
        values: {
          bodyBg: "#ECECEC", bodyText: "#333333", moduleBg: "#ffffff", moduleText: "#000000", moduleLink: "#000000",
          tabsText: '#FFFFFF',
          tabsBg: '#333333'

        }
      }


    ];
  });