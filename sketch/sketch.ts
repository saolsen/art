let tiles = [];

function setup() {
    // Wait then, is innerWidth, innerHeight wrong?
    let canvas = createCanvas(100, 100);
    canvas.parent('container');
    const parent = document.getElementById('container');
    resizeCanvas(parent.clientWidth, parent.clientHeight, true);
}

function windowResized() {
    // @TODO: Figure out if I need to do something about dpi.
    const parent = document.getElementById('container');
    resizeCanvas(parent.clientWidth, parent.clientHeight, true);
}

function draw() {


    let tile_size = width / 32.0;
    // We're assuming we're 16x9

    background(100);
    push();
    fill(255, 0, 0);
    rect(10, 10, 100, 100);
    pop();
    rect(200, 150, 100, 100);
}