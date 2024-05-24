// Daniel Shiffman
// http://youtube.com/thecodingtrain
// http://codingtra.in

// converted to Typescript by Adam Tigar

// Coding Challenge #114: Bubble Sort Visualization
// https://youtu.be/67k3I2GxTH8

import P5 from "p5";

const sketch = (p5: P5) => {
  let values: number[] = [];
  const itemWidth = 4;

  let i = 0;

	// built-in function for setting up the sketch, runs once
	p5.setup = () => {
    p5.frameRate(12);
    p5.createCanvas(p5.windowWidth, p5.windowHeight);
    values = new Array(p5.int(p5.width/itemWidth));
    for (let i = 0; i < values.length; i++) {
      values[i] = p5.random(p5.height);
    }
	};

	// built-in function for drawing to the canvas, runs continuously at a frame rate
	p5.draw = () => {
    p5.background(0);

    if (i < values.length) {
      for (let j = 0; j < values.length - i - 1; j++) {
        let a = values[j];
        let b = values[j + 1];
        if (a > b) {
          swap(values, j, j + 1);
        }
      }
    } else {
      console.log("finished");
      p5.noLoop();
    }
    i++;
  
    for (let i = 0; i < values.length; i++) {
      p5.stroke(255);
      p5.strokeWeight(itemWidth);
      p5.line(i*itemWidth, p5.height, i*itemWidth, p5.height - values[i]);
    }
	};

  const swap = (arr: number[], a: number, b: number) => {
    let temp = arr[a];
    arr[a] = arr[b];
    arr[b] = temp;
  }
};

new P5(sketch);
