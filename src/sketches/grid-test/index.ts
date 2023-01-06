import { shuffle } from "./../../util/shuffle";
import p5 from "p5";
import { makeIntRandom } from "../../util/randomUtils";

export const title = "grid-test";

export const sketch = (p: p5) => {
  const num = 6;
  const margin = 10;
  let size: number;
  let offset: number;
  let colors: string[];
  let shuffledColors: string[];
  p.setup = () => {
    p.createCanvas(600, 600);
    offset = p.width / 5;
    size = (p.width - offset * 2 - margin * (num - 1)) / num;
    p.noLoop();
    p.angleMode(p.DEGREES);

    colors = ["#E63946", "#F1FAEE", "#A8DADC", "#457B9D"];
    shuffledColors = shuffle(colors);
  };

  // TODO: ストロークを消す
  //TODO: 色をつける
  // TODO: 形をランダムにする
  // TODO: strokeとfillをランダムにする
  // TODO: 色をランダムにする
  // TODO: 層にする

  p.draw = () => {
    p.background(shuffledColors[0]);
    for (let layer = 0; layer < 3; layer++) {
      for (let row = 0; row < num; row++) {
        for (let column = 0; column < num; column++) {
          const x = (size + margin) * row + offset;
          const y = (size + margin) * column + offset;
          p.push();
          p.translate(x, y);
          const mode = makeIntRandom(4);
          const angle = makeIntRandom(4) * 90;
          p.rotate(angle);

          const isFill = makeIntRandom(2);
          const color = shuffledColors[makeIntRandom(3) + 1];
          if (isFill) {
            p.noStroke();
            p.fill(color);
          } else {
            p.stroke(color);
            p.strokeWeight(5);
            p.noFill();
          }

          const scale = p.map(layer, 0, 2, 1, 0.2);
          const scaledSize = size * scale;

          switch (mode) {
            case 0:
              p.square(-size / 2, -size / 2, size);
              p.square(-scaledSize / 2, -scaledSize / 2, scaledSize);
              break;
            case 1:
              p.circle(0, 0, size);
              p.circle(0, 0, scaledSize);
              break;
            case 2:
              p.triangle(
                -size / 2,
                size / 2,
                size / 2,
                -size / 2,
                size / 2,
                size / 2
              );
              p.triangle(
                -scaledSize / 2,
                scaledSize / 2,
                scaledSize / 2,
                -scaledSize / 2,
                scaledSize / 2,
                scaledSize / 2
              );
              break;
            case 3:
              p.arc(-size / 2, -size / 2, size * 2, size * 2, 0, 90);
              p.arc(
                -scaledSize / 2,
                -scaledSize / 2,
                scaledSize * 2,
                scaledSize * 2,
                0,
                90
              );
          }
          p.pop();
        }
      }
    }
  };

  p.mousePressed = () => {
    p.redraw();
  };
};
