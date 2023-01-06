import p5 from "p5";

export const title = "2023NewYear";

const navy = "#D9563A";
const latte = "#FCFFFE";
const numTile = 10;
let len: number;

export const sketch = (p: p5) => {
  p.setup = () => {
    p.loadFont("Menlo");
    p.createCanvas(600, 600);
    p.rectMode(p.CENTER);
    len = p.width / numTile;
    p.frameRate(30);
  };

  const art1 = () => {
    p.background(latte);
    p.fill(navy);
    const rad = p.map(p.frameCount % 90, 0, 89, 0, p.PI / 2);
    for (let i = 0; i < numTile + 1; i += 1) {
      for (let j = 0; j < numTile + 1; j += 1) {
        if ((i + j) % 2 === 1) {
          p.noStroke();
          p.translate(len * i, len * j);
          p.rotate(rad);
          p.rect(0, 0, len, len);
          p.resetMatrix();
        }
      }
    }
  };

  const art2 = () => {
    p.background(navy);
    p.fill(latte);
    const rad = p.map(p.frameCount % 90, 0, 89, 0, p.PI / 2);
    for (let i = 0; i < numTile + 1; i += 1) {
      for (let j = 0; j < numTile + 1; j += 1) {
        if ((i + j) % 2 === 0) {
          p.noStroke();
          p.translate(len * i, len * j);
          p.rotate(rad);
          p.rect(0, 0, len, len);
          p.resetMatrix();
        }
      }
    }
  };

  p.draw = () => {
    if (p.frameCount % 180 < 90) art1();
    else art2();

    p.fill(latte);
    p.rect(p.width / 2, p.height / 2, 600, 300);

    p.fill("#363736");
    p.textSize(40);
    p.push();
    p.translate(p.width / 2, p.height / 2);
  };
};
