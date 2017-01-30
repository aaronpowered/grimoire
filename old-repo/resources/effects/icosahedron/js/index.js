var diedral = Math.PI - Math.asin(2/3);
var a = 200;
var V3 = Math.sqrt(3);
var ang = Math.PI - diedral;
var x3Drot = 1/2, y3Drot = V3/2, z3Drot = 0;
var transform = '', transformA = '';
var t = 0;

jQuery(document).ready(function() {
  // Base face (1)
  jQuery('.triangle').addClass('triangle1');
  // First upper/lower face (A1)
  jQuery('.icosahedron').append(jQuery('.triangle1').clone().removeClass('triangle1').addClass('triangleA1'));
  var transformA = 'rotateZ(-60deg) rotate3d(' + x3Drot + ', ' + y3Drot + ', ' + z3Drot + ', ' + ang + 'rad)';
  jQuery('.triangleA1').css('transform', transformA);


  // Base 10 faces (9 left)
  for (var i = 2; i <= 10; i++) {
    // Add base face
    jQuery('.icosahedron').append(jQuery('.triangle' + (i-1)).clone().removeClass('triangle' + (i-1)).addClass('triangle' + i));
    var translation = (i % 2 == 0 ? 'translateX(' + a + 'px)' : '');
    var zRot = (i % 2 == 0 ? 'rotateZ(60deg)' : 'rotateZ(-60deg)');
    transform += translation + ' ' + zRot + ' rotate3d(' + x3Drot + ', ' + y3Drot + ', ' + z3Drot + ', ' + ang + 'rad)';
    jQuery('.triangle' + i).css('transform', transform);

    // Add upper/lower corresponding face
    jQuery('.icosahedron').append(jQuery('.triangle' + i).clone().removeClass('triangle' + i).addClass('triangleA' + i));
    if (i % 2 == 0) {
      transformA = transform + 'translateX(' + a * 1/2 + 'px) translateY(' + a * V3/2 + 'px) rotateZ(-60deg) rotate3d(' + x3Drot + ', ' + 0 + ', ' + z3Drot + ', ' + -ang + 'rad)';
    } else {
      transformA = transform + 'rotateZ(-60deg) rotate3d(' + x3Drot + ', ' + y3Drot + ', ' + z3Drot + ', ' + ang + 'rad)';
    }
    jQuery('.triangleA' + i).css('transform', transformA);

  }

  // Power!
  var interval = setInterval(function() {
    
    // Rotate icosahedron
    var rX = 360 * Math.sin(t / 160);
    var rY = 360 * Math.sin(t / 240);
    var rZ = 360 * Math.sin(t / 400);
  
    jQuery('.icosahedron').css('transform', 'rotateX(' + rX + 'deg) rotateY(' + rY + 'deg) rotateZ(' + rZ + 'deg)');
    
    // Animate face
    var face = (Math.random() > 0.5 ? 'A': '') + Math.ceil(10 * Math.random());
    var lum = 20 + 60 * Math.random();
    var opacity = (Math.random() > 0.5 ? 1 : 0.2);
    jQuery('.triangle' + face + ' .depth2').css('background', 'radial-gradient(hsla(200, 60%, ' + lum + '%, ' + opacity + '), hsla(200, 60%, ' + lum/3 + '%, ' + opacity + ')');
    
    
    t++;
  }, 50);
  
});