const notesSketch = (p) => {

  let notes = [];

  p.setup = function () {
    const container = document.getElementById("notes-canvas");
    let canvas = p.createCanvas(container.offsetWidth, container.offsetHeight);
    canvas.parent("notes-canvas");

    p.textSize(40);
    p.noStroke();
    p.fill(169, 130, 47, 130); // #a9822fの半透明版

    for (let i = 0; i < 5; i++) {
      notes.push({
        x: p.random(0, p.width),
        y: p.random(20, p.height - 20)
      });
    }
  };

  p.draw = function () {
    p.clear(); // background()ではなく透明にする

    for (let n of notes) {
      p.text("♪", n.x, n.y);
      n.x += 1;
      if (n.x > p.width) {
        n.x = -30;
      }
    }
  };
};

new p5(notesSketch, "notes-canvas");