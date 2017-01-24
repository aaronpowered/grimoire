var Flipper = (function() {
  var card = $('.card');
  var flipper = card.find('.card__flipper');
  var win = $(window);
  
  var flip = function() {
    var thisCard = $(this);
    var thisFlipper = thisCard.find('.card__flipper');
    var offset = thisCard.offset();
    var xc = win.width() / 2;
    var yc = win.height() / 2;
    var docScroll = $(document).scrollTop();
    var cardW = thisCard.outerWidth() / 2;
    var cardH = thisCard.height() / 2;

    var transX = xc - offset.left - cardW;
    var transY = docScroll + yc - offset.top - cardH;
//     if (offset.top > card.height()) transY = docScroll - offset.top + cardH;
    if (win.width() <= 700) transY = 0;
    
    if (card.hasClass('active')) unflip();
        
    thisCard.css({'z-index': '3'}).addClass('active');
    
    thisFlipper.css({
      'transform': 'translate3d(' + transX + 'px,' + transY + 'px, 0) rotateY(180deg) scale(1)',
      '-webkit-transform': 'translate3d(' + transX + 'px,' + transY + 'px, 0) rotateY(180deg) scale(1)',
      '-ms-transform': 'translate3d(' + transX + 'px,' + transY + 'px, 0) rotateY(180deg) scale(1)'
    }).addClass('active');
    
    return false;
  };
  
  var unflip = function(e) {
    card.css({'z-index': '1'}).removeClass('active');
    flipper.css({
      'transform': 'none',
      '-webkit-transform': 'none',
      '-ms-transform': 'none'
    }).removeClass('active');
  };
  
  var bindActions = function() {
    card.on('click', flip);
    win.on('click', unflip);
  }
  
  var init = function() {
    bindActions();
  };
  
  return {
    init: init
  };
  
}());

Flipper.init();