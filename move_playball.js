class movePlayBall {
  constructor(){
    this.r =80;
    this.x = 50;
    this.y = (boardY - this.r)/2;
    this.vy = 0;
    this.gravity = 3;
  }

  jumb(){
    if (this.y == boardY -this.r){
      this.vy = -35;
    } 
  }


move(){
  this.y += this.vy;
  this.vy += this.gravity;
  this.y = constrain(this.y, 0, boardY - this.r);




  }

show(){
  image(playBall,this.x,this.y,this.r,this.r)
}}


  function keyPressed(){
  if (keyCode === 32){
  movingBall.jumb();
  }
  }