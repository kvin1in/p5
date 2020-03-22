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



    constructor(x, y, z = 50) {
        // this.x = random(0, width);
        // this.y = random(0, height);
        // this.z = random(0, width);
        this.x = x;
        this.y = y;
        this.r = r;
        this.brightness = 0;

    }

    changeColor() {
        this.brightness = brightness;
    }


    // update() {
    //     this.x += this.vx;
    //     this.y += this.vy;
    // }

    show() {
        fill(255, 0);
        ellipse(this.x, this.y, 16, 16);
    }
}



function draw() {

    // background(0);
    // p = new Star();
    // stars.push(p);
    // for (let i = 0; i < stars.length; i++) {
    //     stars[i].update();

    //     stars[i].show();
    // }

    var x = map(cos(mouseX), -1, 1, 0, width);
    var y = map(sin(mouseX), -1, 1, 0, height);
    line(200, 200, x, y);
    ellipse(x, y, 20, 20);
    console.log(mouseX)



}