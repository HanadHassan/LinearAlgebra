import React, { Component } from 'react';
//import Sketch from 'react-p5';
import P5Wrapper from 'react-p5-wrapper';
//import p5 from 'p5';
import sketch from './sketches/sketch';
//import { sketch } from './sketches/sketch';
import './App.css';
//import { render } from '@testing-library/react';
import substract from './sketches/subtract';
import multiply from './sketches/multiply';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from 'react-router-dom';

const routes = [
  {
  path: '/substract',
  component: substract
},
{
  path: '/multiply',
  component: multiply
},
{
  path: '/sketch',
  component: sketch
}




]








/*
export default class App extends Component {
  constructor(){
    super()
    this.renderRef = React.createRef()
    this.state = {
      x: 100,
      y: 100
    }
  }
  componentDidMount(){
    this.sketch = new p5(p => {

      p.setup = (p5, parent) => {
        p5.createCanvas(500,500).parent(parent)
      }

      p.drawArrow = (base, vec, myColor) => {
        p5.stroke(myColor);
        p5.strokeWeight(3);
        p5.fill(myColor);
        p5.translate(base.x, base.y);
        p5.line(0,0, vec.x, vec.y);
        p5.rotate(vec.heading());
        let arrowSize = 7;
        p5.translate(vec.mag() - arrowSize, 0);
        p5.triangle(0, arrowSize / 2, 0, -arrowSize / 2, arrowSize, 0);
        p5.pop();

      }

      p5.draw = (p5) => {
        p5.background(240);

        let v0 = p5.createVector(0,0);
        let v1 = p5.createVector(p5.mouseX, p5.mouseY);
        this.drawArrow(v0, v1, 'red');

        let v2 = p5.createVector(-30, 20);
        this.drawArrow(v1, v2, 'blue');
        console.log(v2);

        let v3  = p5.add(v1,v2)
        console.log(v3)
      }



    });
  }


  draw = p5 => {
    p5.background(240);

    let v0 = p5.createVector(0,0);
    let v1 = p5.createVector(p5.mouseX, p5.mouseY);
    this.drawArrow(v0,v1,'red');

    let v2 = p5.createVector(-30, 20);
    this.drawArrow(v1, v2, 'blue');
    console.log(v2);

    //let v3 = p5.Vector.add(v1,v2);
    //console.log(v3);

  }
*/
class App extends Component {
  constructor(){
    super();
  }


  render() {
    return (
      <div>
        <h1> Vector Multiplication </h1>
        <P5Wrapper sketch={multiply}></P5Wrapper>
        <h1> Vector Substraction </h1>
        <P5Wrapper sketch={substract}></P5Wrapper>
        <h1> Vector addition </h1>
        <P5Wrapper sketch={sketch}></P5Wrapper>
      </div>
    );
  }
}

export default App;
