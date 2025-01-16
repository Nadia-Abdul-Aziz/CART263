"use strict";

let rect1C = {

    r: 200,
    g: 200,
    b: 0,

};

let rect2C = {

    r: 100,
    g: 100,
    b: 0,

};

let rect3C = {
    r: 300,
    g: 300,
    b: 0,
};


function setup() {
    console.log("go")
    createCanvas(400, 400);
}

function draw() {

    background(100);
    rectMode(CENTER);

    //all three rectangles
    drawRectangles();


};

function drawRectangles() {

    push();
    if (mouseX <= (width / 6) * 4 && mouseX >= (width / 6) * 2) {

        rect1C.r = 255;
        rect1C.g = 255;
        rect1C.b = 255;
    }
    else {
        rect1C.r = 200;
        rect1C.g = 200;
        rect1C.b = 0;
    }
    fill(rect1C.r, rect1C.g, rect1C.b);
    rect(width / 2, height / 2, width / 3, height);
    pop();

    push();
    if (mouseX <= (width / 6) * 2 && mouseX >= 0) {

        rect2C.r = 255;
        rect2C.g = 255;
        rect2C.b = 255;
    }
    else {
        rect2C.r = 100;
        rect2C.g = 100;
        rect2C.b = 0;
    }
    fill(rect2C.r, rect2C.g, rect2C.b);
    rect(width / 6, height / 2, width / 3, height);
    pop();

    push();
    if (mouseX <= width && mouseX >= (width / 6) * 4) {

        rect3C.r = 255;
        rect3C.g = 255;
        rect3C.b = 255;
    }
    else {
        rect3C.r = 300;
        rect3C.g = 300;
        rect3C.b = 0;
    }
    fill(rect3C.r, rect3C.g, rect3C.b);
    rect((width / 6) * 5, height / 2, width / 3, height);
    pop();
}

