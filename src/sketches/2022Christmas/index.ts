import p5 from "p5";

export const title = "2022Christmas";

const background = "#e9ecef";

export const sketch = (p: p5) => {
  const size = 80;
  let c: number;
  let colors: string[];
  p.setup = () => {
    p.createCanvas(500, 500);
    p.angleMode("degrees");
    c = 0;
    colors = switchColors(c);
  };

  p.draw = () => {
    p.background(background);

    const n = p.width / size;
    for (let i = 0; i < n; i++) {
      for (let j = 0; j < n; j++) {
        const margin = size / 4;
        const x = size * i + margin * i;
        const y = size * j + margin * j;

        p.push();
        p.translate(x, y);
        mainTile(p, size);
        p.pop();
      }
    }
  };

  const mainTile = (p: p5, size: number) => {
    const centerSquareSize = size / 5;
    const rectangleWidth = size / 6;
    const smallSquareSize = size / 8;
    p.rotate(45);
    p.noStroke();

    // 中央の四角
    p.fill(colors[1]);
    p.square(-size / 2, -size / 2, size);

    // 帯みたいなの
    p.fill(colors[0]);
    p.rect(-size / 2, -rectangleWidth / 2, size, rectangleWidth);
    p.rect(-rectangleWidth / 2, -size / 2, rectangleWidth, size);

    // 角の四角
    p.fill(colors[2]);
    p.rect(-size / 2, -size / 2, smallSquareSize);
    p.rect(size / 2 - smallSquareSize, -size / 2, smallSquareSize);
    p.rect(-size / 2, size / 2 - smallSquareSize, smallSquareSize);
    p.rect(
      size / 2 - smallSquareSize,
      size / 2 - smallSquareSize,
      smallSquareSize
    );

    p.fill(background);
    p.square(-centerSquareSize / 2, -centerSquareSize / 2, centerSquareSize);
  };

  p.mouseClicked = () => {
    c++;
    colors = switchColors(c);
  };

  const switchColors = (c: number) => {
    const colorMatrix = [
      ["#0b132b", "#01689A", "#53CCB0"],
      ["#226f54", "#bc4749", "#f4f0bb"],
    ];
    return colorMatrix[c % 2];
  };
};
