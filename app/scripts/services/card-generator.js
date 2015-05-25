'use strict';

/**
 * @ngdoc service
 * @name timelineAngularApp.cardGenerator
 * @description
 * # cardGenerator
 * Service in the timelineAngularApp.
 */
angular.module('timelineAngularApp')
  .service('cardGenerator', function ($http, AVAILABLECARDS) {
    var apiKey = 'api_key=b7f7d1d68609a2c32f9f3b4750b8c321',
        language = 'language=en',
        requestURL = 'http://api.themoviedb.org/3/tv/top_rated?',
        cards, responsePromise;

    this.generateCardsFromTMDB = function() {
      var i, j, counter;

      for (i = 1; i >= 11; i--) {
        responsePromise = $http.get(requestURL + apiKey + "&" + language + "&page=" + i);

        responsePromise.success(function(data, status, headers, config) {
          var results = data.results;
          for (j = results.length - 1; j >= 0; j--) {
            cards.push({
              id: counter,
              title: results[j].name,
              year: parseInt(results[j].first_air_date),
              imgPath: results[j].poster_path,
              dateRevealed: false
            });

            counter++;
          };
        });

        responsePromise.error(function(data, status) {
          console.log("AJAX Fail!");
        })

        return cards;
      }
    }

      this.generateCards = function() {
        cards = [];
        
        for (var i = AVAILABLECARDS.length - 1; i >= 0; i--) {
          cards.push({
            id: AVAILABLECARDS[i].id,
            title: AVAILABLECARDS[i].name,
            year: parseInt(AVAILABLECARDS[i].first_air_date),
            imgPath: AVAILABLECARDS[i].poster_path
          });
        };

        return cards;
      }
  });
