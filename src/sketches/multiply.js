import p5 from 'p5';



export default function multiply(p) {
  let canvas;
  p.setup = () => {
    canvas = p.createCanvas(900,600);
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
  }

  p.draw = () => {
    p.background(240);

    let v0 = p.createVector(50, 50);
    let v1 = p.createVector(25, -25);
    p.drawArrow(v0, v1, 'red');

    let num = p.map(p.mouseX, 0, p.width, -2, 2, true);
    let v2 = p5.Vector.mult(v1, num);
    p.drawArrow(v0, v2, 'blue');

    p.noStroke();
    p.text('multiplied by ' + num.toFixed(2), 5, 90);
  }



}

// export default multiply;
