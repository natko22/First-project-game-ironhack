// Variables
let firstScreen = 0;
let gameScreen =1;
let lastScreen =2;
let bg;
let bg1, bg2, bg3, bg4;
let currentBg;

let startButton;
let ball = true;
let x = 0;
let y = 0;
let xspeed = 5;
let yspeed = 5;
let playBall;
let obstacles= [];
let elements = [];
let isGameOver = false;
let movingBall;
let obImg;
let distance;
let song;
let ballSound;

// Load images
function preload(){
  bg = loadImage('/images/sky.jpg')
  bg1 = loadImage('/images/winter.jpg');
  bg2 =loadImage('/images/autumn.jpg');
  bg3 = loadImage('/images/spring.jpg');
  bg4 = loadImage('/images/summer.jpg');
  ball = loadImage('/images/beach-ball (1).png');
  playBall = loadImage('/images/beach-ball copy.png');
  obImg = loadImage('/images/cactus.png');

  song = loadSound('/sound/magic-in-the-air-43177.mp3');
  ballSound = loadSound('/sound/mixkit-basketball-ball-hard-hit-2093.wav  ')
  elementImg1 = loadImage('/images/snow-flake.png')
  elementImg2 = loadImage('/images/leaf.png')
  elementImg3 = loadImage('/images/flower (1).png')
  elementImg4 = loadImage('/images/ice-cream.png');
  
}



// Set up function
function setup(){
  createCanvas(1750,960);
         // Start button
  startButton = createButton("Play game");
  startButton.position(0, 0,100,100);
  startButton.mousePressed(goToGameScreen);
  movingBall = new movePlayBall();
  elements.push(new Element1());
  elements.push(new Element2());
  elements.push(new Element3());
  elements.push(new Element4());
  

  
// song.play();


} //close Setup


//  Draw function
function draw(){
        // Background
  background(bg);
        // first-screen
  if (firstScreen === 0) {
    background(bg);
    firstBall();

  
  } else if (firstScreen === 1) {
    background(bg1);
    // image(playBall,playBallX,playBallY,80,80) ;


    if (frameCount % 60 === 0) { // Create a new obstacle every second
      let obstacle = new Obstacle();
      obstacles.push(obstacle);
    }
    for (let i = 0; i < obstacles.length; i++) {
      obstacles[i].show();
      obstacles[i].move();
      
    }  
          // elements
    for (let i = 0; i < elements.length; i++) {
      elements[i].show();
      elements[i].move();
      if (elements[i].x < -50) {
        elements[i].x = width;
      }
    }


  


         // detect collision
    let collided = false;
    for (let i = 0; i < obstacles.length; i++) {
    let obstacle = obstacles[i];
    let distance = dist(movingBall.x, movingBall.y, obstacle.x, obstacle.y);
    if (distance < movingBall.r / 2 + obstacle.size / 2) {
    collided = true;
        break;
      }
    }
    if (collided) {
    // console.log('collision');
    // gameover();  
    }

    
    drawBoard();
    movingBall.show();
    movingBall.move();
    } else if (firstScreen === 2) {
       // Draw last screen
  }

}
 // close Draw





  function goToGameScreen() {
    firstScreen = gameScreen;
    startButton.hide();
    let h1 = document.getElementById("title").style.display = "none";
    ball = false;
    song.stop();
    // setInterval(nextSeason,2000);
  }

  function gameover() {
    background(162, 78, 136);
    textAlign(CENTER);
    textStyle(ITALIC);
    textSize(80);
    text("Game Over", width/2, height/2);
    goToGameScreen.hide();
  }
  



  // function nextSeason(){
  //   currentSeason++;
  //   if(currentSeason >= seasons.length){
  //     currentSeason = 0;
  //   }
  // }

function firstBall(){
    // display ball image on first-screen
    x +=xspeed;
    y +=yspeed;
    if (x > width - ball.width || x < 0) {
      xspeed *= -1;
    }
    if (y > height - ball.height || y < 0) {
      yspeed *= -1;
    }
    image(ball, x, y);
}

























