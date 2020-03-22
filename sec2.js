/// <reference path="node_modules/@types/p5/global.d.ts" />

// for red, green, and blue color values
var r, g, b;

var newStr = "Адвантиум";
let p;
let stars = [];




function preload() {
    adam = loadImage('./12.jpg');
}


function setup() {
    createCanvas(window.innerWidth, window.innerHeight);

    // Pick colors randomly
    r = random(255);
    g = random(255);
    b = random(255);
}



class Star {



    constructor() {
        // this.x = random(0, width);
        // this.y = random(0, height);
        // this.z = random(0, width);
        stroke(255)
        this.x = mouseX;
        this.y = mouseY;
        this.vx = random(-1, 1);
        this.vy = random(-5, -1);

    }

    update() {
        this.x += this.vx;
        this.y += this.vy;
    }

    show() {
        fill(255, 0);
        ellipse(this.x, this.y, 16, 16);
    }
}



function draw() {

    background(0);
    p = new Star();
    stars.push(p);
    for (let i = 0; i < stars.length; i++) {
        stars[i].update();

        stars[i].show();
    }





}