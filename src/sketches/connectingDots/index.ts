import p5 from "p5";

export const title = "connectingDots";

export const sketch = (p: p5): void => {
  const particles: ParticleType[] = [];
  const backgroundColor = "#F1FAEE";
  let canvasWidth: number;
  let time: number;
  let numParticles: number;
  let distanceRange: number;
  p.setup = () => {
    canvasWidth = p.min(p.windowWidth, 768);
    numParticles = p.min(p.windowWidth / 10, 50);
    distanceRange = p.min(p.windowWidth / 10, 50);
    p.createCanvas(canvasWidth, canvasWidth * 0.5);
    p.background(backgroundColor);
    time = p.random(0, 255);

    for (let i = 0; i < numParticles; i += 1) {
      const particle = new Particle(
        p,
        p.random(0, p.width),
        p.random(0, p.height),
        p.random(-1, 1),
        p.random(-1, 1)
      );
      particles.push(particle);
    }
  };

  p.draw = () => {
    p.colorMode(p.RGB);
    p.background(backgroundColor);

    p.colorMode(p.HSB, 360, 100, 100, 1);
    time += 1;
    if (time > 360) time = 0;

    for (let i = 0; i < numParticles - 1; i += 1) {
      particles[i].update(p.width, p.height);
      for (let j = 0; j < numParticles - 1; j += 1) {
        if (
          i !== j &&
          p.dist(
            particles[i].position.x,
            particles[i].position.y,
            particles[j].position.x,
            particles[j].position.y
          ) < distanceRange
        ) {
          p.noStroke();
          p.fill(time, 70, 70, 0.7);
          p.circle(
            particles[i].position.x,
            particles[i].position.y,
            particles[i].size
          );
          p.strokeWeight(1);
          p.stroke(time, 70, 70, 0.7);
          p.line(
            particles[i].position.x,
            particles[i].position.y,
            particles[j].position.x,
            particles[j].position.y
          );
        }
      }
    }
  };
};

export type ParticleType = {
  position: p5.Vector;
  velocity: p5.Vector;
  size: number;
  update: (width: number, height: number) => void;
};

export class Particle {
  position: p5.Vector;
  velocity: p5.Vector;
  size: number;
  constructor(p: p5, x: number, y: number, velX: number, velY: number) {
    this.position = p.createVector(x, y);
    this.velocity = p.createVector(velX, velY);
    this.position.x = x;
    this.position.y = y;
    this.size = 8;
  }

  update(width: number, height: number): void {
    this.position.add(this.velocity);
    if (this.position.x < 0 || this.position.x > width) this.velocity.x *= -1;
    if (this.position.y < 0 || this.position.y > height) this.velocity.y *= -1;
  }
}