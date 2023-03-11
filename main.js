// Variables
let firstScreen = 0;
let gameScreen =1;
let gameOverScreen = 2;
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
let playBallX = 20;
let playBallY= 20;
let playBallSpeed = 1;
// let playBallRight = false;
// let playBallLeft = false;
// let playBallUp = false;
// let playBallDown = false;
let obstacles= [];
let obstacle = null;
let obstacleSpeed = 3;


// Load images
function preload(){
  bg = loadImage('/images/sky.jpg')
  seasons[0] = loadImage('/images/winter.jpg');
  seasons[1] =loadImage('/images/autumn.jpg');
  seasons[2] = loadImage('/images/spring.jpg');
  seasons[3] = loadImage('/images/summer.jpg');
  ball = loadImage('/images/beach-ball (1).png');
  playBall = loadImage('/images/beach-ball.png')

}

// Set up function
function setup(){
  createCanvas(1750,960);
         // Start button
  startButton = createButton("Play game");
  startButton.position(0, 0,100,100);
  startButton.mousePressed(goToGameScreen);
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
    image(playBall,playBallX,playBallY,80,80) ;

  // create new obstacles at random intervals
  if (frameCount % 60 == 0) { 
    createObstacle();
  }

  // update obstacle positions
  moveObstacles();

  // draw obstacles
  for (let obstacle of obstacles) {
    rect(obstacle.x, obstacle.y, obstacle.width, obstacle.height);
    fill(255);
  }

    
    // movePlayBall();
    drawBoard();
    // keyPressed();
    } else if (firstScreen === 2) {
    lastScreen();
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


let boardX = 0;
let boardSpeed = 10;

function drawBoard() {
  noStroke;
  rect(boardX, 800 - 70, width, 70);
  fill(216,191,216);

}

function lastScreen(){
  background(255);
}




function movePlayBall() {
  playBallY += playBallSpeed 
  if (playBallY+80 >700){
    playBallSpeed = playBallSpeed *-1
  }else if (playBallY +80 < height-200){
    playBallSpeed = playBallSpeed +1
  }else{
    playBallY = playBallY -playBallSpeed
  }
  }


  function keyPressed(){
    
  }


  function createObstacle() {
    let obstacleWidth = 50; 
    let obstacleHeight = 50; 
    let obstacleX = width; 
    let obstacleY = 730 - obstacleHeight; 
  
    let obstacle = {
      x: obstacleX,
      y: obstacleY,
      width: obstacleWidth,
      height: obstacleHeight
    };
  
    obstacles.push(obstacle);
  }
  

  function moveObstacles() {
    for (let i = obstacles.length - 1; i >= 0; i--) {
      obstacles[i].x -= 3; 
  
      if (obstacles[i].x + obstacles[i].width < 0) {
        obstacles.splice(i, 1); 
      }
    }
  }
  


  















