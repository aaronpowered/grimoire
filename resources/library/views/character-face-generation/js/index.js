//
// Could use a good bit of refactoring here 
// --------------------

function makeRandomFace() {
  var totalFacesVariants = 5;
  var arr = [];
  for (var i = 0, l = totalFacesVariants; i < l; i++) {
    arr.push(Math.floor(Math.random() * totalFacesVariants) + 1)
  };

  console.log(arr)

  var faceNum = arr[0];
  var hairNum = arr[1];
  var eyesNum = arr[2];
  var noseNum = arr[3];
  var mouthNum = arr[4];

  $("#Faces > g").css({
    'opacity': '0',
    'transform': 'scale(0.8)'
  });
  $("#Face_" + faceNum).css({
    'opacity': '1',
    'transform': 'scale(1)'
  });

  $("#Hair > g").css({
    'opacity': '0',
    'transform': 'scale(0) translateY(-60px)'
  });
  $("#Hair_" + hairNum).css({
    'opacity': '1',
    'transform': 'scale(1) translateY(0)',
    'transition-delay': '0.3s'
  });

  $("#Noses > g").css({
    'opacity': '0',
    'transform': 'scale(0)'
  });
  $("#Nose_" + noseNum).css({
    'opacity': '1',
    'transform': 'scale(1)',
    'transition-delay': '0.1s'
  });

  $("#Eyes > g").css({
    'opacity': '0',
    'transform': 'scale(0)'
  });
  $("#Eyes_" + eyesNum).css({
    'opacity': '1',
    'transform': 'scale(1)'
  });

  $("#Mouths > g").css({
    'opacity': '0',
    'transform': 'scale(0)'
  });
  $("#Mouth_" + mouthNum).css({
    'opacity': '1',
    'transform': 'scale(1)',
    'transition-delay': '0.3s'
  });
}

makeRandomFace();