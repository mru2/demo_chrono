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

    var _activeCategory = null;

    var Services = {

      all: [],

      set: function(categories){
        this.all = categories;
        _activeCategory = null;
      },

      isFlat: function(){
        return this.all.length == 1;
      },

      setActiveCategory: function(categoryName) {
        var self = this;
        _activeCategory = this.all.filter(function(category){
          return category.name === categoryName;
        });
        if (_activeCategory.length) {
          _activeCategory = _activeCategory[0]
        } else {
          _activeCategory = null;
        }
      },

      activeCategory: function(){
        if (this.isFlat()) {
          return this.all[0];
        }

        return _activeCategory;
      }

    };

    return Services;

  });