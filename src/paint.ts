import P5 from "p5";

const sketch = (p5: P5) => {
	const wanderers: Wanderer[] = [];
	let curColor = 0;

	// built-in function for setting up the sketch, runs once
	p5.setup = () => {
		p5.createCanvas(window.innerWidth, window.innerHeight);
		p5.colorMode(p5.HSB, 100);
		p5.background(0, 0, 0);

		// you can cap the framerate for debugging
		// p5.frameRate(10)
	};

	// built-in function for drawing to the canvas, runs continuously at a frame rate
	p5.draw = () => {
		updateWanderers(wanderers);
	};

	// another built-in function, this time for mouse dragging
	p5.mouseDragged = () => {
		wanderers.push(new Wanderer(p5.createVector(p5.mouseX, p5.mouseY)));
		// change the color slowly
		curColor = (curColor % 100) + 0.2;
	};

	const updateWanderers = (wanderers: Wanderer[]) => {
		for (const wanderer of wanderers) {
			// update the position of the particles
			wanderer.update();
			// remove particles that are now too small
			if (wanderer.isDead()) {
				wanderers.splice(wanderers.indexOf(wanderer), 1);
			} else {
				// display the 'still alive' particles
				wanderer.display();
			}
		}
	};

	class Wanderer {
		location: P5.Vector;
		size: number;
		velocity: P5.Vector;
		color: number;

		constructor(location: P5.Vector) {
			this.location = location;
			this.size = 75;
			this.velocity = p5.createVector(p5.random(-5, 5), p5.random(-5, 5));
			this.color = curColor;
		}

		update() {
			this.location.add(this.velocity);
			this.size -= 2;
		}

		display() {
			p5.fill(this.color, 50, 100);
			p5.ellipse(this.location.x, this.location.y, this.size);
		}

		isDead() {
			return this.size < 9;
		}
	}
};

new P5(sketch);
