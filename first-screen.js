// Class for background
class Background {
  constructor(img) {
    this.img = img;
  }

  display() {
    image(this.img, 0, 0, width, height);
  }
}

// Class for ball
class Ball {
  constructor(img) {
    this.img = img;
    this.x = width/3;
    this.y = height/3;
    this.xspeed = 5;
    this.yspeed = 5;
  }
  display() {
    this.x += this.xspeed;
    this.y += this.yspeed;
    if (this.x > width - this.img.width || this.x < 0) {
      this.xspeed *= -1;
    }
    if (this.y > height - this.img.height || this.y < 0) {
      this.yspeed *= -1;
    }
    image(this.img, this.x, this.y);
  }
}
// Class for start button
class StartButton {
  constructor() {
    this.x = 800;
    this.y = 600;
    this.w = 200;
    this.h = 90;
    this.text = "Play Game";
  }

  display() {
    fill(255);
    rect(this.x, this.y, this.w, this.h);
    textAlign(CENTER);
    textSize(20);
    fill(0);
    text(this.text, this.x + this.w/2, this.y + this.h/2);
  }

  clicked() {
    if (mouseX > this.x && mouseX < this.x + this.w && mouseY > this.y && mouseY < this.y + this.h) {
      firstScreen = gameScreen;
      startButton.hide();
      setInterval(nextSeason,2000);
    }
  }

  hide() {
    this.x = -1000;
    this.y = -1000;
  }
}

// Class for game
class Game {
  constructor() {
    this.bg = new Background(loadImage('/images/sky.jpg'));
    this.ball = new Ball(loadImage('/images/beach-ball (1).png'));
    seasons[0] = loadImage('/images/winter.jpg');
    seasons[1] = loadImage('/images/autumn.jpg');
    seasons[2] = loadImage('/images/spring.jpg');
    seasons[3] = loadImage('/images/summer.jpg');
    this.startButton = new StartButton(0, 0, 100, 100, "Play game");
  }

  display() {
    // Background
    this.bg.display();

    // first-screen
    if (firstScreen === 0) {
      this.bg.display();
    } else if (firstScreen === 1) {
      image(seasons[currentSeason], 0, 0, width, height);
    } else if (firstScreen === 2) {
      // Game over screen
    }

    // Display ball image
    this.ball.display();

    // Display start button
    this.startButton.display();
  }
}







