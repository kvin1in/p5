/// <reference path="node_modules/@types/p5/global.d.ts" />

// for red, green, and blue color values

// var planet = {
//     x: 300,
//     y: 200,
// }

let planet1;
let planet2;
let planet3;
let planet4;
let planet5;
let planet6;
let planet7;
let planet8;
let planet9;
let planet10;
let planet11;
let planet12;



function setup() {
    createCanvas(window.innerWidth, window.innerHeight);
    planet1 = new Planet(1040, 640, 52);
    planet2 = new Planet(795, 750, 335);
    planet3 = new Planet(565, 625, 105);
    planet4 = new Planet(450, 625, 70);
    planet5 = new Planet(290, 720, 35);
    planet6 = new Planet(710, 1230, 1200);
    planet7 = new Planet(470, 205, 210);
    planet8 = new Planet(270, 215, 150);
    planet9 = new Planet(130, 160, 95);
    planet10 = new Planet(620, 80, 120);
    planet11 = new Planet(1240, 235, 325);
    planet12 = new Planet(980, 125, 190);
    planet13 = new Planet(1275, 470, 110);



}


function draw() {
    background(0);
    planet1.move();
    planet1.display();
    planet2.move();
    planet2.display();
    planet3.move();
    planet3.display();
    planet4.move();
    planet4.display();
    planet5.move();
    planet5.display();
    planet6.move();
    planet6.display();
    planet7.move();
    planet7.display();
    planet8.move();
    planet8.display();
    planet9.move();
    planet9.display();
    planet10.move();
    planet10.display();
    planet11.move();
    planet11.display();
    planet12.move();
    planet12.display();
    planet13.move();
    planet13.display();
}


class Planet {
    constructor(x, y, z) {
        this.x = x;
        this.y = y;
        this.z = z;
    }

    display() {
        stroke(255);
        strokeWeight(4);
        noFill();
        circle(this.x, this.y, this.z);
    }

    move() {
        this.x = this.x + random(-1, 1);
        this.y = this.y + random(-1, 1);
    }
}