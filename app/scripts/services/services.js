angular.module('demoChronoApp')
  .service('Services', function(){

    // Access an array
    // - name
    // - (image)
    // - services
    //   - name
    //   - duration (minutes)
    //   - price
    //   - (image)

    var Services = {

      all: [
        {
          name: 'Choisissez une catégorie dans le menu.',
          services: [
          ]
        }
      ],

      set: function(categories){
        this.all = categories;
      },

      isFlat: function(){
        return this.all.length == 0;
      }

    };

    return Services;

  });