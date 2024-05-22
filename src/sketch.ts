import P5 from "p5";
import { isSetup } from "./functions";

const sketch = (p5: P5) => {
	const wanderers: Wanderer[] = [];
	let curColor = 100;

	p5.setup = () => {
		p5.createCanvas(window.innerWidth, window.innerHeight);
		isSetup();
		p5.colorMode(p5.HSB, 100);
		p5.background(0, 0, 0);
	};

	p5.draw = () => {
		updateWanderers(wanderers);
	};

	p5.mouseDragged = () => {
		wanderers.push(new Wanderer(p5.createVector(p5.mouseX, p5.mouseY)));
		curColor = (curColor % 100) + 1;
	};

	const updateWanderers = (wanderers: Wanderer[]) => {
		for (const wanderer of wanderers) {
			wanderer.update();
			if (wanderer.isDead()) {
				wanderers.splice(wanderers.indexOf(wanderer), 1);
			} else {
				wanderer.display();
			}
		}
	};

	class Wanderer {
		location: P5.Vector;
		size: number;
		velocity: P5.Vector;
		acc: P5.Vector;
		angle: number;
		color: number;

		constructor(location: P5.Vector) {
			this.location = location;
			this.size = 75;
			this.velocity = p5.createVector(0, 0);
			this.acc = p5.createVector(0, 0);
			this.angle = 0.0;
			this.color = curColor;
		}

		update() {
			const magnitude = p5.random(0, 4);
			this.angle += p5.random(0, p5.TWO_PI);
			this.acc.x += p5.cos(this.angle) * magnitude;
			this.acc.y += p5.sin(this.angle) * magnitude;
			this.acc.limit(3);

			this.velocity.add(this.acc);
			this.velocity.limit(6);

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
