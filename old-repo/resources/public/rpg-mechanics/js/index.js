/*ENTITIES*/

var player1 = {
  name: "Chrono",
  level: 1,
  stats: {
    vitality: 15,
    strength: 12,
    intelligence: 10,
    dexterity: 12,
    armor: 60
  },
  buffs: "",
  debuffs: ""
}

var enemy1 = {
  name: "Ozzy",
  level: 1,
  stats: {
    vitality: 20,
    strength: 10,
    intelligence: 15,
    dexterity: 8,
    armor: 40
  },
  buffs: "",
  debuffs: ""
}

/*ITEMS*/

var damascusRapier = {
  name: "Damascus Rapier",
  level: 1,
  rarity: "Legendary",
  stats: {
    strength: 3,
    dexterity: 5,
    intelligence: 5
  },
  proc: {
    chance: 15,
    type: "fire",
    count: 3,
    min: 3,
    max: 9
  },
  animation: "animateSlash"
}

var frozenLance = {
  name: "Frozen Lance",
  level: 1,
  rarity: "Legendary",
  stats: {
    strength: 6,
    dexterity: 6,
    intelligence: 1
  },
  proc: {
    chance: 15,
    type: "ice",
    count: 1,
    min: 11,
    max: 22
  },
  animation: "animateSlash"
}

/*SPELLS*/

var meteorStrike = {
  name: "Meteor Strike",
  level: 1,
  spellType: "damage",
  baseDamage: 15,
  damageType: "fire",
  proc: 25,
  procType: "stun",
  animation: "animateMeteor",
  castDelay: 500
}

var frostNova = {
  name: "Frost Nova",
  level: 1,
  spellType: "damage",
  baseDamage: 15,
  damageType: "ice",
  proc: 100,
  debuff: "frostBite",
  animation: "animateFrostNova",
  coolDownTurns: 4,
  coolDown: 4,
  castDelay: 500
}

var flashHeal = {
  name: "Flash Heal",
  level: 1,
  spellType: "heal",
  baseDamage: 25,
  damageType: "heal",
  animation: "animateFlashHeal",
  coolDownTurns: 3,
  coolDown: 3
}

/*DEBUFFS*/

var frostBite = {
  duration: 1,
  turnsLeft: 1,
  damageDown: 0.5
}

/*BUFFS*/

var iceShield = {
  duration: 4,
  damageDown: 0.5,
  animation: "animateIceShield"
}

/*FUNCTIONS*/

var wep;
var enemyTurn;
var stunned = false;
var frostNovaCooldown = 0;

function equipWeapon(equipee) {
  thisWep = $("#"+equipee.name+"").attr("data-wep");
  wep = window[ thisWep ];
  equipee.stats.strength = equipee.stats.strength + wep.stats.strength;
  equipee.stats.dexterity = equipee.stats.dexterity + wep.stats.dexterity;
  equipee.stats.intelligence = equipee.stats.intelligence + wep.stats.dexterity;
}

function initBattle() {
  equipWeapon(player1);
  equipWeapon(enemy1);
  
  player1.hp = player1.stats.vitality * 10;
  enemy1.hp = enemy1.stats.vitality * 10;
}

function killTarget(target) {
  if(target.hp <= 0) {
    clearInterval(enemyTurn);
    $("#"+target.name+"").delay(500).fadeOut(500);
    setTimeout(function(){
      $("#"+target.name+"").remove();
    }, 1000);
  }
}

function roll(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
}

function showDamage(target, damageType) {
  $("#"+target.name+"").append("<span class='"+damageType+"'>"+attackDmg+"</span>");
  setTimeout(function(){
    $("#"+target.name+" ."+damageType+"").first().remove();
  }, 1000);
}

function spellCrit(attacker, target) {
  rollCrit = roll(0,100);
  if (rollCrit < attacker.stats.intelligence) {
    attackDmg = attackDmg * 2;
    console.log("Crit!");
    $("#"+target.name+"").append("<span class='crit'>Crit!</span>");
    setTimeout(function(){
      $("#"+target.name+" .crit").first().remove();
    }, 1000);
  }
}

function attackCrit(attacker, target) {
  rollCrit = roll(0,100);
  if (rollCrit < attacker.stats.dexterity) {
    attackDmg = attackDmg * 2;
    console.log("Crit!");
    $("#"+target.name+"").append("<span class='crit'>Crit!</span>");
    setTimeout(function(){
      $("#"+target.name+" .crit").first().remove();
    }, 1000);
  }
}

function stun(target, chance) {
  rollStun = roll(0,100);
  if(rollStun < chance) {
    console.log("Stunned!");

    $("#"+target.name+"").append("<span class='stun'>Stunned!</span>");
    $("#"+target.name+"").append("<div class='stunned'></div>");
    
    setTimeout(function(){
      $("#"+target.name+" .stun").first().remove();
      $("#"+target.name+" .stunned").remove();
      enemyAttack();
    }, 1000);
  }
}

/*function frostBitten(target) {
  frostBite.duration = 1;
  target.debuffs = "frostBite"
}*/

function animateMeteor(target) {
  $("#"+target.name+"").append("<div class='meteors'></div>");
  setTimeout(function(){
    $("#"+target.name+" .meteors").last().remove();
  }, 750);
  setTimeout(function(){
    $("body").addClass("shake");
    setTimeout(function(){
      $("body").removeClass("shake");
    },750);
  },500);
}

function animateIceShield(target) {
  $("#"+target.name+"").toggleClass("ice-armor");
}

function animateSlash(target) {
  $("#"+target.name+"").addClass("slash-anim");
  setTimeout(function(){
    $("#"+target.name+"").removeClass("slash-anim");
  }, 499);
}

function animateFrostNova(target) {
  $("#"+target.name+"").addClass("nova");
  setTimeout(function(){
    $("#"+target.name+"").removeClass("nova");
  }, 1000);
}

function animateFlashHeal(target) {
  
}

function animateAttacks(attacker, target) {
  if($("#"+attacker.name+"").hasClass("player")) {
    $("#"+attacker.name+" img").velocity({
      translateZ: "0",
      translateX: "10px"
    },{duration: 200, easing: "easeOutCirc"}).velocity("reverse");
  }
  else {
    $("#"+attacker.name+" img").velocity({
      translateZ: "0",
      translateX: "-10px"
    },{duration: 200, easing: "easeOutCirc"}).velocity("reverse");
  }
  
  if($("#"+target.name+"").hasClass("player")) {
    $("#"+target.name+" img").velocity({
      translateZ: "0",
      translateX: "-15px"
    },{delay: 100, duration: 200, easing: "easeOutCirc"}).velocity("reverse");
  }
  else {
    $("#"+target.name+" img").velocity({
      translateZ: "0",
      translateX: "15px"
    },{delay: 100, duration: 200, easing: "easeOutCirc"}).velocity("reverse");
  }
}

function enemyAttack() {
  rollSpell = roll(100,0);
  if(rollSpell < 20) {
    castSpell(meteorStrike,enemy1, player1);
  } else if (enemy1.hp < 50 && flashHeal.coolDown > flashHeal.coolDownTurns){
    castSpell(flashHeal,enemy1,enemy1);
    flashHeal.coolDown = 0;
  }
  else {
    attack(enemy1, player1, wep);
  }
  flashHeal.coolDown++;
}

function deBuff(target, debuff) {
  console.log("yp");
  target.debuff = debuff;  
  target.debuff.turnsLeft = target.debuff.duration;
  debuffAnim = window[ target.debuff.animation ];
  if(debuffAnim !== undefined) {
    debuffAnim(target);
  }
}

function buff(target, buff) {
  console.log("yp");
  target.buff = buff;  
  target.buff.turnsLeft = target.buff.duration;
  debuffAnim = window[ target.buff.animation ];
  debuffAnim(target);
}

function attack(attacker, target, wep){
  attackDmg = roll(attacker.stats.strength/2, attacker.stats.strength).toFixed(0) - (target.stats.armor/20).toFixed(0);
  targetHealth = $("#"+target.name+" .health-bar .health");
  initialHealth = target.hp;
  
  debuffed = attacker.debuff;
  if(debuffed !== undefined && debuffed.turnsLeft > 0) {
    attackDmg = (attackDmg * (debuffed.damageDown)).toFixed(0);
    debuffed.turnsLeft--;
  }
  
  buffed = target.buff;
  if(buffed !== undefined && buffed.turnsLeft > 0) {
    attackDmg = (attackDmg * (buffed.damageDown)).toFixed(0);
    console.log(attackDmg);
  }
  
  rollDodge = roll(0,100);
  if (rollDodge < target.stats.dexterity) {
    attackDmg = 0;
    $("#"+target.name+"").append("<span class='dodge'>Dodge!</span>");
    setTimeout(function(){
      $("#"+target.name+" .dodge").first().remove();
    }, 1000);
    console.log("Dodge!");
  }
  else {
    attackCrit(attacker, target);
    
    rollProc = roll(0,100);
    if (rollProc < wep.proc.chance) {
      wepProc(target, wep)
    }
  }
  
  animateAttacks(attacker, target);
  
  showDamage(target, "damage");
  
  wepAnimation = window[ wep.animation ];
  wepAnimation(target);
  
  target.hp = target.hp - attackDmg;
  targetHealth.width((target.hp/(target.stats.vitality*10))*100+"%");
  
  killTarget(target);
}

function castSpell(spell, attacker, target) {
  
  attackDmg = roll(attacker.stats.intelligence/2, attacker.stats.intelligence).toFixed(0) - (target.stats.intelligence*.2).toFixed(0) + spell.baseDamage;
  
  targetHealth = $("#"+target.name+" .health-bar .health");
  
  spellAnimation = window[ spell.animation ];
  spellAnimation(target);
  
  $("#"+attacker.name+" img").velocity({
      translateZ: "0",
      translateX: "-10px"
    },{duration: 200, easing: "easeOutCirc"}).velocity("reverse");
  
  setTimeout(function(){
    spellCrit(attacker, target);
    
    if(spell.hasOwnProperty("procType")) {
      spellProc = window[ spell.procType ];
      spellProc(target, spell.proc);
    }
    
    if(spell.spellType == "damage") {
      target.hp = target.hp - attackDmg;
    }
    else {
      target.hp = target.hp + attackDmg;
    }
    targetHealth.width((target.hp/(target.stats.vitality*10))*100+"%");

    showDamage(target, spell.damageType);
    
    thisDebuff = window[ spell.debuff ]
    if(thisDebuff !== undefined) {
      deBuff(target, thisDebuff);
    }  
    
    killTarget(target);
  }, spell.castDelay);
}

/*WEAPON PROCS*/

function wepProc(target, wep) {
  var procCount = wep.proc.count;
  hitNum = setInterval(function(){
    if(procCount > 0) {
      procDamage = roll(wep.proc.min, wep.proc.max);
      ranX = roll(-60,60);
      procCount--;
      target.hp = target.hp - procDamage; targetHealth.width((target.hp/(target.stats.vitality*10))*100+"%");
      
      $("#"+target.name+"").append("<span class='"+wep.proc.type+"-wep'>"+procDamage+"</span>");
      $("#"+target.name+" ."+wep.proc.type+"-wep").last().velocity({
        translateZ: 0,
        translateY: "-50px",
        translateX: ""+ranX+"px"
      },{duration: 850, easing: "cubic-bezier(.08,.91,.08,.93)"}).velocity({opacity: 0},{duration: 150});
      
      setTimeout(function(){
        $("#"+target.name+" ."+wep.proc.type+"").first().remove();
      }, 1000);
    }
    else {
      clearInterval(hitNum);
    }
    killTarget(target);
  }, 250);
}

/*EVENTS*/

var yourTurn = true;

$(".controls li").on("click", function(){
  if(yourTurn === true && $(".player").length > 0) {
    myWep = $("#"+player1.name+"").attr("data-wep");
    wep = window[ myWep ];
    if($(this).hasClass("attack")){
      attack(player1, enemy1, wep);
      
/*      steven = new Player();
      

       
       alan = new Player();
      
       steven.attack({
         enemy: alan,
         weapon: gunny
       })*/
      
       

    }
    if($(this).hasClass("frost-nova") && frostNova.coolDown >= frostNova.coolDownTurns){
      castSpell(frostNova, player1, enemy1);
      frostNova.coolDown = 0;
      $(".frost-nova").css({"opacity": 0.5, "pointer-events": "none"});
    } 
    if($(this).hasClass("ice-shield")) {
      buff(player1, iceShield); 
    }
    
    if(player1.hasOwnProperty("buff") && player1.buff.turnsLeft > 0) {
      player1.buff.turnsLeft--;
    }
    
    frostNova.coolDown = frostNova.coolDown + 1;
    yourTurn = false;
    $(".controls li").css("pointer-events", "none");
  }

  enemyTurn = setTimeout(function(){
    if($(".enemy").length > 0) {
      enemyWep = $("#"+enemy1.name+"").attr("data-wep");
      wep = window[ enemyWep ];
      enemyAttack();
      
      yourTurn = true;
      $(".controls li").css("pointer-events", "auto");
      if (player1.buff !== undefined && player1.buff.turnsLeft < 1) {
        buffAnim = window[ player1.buff.animation ];
        buffAnim(player1);
        player1.buff = "";
      }
      
      if(frostNova.coolDown >= frostNova.coolDownTurns) {
        $(".frost-nova").css({"opacity": 1, "pointer-events": "auto"});
      }
    }
    frostNovaCooldown--;
  },1000);
});

initBattle();