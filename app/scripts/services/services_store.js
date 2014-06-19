angular.module('demoChronoApp')
  .service('ServicesStore', function(){
    return [

      {
        name: 'Onglerie',
        categories:
          [
            {
              "name": "Beauté des Mains",
              "services": [
                {
                  "name": "Pose vernis express",
                  "duration": 15,
                  "price": 15
                },
                {
                  "name": "Pose vernis express",
                  "duration": 30,
                  "price": 25
                },
                {
                  "name": "Gel",
                  "duration": 75,
                  "price": 70
                },
                {
                  "name": "French",
                  "duration": 30,
                  "price": 40
                },
                {
                  "name": "Remplissage",
                  "duration": 30,
                  "price": 20
                }
              ]
            },
            {
              "name": "Beauté des Pieds",
              "services": [
                {
                  "name": "Pose vernis express",
                  "duration": 15,
                  "price": 15
                },
                {
                  "name": "Pose vernis express",
                  "duration": 30,
                  "price": 25
                },
                {
                  "name": "Gel",
                  "duration": 75,
                  "price": 70
                },
                {
                  "name": "French",
                  "duration": 30,
                  "price": 40
                },
                {
                  "name": "Remplissage",
                  "duration": 30,
                  "price": 20
                }
              ]
            },
            {
              "name": "Nail Art",
              "services": [
                {
                  "name": "Bicolore",
                  "duration": 20,
                  "price": 15
                },
                {
                  "name": "Catalogue",
                  "duration": 20,
                  "price": 25
                },
                {
                  "name": "Création",
                  "duration": 40,
                  "price": 30
                }
              ]
            }
          ]
      },

      {
        name: 'Salon de massage',
        categories: 
          [
           {
            "name" : "Massage solo",
            "services" : [
            {
             "name": "Massage Thaïlandais",
             "duration" : 60,
             "price" : 60,
            },
            {
             "name": "Massage Californien",
             "duration" : 60,
             "price" : 60
            },
            {
             "name": "Massage Suédois",
             "duration" : 45,
             "price" : 75
            },
            {
             "name": "Massage aux pierres chaudes",
             "duration" : 120,
             "price" : 90
            }
            ]
           },
           {
            "name" : "Massage duo",
            "services" : [
            {
             "name": "Massage Thaïlandais duo",
             "duration" : 60,
             "price" : 75
            },
            {
             "name": "Massage Californien duo",
             "duration" : 60,
             "price" : 75
            },
            {
             "name": "Massage Suédois duo",
             "duration" : 45,
             "price" : 90
            },
            {
             "name": "Massage aux pierres chaudes duo",
             "duration" : 120,
             "price" : 90
            }
                ]
           },
           {
            "name" : "Hammam",
            "services" : [
            {
             "name": "Gommage",
             "duration" : 20,
             "price" : 15
            },
            {
             "name": "Séance Hammam 20",
             "duration" : 20,
             "price" : 30
            },
            {
             "name": "Séance Hammam 30",
             "duration" : 30,
             "price" : 35
            }
                ]
           }
          ]
      },

      {
        name: 'Cabinet médical',
        categories:  [
          {'name': 'Base',
            'services': [
              {
                "name": "Première Consultation",
                "duration": 30,
                "price": 23
              },
              {
                "name": "Consultation de Suivi",
                "duration": 15,
                "price": 23
              },
              {
                "name": "Urgence",
                "duration": 30,
                "price": 23
              }
          ] }
        ]       
      },

      {
        name: 'Salon de beauté',
        categories: 
          [
            {
              "name": "Epilation Caresse",
              "services": [
                {
                  "name": "Epilation 1/2 jambe",
                  "duration": 30,
                  "price": 29
                },
                {
                  "name": "Epilation jambe entières",
                  "duration": 45,
                  "price": 49
                },
                {
                  "name": "Epilation sourcils",
                  "duration": 20,
                  "price": 19
                },
                {
                  "name": "Epilation maillot",
                  "duration": 30,
                  "price": 40
                }
              ]
            },
            {
              "name": "Soins Visages",
              "services": [
                {
                  "name": "Soin Détente",
                  "duration": 30,
                  "price": 30
                },
                {
                  "name": "Soin Rajeunissement",
                  "duration": 45,
                  "price": 45
                },
                {
                  "name": "Soin Energisant",
                  "duration": 30,
                  "price": 30
                },
                {
                  "name": "Soin Purifiant",
                  "duration": 45,
                  "price": 45
                }
              ]
            },
            {
              "name": "Soins Corps",
              "services": [
                {
                  "name": "Jambes Légères",
                  "duration": 30,
                  "price": 30
                },
                {
                  "name": "Modelage",
                  "duration": 45,
                  "price": 45
                },
                {
                  "name": "Gommage",
                  "duration": 30,
                  "price": 30
                },
                {
                  "name": "Massage",
                  "duration": 45,
                  "price": 45
                }
              ]
            }
          ]        
      }

    ];
  });
