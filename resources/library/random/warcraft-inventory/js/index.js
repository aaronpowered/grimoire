Handlebars.registerHelper("speed", function( speed ) {
  return speed.toFixed(2);
});

Handlebars.registerHelper("dps", function( damage ) {
  var damageTotal = damage.max + damage.min;
  if( damage.extras ) {
    for( var i = 0; i < damage.extras.min.length; i++ ) {
      damageTotal += damage.extras.min[i];
    }
    for( var i = 0; i < damage.extras.max.length; i++ ) {
      damageTotal += damage.extras.max[i];
    }
  }
  return ((damageTotal/2) / damage.speed).toFixed(1);
});

Handlebars.registerHelper("classes", function( array ) {
  var classes = array.toString().replace(/\s/g,"&nbsp;").replace(/,/g,", ");
  return new Handlebars.SafeString( classes );
});













var source = $("#wow-item-template").html();
var template = Handlebars.compile(source);
var $body = $("body");
var $wowIcons = $(".wow-icon");
var lastHovered;

$wowIcons.each(function(k,v) {
  
  var $this = $(this);
  var id = $this.data("item-id");
  obj = items[id];
  
  if( obj ) {
    
    if( obj.icon ) {

      $this.css({
        "background-image": "url(http://wow.zamimg.com/images/wow/icons/medium/"+ obj.icon +".jpg)"
      });
    }

    if( obj.stack ) {

      $this.append("<span class='stack'>"+obj.stack+"</span>"); 
      
    }
    
  }
  
});

$wowIcons.on("mouseover.wow", function(e) {
    
  var $this = $(this);
  var $html;
  
  if( !lastHovered || !lastHovered.is( $this ) ) {

    var id = $this.data("item-id");
    $html = $( template(items[id]) );

    $body.find(".wow-item").remove();
    $body.append( $html );

    $html.css({
      left: e.clientX + 20,
      top: e.clientY - 10
    });
    
    lastHovered = $this;
    
  } else {
    $html = $(".wow-item");
  }
  
  setTimeout(function() {
    $html.removeClass("hidden");
  },10);
  
  $this.on("mousemove.wow", function(e) {
    $html.css({
      left: e.clientX + 20,
      top: e.clientY - 30
    });
  });
  
});

$wowIcons.on("mouseout.wow",function(e) {
  $body.find(".wow-item").addClass("hidden");
  $(this).off("mousemove.wow");
});

$body.on("mouseover.wow", ".wow-item" , function(e) {
  //$(this).removeClass("hidden");
});

$body.on("mouseout.wow", ".wow-item" , function(e) {
  $(this).addClass("hidden");
});