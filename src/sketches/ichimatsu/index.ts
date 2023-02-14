import p5 from "p5";

export const title = "ichimatsu";

const navy = "#457B9D";
const latte = "#F1FAEE";
const numTile = 10;
let len: number;

export const sketch = (p: p5) => {
  p.setup = () => {
    p.createCanvas(500, 500);
    p.rectMode(p.CENTER);
    len = p.width / numTile;
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
  };
};

export const sketchP = new p5(sketch);
