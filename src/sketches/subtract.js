import p5 from 'p5';

export default function subtract(p) {
  let canvas;

  p.setup = () => {
    canvas = p.createCanvas(900, 600);
    p.noStroke();

  }

  p.drawArrow = (base, vec, myColor) => {
    p.push();
    p.stroke(myColor);
    p.strokeWeight(3);
    p.fill(myColor);
    p.translate(base.x, base.y);
    p.line(0, 0, vec.x, vec.y);
    p.rotate(vec.heading());
    let arrowSize = 7;
    p.translate(vec.mag() - arrowSize, 0);
    p.triangle(0, arrowSize / 2, 0, -arrowSize / 2, arrowSize, 0);
    p.pop();
  };

  p.draw = () => {
    p.background(240);

    let v0 = p.createVector(0, 0);
    let v1 = p.createVector(70, 50);
    p.drawArrow(v0, v1, 'red');

    let v2 = p.createVector(p.mouseX, p.mouseY);
    p.drawArrow(v0, v2, 'blue');

    let v3 = p5.Vector.sub(v1, v2);
    p.drawArrow(v2, v3, 'purple');


  }
}