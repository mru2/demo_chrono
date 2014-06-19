angular.module('demoChronoApp')
  .service('Calendars', function(){

    // Methods : 
    //
    // - all // Return the calendar array (of names)
    // 
    // - set(values) // Set a calendar array

    var Calendars = {
      all: ['PATOULACCI Marcel', 'DEBICHER Robert'],

      set: function(calendars){
        this.all = calendars;
        console.log('changed calendars, now are', this.all); 
      }
    };

    return Calendars;

  });