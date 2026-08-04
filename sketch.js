let images = [];

let current = 0;
let next = 1;

let currentX = 0;
let nextX = 800;

let moving = false;
let wait = 0;

const WAIT_TIME = 180; //約3秒
const SPEED = 20;

function preload(){

  images[0] = loadImage("images/o0640085314359939761-1.jpg");
  images[1] = loadImage("images/Liszt_1858.gif");
  images[2] = loadImage("images/ワーグナー.jpg");
  images[3] = loadImage("images/ショパン_写真.jpeg");
  images[4] = loadImage("images/Felix_Mendelssohn_(1833).jpg");
  images[5] = loadImage("images/ロベルト・シューマン.jpg");

}

function setup(){

  let canvas = createCanvas(800,450);
  canvas.parent("slideshow");

}

function draw(){

  background(255);

  image(images[current],currentX,0,width,height);

  if(moving){
    image(images[next],nextX,0,width,height);
  }

  wait++;

  if(wait > WAIT_TIME && !moving){
      moving = true;
  }

  if(moving){

      currentX -= SPEED;
      nextX -= SPEED;

      if(currentX <= -width){

          current = next;
          next = (next + 1) % images.length;

          currentX = 0;
          nextX = width;

          moving = false;
          wait = 0;
      }

  }

}