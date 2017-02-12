var input = document.querySelector('#input');
var submit = document.querySelector('#submit');
var content = '';
var newContent = [];

function markupContent(){
  content = input.innerText.split('');
  newContent = [];

  for (var i = 0; i < content.length; i++){

    //math stuffs
    var angle = .16 * i;
    var base = 5;
    var spacing = .75;
    var x = (base + angle) * Math.cos(angle);
    var y = (base + angle) * Math.sin(angle);
    var rotation = angle * Math.cos(angle);

    //create span element
    var el = document.createElement('SPAN');
    el.innerText = content[i];      

    el.style.transform = 
      'rotate('+ rotation + 'deg)'+
      // First really bad attempt at math...
      // 'rotate(-'+ (360 * angle) + 'deg)'+
      'translateY(' + (y * spacing) + 'rem)' + 
      'translateX(' + (x * spacing) + 'rem)';

    //Set color based on element index
    el.style.color = 'hsl('+ (360/content.length * i) +',100%, 50%)';

    //Set font size based on element index
    el.style.fontSize = .02 * i + 'rem';

    //Push element to new content array
    newContent.push(el);
  };
  
  addMarkup();
  toggleOnboarding();
}

function toggleOnboarding(){
  var className = 'show-onboarding';
  input.innerText == '' ? input.classList.add(className) : input.classList.remove(className);
}

function addMarkup(){
  input.innerHTML = '';
  
  for (var i = 0; i < newContent.length; i++){
    input.appendChild(newContent[i]);
  }
}


input.addEventListener('input',   markupContent);

markupContent();