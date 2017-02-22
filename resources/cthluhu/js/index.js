var code = {
	setup: {
		background: '#000',
		minimumSize: 0.5,
		globalScale: 200,
		globalCompositeOperation: "source-over",
		layers: 3,
		pan: false
	},
	startShape: 'start01',
	start01: {
		shapes: [
			{ shape: "sak",  light:  0.95, saturation: 0.5, hue: 130, rotate: 45, zIndex: 1 },
			{ shape: "sak2", light: -1, saturation: 0.5, hue: 130, rotate: 45, zIndex: 0, scale: 2.1 },
			{ shape: "tent", scale: 0.12, hue: 110, light: -1, saturation: 0.5, alpha: 1, zIndex: 2 },
			{ shape: "tent", scale: 0.12, hue: 110, light: -1, saturation: 0.5, alpha: 1, zIndex: 2, rotate: 90 },
			{ shape: "tent", scale: 0.12, hue: 110, light: -1, saturation: 0.5, alpha: 1, zIndex: 2, rotate: 180 },
			{ shape: "tent", scale: 0.12, hue: 110, light: -1, saturation: 0.5, alpha: 1, zIndex: 2, rotate: 270 }
		]
	},
	sak: {
		shapes: [
			{ shape: "SQUARE" },
			{ shape: "sak", scale: 0.9, light: -0.2, rotate: 1 }
		]
	},
	sak2: {
		shapes: [
			{ shape: "SQUARE" },
			{ shape: "sak2", scale: 0.9, light: 0.1 }
		]
	},

	tent: [
		{
			shapes: [
				{ shape: "CIRCLE" },
				{ shape: "tent", y: 0.5, scale: 0.995, rotate: 15, light: 0.05 }
			]
		},
		{
			shapes: [
				{ shape: "CIRCLE" },
				{ shape: "tent", y: 0.5, scale: 0.95, rotate: -15, light: 0.05 }
			]
		},
		{
			weight: 0.03,
			shapes: [
				{ shape: "CIRCLE" },
				{ shape: "tent", y: 0.5, scale: 0.95, rotate: -20, light: 0.01 },
				{ shape: "tent", y: 0.5, scale: 0.95, rotate: -20, light: 0.01, flip: 130, hue: 20, saturation: -0.3 }
			]
		}
	]
};

document.getElementById( "generate" ).onclick = CFAjs.render;

CFAjs.render( code );