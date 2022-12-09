import p5 from "p5";
import { shuffle } from "../../util/shuffle";

export const title = "rotateCircle";

export const sketch = (p: p5) => {
  const size = 40;
  let count: number;

  p.setup = () => {
    p.createCanvas(800, 800);
    count = (p.width / size) * 2;
    p.noLoop();
  };

  p.draw = () => {
    p.background(220);
    circles(p, size, size, size);

    for (let row = 0; row < count; row++) {
      for (let column = 0; column < count; column++) {
        circles(p, row * size * 2, column * size * 2, size);
      }
    }
  };
  p.mouseClicked = () => {
    p.redraw();
  };
};

const circles = (p: p5, x: number, y: number, size: number) => {
  const colors = [
    ["#E63946", "#F1FAEE"],
    ["#A8DADC", "#457B9D"],
  ];
  const shuffledColors = shuffle<string>(colors.flat());

  [
    [shuffledColors[0], shuffledColors[1]],
    [shuffledColors[2], shuffledColors[3]],
  ].forEach((colorRow, rowIndex) => {
    colorRow.forEach((color, index) => {
      p.noStroke();
      p.fill(color);
      p.circle(x + rowIndex * size, y + index * size, size);
    });
  });
};
