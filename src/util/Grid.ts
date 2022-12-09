import p5 from "p5";

export class Grid {
  size: number;
  constructor(size: number) {
    this.size = size;
  }

  public draw(p: p5) {
    const count = p.width / this.size;
    for (let row = 0; row < count; row++) {
      for (let column = 0; column < count; column++) {
        p.square(row * this.size, column * this.size, this.size);
      }
    }
  }
}
