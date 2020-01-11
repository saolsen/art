const parent_id = 'aspect-ratio';
const parent_element = document.getElementById(parent_id);
function windowResized() {
    resizeCanvas(parent_element.clientWidth, parent_element.clientHeight, true);
}

const grays = [
    "#f9f9f9",
    "#e6e6e6",
    "#cfcfcf",
    "#afafaf",
    "#8e8e8e",
    "#5f5f5f",
    "#414141",
    "#212121",
    "#0e0e11",
];

const colors = [
    "#ffcb8b",
    "#f1b380",
    "#e4976f",
    "#f9d2bd",
    "#e9b3a0",
    "#c58380",
    "#ffca31",
    "#ea9e09",
    "#de691d",
    "#b5944b",
    "#91672e",
    "#77321e",
    "#a03838",
    "#7f2433",
    "#5c1432",
    "#56380f",
    "#3b2406",
    "#280a03",
    "#f46247",
    "#e32121",
    "#bc1830",
    "#d72500",
    "#b40000",
    "#950229",
    "#ff5680",
    "#e43272",
    "#af1e67",
    "#d945c0",
    "#be17b5",
    "#9a11a5",
    "#ab59ff",
    "#7534de",
    "#411eaa",
    "#4cc9ff",
    "#1fa1ed",
    "#1b68cc",
    "#298dba",
    "#16519e",
    "#122980",
    "#e3f9ff",
    "#baeeff",
    "#97badf",
    "#a4ffed",
    "#45f7e1",
    "#0c9eb5",
    "#7affad",
    "#3ed86c",
    "#29b671",
    "#c6ef22",
    "#95e010",
    "#27af44",
    "#7caa15",
    "#52990d",
    "#0a741c",
    "#ffff00",
];

interface Entity {
    pos: p5.Vector,
    dir: p5.Vector,
    size: number,
    color: p5.Color
}

let entities: Entity[] = [];

function setup() {
    let canvas = createCanvas(100, 100, WEBGL);
    canvas.parent(parent_id);
    resizeCanvas(parent_element.clientWidth, parent_element.clientHeight, true);
}

function mouseClicked() {
    entities.push({
        pos: createVector(mouseX - width / 2, mouseY - height / 2),
        dir: createVector(10, 10),
        size: 0,
        color: color(random(colors))
    });
}

function draw() {
    let tile_size = width / 32.0;

    background(color(grays[grays.length - 1]));

    push();
    for (let i = 0; i < entities.length; i++) {
        push();
        let entity = entities[i];
        entity.size += 1;
        fill(entity.color);
        rotateZ(entity.size / 100);
        rect(entity.pos.x - entity.size / 2, entity.pos.y - entity.size / 2, entity.size, entity.size);
        if (entity.size > 500) {
            entities.splice(i, 1);
            i--;
        }
        pop();
    }
    pop();
}