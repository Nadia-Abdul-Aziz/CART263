"use strict";


let posX;

let posY;

let size;

let r;

let g;

let b;

function setup() {
    console.log("go")
    createCanvas(400, 400);
}

function draw() {

    background(100);

    r = 255;
    g = 204;
    b = 0;
    fill(r, g, b);
    posX = 30;
    posY = 30;
    size = 40;
    ellipse(posX, posY, size);

    r -= 50;
    fill(r, g, b);
    posX += 60;
    posY += 60;
    size += 20;
    ellipse(posX, posY, size);


    r -= 50;
    fill(r, g, b);
    posX += 60;
    posY += 60;
    size += 20;
    ellipse(posX, posY, size);
}