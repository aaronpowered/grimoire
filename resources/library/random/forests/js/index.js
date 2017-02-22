var colorScheme = Math.round(Math.random()); 

var fgColor = "#26233b";
if (colorScheme) {
  var bgColor1 = "#FF1C83";
  var bgColor2 = "#FF6934";
  var bgColor3 = "#FECC5E";
}
else {
  var bgColor1 = "#40BDFF";
  var bgColor2 = "#63FFA4";
  var bgColor3 = "#FFE150";
}

// lil' helper function
function extendOpts(extendTo, extendFrom){
  for (var key in extendFrom) {
    if (extendFrom.hasOwnProperty(key)) {
      extendTo[key] = extendFrom[key];
    }
  }
}

// annnnd another helper. Spits out a random number within
// a given percentage of the input number.
function jitter(num, percent) {
  percent = percent || .2;
  var jitterAmount = randBetween (percent, -percent);
  return num + (num*jitterAmount);
}

// last little helper dealio.
function randBetween(num1, num2) {
  return (Math.random() * (num1 - num2) + num2)
}

// the literal svg element that holds it all
var Scene = (function(){
  var el = document.getElementById("scene");
  el.setAttribute("style", "background:linear-gradient(45deg,"+ bgColor1 + "," + bgColor2 + "," + bgColor3 +")");
  var children = [];

  // 'cause vertical resizing is nice.
  function resize(){
    el.setAttribute('viewbox', "0,0," + window.innerWidth + ","+ Math.round(window.innerHeight/1.25));
    el.setAttribute('width', window.innerWidth);
    el.setAttribute('height', Math.round(window.innerHeight/1.25));
    children.forEach(function(child){
      // also scale up everything else
      if (child.resize) {
        child.resize();
      }
    });
  }

  function getWidth(){
    return el.getBoundingClientRect().width;
  }

  function getHeight(){
    return el.getBoundingClientRect().height;
  }

  // renders stuff to the scene
  function append(toAppend){
    children.push(toAppend);
    el.appendChild(toAppend.group);
  }

  var init = (function(){
    // sets everything to scale to start off
    resize();    
  })();
  
  // publicly accessible functions
  return {
    getWidth: getWidth,
    getHeight: getHeight,
    resize: resize,
    append: append
  }

})();

function Tree(opts) {
  extendOpts(this, opts);
  this.scene = this.ground.scene;
  this.width = jitter(this.width, .5);
  this.height = this.scene.getHeight();
  this.el = document.createElementNS("http://www.w3.org/2000/svg", "path");
  this.el.classList.add('tree');
  this.position = this.position;
  
  this.createPathDef = function(){
    if (!this.hasBranch) {
        return (
        " M" + this.position + ",-10" +
        " L" + (this.position + this.width) + ",-10" +
        " L" + (this.position + this.width) + "," + this.height +
        " L" + this.position + "," + this.height +
        " Z"
      );
    }
    else if (this.branchSide === 0) {
        return (
        " M" + this.position + ",-10" +
        " L" + this.position + "," + this.branchOffsetY +
        " L" + (this.position - this.branchOffsetX) + ",0" +
        " L" + (this.position - this.branchOffsetX - this.branchWidth) + ",-10" +
        " L" + this.position + "," + this.branchReattachPoint +
        " L" + this.position + "," + this.height +
        " L" + (this.position + this.width) + "," + this.height +
        " L" + (this.position + this.width) + ",-10" +
        " Z"
      );
    }
    else return (
      " M" + this.position + ",-10" +
      " L" + (this.position + this.width) + ",-10" +
      " L" + (this.position + this.width) + "," + this.branchOffsetY +
      " L" + (this.position + this.width + this.branchOffsetX) + ",-10" +
      " L" + (this.position + this.width + this.branchOffsetX + this.branchWidth) + ",-10" +
      " L" + (this.position + this.width) + "," + this.branchReattachPoint +
      " L" + (this.position + this.width) + "," + this.height +
      " L" + this.position + "," + this.height +
      " Z"
    );
  }
  
  this.resize = function() {
    this.height = this.scene.getHeight();
    this.pathDef = this.createPathDef();
    this.el.setAttribute("d", this.pathDef);
  }
  
  this.el.setAttribute("fill", this.color);
  
  // 5% chance for a branch doesn't end up looking quite right.
  // this lets me adjust the odds that a tree will have a branch.
  //
  // Generally, the trees in the back have more branches.
  this.hasBranch = Math.round(randBetween(0, this.branchChanceWeight));
  this.setUpBranch = function(){
    this.branchWidth = this.width/2;
    this.branchSide = Math.round(Math.random());
    this.branchOffsetX = randBetween(this.width, this.width*1.5);
    this.branchOffsetY = randBetween( (this.height/6), (this.height/2) );
    this.branchAngle = Math.atan(this.branchOffsetX / this.branchOffsetY);
    this.branchReattachPoint = (this.branchOffsetX + this.branchWidth) / Math.tan(this.branchAngle);
  }
  
  if (this.hasBranch) {
    this.setUpBranch();
  }
  this.resize();
  this.ground.append(this);
}

function Ground(opts) {
  extendOpts(this, opts);
  this.group =  document.createElementNS("http://www.w3.org/2000/svg", "g");
  this.group.classList.add(this.class);
  this.el = document.createElementNS("http://www.w3.org/2000/svg", "rect");
  this.el.classList.add('ground');
  this.el.setAttribute('fill', this.color);
   this.children = [];
  this.getWidth = function(){
    return this.el.getBoundingClientRect().width;
  }
  this.getHeight = function() {
    return this.el.getBoundingClientRect().height;
  }

  this.resize = function() {
    this.el.setAttribute('height', this.screenPercent * this.scene.getHeight());
    this.el.setAttribute('width', this.scene.getWidth() + 30);
    this.el.setAttribute('x', -15);
    this.el.setAttribute('y', this.scene.getHeight() - this.getHeight() + 15);
    this.children.forEach(function(child){
      if (child.resize) {
        child.resize();
      }
    });
  }
  this.group.appendChild(this.el);
 
  this.append = function(toAppend) {
    this.children.push(toAppend);
    this.group.appendChild(toAppend.el);
  }
  this.scene.append(this);  
  this.resize();

  this.setUpTrees = function() {
    this.treeOpts.color = this.color;
    this.treeOpts.ground = this;
    this.treeFrequency = jitter(this.treeFrequency, .3);
    this.numTrees = Math.floor(this.getWidth() / this.treeFrequency);
    if (this.numTrees < 2) {
      this.numTrees = 2;
    }
    this.trees = [];
    for (var i=0; i <this.numTrees; i++) {
      this.treeOpts.position = randBetween(0, this.getWidth());
      this.trees.push(new Tree(this.treeOpts));
    }
  }
  this.setUpTrees();

}

var background = new Ground({
  scene: Scene,
  color: fgColor,
  screenPercent: .01, // firefox doesn't like it when this is set to 0
  treeFrequency: 100,
  class: "background",
  treeOpts: {
    width: 20,
    branchChanceWeight: 2,
  }
});

var foreground = new Ground({
  scene: Scene,
  color: fgColor,
  screenPercent: .15,
  treeFrequency: 300,
  class: "foreground",
  treeOpts: {
    width: 40,
    branchChanceWeight: .95,
  }
});

var topRect = function() {
  this.scene = Scene;
  this.color = foreground.color;
  this.height = this.scene.getHeight() * .15;
  this.width = this.scene.getWidth();
  this.group = document.createElementNS("http://www.w3.org/2000/svg", "g");
  this.el = document.createElementNS("http://www.w3.org/2000/svg", "rect");
  this.el.setAttribute("fill", this.color);
  this.group.classList.add("top");
  this.resize = function() {
    this.el.setAttribute('height', this.height + 25);
    this.el.setAttribute('width', this.scene.getWidth() + 30);
    this.el.setAttribute('x', -25);
    this.el.setAttribute('y', -25);
  }
  this.group.appendChild(this.el);
  this.resize();
  this.scene.append(this);
}
var top = new topRect();
window.addEventListener('resize', function(){
  Scene.resize();
})