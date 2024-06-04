import P5 from "p5";

const sketch = (p5: P5) => {
	const wanderers: Wanderer[] = [];
	let currentHue = 0;

	// built-in function for setting up the sketch, runs once
	p5.setup = () => {
		p5.createCanvas(window.innerWidth, window.innerHeight);
		p5.colorMode(p5.HSB, 100); // Hue, Saturation, Brightness
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
		currentHue = (currentHue % 100) + 0.2;
	};

	const updateWanderers = (wanderers: Wanderer[]) => {
		for (const wanderer of wanderers) {
			// update the position and size of the particles
			wanderer.update();

			// remove particles that are now too small
			if (wanderer.isDead()) {
				wanderers.splice(wanderers.indexOf(wanderer), 1);
			} else {
				// display the 'still alive' particles in their updated state
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
			// use the current mouse location that's passed in to create a new Wanderer
			this.location = location;
			// starting size of the circle
			this.size = 75;
			// choose a random direction for the circle to shrink and move
			this.velocity = p5.createVector(p5.random(-5, 5), p5.random(-5, 5));
			// set the color of the circle to the current hue
			this.color = currentHue;
		}

		update() {
			// Change the location of the circle by adding the velocity to the location
			this.location.add(this.velocity);
			// and shrink the circle
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
