var G = {};

function preload() {
  BGimg = loadImage('assets/bg.png');
}

function setup() {
  cnv = createCanvas(windowWidth, windowHeight);
  var x = (windowWidth - width) / 2;
  var y = (windowHeight - height) / 2;
  cnv.position(x, y);
}

function draw() {
  G.frameRateFactor = 60 / frameRate();
  clear();
  imageMode(CENTER);
  image(BGimg, width / 4, height / 4, BGimg.width / 4, BGimg.height / 4);
}
