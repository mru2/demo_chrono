angular.module('demoChronoApp')
  .service('Calendars', function(){

    // Methods : 
    //
    // - all // Return the calendar array (of names)
    // 
    // - set(values) // Set a calendar array

    var Calendars = {
      all: ['Votre nom ici'],

      push: function(name){
        this.all.push(name); 
      },

      remove: function(name){
        var index = this.all.indexOf(name);
        if (index > -1) {
            this.all.splice(index, 1);
        }
      }
    };

    return Calendars;

  });