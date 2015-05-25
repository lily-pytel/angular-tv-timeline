'use strict';

/**
 * @ngdoc function
 * @name timelineAngularApp.controller:GameCtrl
 * @description
 * # GameCtrl
 * Controller of the timelineAngularApp
 */
angular.module('timelineAngularApp.controllers')
  .controller('GameCtrl', function ($scope, $rootScope, cardGenerator, toastyMessages) {
    var self = this;

    self.titleLimit = 14;
    self.handSize = 10;
    self.totalAttempts = 10;
    self.imageBaseURL = 'https://image.tmdb.org/t/p/w185';

    self.resetGame = function() {
      self.board = [];
      self.hand = [];
      self.discard = [];
      self.userCard = null;
      self.deck = [];
      self.gameOver = false;
      self.gameWon = null;
    };

  	self.startGame = function() {
  		var startingCard;

      self.resetGame();

      /* -------------------------------------------------------
          Shuffle a new deck
         ------------------------------------------------------- */
      self.deck = _.shuffle(cardGenerator.generateCards());

      /* -------------------------------------------------------
          Deal the hand and remove it from deck
         ------------------------------------------------------- */
      self.hand = self.deck.splice(0, self.handSize);
      self.deck = _.difference(self.deck, self.hand);

      /* -------------------------------------------------------
          Deal starting card on the board and remove it from the deck
         ------------------------------------------------------- */
      startingCard = self.deck[0];
      self.board.push(startingCard);
      _.pull(self.deck, startingCard);
  	};

    self.selectCard = function(card) {
      self.userCard = card;
    };

    self.placeCard = function(after, card){
      var currCardPos, previousCard, followingCard,
          wrongPlacement = false;

      /* -------------------------------------------------------
          First, remove the played card from the hand.
         ------------------------------------------------------- */
      self.hand = _.pull(self.hand, self.userCard);

      if (after && self.userCard.year >= card.year) {
        /* -------------------------------------------------------
            The user is at least in the ball park and chose to place
            the card correctly in the future of another.
            However, this might not be the right place in the future
           ------------------------------------------------------- */
        currCardPos = _.indexOf(self.board, card);

        /* -------------------------------------------------------
            Find the card following the chosen card on the board,
            if it exists.
           ------------------------------------------------------- */
        followingCard = (currCardPos < self.board.length - 1) ? self.board[currCardPos+1] : null;

        if (followingCard === null || (followingCard.year >= self.userCard.year)) {
          self.board.push(self.userCard);
        }
        else {
          wrongPlacement = true;
        }
      }

      else if ((!after && self.userCard.year <= card.year)) {
        /* -------------------------------------------------------
            The user is at least in the ball park and chose to place
            the card correctly in the past of another.
            However, this might not be the right place in the past
           ------------------------------------------------------- */
        currCardPos = _.indexOf(self.board, card);

        /* -------------------------------------------------------
            Find the card that came before the chosen card on the board,
            if it exists.
           ------------------------------------------------------- */
        previousCard = (currCardPos > 0) ? self.board[currCardPos-1] : null;

        if (previousCard === null || (previousCard.year <= self.userCard.year)) {
          self.board.push(self.userCard);
        }
        else {
          wrongPlacement = true;
        }
      }
      else {
        wrongPlacement = true;
      }

      /* -------------------------------------------------------
          Sort the cards in the board.
         ------------------------------------------------------- */
      self.board.sort(self.compareCard);

      self.endOfTurn(wrongPlacement);
    };

    /**
     * End of turn events
     *
     * End of turn events such as pulling cards from the hand,
     * drawing a card from the discard pile and displaying
     * success\fail messaged.
     *
     * @param {bool} wrongPlacement true is the card was placed incorrectly
     */
    self.endOfTurn = function(wrongPlacement) {
      /* -------------------------------------------------------
          Next, if there are cards in the deck and the placement
          was wrong, get a new card from the deck to the hand
          and discard the played card.
         ------------------------------------------------------- */
      if (wrongPlacement) {

        if (self.deck.length > 0) {
          self.hand.push(self.deck.pop());
        }

        self.discard.push(self.userCard);
        toastyMessages.failMessage();
      }
      else {
        toastyMessages.successMessage();
      }

      if (self.hand.length === 0) {
        self.gameOver = true;
        self.gameWon = true;
      }
      else if (self.discard.length >= self.totalAttempts) {
        self.gameOver = true;
        self.gameWon = false;
      }

      self.userCard = null;
    };

    /**
     * Compare two cards
     *
     * A custom comparison function to compare two tv cards
     * according to the year they aired.
     *
     * @param {<type>} <name> <description>
     * @return {<type>}
     */
    self.compareCard = function(a, b) {
      if (a.year < b.year) {
        return -1;
      }
      else if (a.year > b.year) {
        return 1;
      }
      else {
        return 0;
      }
    };

    self.startGame();
  });
