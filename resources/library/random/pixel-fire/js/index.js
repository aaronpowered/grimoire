'use strict';

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

// Tested in Chrome!

var burnfactor = 129;

var World = function () {
	function World(canvas, w, h, size) {
		_classCallCheck(this, World);

		this.canvas = canvas;
		this.ctx = canvas.getContext('2d');
		this.width = w;
		this.height = h;
		this.size = size;
		this.cols = Math.floor(this.width / this.size);
		this.rows = Math.floor(this.height / this.size);
		this.grid = [];
	}

	World.prototype.setup = function setup() {
		this.canvas.width = this.width;
		this.canvas.height = this.height;
		this.grid = this.createGrid(this.cols, this.rows);
	};

	World.prototype.resize = function resize(w, h) {
		this.width = w;
		this.height = h;
		this.setup();
	};

	World.prototype.createGrid = function createGrid() {
		var grid = [];

		for (var i = 0; i < this.cols; i++) {
			for (var j = 0; j < this.rows; j++) {
				var cell = new Cell(i, j, this.size, 0);

				grid.push(cell);
			}
		}

		return grid;
	};

	World.prototype.draw = function draw() {
		this.canvas.style.background = "rgb(35, 35, 35)";

		for (var i = 0; i < this.grid.length; i++) {
			this.grid[i].show(this.ctx);
		}
	};

	World.prototype.step = function step() {
		this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);

		for (var i = 0; i < this.grid.length; i++) {
			this.grid[i].calcHeat(this);
		}

		this.draw();

		var self = this;
		requestAnimationFrame(function (timestamp) {
			self.step();
		});
	};

	World.prototype.run = function run(cb) {
		if (cb) {
			cb();
		}
		this.setup();
		this.step();
	};

	World.prototype.index = function index(col, row) {
		if (col < 0 || row < 0 || col > this.cols - 1 || row > this.rows - 1) {
			return -1;
		}

		return row + col * this.rows;
	};

	return World;
}();

var Cell = function () {
	function Cell(c, r, size, heat) {
		_classCallCheck(this, Cell);

		this.col = c;
		this.row = r;
		this.size = size;
		this.fuel = 150;
		if (heat || heat == 0) {
			this.heat = heat;
		} else {
			this.heat = Math.floor(Math.random() * 100) + 1;
		}
	}

	Cell.prototype.calcHeat = function calcHeat(world) {
		var heat = this.heat;
		var sum = 0;
		var neighbourHeat = this.checkNeighbours(world);

		for (var i = 0; i < neighbourHeat.length; i++) {
			sum += neighbourHeat[i];
		}

		this.heat = sum * 0.162 * 2.625 * (0.5 + Math.random() * 0.5);
	};

	Cell.prototype.checkNeighbours = function checkNeighbours(world) {
		var neighbours = [];

		var right = world.grid[world.index(this.col + 1, this.row)];
		var bottom = world.grid[world.index(this.col, this.row + 1)];
		var left = world.grid[world.index(this.col - 1, this.row)];

		if (right) {
			neighbours.push(right.heat);
		}

		if (bottom) {
			neighbours.push(bottom.heat);
		}

		if (left) {
			neighbours.push(left.heat);
		}

		return neighbours;
	};

	Cell.prototype.show = function show(ctx) {
		var x = this.col * this.size;
		var y = this.row * this.size;

		ctx.beginPath();
		ctx.rect(x, y, this.size, this.size);

		if (this.heat >= 11) {
			ctx.fillStyle = '#770000';
		}

		if (this.heat >= 22) {
			ctx.fillStyle = '#9b3513';
		}

		if (this.heat >= 35) {
			ctx.fillStyle = '#e27023';
		}

		if (this.heat >= 64) {
			ctx.fillStyle = '#E9F23F';
		}

		if (this.heat >= 84) {
			ctx.fillStyle = '#ffffff';
		}

		if (this.heat < 11) {
			ctx.fillStyle = 'rgb(35, 35, 35)';
		}

		ctx.fill();

		ctx.closePath();
	};

	return Cell;
}();

var pixelSize = 18;

if (window.innerWidth <= 700) {
	pixelSize = 10;
}

var world = new World(document.getElementById('canvas'), window.innerWidth, window.innerHeight, pixelSize);

var createFireball = function createFireball(clientX, clientY) {
	var x = Math.round(clientX / world.size);
	var y = Math.round(clientY / world.size);
	var temp = 140;

	if (world.grid[world.index(x, y)]) world.grid[world.index(x, y)].heat = temp;
	if (world.grid[world.index(x + 1, y)]) world.grid[world.index(x + 1, y)].heat = temp;
	if (world.grid[world.index(x - 1, y)]) world.grid[world.index(x - 1, y)].heat = temp;
	if (world.grid[world.index(x, y + 1)]) world.grid[world.index(x, y + 1)].heat = temp;
	if (world.grid[world.index(x, y - 1)]) world.grid[world.index(x, y - 1)].heat = temp;
};

document.onmousemove = function (e) {
	createFireball(e.clientX, e.clientY);
};

document.ontouchmove = function (e) {
	e.preventDefault();

	for (var i = 0; i < e.touches.length; i++) {
		createFireball(e.touches[i].clientX, e.touches[i].clientY);
	}
};

window.onresize = function (event) {
	world.resize(window.innerWidth, window.innerHeight);
};

world.run();