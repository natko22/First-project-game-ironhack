

class Obstacle {
  constructor() {
    this.x = width;
    this.y = 680;
    this.size =  50;
    this.speed = 2;
  }
  
  display() {
    rect(this.x, this.y, this.size);
  }
  
  move() {
    this.x -= this.speed;
  }


}

