angular.module('demoChronoApp')
  .service('Calendars', function(){

    // Methods : 
    //
    // - all // Return the calendar array (of names)
    // 
    // - set(values) // Set a calendar array

    var Calendars = {
      all: [{name: 'Votre nom ici'}],

      push: function(name){
        this.all.push({name: name}); 
      },

      remove: function(calendar){
        _.remove(this.all, function(existingCalendar){
          return existingCalendar.name == calendar.name;
        });
      }
    };

    return Calendars;

  });