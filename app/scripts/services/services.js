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
          name: 'Epilation caresse',
          services: [
            {
              name: 'Epilation 1/2 jambe',
              duration: 30,
              price: 29
            },
            {
              name: 'Epilation Jambe Entières',
              duration: 45,
              price: 49
            },
            {
              name: 'Epilation sourcils',
              duration: 20,
              price: 19
            }
          ]
        },
        {
          name: 'Soins du corps',
          services: [
            {
              name: 'LISSER. Gommage aux Fleurs de Tilleul',
              duration: 40,
              price: 69
            },
            {
              name: 'ALLEGER. Modelage des jambes au Marron d’Inde',
              duration: 30,
              price: 59
            }
          ]
        }
      ],

      set: function(){
        this.all = set;
      },

      isFlat: function(){
        return this.all.length == 0;
      }

    };

    return Services;

  });