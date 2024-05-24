// Bouncing DVD Logo
// Daniel Shiffman
// converted to Typescript by Adam Tigar
// https://thecodingtrain.com/challenges/131-bouncing-dvd-logo.html
// https://youtu.be/0j86zuqqTlQ
// https://editor.p5js.org/codingtrain/sketches/S-es-dYVn

import P5 from "p5";

const sketch = (p5: P5) => {
	let x: number;
	let y: number;
	let xspeed: number;
	let yspeed: number;

	let r: number;
	let g: number;
	let b: number;

	let dvd: P5.Image;
	p5.preload = () => {
		dvd = p5.loadImage("dvd_logo.png");
	};

	// built-in function for setting up the sketch, runs once
	p5.setup = () => {
		p5.createCanvas(window.innerWidth, window.innerHeight);
		x = p5.random(p5.width);
		y = p5.random(p5.height);
		xspeed = 5;
		yspeed = 5;
		pickColor();
	};

	const pickColor = () => {
		r = p5.random(100, 256);
		g = p5.random(100, 256);
		b = p5.random(100, 256);
	};

	// built-in function for drawing to the canvas, runs continuously at a frame rate
	p5.draw = () => {
		p5.background(0);
		// Draw the DVD logo
		p5.tint(r, g, b);
		p5.image(dvd, x, y);

		x = x + xspeed;
		y = y + yspeed;

		if (x + dvd.width >= p5.width) {
			xspeed = -xspeed;
			x = p5.width - dvd.width;
			pickColor();
		} else if (x <= 0) {
			xspeed = -xspeed;
			x = 0;
			pickColor();
		}

		if (y + dvd.height >= p5.height) {
			yspeed = -yspeed;
			y = p5.height - dvd.height;
			pickColor();
		} else if (y <= 0) {
			yspeed = -yspeed;
			y = 0;
			pickColor();
		}
	};
};

new P5(sketch);
