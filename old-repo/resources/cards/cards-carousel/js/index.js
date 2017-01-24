/* 

An awfully unoptimised jQuery script  that isn't terribly interesting apart from that it's trying to make as few decisions as possible. 

For instance, it never directly controls any dimensions or positions, never explicitly says how many cards should be visible, or which ones are off to the left or the right. 

It deals with the clickevents, takes a measure of the current state to determine how many cards are in view, and moves the .pointer class forward or back (after checking it's within range).

*/

$('.button-forward').click(function() {
  slide('forward');
});
$('.button-back').click(function() {
  slide('backward');
});
var slide = function(direction) {
  var deckWidth = $('ul').outerWidth();
  var cardGutter = parseInt($('li').first().css('margin-right').replace('px','')) * 2;
  var cardWidth = $('li').first().outerWidth() + cardGutter;
  var cardsInSpread = deckWidth/cardWidth;
  var walking = $('.pointer');
  for (var i=0;i<cardsInSpread;i++) {
    if (direction=='backward' && !walking.is(':first-child')) {
      walking = walking.prev();
    } else if (direction=='forward') {
      walking = walking.next();
    }
  }
  if ( walking.length ) {
    $('.pointer').removeClass('pointer');
    walking.addClass('pointer');
  }
};