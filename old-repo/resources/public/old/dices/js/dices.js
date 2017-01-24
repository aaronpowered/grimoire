'use strict';

var ANGLE = {
    1: {
        x: -10,
        y: -10,
        z: 0
    },
    2: {
        x: -10,
        y: 260,
        z: 0
    },
    3: {
        x: 80,
        y: 0,
        z: 10
    },
    4: {
        x: 260,
        y: 0,
        z: -10
    },
    5: {
        x: 260,
        y: 0,
        z: 80
    },
    6: {
        x: -10,
        y: 170,
        z: 90
    }
};

var dices = Array.prototype.slice.call(document.querySelectorAll('.cubic'));
var speed = 3000;

var angleGenerator = function angleGenerator() {
    var factor = Math.floor(1 + Math.random() * 6);
    var _ANGLE$factor = ANGLE[factor];
    var x = _ANGLE$factor.x;
    var y = _ANGLE$factor.y;
    var z = _ANGLE$factor.z;

    return {
        x: x + 3600,
        y: y + 3600,
        z: z + 3600
    };
};

var roll = function roll() {
    dices.forEach(function (dice) {
        var _angleGenerator = angleGenerator();

        var x = _angleGenerator.x;
        var y = _angleGenerator.y;
        var z = _angleGenerator.z;

        dice.style.cssText = '\n            -webkit-transform: none;\n                    transform: none;\n        ';

        setTimeout(function () {
            // request render
            dice.style.cssText = '\n                -webkit-transition-duration: ' + speed + 'ms;\n                        transition-duration: ' + speed + 'ms;\n                -webkit-transform: rotateX(' + x + 'deg) rotateY(' + y + 'deg) rotateZ(' + z + 'deg);\n                        transform: rotateX(' + x + 'deg) rotateY(' + y + 'deg) rotateZ(' + z + 'deg);\n            ';
        }, 10);
    });
};

document.querySelector('#roll').addEventListener('click', roll);
document.querySelector('#speed').addEventListener('change', function (_ref) {
    var target = _ref.target;

    speed = (parseFloat(target.value) || 1) * 1000;
    target.value = speed / 1000;
});