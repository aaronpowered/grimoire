  $('.option').on('click','li',function(){
    $('.cube').attr('class','cube '+$(this).attr('data-opt'))
  }).on('click','.select',function(){
    $('.dice').toggleClass($(this).attr('data-opt'))
  }).on('click','.roll',function(){
    var result = Math.round(Math.random()*5 + 1)
    , angle = {}
    $(this).data('n',$(this).data('n')?0:5);
    var n = $(this).data('n');
    $('.cube').attr('style','');
    angle = {x:360*n,y:360*n}
    switch (result){
      case 1:
        break;
      case 2:
        angle.y = 360*n + 90;
        break;
      case 3:
        angle.x = 360*n - 90;
        break;
      case 4:
        angle.x = 360*n + 90;
        break;
      case 5:
        angle.y = 360*n - 90;
        break;
      case 6:
        angle.x = 360*n + 180;
        break;
    }
    $('.cube').css({'-webkit-transform':'translateZ(-100px) rotateX(' + angle.x + 'deg) rotateY(' + angle.y + 'deg)','-webkit-transition':'3s'})

  })