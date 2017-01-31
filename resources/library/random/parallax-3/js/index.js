window.onload = function(){
  var nav_links = document.querySelectorAll('.hexagon.dropdown');
  for(var i = 0; i<nav_links.length; i++){
    nav_links[i].addEventListener('mousedown', function(e){
      var all_nav_links = document.querySelectorAll('.hexagon.dropdown');
      var elem = e.target.parentNode.parentNode;
      if(!elem.className.match(/active/gi)){
        for(var j = 0; j<all_nav_links.length; j++){
        if (all_nav_links[j].className.match(/active/gi)){
          all_nav_links[j].className = all_nav_links[j].className.replace(/ active/gi, '')
        }
      }
        elem.className += ' active';
      } else {
        elem.className = elem.className.replace(/ active/, '');
      }
    });
  }
  var scene = document.getElementById('scene');
  var parallax = new Parallax(scene);
}