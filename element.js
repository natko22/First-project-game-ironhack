class Element1{
  constructor(){
    this.x = width;
    this.y = 680;
    this.size =  50;
    this.speed = 4.7;
  }

  show() {
    image(elementImg1, this.x, this.y, this.size, this.size,90,50);
  }

  move() {
    this.x -= this.speed;
  }
}




class Element2{
  constructor(){
    this.x = width;
    this.y = 680;
    this.size =  50;
    this.speed = 3.8;


  }
  show() {
    image(elementImg2,this.x, this.y, this.size, this.size);
  }

  move() {
    this.x -= this.speed;
  }

}




class Element3{
  constructor(){
    this.x = width;
    this.y = 680;
    this.size =  50;
    this.speed = 3;


  }
  show() {
    image(elementImg3,this.x, this.y, this.size, this.size);
  }

  move() {
    this.x -= this.speed;
  }
}



class Element4{
  constructor(){
    this.x = width;
    this.y = 680;
    this.size =  50;
    this.speed = 4.3;

  }
  show() {
    image(elementImg4,this.x, this.y, this.size, this.size);
  }

  move() {
    this.x -= this.speed;
  }
}