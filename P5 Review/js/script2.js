"use strict";


let posX = 30;

let posY = 30;

let size = 40;

let r = 255;

let g = 204;

let b = 0;

function setup() {
    console.log("go")
    createCanvas(400, 400);
    background(100);
    drawEllipse1();
    drawEllipse();
    drawEllipse();
}

function draw() {

}

function drawEllipse1() {

    fill(r, g, b);
    ellipse(posX, posY, size);
}
function drawEllipse() {

    posX += 60;
    posY += 60;
    size += 20;
    r -= 50;

    fill(r, g, b);
    ellipse(posX, posY, size);
}
