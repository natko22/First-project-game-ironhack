// Variables
let firstScreen = 0;
let gameScreen =1;
let lastScreen =2;
// let gameOverScreen = 2;
let seasons = [];
let currentSeason = 0;
let bg;
let startButton;
let ball = true;
let x = 0;
let y = 0;
let xspeed = 5;
let yspeed = 5;
let playBall;
// let playBallX = 20;
// let playBallY= 20;
// let playBallSpeed = 1;
let obstacles= [];
// let obstacle = null;
// let obstacleSpeed = 3;
let isGameOver = false;
let movingBall;
let obImg;


// Load images
function preload(){
  bg = loadImage('/images/sky.jpg')
  seasons[0] = loadImage('/images/winter.jpg');
  seasons[1] =loadImage('/images/autumn.jpg');
  seasons[2] = loadImage('/images/spring.jpg');
  seasons[3] = loadImage('/images/summer.jpg');
  ball = loadImage('/images/beach-ball (1).png');
  playBall = loadImage('/images/beach-ball.png');
  obImg = loadImage('/images/beach-ball (2).png');

}



// Set up function
function setup(){
  createCanvas(1750,960);
         // Start button
  startButton = createButton("Play game");
  startButton.position(0, 0,100,100);
  startButton.mousePressed(goToGameScreen);
  movingBall = new movePlayBall();

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
    background(seasons[currentSeason]);
    // image(playBall,playBallX,playBallY,80,80) ;


    if (frameCount % 60 === 0) { // Create a new obstacle every second
      let obstacle = new Obstacle();
      obstacles.push(obstacle);
    }

    for (let i = 0; i < obstacles.length; i++) {
      obstacles[i].display();
      obstacles[i].move();
    }    



    
    
    drawBoard();
    movingBall.show();
    movingBall.move();
    // keyPressed();
    } else if (firstScreen === 2) {
       // Draw last screen
      textSize(64);
      textAlign(CENTER, CENTER);
      text("Game Over", width / 2, height / 2);
    }

}
 // close Draw


  function goToGameScreen() {
    firstScreen = gameScreen;
    startButton.hide();
    let h1 = document.getElementById("title").style.display = "none";
    ball = false;
    // setInterval(nextSeason,2000);


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

























