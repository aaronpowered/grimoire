document.getElementById('indicator').onclick = changeColor;

var count = 1;
  function changeColor() {
    var property = document.getElementById('indicator');
    if (count == 0) {
      property.style.backgroundColor = "#777"
      count = 1;
    }
    else {
      property.style.backgroundColor = "magenta"
      count = 0;
    }
  }