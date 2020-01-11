let tiles = [];

function setup() {
    // Wait then, is innerWidth, innerHeight wrong?
    let canvas = createCanvas(100, 100);
    canvas.parent('aspect-ratio');
    const parent = document.getElementById('aspect-ratio');
    resizeCanvas(parent.clientWidth, parent.clientHeight, true);
}

function windowResized() {
    // @TODO: Figure out if I need to do something about dpi.
    const parent = document.getElementById('aspect-ratio');
    resizeCanvas(parent.clientWidth, parent.clientHeight, true);
}

function draw() {
    let tile_size = width / 32.0;
    // We're assuming we're 16x9
    //background(100);
    push();
    fill(130, 255, 42);
    text("Hello Cuber!", width / 2 - 30, height / 2);
    pop();
    push();
    fill(10, 25, 133);
    rect(0, 0, tile_size, tile_size);
    rect(width - tile_size, 0, tile_size, tile_size);
    rect(0, height - tile_size, tile_size, tile_size);
    rect(width - tile_size, height - tile_size, tile_size, tile_size);
    rect(0, 0, tile_size, tile_size);
    rect(0, 0, tile_size, tile_size);
    pop();
}