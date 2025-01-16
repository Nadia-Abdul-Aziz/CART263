"use strict";

let size = 50;

let rect1X = 0;

let rect2X = 200;

let rect3X = 400;

let rect1Y = 200;

let rect2Y = 200;

let rect3Y = 200;




function setup() {
    console.log("go")
    createCanvas(400, 400);
}

function draw() {

    background(100);
    rectMode(CENTER);

    //all three rectangles
    drawRectangles();
    moveRect2();

};

function drawRectangles() {

    rect(rect1X, rect1Y, size);
    push();
    fill(mouseX, mouseY, 0);
    rect(rect2X, rect2Y, size);
    pop();

    rect(rect3X, rect3Y, size);

}

function mouseClicked() {

    rect1X += 50;

}

function keyPressed() {

    if (keyCode === 32) {
        rect3X -= 50;
    }
}

function moveRect2() {

    rect2Y += 10;

    if (rect2Y >= height) {
        rect2Y = 0
    }

}


