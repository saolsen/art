interface Entity {
    name: string,
    cats: number,
}

let foos: Entity[];

function setup() {
    let canvas = createCanvas(100, 100);
    canvas.parent('container');
    const parent = document.getElementById('container');
    resizeCanvas(parent.clientWidth, parent.clientHeight, true);
    foos = [
        { name: "steve", cats: 7 },
        { name: "james", cats: 100 }
    ];
    console.log(`Number of cats in foos 0 and 1: ${foos[0].cats + foos[1].cats}`);
}

function windowResized() {
    const parent = document.getElementById('container');
    resizeCanvas(parent.clientWidth, parent.clientHeight, true);
}

function draw() {
    let tile_size = width / 32.0;
    background(100);
    push();
    fill(255, 0, 0);
    rect(10, 10, 100, 100);
    pop();
    rect(200, 150, 100, 100);
}