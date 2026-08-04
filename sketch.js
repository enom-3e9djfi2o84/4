const slideshowSketch = (p) => {

  let images = [];
  let current = 0;
  let next = 1;
  let currentX = 0;
  let nextX;
  let moving = false;
  let wait = 0;
  const WAIT_TIME = 180; 
  const SPEED = 20;

  
  const CANVAS_W = 350;
  const CANVAS_H = 500;

  p.preload = function () {
    images[0] = p.loadImage("images/o0640085314359939761-1.jpg");
    images[1] = p.loadImage("images/Liszt_1858.gif");
    images[2] = p.loadImage("images/ワーグナー.jpg");
    images[3] = p.loadImage("images/ショパン_写真.jpeg");
    images[4] = p.loadImage("images/Felix_Mendelssohn_(1833).jpg");
    images[5] = p.loadImage("images/ロベルト・シューマン.jpg");
  };

  p.setup = function () {
    let canvas = p.createCanvas(CANVAS_W, CANVAS_H);
    canvas.parent("slideshow");
    nextX = CANVAS_W;
  };

  
  function drawImageCover(img, x, y, w, h) {
    const imgRatio = img.width / img.height;
    const boxRatio = w / h;

    let sx, sy, sw, sh;

    if (imgRatio > boxRatio) {
    
      sh = img.height;
      sw = sh * boxRatio;
      sx = (img.width - sw) / 2;
      sy = 0;
    } else {
      
      sw = img.width;
      sh = sw / boxRatio;
      sx = 0;
      sy = (img.height - sh) / 2;
    }

    p.image(img, x, y, w, h, sx, sy, sw, sh);
  }

  p.draw = function () {
    p.background(255);

    drawImageCover(images[current], currentX, 0, p.width, p.height);

    if (moving) {
      drawImageCover(images[next], nextX, 0, p.width, p.height);
    }

    wait++;

    if (wait > WAIT_TIME && !moving) {
      moving = true;
    }

    if (moving) {
      currentX -= SPEED;
      nextX -= SPEED;

      if (currentX <= -p.width) {
        current = next;
        next = (next + 1) % images.length;

        currentX = 0;
        nextX = p.width;

        moving = false;
        wait = 0;
      }
    }
  };
};

new p5(slideshowSketch, "slideshow");