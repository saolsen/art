let canvas;

let draw_width_4x3 = 0;
let draw_height_4x3 = 0;
let draw_width_16x9 = 0;
let draw_height_16x9 = 0;
let draw_width_3x2 = 0;
let draw_height_3x2 = 0;

function setupViewport() {
    if (windowHeight * 4 / 3 >= windowWidth) {
        // scale the height
        draw_width_4x3 = windowWidth;
        draw_height_4x3 = windowWidth * 3 / 4;
    } else {
        // scale the width
        draw_width_4x3 = windowHeight * 4 / 3;
        draw_height_4x3 = windowHeight;
    }

    if (windowHeight * 16 / 9 >= windowWidth) {
        // scale the height
        draw_width_16x9 = windowWidth;
        draw_height_16x9 = windowWidth * 9 / 16;
    } else {
        // scale the width
        draw_width_16x9 = windowHeight * 16 / 9;
        draw_height_16x9 = windowHeight;
    }

    if (windowHeight * 3 / 2 >= windowWidth) {
        // scale the height
        draw_width_3x2 = windowWidth;
        draw_height_3x2 = windowWidth * 2 / 3;
    } else {
        // scale the width
        draw_width_3x2 = windowHeight * 3 / 2;
        draw_height_3x2 = windowHeight;
    }

    let max_width = max(draw_width_16x9, draw_width_4x3);
    let max_height = max(draw_height_16x9, draw_height_4x3);

    resizeCanvas(max_width, max_height);
}

function drawViewportGuide() {
    push();
    noFill();
    stroke(255, 0, 0);
    rect((width - draw_width_4x3) / 2,
        (height - draw_height_4x3) / 2,
        draw_width_4x3 - 1, draw_height_4x3 - 1);
    stroke(0, 255, 0);
    rect((width - draw_width_16x9) / 2,
        (height - draw_height_16x9) / 2,
        draw_width_16x9 - 1, draw_height_16x9 - 1);
    stroke(0, 255, 255);
    rect((width - draw_width_3x2) / 2,
        (height - draw_height_3x2) / 2,
        draw_width_3x2 - 1, draw_height_3x2 - 1);
    pop();
}

// Sketch Stuff
let tiles = [];

function setup() {
    createCanvas(10, 10);
    setupViewport();
    console.log("Hello");
}

function windowResized() {
    setupViewport();
}

function draw() {
    background(100);
    push();
    fill(255, 0, 0);
    rect(10, 10, 100, 100);
    pop();
    rect(200, 150, 100, 100);
    drawViewportGuide();
}