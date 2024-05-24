import P5 from "p5";

const sketch = (p5: P5) => {

	// built-in function for setting up the sketch, runs once
	p5.setup = () => {
		p5.createCanvas(window.innerWidth, window.innerHeight);
		p5.background(255);
    p5.textSize(50);
    p5.strokeWeight(4);
    p5.text('Add your code here!', p5.width/2, p5.height/2);
	};

	// built-in function for drawing to the canvas, runs continuously at a frame rate
	p5.draw = () => {};
};

new P5(sketch);
