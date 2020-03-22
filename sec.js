/// <reference path="node_modules/@types/p5/global.d.ts" />

// for red, green, and blue color values
var r, g, b;

var newStr = "Адвантиум";


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




function draw() {

    background(220);
    // image(adam, 70, 0);

    circle(1040, 640, 52);
    circle(795, 750, 335);
    circle(565, 625, 105);
    circle(450, 625, 70);
    circle(290, 720, 35);








    circle(710, 1230, 1200);
    textSize(24);
    text(newStr, 440, 700);

    //left
    circle(470, 205, 210);
    circle(270, 215, 150);
    circle(130, 160, 95);
    circle(620, 80, 120);



    //right
    circle(1240, 235, 325);
    circle(980, 125, 190);
    circle(1275, 470, 110);

    //end








}