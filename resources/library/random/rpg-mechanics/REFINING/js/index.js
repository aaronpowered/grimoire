var fighting = false;
var $battleField = $(".battle-field");
var charsToRender = [];

var portraits = {
  chrono: "http://1.bp.blogspot.com/-6mnJVcU4h3U/TbbNxJ0lUrI/AAAAAAAAAEU/TaTaLFI5xCc/s1600/chronotrigger.jpg",
  ozzie: "http://img3.wikia.nocookie.net/__cb20130101130113/villains/images/thumb/c/c3/Villain_Ozzie_drawn_ChronoTrigger.png/100px-32,274,0,241-Villain_Ozzie_drawn_ChronoTrigger.png"
}

/*dice rolling methods*/
function rollNum(min, max) {
  return (Math.floor(Math.random() * (max - min)) + min).toFixed(0);
}

function rollChance(chance) {
  chanceRoll = rollNum(0,100);
  if(chanceRoll <= chance) {
    return true;
  }
  else {
    return false;
  }
}

/*helpers*/
function $id(Obj) { 
    return $("#"+Obj.id+"");
}

function $health(Obj) { 
    return $("#"+Obj.id+" .health-bar .health");
}

/*character constructor*/
function Character(id, name, portrait, affilliation, type, health, damage, dexterity) {
  this.id = id;
  this.name = name;
  this.portrait = portrait;
  this.affilliation = affilliation;
  this.type = type;
  this.health = health;
  this.damage = damage;
  this.dexterity = dexterity;
  this.attack = function(target){
    damageAmt = rollNum(this.damage*1.33, this.damage*0.77);
    if(rollChance(this.dexterity) === true) {
      damageAmt = damageAmt*2;
      animateMsg(target, "Crit")
      console.log("Crit!");
    }
    target.health = target.health - damageAmt;
    animateStruck(target);
    animateSlash(target);
    animateHealthBar(target);
    animateDamage(target, damageAmt);
    console.log(this.name + " deals " +damageAmt+ " damage and "+target.name+"'s health is " + target.health)
  };
  this.dodge = function(target){
    return rollChance(this.dexterity);
  };
}

/*create characters*/
var player1 = new Character("player1", "Chrono", portraits.chrono, "player", "human", 100, 10, 8);
charsToRender.push(player1);
var enemy1 = new Character("enemy1", "Ozzie", portraits.ozzie, "enemy", "human", 100, 10, 8);
charsToRender.push(enemy1);


/*animations*/
function animateStruck(target) {
  $id(target).addClass("struck");
  setTimeout(function(){
    $id(target).removeClass("struck");
  }, 600);
}

function animateStepBack(target) {
  $id(target).addClass("step-back");
  setTimeout(function(){
    $id(target).removeClass("step-back");
  }, 600);
}

function animateHealthBar(target) {   $health(target).width((target.health/(100))*100+"%");
}

function animateDamage(target, damageAmt) {
 $id(target).find(".damage").text(damageAmt).addClass("display-damage");
  setTimeout(function(){
    $id(target).find(".damage").removeClass("display-damage")
  },800)
}

function animateMsg(target, message) {
 $id(target).find(".msg").text(message+"!").addClass("display-"+message+"");
  setTimeout(function(){
    $id(target).find(".msg").removeClass("display-"+message+"")
  },800)
}

function animateDodge(target) {
  animateStepBack(target);
  animateDamage(target, 0);
  animateMsg(target, "Dodge")
}

function animateSlash(target) {
  $id(target).addClass("slash-anim");
  setTimeout(function(){
    $id(target).removeClass("slash-anim");
  }, 500);
}

function animateMeteor(target) {
  $spellObj = $id(target).find(".spell-obj");
  $spellObj.addClass("meteors");
  setTimeout(function(){
    $spellObj.removeClass("meteors")
  },800)
}

function renderChars() {
  for(i = 0; i < charsToRender.length; i++) {
    thisChar = charsToRender[i];
    $battleField.append("<div class="+thisChar.affilliation+" id="+thisChar.id+"><div class='health-bar'><div class='health'></div><img src='"+thisChar.portrait+"'><span class='msg'></span><span class='damage'></span><span class='spell-obj'></span></div></div>")
  }
}

/*bind events*/
function bindEvents(){
  
  var yourTurn = true;
  $(".enemy").on("click", function(){
    if(yourTurn === true) {
      targetId = window[$(this).attr("id")];
      console.log(targetId);
      if(targetId.dodge() === true) {
        console.log("Enemy dodged!");
        animateDodge(targetId);
      }
      else {
        player1.attack(targetId);
        if(targetId.health < 0) {
          $id(targetId).delay(500).fadeOut(250);
          return;
        }
      }
      yourTurn = false;
      setTimeout(function(){
        if(player1.dodge() === true) {
          console.log("You dodged!");
          animateDodge(player1);
        }
        else {
          targetId.attack(player1);
          if(player1.health < 0) {
            $id(player1).delay(500).fadeOut(250);
            return;
          }
        }
        yourTurn = true;
      },1000);
    }  
  });
}

/*initiate battle instance*/
function initBattle(){
  $battleField.html("");
  renderChars();
  bindEvents();
}

$(document).ready(function(){
  initBattle();
/*  fightBattle();*/
});