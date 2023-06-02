import p5 from "p5";
import { sketch } from "../2022Christmas";

export const title = "20230429";

export const createdDate = "20230429";

export const sktch = (p: p5) => {
  p.setup = () => {
    p.createCanvas(600, 600);
    p.background("#ffffff");
    p.strokeWeight(50);
    p.noLoop();
  };

  p.draw = () => {
    for (let i = 0; i <= p.width; i += p.width / 8) {
      for (let j = 0; j <= p.height; j += p.height / 8) {
        line_polygon_2(i, j, p.int(p.random(20, 40)), p.int(p.random(3, 16)));
      }
    }
  };

  const line_polygon_2 = (
    x: number,
    y: number,
    size: number,
    point_num: number
  ) => {
    const cx: number[] = [];
    const cy: number[] = [];
    for (let i = 0; i < point_num; i++) {
      const theta = (p.TAU / point_num) * i;
      cx.push(0.5 * size * p.cos(theta));
      cy.push(0.5 * size * p.sin(theta));
    }

    p.push();
    p.translate(x, y);

    p.strokeWeight(p.int(p.random(size * 0.05, size * 0.75)));
    p.strokeCap(p.random([p.ROUND, p.SQUARE, p.PROJECT]));
    for (let i = 0; i < point_num; i++) {
      p.line(cx[i]!, cy[i]!, cx[(i + 1) % point_num]!, cy[(i + 1) % point_num]!);
    }

    p.strokeWeight(p.int(p.random(size * 0.05, size * 0.75)));
    p.strokeCap(p.random([p.ROUND, p.SQUARE, p.PROJECT]));
    for (let i = 0; i < point_num; i++) {
      p.line(cx[i]!, cy[i]!, 0, 0);
    }
    p.pop();
  };
};

export const sketchP = new p5(sketch);
