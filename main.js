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
  createCanvas(1750,960)

  // Start button
  startButton = createButton("Play game");
  startButton.position(0, 0,100,100);
  startButton.mousePressed(goToGameScreen);

}


//  Draw function
function draw(){

  // Background
  background(bg);
  

  // first-screen
  if (firstScreen === 0) {
    background(bg);
  } else if (firstScreen === 1) {
    image(seasons[currentSeason],0,0,width,height)
    image(playBall,50,50,80,80) ;
  } else if (firstScreen === 2) {
    // text("Game over");
  }

  
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





//  // Display playBall image on gameScreen
//   if (firstScreen === gameScreen){
//   image(playBall)
// }

  

  function goToGameScreen() {
    firstScreen = gameScreen;
    startButton.hide();
    let h1 = document.getElementById("title").style.display = "none";
    ball = false;
    setInterval(nextSeason,2000);
  }

  // function nextSeason(){
  //   currentSeason++;
  //   if(currentSeason >= seasons.length){
  //     currentSeason = 0;
  //   }
  // }






  


