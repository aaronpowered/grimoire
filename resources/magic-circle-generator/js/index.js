var maxChildsPerElements = 2; 
var maxNumberOfFirstChilds = 4;
var minNumberOfFirstChilds = 2;
var minNumberOfSubcircles = 0;
var maxNumberOfSubcircles = 6;
var chanceForFormulas = 0.5;

var longformulas = 
    [
      'Visita Interiora Terrae Rectificando Invenies Occultum Lapidem Veram Medicinam.',
      'Caelum non animum mutant qui trans mare currunt',
      'cessante ratione legis cessat ipsa lex',
      'contra vim mortis non crescit herba in hortis',
      'crescat scientia vita excolatur',
      'cuius est solum eius est usque ad coelum et ad inferos',
      'cuncti adsint meritaeque expectent praemia palmae'
      
    ]
var formulas = 
    [
      'admirandum naturæ operationem', 
      'caput mortuum',
      'carpe noctem',
      'clavis aurea',
      'camera obscura',
      'capax infiniti',
      'caput inter nubila',
      'anima magica abscondita',
      'causa mortis',
      'ceteris paribus',
      'compos mentis',
      'concilio et labore',
      'concordia cum veritate',
      'concordia parvae res crescunt',
      'condicio sine qua non',
      'contemptus mundi',
      'contraria contrariis curantur',
      'cor ad cor loquitur',
      'cor aut mors',
      'cor unum',
      'corpus vile',
      'corruptio optimi pessima',
      'corvus oculum corvi non eruit',
      'crescente luce',
      'cupio dissolvi',
      'auctus ex dimicatione',
      'voluntas vincit omnia',
      'concordia magica'
    ];
var shortformulas = 
    [
      'Creo',
      'Rego', 
      'Perdo', 
      'Intellego',
      'Muto',
      'Ignem',
      'Aqua',
      'Terram',
      'Auram',
      'Herbam',
      'Corpus',
      'Mentem',
      'Vim',
      'Animal',
      'Imagonem',
      'Vitae',
      'Nocte',
      'Diem'
    ]; 

function makeMagicCircle()
{
  /* creates the base circle */
  var container = $('<div class="circle-container" />');
  var circle = $('<div class="magic-circle" />');
  container.append(circle);
  $('body').append(container); 
  
  /* generates random elements */
  var dice = minNumberOfFirstChilds + Math.floor(Math.random() * (maxNumberOfFirstChilds - minNumberOfFirstChilds));
  for(i = 0; i < dice; i++)
    appendRandomElement(circle, maxChildsPerElements);
  
  /* generates subcircles */
  dice = minNumberOfSubcircles + Math.floor(Math.random() * (maxNumberOfSubcircles - minNumberOfSubcircles));
  for(i = 0; i < dice; i++)
    appendCircle(circle);

  /*
   * is doubled ?
   */
  if(Math.random() > 0.75) circle.addClass('doubled');
  
  /*
   * Random weight
   */
  dice = Math.floor((Math.random() * 2));
  if(dice == 1) circle.addClass('lighter');
  else if(dice == 2) circle.addClass('lighter');
  
  appendSymbol(circle);
}

function appendRandomElement(element, maxChilds)
{
  /*
   * Random type
   */
  var dice = Math.floor((Math.random() * 3));
  var child;
  
  switch(dice)
    {
      case 0: child = appendCircle(element, 2); break;
      case 1: child = appendSquare(element); break;
      case 2: child = appendTriangle(element); break;
    } 
  
  /*
   * Make childs
   */
  if(dice != 3) { 
    dice = Math.floor((Math.random() * maxChilds));
    if(dice > 0)
      for(i = 0; i < dice; i++) 
        appendRandomElement(child, maxChilds);
  }
  
  /*
   * Random weight
   */
  dice = Math.floor((Math.random() * 3));
  if(dice == 1) child.addClass('lighter');
  else if(dice == 2) child.addClass('lighter'); 
  
  /*
   * Random style
   */
  dice = Math.floor((Math.random() * 2)); 
  if(dice == 1) child.addClass('dotted'); 
  

}

function appendCircle(element, maxSubcircles)
{
  var circle = $('<div class="magic-circle" />');
  element.append(circle);
  
  /*
   * Random position
   */
  var dice = Math.random();
  if(dice > 0.9) circle.addClass('top');
  else if(dice > 0.8) circle.addClass('top-right');
  else if(dice > 0.7) circle.addClass('right');
  else if(dice > 0.6) circle.addClass('bottom-right');
  else if(dice > 0.5) circle.addClass('bottom');
  else if(dice > 0.4) circle.addClass('bottom-left');
  else if(dice > 0.3) circle.addClass('left');
  else if(dice > 0.2) circle.addClass('top-left');
  
  /*
   * is doubled ?
   */
  if(Math.random() > 0.75) circle.addClass('doubled');
  
  /*
   * make an inner symbol ?
   */
  appendSymbol(circle);
  
  /*
   * has formula ?
   */
  if(Math.random() > chanceForFormulas)
  {
    var formula = $('<div class="formula">' + getRandomLongFormula() + '</div>'); 
    circle.append(formula);
  }
  
  /* generates subcircles */
  if(maxSubcircles > 0) {
    var dice = Math.floor(Math.random() * (maxSubcircles));
    for(i = 0; i < dice; i++)
      appendCircle(circle, maxSubcircles - 1);
  }
  
  return circle;
}

function appendSquare(element)
{
  var square = $('<div class="square" />');
  element.append(square);
  
  /*
   * Has formulas ?
   */
  if(Math.random() > chanceForFormulas)
  {
    var dice = Math.floor(Math.random() * 2);
    if(dice == 0) // simple formula
    {
      var formula = $('<div class="formula">' + getRandomFormula() + '</div>'); 
      square.append(formula);
    }
    else if(dice == 1) // side formulas
    {
        var formula1 = $('<div class="formula up">' + getRandomShortFormula() + '</div>'); 
        var formula2 = $('<div class="formula right">' + getRandomShortFormula() + '</div>'); 
        var formula3 = $('<div class="formula down">' + getRandomShortFormula() + '</div>'); 
        var formula4 = $('<div class="formula left">' + getRandomShortFormula() + '</div>'); 
        square.append(formula1);
        square.append(formula2);
        square.append(formula3);
        square.append(formula4); 
    }
  }
  

  return square;
}

function appendTriangle(element)
{
  var triangle = $('<div class="triangle" />');
  if(Math.random() > 0.5) 
    triangle.addClass('reverse');
  element.append(triangle);
  
    /*
   * Has formulas ?
   */
  if(Math.random() > chanceForFormulas)
  {
    var dice = Math.floor(Math.random() * 2);
    if(dice == 0) // simple formula
    {
      var formula = $('<div class="formula">' + getRandomFormula() + '</div>');
      triangle.append(formula);
    }
    else if(dice == 1) // side formulas
    {
        var formula1 = $('<div class="formula base">' + getRandomShortFormula() + '</div>'); 
        var formula2 = $('<div class="formula right">' + getRandomShortFormula() + '</div>'); 
        var formula3 = $('<div class="formula left">' + getRandomShortFormula() + '</div>');
        triangle.append(formula1);
        triangle.append(formula2);
        triangle.append(formula3);
    }
  }
    
  return triangle;
}

function appendSymbol(element)
{
  /*
   * symbols goes from 128768 to 128883
   */
  var code = (128768 + Math.floor((Math.random() * 114)))
  var symbol = $('<div class="symbol">&#' + code + '</div>');
  element.append(symbol);
  
  /*
   * Random weight
   */
  var dice = Math.floor((Math.random() * 3)); 
  if(dice == 1) symbol.addClass('lighter');
  else if(dice == 2) symbol.addClass('lighter'); 
  
  return symbol;
}

function getRandomLongFormula()
{
  var dice = Math.floor((Math.random() * longformulas.length)); 
  return longformulas[dice];
}

function getRandomFormula()
{
  var dice = Math.floor((Math.random() * formulas.length)); 
  return formulas[dice];
}

function getRandomShortFormula()
{
  var dice = Math.floor((Math.random() * shortformulas.length)); 
  return shortformulas[dice];
}

function moreCircles()
{
  for(var i = 0; i < 10; i++)
    makeMagicCircle();
  $('.magic-circle > .formula').lettering();
}

$(function () {
  moreCircles();
});


$(window).scroll(function() {
  if($(window).scrollTop() + $(window).height() == $(document).height()) {
    moreCircles();
  }
});