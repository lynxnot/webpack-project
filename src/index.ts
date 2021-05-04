import Sketch from './sketch';

class Viz extends Sketch {
  setup() {
    console.log('p5 is running');
    this.createCanvas(800, 600);
  }

  draw() {
    this.background(51);
  }
}

new Viz();
