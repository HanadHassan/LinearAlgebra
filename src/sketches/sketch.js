// vector addition

import p5 from 'p5';



export default function sketch(p) {
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
  p.background('orangered');
  let v0 = p.createVector(0, 0);
  let v1 = p.createVector(p.mouseX, p.mouseY);
  p.drawArrow(v0, v1, 'white');

  let v2 = p.createVector(-30, 20);
  p.drawArrow(v1, v2, 'blue');


  let v3 = p5.Vector.add(v1, v2);
  p.drawArrow(v0, v3, 'purple');

}

}

/*
const sketch = (width, height, props) => {
  return function (p5) {
    let value = props.value;
    p5.setup = () => {
      p5.strokeWeight(50);
    }

    p5.draw = () => {
      p5.fill(value, 16);
      p5.noStroke();
      p5.rect(0, 0, width, height);
      p5.stroke((value + 128) % 256);
      p5.line(p5.mouseX, p5.mouseY, p5.pmouseX, p5.pmouseY);
    };

    p5.receiveProps = (nextProps) => {
      console.log(nextProps.value)
      value = nextProps.value;
    };

    p5.unmount = () => {
      console.log('The sketch was unmounted. Width was ' + width + ', height was ' + height);
    }
  }

};
function draw() {
  background(240);

  let v0 = createVector(0, 0);
  let v1 = createVector(70, 50);
  drawArrow(v0, v1, 'red');

  let v2 = createVector(mouseX, mouseY);
  drawArrow(v0, v2, 'blue');

  let v3 = p5.Vector.sub(v1, v2);
  drawArrow(v2, v3, 'purple');
}
*/


//export default sketch;
