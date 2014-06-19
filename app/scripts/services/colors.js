angular.module('demoChronoApp')
  .service('Colors', function(){

    // Methods : 
    //
    // = Colors Getters : 
    // - bodyBg
    // - bodyText 
    // - moduleBg 
    // - moduleText
    // - moduleLink
    // - tabsBg   
    // - tabsText 
    // 
    // = Template setter
    // - set(object) with arguments : 


    // Default colors
    var Colors = {

      // Body : background and text
      bodyBg:     "#FFFFFF",
      bodyText:   "#4C4C4C",

      // Module : background, text, and links
      moduleBg:   "#DFEEFF",
      moduleText: "#333333",
      moduleLink: "#1122CC",

      // Tabs : background and text
      tabsBg:     "#558ED5",
      tabsText:   "#FFFFFF"

    }

    Colors.set = function(template){
      console.log('setting color template', template);

      // TODO : handle missing values by defaulting to given ones
      this.moduleBg = template.moduleBg;
    }


    return Colors;
  });