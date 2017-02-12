'use strict';

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

// utilities
function getLength(x0, y0, x1, y1) {
    // returns the length of a line segment
    var x = x1 - x0;
    var y = y1 - y0;
    return Math.sqrt(x * x + y * y);
}

function getDegAngle(x0, y0, x1, y1) {
    var y = y1 - y0;
    var x = x1 - x0;
    return Math.atan2(y, x) * (180 / Math.PI);
}

// some constants
var DECAY = 4; // confetti decay in seconds
var SPREAD = 60; // degrees to spread from the angle of the cannon
var GRAVITY = 1200;

var ConfettiCannon = function () {
    function ConfettiCannon() {
        _classCallCheck(this, ConfettiCannon);

        // setup a canvas
        this.canvas = document.getElementById('canvas');
        this.dpr = window.devicePixelRatio || 1;
        this.ctx = this.canvas.getContext('2d');
        this.ctx.scale(this.dpr, this.dpr);

        // add confetti here
        this.confettiSpriteIds = [];
        this.confettiSprites = {};

        // vector line representing the firing angle
        this.drawVector = false;
        this.vector = [{
            x: window.innerWidth,
            y: window.innerHeight * 1.25
        }, {
            x: window.innerWidth,
            y: window.innerHeight * 2
        }];

        this.pointer = {};

        // bind methods
        this.render = this.render.bind(this);
        this.handleMousedown = this.handleMousedown.bind(this);
        this.handleMouseup = this.handleMouseup.bind(this);
        this.handleMousemove = this.handleMousemove.bind(this);
        this.handleTouchstart = this.handleTouchstart.bind(this);
        this.handleTouchmove = this.handleTouchmove.bind(this);
        this.setCanvasSize = this.setCanvasSize.bind(this);

        this.setupListeners();
        this.setCanvasSize();

        // fire off for a demo
        this.timer = setTimeout(this.handleMouseup, 1000);
    }

    ConfettiCannon.prototype.setupListeners = function setupListeners() {
        // Use TweenLite tick event for the render loop
        TweenLite.ticker.addEventListener('tick', this.render);

        // bind events
        window.addEventListener('mousedown', this.handleMousedown);
        window.addEventListener('mouseup', this.handleMouseup);
        window.addEventListener('mousemove', this.handleMousemove);
        window.addEventListener('touchstart', this.handleTouchstart);
        window.addEventListener('touchend', this.handleMouseup);
        window.addEventListener('touchmove', this.handleTouchmove);
        window.addEventListener('resize', this.setCanvasSize);
    };

    ConfettiCannon.prototype.setCanvasSize = function setCanvasSize() {
        this.canvas.width = window.innerWidth * this.dpr;
        this.canvas.height = window.innerHeight * this.dpr;
        this.canvas.style.width = window.innerWidth + 'px';
        this.canvas.style.height = window.innerHeight + 'px';
    };

    ConfettiCannon.prototype.handleMousedown = function handleMousedown(event) {
        clearTimeout(this.timer);
        var x = event.clientX * this.dpr;
        var y = event.clientY * this.dpr;

        this.vector[0] = {
            x: x,
            y: y
        };
        this.drawVector = true;
    };

    ConfettiCannon.prototype.handleTouchstart = function handleTouchstart(event) {
        clearTimeout(this.timer);
        event.preventDefault();
        var x = event.touches[0].clientX * this.dpr;
        var y = event.touches[0].clientY * this.dpr;
        this.vector[0] = {
            x: x,
            y: y
        };

        this.drawVector = true;
    };

    ConfettiCannon.prototype.handleMouseup = function handleMouseup(event) {
        this.drawVector = false;

        var x0 = this.vector[0].x;
        var y0 = this.vector[0].y;
        var x1 = this.vector[1].x;
        var y1 = this.vector[1].y;

        var length = getLength(x0, y0, x1, y1);
        var angle = getDegAngle(x0, y0, x1, y1) + 180;

        var particles = length / 5 + 5;
        var velocity = length * 10;
        this.addConfettiParticles(particles, angle, velocity, x0, y0);
    };

    ConfettiCannon.prototype.handleMousemove = function handleMousemove(event) {
        var x = event.clientX * this.dpr;
        var y = event.clientY * this.dpr;
        this.vector[1] = {
            x: x,
            y: y
        };
        this.pointer = this.vector[1];
    };

    ConfettiCannon.prototype.handleTouchmove = function handleTouchmove(event) {
        event.preventDefault();
        var x = event.changedTouches[0].clientX * this.dpr;
        var y = event.changedTouches[0].clientY * this.dpr;
        this.vector[1] = {
            x: x,
            y: y
        };
        this.pointer = this.vector[1];
    };

    ConfettiCannon.prototype.drawVectorLine = function drawVectorLine() {
        this.ctx.strokeStyle = 'pink';
        this.ctx.lineWidth = 2 * this.dpr;

        var x0 = this.vector[0].x;
        var y0 = this.vector[0].y;
        var x1 = this.vector[1].x;
        var y1 = this.vector[1].y;

        this.ctx.beginPath();
        this.ctx.moveTo(x0, y0);
        this.ctx.lineTo(x1, y1);
        this.ctx.stroke();
    };

    ConfettiCannon.prototype.addConfettiParticles = function addConfettiParticles(amount, angle, velocity, x, y) {
        var i = 0;
        while (i < amount) {
            var _sprite;

            // sprite
            var r = _.random(4, 6) * this.dpr;
            var d = _.random(15, 25) * this.dpr;

            var cr = _.random(30, 255);
            var cg = _.random(30, 230);
            var cb = _.random(30, 230);
            var color = 'rgb(' + cr + ', ' + cg + ', ' + cb + ')';

            var tilt = _.random(10, -10);
            var tiltAngleIncremental = _.random(0.07, 0.05);
            var tiltAngle = 0;

            var id = _.uniqueId();
            var sprite = (_sprite = {}, _sprite[id] = {
                angle: angle,
                velocity: velocity,
                x: x,
                y: y,
                r: r,
                d: d,
                color: color,
                tilt: tilt,
                tiltAngleIncremental: tiltAngleIncremental,
                tiltAngle: tiltAngle
            }, _sprite);

            Object.assign(this.confettiSprites, sprite);
            this.confettiSpriteIds.push(id);
            this.tweenConfettiParticle(id);
            i++;
        }
    };

    ConfettiCannon.prototype.tweenConfettiParticle = function tweenConfettiParticle(id) {
        var _this = this;

        var minAngle = this.confettiSprites[id].angle - SPREAD / 2;
        var maxAngle = this.confettiSprites[id].angle + SPREAD / 2;

        var minVelocity = this.confettiSprites[id].velocity / 4;
        var maxVelocity = this.confettiSprites[id].velocity;

        // Physics Props
        var velocity = _.random(minVelocity, maxVelocity);
        var angle = _.random(minAngle, maxAngle);
        var gravity = GRAVITY;
        var friction = _.random(0.1, 0.25);
        var d = 0;

        TweenLite.to(this.confettiSprites[id], DECAY, {
            physics2D: {
                velocity: velocity,
                angle: angle,
                gravity: gravity,
                friction: friction
            },
            d: d,
            ease: Power4.easeIn,
            onComplete: function onComplete() {
                // remove confetti sprite and id
                _.pull(_this.confettiSpriteIds, id);
                delete _this.confettiSprites[id];
            }
        });
    };

    ConfettiCannon.prototype.updateConfettiParticle = function updateConfettiParticle(id) {
        var sprite = this.confettiSprites[id];

        var tiltAngle = 0.0005 * sprite.d;

        sprite.angle += 0.01;
        sprite.tiltAngle += tiltAngle;
        sprite.tiltAngle += sprite.tiltAngleIncremental;
        sprite.tilt = Math.sin(sprite.tiltAngle - sprite.r / 2) * sprite.r * 2;
        sprite.y += Math.sin(sprite.angle + sprite.r / 2) * 2;
        sprite.x += Math.cos(sprite.angle) / 2;
    };

    ConfettiCannon.prototype.drawConfetti = function drawConfetti() {
        var _this2 = this;

        this.confettiSpriteIds.map(function (id) {
            var sprite = _this2.confettiSprites[id];

            _this2.ctx.beginPath();
            _this2.ctx.lineWidth = sprite.d / 2;
            _this2.ctx.strokeStyle = sprite.color;
            _this2.ctx.moveTo(sprite.x + sprite.tilt + sprite.r, sprite.y);
            _this2.ctx.lineTo(sprite.x + sprite.tilt, sprite.y + sprite.tilt + sprite.r);
            _this2.ctx.stroke();

            _this2.updateConfettiParticle(id);
        });
    };

    ConfettiCannon.prototype.drawPointer = function drawPointer() {
        var centerX = this.pointer.x;
        var centerY = this.pointer.y;
        var radius = 15 * this.dpr;

        this.ctx.beginPath();
        this.ctx.arc(centerX, centerY, radius, 0, 2 * Math.PI, false);
        this.ctx.fillStyle = 'transparent';
        this.ctx.fill();
        this.ctx.lineWidth = 2 * this.dpr;
        this.ctx.strokeStyle = '#ffffff';
        this.ctx.stroke();
    };

    ConfettiCannon.prototype.drawPower = function drawPower() {
        var x0 = this.vector[0].x;
        var y0 = this.vector[0].y;
        var x1 = this.vector[1].x;
        var y1 = this.vector[1].y;

        var length = getLength(x0, y0, x1, y1);
        var centerX = x0;
        var centerY = y0;
        var radius = 1 * this.dpr * length / 20;

        this.ctx.beginPath();
        this.ctx.arc(centerX, centerY, radius, 0, 2 * Math.PI, false);
        this.ctx.fillStyle = 'transparent';
        this.ctx.fill();
        this.ctx.lineWidth = 2 * this.dpr;
        this.ctx.strokeStyle = '#333333';
        this.ctx.stroke();
    };

    ConfettiCannon.prototype.render = function render() {
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);

        // only draw the vector when the drawVector flag is on
        this.drawVector && this.drawVectorLine();
        this.drawVector && this.drawPower();

        this.drawPointer();
        this.drawConfetti();
    };

    return ConfettiCannon;
}();

var confetti = new ConfettiCannon();