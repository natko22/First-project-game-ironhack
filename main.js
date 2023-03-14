// Variables
let firstScreen = 0;
let gameScreen = 1;
let lastScreen = 2;
let bg;
let bg1, bg2, bg3, bg4;
let generalBg;
let currentBg = generalBg;
let startButton;
let ball = true;
let x = 0;
let y = 0;
let xspeed = 5;
let yspeed = 5;
let playBall;
let obstacles = [];
let elements = [];
let movingBall;
let obImg;
let distance;
let song;
let ballSound;
let winterSound;
let isGameOver = false;
let gameOverSound;
let score = 0;
// Load images
function preload() {
  generalBg = loadImage("/images/ball-background.jpg");
  bg = loadImage("/images/sky.jpg");
  bg1 = loadImage("/images/winter.jpg");
  bg2 = loadImage("/images/autumn.jpg");
  bg3 = loadImage("/images/spring.jpg");
  bg4 = loadImage("/images/summer.jpg");
  ball = loadImage("/images/beach-ball (1).png");
  playBall = loadImage("/images/beach-ball copy.png");
  obImg = loadImage("/images/cactus.png");
  song = loadSound("/sound/magic-in-the-air-43177.mp3");
  ballSound = loadSound("/sound/mixkit-basketball-ball-hard-hit-2093.wav  ");
  gameOverSound = loadSound("/sound/mixkit-sad-game-over-trombone-471.wav");
  winterSound = loadSound("/sound/winter_sound.mp3");
  elementImg1 = loadImage("/images/snow-flake.png");
  elementImg2 = loadImage("/images/leaf.png");
  elementImg3 = loadImage("/images/flower (1).png");
  elementImg4 = loadImage("/images/ice-cream.png");
}

// Set up function
function setup() {
  createCanvas(1750, 960);
  // Start button
  startButton = createButton("Play game");
  startButton.position(0, 0, 100, 100);
  startButton.mousePressed(goToGameScreen);
  movingBall = new movePlayBall();
  elements.push(new Element1());
  elements.push(new Element2());
  elements.push(new Element3());
  elements.push(new Element4());

  // song.play();
} //close Setup

//  Draw function
function draw() {
  // Background
  background(bg);
  // first-screen
  if (firstScreen === 0) {
    background(bg);
    firstBall();
  } else if (firstScreen === 1) {
    goToGameScreen();

    if (frameCount % 150 === 0) {
      // Create a new obstacle every second
      let obstacle = new Obstacle();
      obstacles.push(obstacle);
    }
    for (let i = 0; i < obstacles.length; i++) {
      obstacles[i].show();
      obstacles[i].move();
    }
    // detect collision
    let collided = false;
    for (let i = 0; i < obstacles.length; i++) {
      let obstacle = obstacles[i];
      let distance = dist(movingBall.x, movingBall.y, obstacle.x, obstacle.y);
      if (distance < movingBall.r / 2 + obstacle.size / 2) {
        collided = true;
      }
    }
    if (collided) {
      // console.log('collision');
      // gameover();
    }

    // elements
    for (let i = 0; i < elements.length; i++) {
      elements[i].show();
      elements[i].move();
      if (elements[i].x < -50) {
        elements[i].x = width;
      }
    }

    // detect element collision
    let elementCollision = false;
    for (let i = 0; i < elements.length; i++) {
      let element = elements[i];
      let distance = dist(movingBall.x, movingBall.y, element.x, element.y);
      if (distance < movingBall.r / 2 + element.size / 2) {
        currentBg = bg2;
        elementCollision = true;
      }
    }
    if (elementCollision) {
      // console.log('collision');
      // background(bg2);
      // winterSound.play();
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
  background(bg1);
  firstScreen = gameScreen;
  startButton.hide();
  let h1 = (document.getElementById("title").style.display = "none");
  ball = false;
  song.stop();
}

function gameover() {
  background(162, 78, 136);
  textAlign(CENTER);
  textStyle(ITALIC);
  textSize(80);
  text("Game Over! Press enter to restart!", width / 2, height / 2);
  goToGameScreen.hide();
  isGameOver = true;
  gameOverSound.play();
}

function firstBall() {
  // display ball image on first-screen
  x += xspeed;
  y += yspeed;
  if (x > width - ball.width || x < 0) {
    xspeed *= -1;
  }
  if (y > height - ball.height || y < 0) {
    yspeed *= -1;
  }
  image(ball, x, y);
}

function restartGame() {
  isGameOver = false;
}

function keyPressed() {
  if (keyCode === "13" && isGameOver) {
    restartGame();
  }
}
