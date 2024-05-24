import P5 from "p5";

const sketch = (p5: P5) => {
	let curColor = 0;

	// built-in function for setting up the sketch, runs once
	p5.setup = () => {
		p5.createCanvas(window.innerWidth, window.innerHeight);
		p5.colorMode(p5.HSB, 100);
		p5.background(0, 0, 0);
	};

	// built-in function for drawing to the canvas, runs continuously at a frame rate
	p5.draw = () => {};

	// another built-in function, this time for mouse dragging
	p5.mouseDragged = () => {
 
    // set the color of the outline
    p5.stroke(curColor, 50, 100);
    // set fill color
    p5.fill(curColor, 100, 100);

    // draw a circle at the mouse position
		p5.ellipse(p5.mouseX, p5.mouseY, 80);

		// change the color slowly
		curColor = (curColor % 100) + 0.2;
	};
};

new P5(sketch);
