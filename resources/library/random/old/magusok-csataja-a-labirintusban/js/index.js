if(/Firefox/.test(navigator.userAgent)) alert('CSS3 transformed mouse events not properly decoded with FF, https://gist.github.com/Yaffle/1145197');

function loadImage(src, tag) {
  var deferred = $.Deferred();
  var img = new Image();
  img.crossOrigin = "Anonymous";
  img.onload = function() {
    imgs[tag] = img;
    deferred.resolve();
  };
  img.onerror = function() {
    deferred.reject(arguments);
  };
  img.src = src;
  return deferred.promise();
  //return loader.addImage(src, [tag], null, 'anonymous');
}
/*
var loader = new PxLoader();
loader.addProgressListener(function(e) { 
  console.log('loaded', e); //.resource.imageNumber);
  imgs[e.resource.tags.first] = e.resource.img;
  $('progress').attr('value', ($('progress').attr('value')|0) + 1);
});
loader.addCompletionListener(function() {});
*/

// crossOrigin=anonymous sometimes worked with imgur.com
// but not always, codepen.io origin is partially banned?
var imgs = {};
$(function() {
  changeMode('loading');
  var gets = [];
  gets.push(loadImage('http://res.cloudinary.com/stt/image/upload/v1450205193/VH01p4n_ictdef.jpg','board'));
  gets.push(loadImage('http://res.cloudinary.com/stt/image/upload/v1450205193/SQBvzMJ_umckwm.jpg','cards'));
  gets.push(loadImage('http://res.cloudinary.com/stt/image/upload/v1450205193/OTAcyyH_ls7prp.jpg','treasure'));
  $.when.apply($, gets).done(function() {
    console.log(arguments)
    $('.progressbar').hide();

    $('canvas#board').attr('width', imgs.board.width).attr('height', imgs.board.height);
    $('canvas#card').attr('width', 132).attr('height', 132);
    $('canvas#treasure').attr('width', 130).attr('height', 130);
    init();
    redraw();	//$(window).trigger('resize');

    main();

  }).fail(function(err) {
    console.log("err",err)
  });
  /*$('progress').attr('max', 3).attr('value', 0);
  loader.start();*/
});

(function () {
    var f = function () {};
    if (!window.console) {
        window.console = {
            log:f, info:f, warn:f, debug:f, error:f
        };
    }
}());

function Vec2(x, y) {
  if(!arguments.length) x=[];
  this[0] = x[0]||x||0;
  this[1] = x[1]||y||0;
}
Vec2.random = function(w,h,x,y) {
  x = x||0; y = y||0;
  return new Vec2(x+Math.floor(Math.random()*w), y+Math.floor(Math.random()*h));
};
Vec2.prototype = {
  // ES5
  get x() {return this[0];},
  set x(v) {this[0] = v;},
  get y() {return this[1];},
  set y(v) {this[1] = v;},
  equals: function(v2) {
     return v2.x == this.x && v2.y == this.y;
  },
}

function Player(x, y) {
	Vec2.call(this, x, y);
  this.home = [x,y];
  this.found = [];
  this.turnState = 0; // 0=placeTile, 1=move, 2=treasure
}
Player.prototype = Object.create(Vec2.prototype, {
});

function StaticTile(_open, _has) {
	this.has = _has;
	this.open = _open;
}
function Tile(_img, _has) {
	this.img = _img;
	this.has = _has;
	this.open = [0,0,0,0];
	this.angle = 0;
	this.rotate = function() {
		this.open.unshift(this.open.pop());
		this.angle += 90;
		if(this.angle >= 360) this.angle = 0;
	};
}

function Treasure(_img, _id) {
	this.id = _id;
	this.img = _img;
}

window.players = {
	'red': new Player(0,0),
	'yellow': new Player(6,0),
	'green': new Player(0,6),
	'blue': new Player(6,6)
};

function pickTreasure() {
  if(!treasure.length) return null;
	return treasure.splice(Math.floor(Math.random()*treasure.length), 1)[0];
}
function checkTreasure() {
	$.each(players, function(k,v){
    if(!players[k].treasure && players[k].x == players[k].home[0] && players[k].y == players[k].home[1]) {
      alert(k+" is the winner!");
      // codepen masks reload()?
      if(confirm("Play another game?")) location.href=location.href;
    } else if(players[k].treasure && board[v[1]][v[0]].has == players[k].treasure.id) {
			players[k].found.push(players[k].treasure);
			players[k].treasure = pickTreasure();
        players[k].turnState = 2;
			$('#log').append("\nYay! Found treasure.");
			console.log('yay',k);
			redraw();
		}
	});
}

function playerOnTile(x ,y) {
	for(var p in window.players) {
		if(players[p][0] == x && players[p][1] == y) return players[p];
	}
}

function getImage(ctx, x,y,w,h) {
	var image = new Image();
	var offcanv = document.createElement('canvas');
	offcanv.width = 125;
	offcanv.height = 125;
	var offctx = offcanv.getContext("2d");
	offctx.putImageData(ctx.getImageData(x, y, w, h), 0, 0);
	image.src = offcanv.toDataURL();
	return image;
	//return ctx.getImageData(x, y, w, h);
}

function drawImg(data, ctx, x, y) {
	var dw = 125/2; //data.img.width
	var dh = 125/2; //data.img.height
	var deg = data.angle*Math.PI/180;
	ctx.translate(x + dw, y + dh);
	ctx.rotate(deg);
	ctx.drawImage(data.img, -dw, -dh);
	ctx.rotate(-deg);
	ctx.translate(-(x+dw), -(y+dh));
}

function init() {
	window.board = [
		[new StaticTile([0,1,1,0]),0,new StaticTile([0,1,1,1],'book'),0,new StaticTile([0,1,1,1],'coins'),0,new StaticTile([0,0,1,1])],
		[0,0,0,0,0,0,0],
		[new StaticTile([1,1,1,0],'map'),0,new StaticTile([1,1,1,0],'crown'),0,new StaticTile([0,1,1,1],'keys'),0,new StaticTile([1,0,1,1],'skull')],
		[0,0,0,0,0,0,0],
		[new StaticTile([1,1,1,0],'ring'),0,new StaticTile([1,1,0,1],'chest'),0,new StaticTile([1,0,1,1],'gem'),0,new StaticTile([1,0,1,1],'sword')],
		[0,0,0,0,0,0,0],
		[new StaticTile([1,1,0,0]),0,new StaticTile([1,1,0,1],'candle'),0,new StaticTile([1,1,0,1],'helmet'),0,new StaticTile([1,0,0,1])],
	];
	// static pieces board[y-1][x-1] = (y%2 && x%2 ? -1 : 0);
	var tw=123, th=125;

	//var cImg = $('img#tiles')[0];
	var offcanv = document.createElement('canvas');
	offcanv.width = 970;
	offcanv.height = 940;
	var offctx = offcanv.getContext("2d");

	function initTiles() {
		var tiles = [];
		offctx.drawImage(imgs.cards, 0, 0);

		for(var i=0,y=0; y<5; y++) {
			for(var x=0; x<7; x++,i++) {
				if(i==34) break;
				var c = new Tile(getImage(offctx, x*tw, y*th, tw, th));
				c.x = x*tw;
				c.y = y*th;
				if(i<6) c.open = [1,1,0,1];
				if(i==6) c.open = [0,1,1,0];
				if(i>6 && i<14) c.open = [1,0,0,1];
				if(i>=14 && i<21) c.open = [0,0,1,1];
				if(i>=21) c.open = [1,0,1,0];
				tiles.push(c);
			}
		}
		tiles[0].has = 'princess';
		tiles[1].has = 'bat';
		tiles[2].has = 'troll';
		tiles[3].has = 'dragon';
		tiles[4].has = 'ghost';
		tiles[5].has = 'bottle';
		tiles[6].has = 'owl';
		tiles[9].has = 'beetle';
		tiles[10].has = 'moth';
		tiles[11].has = 'mouse';
		tiles[12].has = 'lizard';
		tiles[13].has = 'spider';
		return tiles;
	}
	window.tiles = initTiles();

	function initTreasure() {
		var treasure = [];
		offctx.drawImage(imgs.treasure, 0, 0);
		var tw=140, th=130;

		var treasureNames = [
			'crown','dragon','ring','book','owl','lizard',
			'troll','beetle','gem','keys','helmet','sword',
			'coins','mouse','bat','spider','princess','map',
			'bottle','ghost','candle','chest','moth','skull'];
		for(var i=0,y=0; y<4; y++) {
			for(var x=0; x<6; x++, i++) {
			//for(var i=0; i<6*4; i++) { var y = Math.round(i/6), x = (y == 0 ? i : i % y);
			treasure.push(new Treasure(getImage(offctx, x*tw, y*th, tw+30, th+30), treasureNames[i]));
			}
		}
		return treasure;
	}
	window.treasure = initTreasure();

	players.red.treasure = pickTreasure();
	players.yellow.treasure = pickTreasure();
	players.green.treasure = pickTreasure();
	players.blue.treasure = pickTreasure();

	// assign moving pieces
	for(var y=1; y<=7; y++) {
		for(var x=1; x<=7; x++) {
			if(board[y-1][x-1] == 0) {
				var c = Math.floor(Math.random()*tiles.length);
				board[y-1][x-1] = tiles.splice(c,1)[0];
          for(var i=0; i < Math.floor(Math.random()*4); i++) board[y-1][x-1].rotate();
				//if(!board[y-1][x-1]) debugger;
			}
		}
	}
	//console.log(tiles);
}


function redraw() {
	var ctx = $("canvas#board")[0].getContext("2d");
	ctx.drawImage(imgs.board, 0, 0);

	var ox=18, oy=27;
	var cw=123, ch=123;
	for(var y=0; y<board.length; y++) {
		for(var x=0; x<board[y].length; x++) {
			var c = board[y][x];
			if(c instanceof StaticTile) continue;
			var padx = ox + 3 * x, pady = oy + 3 * y;
			if(!c) debugger;
			drawImg(c, ctx, padx + cw*x, pady + ch*y);
        if(window.lastPop.equals(new Vec2(x, y))) continue;
        if(gameMode=='placeTile' && (x==0||x==6||y==0||y==6)) {
          ctx.strokeStyle = "#aabbff";
          ctx.lineWidth = 10;
          ctx.shadowBlur = 10;
          ctx.shadowColor = "white";
          ctx.strokeRect(padx + cw*x, pady + ch*y, 125, 125);
          ctx.shadowBlur = 0;
        }
		}
	}

	for(var p in window.players) {
		ctx.fillStyle = p;
		var x = players[p][0] * cw + (cw/2);
		var y = players[p][1] * ch + (ch/2);
		ctx.fillRect(ox + x, oy + y, 20, 20);
	}

	offctx = $('canvas#card')[0].getContext("2d");
	drawImg(tiles[0], offctx, 0, 0);
	offctx = $('canvas#treasure')[0].getContext("2d");

  if(!players[currentPlayer].treasure) {
   offctx.clearRect(0,0,125,125);
  } else { 
   offctx.drawImage(players[currentPlayer].treasure.img, 0, 0);
  }
  $('#found').html('');
  $.each(players[currentPlayer].found, function(i,t) {
    $('#found').append(t.img);
  });

}

var UP=0, RIGHT=1, DOWN=2, LEFT=3;
function dir2Delta(dir) {
	var dx, dy;
	switch(dir) {
		case UP:    dx = 0, dy = -1; break;
		case RIGHT: dx = 1, dy = 0; break;
		case DOWN:  dx = 0, dy = 1; break;
		case LEFT:  dx = -1, dy = 0; break;
	}
	return [dx, dy];
}
function delta2Dir(dx, dy) {
	if(dx < 0) return LEFT;
	if(dx > 0) return RIGHT;
	if(dy < 0) return UP;
	if(dy > 0) return DOWN;
}
function findWallInDirection(dir, sx, sy) {
	var d = dir2Delta(dir);
	for(var y=sy; y>=0 && y<board.length; y+=d[1]) {
		for(var x=sx; x>=0 && x<board[y].length; x+=d[0]) {
			if(!board[y][x].open[dir]) return [x, y];
		}
	}
}
function isAllowedFromTo(sx, sy, dx, dy) {
	if(sx!=dx && sy!=dy) return false;
	var dir = delta2Dir(dx-sx, dy-sy);

	var oppDir = delta2Dir(sx-dx, sy-dy);

	for(var y=Math.min(sy,dy); y<=Math.max(sy,dy); y+=1) {
		for(var x=Math.min(sx,dx); x<=Math.max(sx,dx); x+=1) {
			var isFirst = (x==sx && y==sy);
			var isLast = (x==dx && y==dy)
			// if not on the first tile, check are we allowed to arrive to this tile from source direction
			if(!isFirst && !board[y][x].open[oppDir]) return false;
			// if not on the last tile, check are we allowed to leave toward dest direction
			if(!isLast && !board[y][x].open[dir]) return false;
		}
	}
	return true;
}

/*
$(window).on('resize', function() {
	$('canvas').attr('width', window.innerWidth).attr('height', window.innerHeight);
	redraw();
});
*/

function main() {
	changeMode('play');
	//console.log(findWallInDirection(RIGHT, 0,0));
	var isDragging = false, from;
	
  
  $('canvas#board').one('webkitAnimationEnd oanimationend oAnimationEnd msAnimationEnd animationend', function(){
    $('.side').show();
    changeMode('placeTile');
    redraw();
    $('#log').append("\nYou are red.\nFind "+players.red.treasure.id+".\n");
  });

  $('canvas#board')
  .mousedown(function(e){
    var cw=123, ch=123;
    var ox=18, oy=27;  // board border
    var offsetX = (typeof e.offsetX == "number") ? e.offsetX : e.layerX || 0;
    var offsetY = (typeof e.offsetY == "number") ? e.offsetY : e.layerY || 0;
    //var offX = (e.offsetX || e.layerX - $(e.target).offset().left) - ox;
    //var offY = (e.offsetY || e.layerY - $(e.target).offset().top) - oy;
    var offX = offsetX - ox;
    var offY = offsetY - oy;
    var x = Math.floor(offX/cw);
    var y = Math.floor(offY/ch);
    if(isNaN(x)) debugger;
    if(x < 0 || y < 0 || y >= board.length || x >= board.length) return;
    console.log(x,y, board[y][x]);
    $(window).mousemove(function() {
      var plr = players[currentPlayer];
      if(plr[0] == x && plr[1] == y) {
        isDragging = true;
        from = [x,y];
      }
      $(window).unbind("mousemove");
    });
  })
  .mouseup(function(e) {
    var wasDragging = isDragging;
    isDragging = false;
    $(window).unbind("mousemove");
    if (!wasDragging) {
      //$("#throbble").toggle();
    } else {
      if(!$('canvas#card').hasClass('disabled')) {
        $('#log').append('\nPlace tile first.');
        return;
      }
      if(players[currentPlayer].turnState == 2) {
        $('#log').append('\nNo more moves.');
        return;
      }
      var cw=123, ch=123;
      var ox=18, oy=27;
      var offX = (e.offsetX || e.pageX - $(e.target).offset().left) - ox;
      var offY = (e.offsetY || e.pageY - $(e.target).offset().top) - oy;
      var x = Math.floor(offX/cw);
      var y = Math.floor(offY/ch);
      if(isAllowedFromTo(from[0],from[1], x, y)) {
        players[currentPlayer].x = x;
        players[currentPlayer].y = y;
        checkTreasure();
        redraw();
      } else {
        console.log("nope");
        $('#log').append("Can't go there.\n");
      }
    }
  });
	
	$('canvas#board').click(function(e) {
		var cw=123, ch=123;
		var ox=18, oy=27;
		var offX = (e.offsetX || e.pageX - $(e.target).offset().left) - ox;
		var offY = (e.offsetY || e.pageY - $(e.target).offset().top) - oy;
		var cx = Math.floor(offX/cw);
		var cy = Math.floor(offY/ch);
		if(cy >= board.length || cx >= board.length) return;
		console.log(cx,cy, board[cy][cx]);
		if(gameMode == 'placeTile' && !window.lastPop.equals(new Vec2(cx,cy))) {
			var placeRow = (cx == 0 || cx == 6);
			var placeCol = (cy == 0 || cy == 6);
			if((placeRow || placeCol) && board[cy][cx] instanceof Tile) {
				var dx = (cx == 0 ? 1 : -1);
				var dy = (cy == 0 ? 1 : -1);
				$.each(players, function(k,v){
					if(placeCol && v[0] == cx) v[1] += dy;
             if(v[1] < 0) v[1] = 6;
             if(v[1] > 6) v[1] = 0;
					if(placeRow && v[1] == cy) v[0] += dx;
             if(v[0] < 0) v[0] = 6;
             if(v[0] > 6) v[0] = 0;
				});
				var q = placeRow ? board[cy] : getCol(cx);

				var addedTile = tiles.shift();
				if(cx==0 || cy==0) {
					tiles.push(q.pop());
					q.unshift(addedTile);
				} else {
					tiles.push(q.shift());
					q.push(addedTile);
				}
        
          window.lastPop = new Vec2(!cx?6:cx%6, !cy?6:cy%6);

				if(placeRow) board[cy] = q;
				else setCol(cx, q);

				$('canvas#card').addClass('disabled');
				$('#endturn').prop('disabled', false);
				changeMode('play');
				checkTreasure();

				redraw();
			}
		}
	});

	function getCol(c) {
		var ret=[];
		for(var i=0; i<board[c].length; i++) {
			ret.push(board[i][c]);
		}
		return ret;
	}
	function setCol(c, data) {
		var ret=[];
		for(var i=0; i<board[c].length; i++) {
			board[i][c] = data[i];
		}
		return ret;
	}

	$('canvas#card').click(function() {
    if($(this).hasClass('disabled')) return;
    if(gameMode == 'placeTile')
      changeMode('play');
    else
      changeMode('placeTile');
    redraw();
	});
	$(window).keypress(function(e) {
		if(gameMode == 'placeTile') {
			//console.log(e);
			if(e.which == 114) {
				//tiles[0].rotate();
			}
		}
	});

	$('button#rotate').click(function() {
		tiles[0].rotate();
		redraw();
	});
	$('button#endturn').click(function() {
		switch(currentPlayer) {
        case 'red': currentPlayer = 'yellow'; break;
        case 'yellow': currentPlayer = 'green'; break;
        case 'green': currentPlayer = 'blue'; break;
        case 'blue': currentPlayer = 'red'; break;
		}
		players[currentPlayer].turnState = 0;
		$('#log').html("\nYou are "+currentPlayer+".\n");
		if(!players[currentPlayer].treasure) {
       $('#log').append("\nNo more treasure, go home to win!");
		} else {
		  $('#log').append("\nFind "+players[currentPlayer].treasure.id+".");
		}
		$('canvas#card').removeClass('disabled');
		$('#endturn').prop('disabled', true);
     changeMode('placeTile');
		redraw();
	});
}

window.currentPlayer = 'red';
window.lastPop = new Vec2();

function changeMode(mode) {
  window.gameMode = mode;
  console.log("mode", mode);
}