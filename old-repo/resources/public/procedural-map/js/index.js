//variables
var chunksize = 10;
var mapsize = 10;
var nightmode = false;
const map = new Array(mapsize);;

function init() {
  document.getElementById('clouds').innerHTML = '';
  createMap();
  render();
  for(var c=0; c<15; c++) {
    generateCloud();
  }
}

function render() {
  var maptiling = '';
  for(var cx = 0; cx < mapsize; cx++) {    
    for(var cy = 0; cy < mapsize; cy++) {
      var chunk = '';
      for(var x = 0; x < mapsize; x++) {
        for(var y = 0; y < mapsize; y++) {
          chunk += '<div id="m' + cx + '-' + cy + 'c' + x + '-' + y + '" class="tile tileElevation' + map[cy][cx][x][y] + '"></div>';
        }
          //chunk += '<br>'
        }
      maptiling += '<div class="chunk">' + chunk + "</div>";
    }  
  }
  document.getElementById('map').innerHTML = maptiling;
}

function createMap() {
  for(var x = 0; x < mapsize; x++) {
    map[x] = new Array(mapsize);
  }
  for(var x = 0; x < mapsize; x++) {
    for(var y = 0; y < mapsize; y++) {
      if((y == 0) && (x == 0)) {
        //initial seed
        map[x][y] = createChunk([Math.round(getRandomNumber(0,10)),Math.round(getRandomNumber(0,10)),Math.round(getRandomNumber(0,10)),Math.round(getRandomNumber(0,10))]);
      } else {        
        var seed = [Math.round(getRandomNumber(0,10)),Math.round(getRandomNumber(0,10)),Math.round(getRandomNumber(0,10)),Math.round(getRandomNumber(0,10))];
        //check neighbour chunks
        if(x>0)   {
          //use chunks
          seed[0] = map[x-1][y][0][chunksize-1];
          seed[2] = map[x-1][y][chunksize-1][chunksize-1];
        }        
        if(y>0)   {
          //use chunks
          seed[0] = map[x][y-1][chunksize-1][0];
          seed[1] = map[x][y-1][chunksize-1][chunksize-1];
        }        
        if((y > 0) && (x > 0)) {
          //the corner should be the average of the values
          //seed[0] = Math.round((map[x-1][y][chunksize-1][0] + map[x][y-1][0][chunksize-1] + map[x-1][y-1][chunksize-1][chunksize-1])/3);
          seed[0] = Math.round((map[x-1][y][0][chunksize-1] + map[x-1][y-1][chunksize-1][chunksize-1] + map[x][y-1][chunksize-1][0])/3);
        }
         map[x][y] = createChunk(seed);
      }
     
    }
  }
}

//---------------terrain generate functions

function createChunk(seed) {
  const chunk = new Array(chunksize);
  for(var i = 0; i < chunksize; i++) {
    chunk[i] = new Array(chunksize);
  }

  //setting corners
  /*chunk[0][0] = Math.round(getRandomNumber(0,10));
  chunk[0][chunk.length - 1] = Math.round(getRandomNumber(0,10));
  chunk[chunk.length - 1][chunk.length - 1] = Math.round(getRandomNumber(0,10));
  chunk[chunk.length - 1][0] = Math.round(getRandomNumber(0,10));*/
  chunk[0][0] = seed[0];
  chunk[0][chunk.length - 1] = seed[1];
  chunk[chunk.length - 1][0] = seed[2];
  chunk[chunk.length - 1][chunk.length - 1] = seed[3];
 

  //calculating linear interpolation
  for(var y = 1; y < chunk.length; y++) {
    chunk[0][y]=Math.round(linterpolate(chunk[0][0],chunk[0][chunk.length-1],chunk.length,y));
    chunk[chunk.length - 1][y]=Math.round(linterpolate(chunk[chunk.length - 1][0],chunk[chunk.length - 1][chunk.length-1],chunk.length,y));
  }
  //calculating mid values
  for(var x = 1; x < chunk.length; x++) {
    for(var y = 0; y < chunk.length ; y++) {
      chunk[x][y] = Math.round(linterpolate(chunk[0][y],chunk[chunk.length - 1][y],chunk.length,x));
     }
  }
return(chunk);
//console.table(chunk);
}

function generateCloud() {    
  var a = getRandomNumber(1000,2000);
  document.getElementById('clouds').innerHTML += '<div class="cloud" style="left: ' + getRandomNumber(-50,70) + '%; top: ' + getRandomNumber(-50,70) + '%; width: ' + getRandomNumber(50,300) + 'px; height: ' + getRandomNumber(50,300) + 'px; -webkit-animation-duration: '+ a +'s; animation-duration: '+ a +'s;"></div>';
}

//-------------helper functions
function getRandomNumber(min, max) {
  return Math.random() * (max - min) + min;
}

function linterpolate(from,to,res,step) {
  //return (Math.abs((to-from))/res)*step;
  return from + ((to-from)/res) * step;
}

init();

$(".tile").on('click',(event)=> {
  console.log(event.target.id);
})

function nightToggle() {
  $('body').toggleClass('night');
  if(!nightmode) {
    document.getElementById('ntoggle').innerHTML = 'Make it a day!';
  } else {
    document.getElementById('ntoggle').innerHTML = 'Make it a night!';
  }
}