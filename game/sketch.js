let speechb1,speechbsharp;
let charac, sprL, sprR, sprU, sprD;
let splashbg, level1beg, level1end;
let stage = 0;
let p;
let speed = 4;
let stop = 0; // Controls speech progression
let score = 0;
let name = "";

let shouldEnter = true;

let font;

// bubble mini game
let atkBubbles = [];
let shotTime = 300;
let timer = 100;
let x = [];
let bribeChoices = [
  "*cough coug*",
  "*holds out hand*",
  "Might need some \nextra motivation",
  "A gift will be nice",
  "Diwali is coming...",
];

let coolDown = 0;

//driving test mini game
let car;
let carImg;
let obstacles = [];
let obstacleImg;
let ground;
let gameStarted = false;
let introTextVisible = true;
let bgImg;

//form signer minigame
let f;
let form;
let sign;

function preload() {
  splashbg = loadImage("bgs/splash.gif");
  level1beg = loadImage("bgs/level1(beg).jpg");
  bg_level2 = loadImage("bgs/level2_bg.jpg");
  boss = loadImage("assets/boss.gif");
  boss2 = loadImage("assets/boss2_1.png");
  let activeboss = boss;
  level1end = loadImage("bgs/level1(end).jpg");
  
  charac = loadImage("assets/charac.gif");
  sprL = loadImage("assets/sprL.gif");
  sprR = loadImage("assets/sprR.gif");
  sprD = loadImage("assets/sprD.gif");
  
  speechb1 = loadImage("assets/speechbubble1.png");
  speechbsharp = loadImage("assets/speechbubble2.png");
  level3bg = loadImage("bgs/level3.jpg");
  level3end = loadImage("bgs/level3end.jpg");
  obstacleImg = loadImage("assets/cow.png");
  carImg = loadImage("assets/car.png");
  bgImg4 = loadImage("bgs/4bgImg.gif");
  form = loadImage("assets/form.png");
  formsigned = loadImage("assets/formsigned.png");
  sign = loadImage("assets/sign.png");
  level5bg = loadImage("bgs/level5bg.jpg");
  level5bgend = loadImage("bgs/level5bgend.jpg");
  finalbg = loadImage("bgs/Finalbg.gif");
  bgm = loadSound("sound/bgm.mp3");
  winSound = loadSound("sound/winsound.mp3");

  font = loadFont("departure.otf");
}

function setup() {
  createCanvas(500, 500);
  p = new Person(100, 300, charac);
  car = new Car();
  f = new Form(3);
  bgm.play();

  textFont(font);
  frameRate(50);
}

function draw() {
  clear();

  if (stage == 0) {
    splash();
  } else if (stage == 1) {
    level1();
  }
  if (stage == 2) {
    level2();
  }
  if (stage == 3) {
    level3();
  }
  if (stage == 4) {
    level4();
  }
  if (stage == 5) {
    level5();
  }
  if (stage == 6) {
    level6();
  }
}

function splash() {
  image(splashbg, 0, 0, width, height);
  textSize(30);
  fill(255);
  text("click to start!", 100, 420);
  fill(0);
  textSize(20);
}
/////////////////////////////////lobbby1
function level1() {
  image(level1beg, 0, 0, width, height);
  p.show();
  p.move();

  textSize(15);
  text("arrow keys to move", 150, 480);
  textSize(20);

  if (dist(p.x + 60, p.y + 35, 250, 150) < 50) {
    if (stop < 1) {
      stop = 1;
    }
    // Set stop = 1 only once
  } else {
    textSize(15);
    text("arrow keys to move", 150, 480);
    textSize(20);
  }

  if (stop === 1) {
    let bubble1 = new Speech(
      "What do you need?\n Driver's license renewal?\nokay let me see your form here"
    );
    bubble1.show();
  }

  if (stop === 2) {
    let bubble2 = new Speech(
      "My son Ravi is the same age\nas you. What do you do? ...artist?\noh..he's an engineer...thank god..."
    );
    bubble2.show();
  }
  if (stop === 3) {
    let bubble3 = new Speech(
      "\nI mean if you want this urgently\n then toh you'll have to..."
    );
    bubble3.show();
  }

  if (stop === 4) {
    p.x = 0;
    p.y = 0;
    stop = 0;
    stage = 2;
  }

  if (stop === 5) {
    image(level1end, 0, 0, width, height);
    p.show();
    // p.x = 80;
    // p.y = 190;
    let bubble4 = new Speech("\nUgh, fine. \n Go to the right.");
    bubble4.show();
    p.move();
    if (p.x >= 400) {
      stage = 3;
      p.x = 50;
      p.y = 250;
      stop = 0;
    }
  }
  if (stop === 6) {
    image(level1end, 0, 0, width, height);
    shouldEnter = false;
    p.show();
    p.move();
    if (p.x >= 400) {
      stage = 3;
      p.x = 150;
      p.y = 250;
      stop = 0;
      shouldEnter = false;
    }
  }
  if (stop === 7) {
    image(level1beg, 0, 0, 500, 500);
    shouldEnter = true;
    let bubble5 = new Speech("\nWhat are you back here for?");
    bubble5.x = 250;
    p.x = 80;
    p.y = 190;
    p.show();
    bubble5.show();
  }
  if (stop === 8) {
    image(level1beg, 0, 0, 500, 500);
    let bubble6 = new Speech("\nhmm so you re-gave\nyour driver's test?");
    bubble6.x = 250;
    p.show();
    bubble6.show();
  }
  if (stop === 9) {
    image(level1beg, 0, 0, 500, 500);
    let bubble7 = new Speech("\nand you signed..\nALL the forms?");
    bubble7.x = 250;
    p.show();
    bubble7.show();
  }

  if (stop === 10) {
    image(level1beg, 0, 0, 500, 500);
    let bubble8 = new Speech(
      "\nMm. Ok, I'll sign off on your license...\n if you can remember my\nlovely son's name."
    );
    bubble8.x = 150;
    bubble8.y = 320;
    p.show();
    bubble8.show();
  }

  if (stop === 11 || stop === 12) {
    textSize(30);
    if (name == "") {
      name = window.prompt("What was her son's name (Case sensitive)?").toLowerCase();
    } else {
      if (name === "ravi") {
        image(finalbg, 0, 0, 500, 500);
        stop = 12;
        textSize(18);
        fill(255);
        text("Refresh to restart", 100, 300);
        textSize(20);
        fill(0);
        if(stop===11){
         winSound.play();
        }
      } else {
        text("WRONG!(It's Ravi)", 200, 300, 255, 0, 0, 0);
        name = window.prompt("What was her son's name? (It's Ravi)").toLowerCase;
      }
    }
  }
}

/////////////////////////////////mini game- dodge
function level2() {
  image(bg_level2, 0, 0, width, height);
  textSize(18);
  fill(0);
  text("Avoid the bribe requests! \n You're too broke", 100, 40);
  fill(255, 255, 255, 64);
  textSize(15);
  text("arrow keys to move", 150, 480);
  textSize(200);
  text(score, 100, 250);

  fill(0);
  textSize(24);

  if (atkBubbles.length < 15 && timer % 100 === 0) {
    coolDown = frameCount;
    let bribeMessage = bribeChoices[floor(random(bribeChoices.length))]; // Pick a message once
    atkBubbles.push([width, p.y + 100, bribeMessage]); // Store the message in the bubble array

    print(atkBubbles);
  }

  // if(frameCount < coolDown + 30 ){
  //   activeboss = boss;
  // }else{
  //   activeBoss = boss2;
  // }

  timer++;

  for (let i = 0; i < atkBubbles.length; i++) {
    let bubble = atkBubbles[i];
    //     fill(255, 0, 0);
    //     ellipse(bubble[0], bubble[1], 50, 50); // Draw the bubble
    //     fill(255);
    //     textSize(12);
    //     textAlign(CENTER, CENTER);
    //     text("bribe", bubble[0], bubble[1]); // Display the stored message

    //     print(bubble[0], bubble[1])

    image(speechbsharp, atkBubbles[i][0], atkBubbles[i][1], 200, 80);
    fill(0);
    textSize(12);
    text(atkBubbles[i][2], atkBubbles[i][0] + 30, atkBubbles[i][1] + 40);
    atkBubbles[i][0] -= 3;
  }

  image(boss, 50, -100, 800, 800);

  p.show();
  p.move();

  for (let i = 0; i < atkBubbles.length; i++) {
    let bullet = atkBubbles[i]; // Access the actual object
    if (dist(bullet[0] + 75, bullet[1] + 37, p.x + 60, p.y + 75) < 100) {
      score = 0;
      atkBubbles = [];
    }

    if (bullet[0] < -150) {
      score++;
      atkBubbles.splice(i, 1); // Remove bullet
      i--; // Adjust index because we removed an element
    }
  }
  if (score >= 3) {
    stage = 1;
    stop = 5;
  }
}

////////////////////////////////lobby2
function level3() {
  image(level3bg, 0, 0, 500, 500);
  shouldEnter = true;
  p.show();
  p.move();
  textSize(15);
  fill(0);
  text("arrow keys to move", 150, 480);
  textSize(20);
  let bubble3;

  if (p.x > 235) {
    if (stop < 1) stop = 1; // Set stop = 1 only once
  }

  if (stop === 1) {
    let bubble1 = new Speech(
      "What do you need?\nDriver's license renewal?\nOk let me see your form here."
    );
    bubble1.show();
  }
  if (stop === 2) {
    let bubble2 = new Speech("\nokay so for this...\nLUNCH TIME HOGAYA!");
    bubble2.show();
  }
  if (stop === 3) {
    bubble3 = new Speech(
      "Do one thing, \ngo give your driving test again,\nafter that I'll sign"
    );
    bubble3.show();
  }

  if (stop === 4) {
    p.x = 0;
    p.y = 0;
    stop = 0;
    score = 0;
    stage = 4;
    ground = height - 50;
    car.y = ground - car.height;
  }
  if (stop === 5) {
    image(level3end, 0, 0, width, height);
    p.show();
    let bubble4 = new Speech("Okay, go down to\nthe next office");
    bubble4.x = 200;
    noStroke();
    bubble4.show();
  }
  if (stop === 6) {
    image(level3end, 0, 0, width, height);
    shouldEnter = false;
    p.show();
    p.move();
    if (p.y + 50 >= 400) {
      stage = 5;
      p.x = width / 2;
      p.y = 100;
      stop = 0;
    }
  }
}

///////////////////////////////mini game- car
function level4() {
  clear();
  image(bgImg4, 0, 0);

  // Display intro text before game starts
  if (introTextVisible) {
    fill(255);
    stroke(0, 0, 0, 80);
    strokeWeight(13);
    textSize(24);
    textAlign(CENTER, CENTER);
    text(
      "Pass your driving test!\n Use SPACEBAR to jump",
      width / 2,
      height / 2
    );
    car.show();
  } else {
    // Game starts when the player jumps
    if(obstacles.length == 0){
      obstacles.push(new Obstacle());
    }
    car.show();
    car.update();
    text(score, 50, 100);

    // Generate obstacles
    if (frameCount % 90 === 0) {
      obstacles.push(new Obstacle());
    }

    // Show and move obstacles
    for (let i = obstacles.length - 2; i >= 0; i--) {
      obstacles[i].show();
      obstacles[i].move();

      // Check for collision
      if (car.hits(obstacles[i])) {
        console.log("Game Over");
        gameStarted = false;
        introTextVisible = true;
        obstacles = [];
        score = 0;
        car.y = ground - car.height;

        break;
      }

      // Remove obstacles that have gone off-screen
      if (obstacles[i].offScreen()) {
        obstacles.splice(i, 1);
        score++;
      }
      if (score >= 3) {
        stage = 3;
        stop = 5;
      }
    }
  }
}
////////////////////////////////lobby3
function level5() {
  image(level5bg, 0, 0, 500, 500);
  p.show();
  p.move();
  shouldEnter = true;

  if (p.y > 235) {
    if (stop < 1) stop = 1; // Set stop = 1 only once
  }

  if (stop === 1) {
    let bubble1 = new Speech("zzz", 0);
    bubble1.show();
  }

  if (stop === 2) {
    let bubble2 = new Speech("zzzzzz", 0);
    bubble2.show();
  }
  if (stop === 3) {
    let bubble3 = new Speech("mmhmm... sign these", 0);
    bubble3.x = 100;
    bubble3.show();
  }

  if (stop === 4) {
    stop = 0;
    score = 0;
    stage = 6;
  }

  if (stop === 5) {
    image(level5bgend, 0, 0, width, height);
    p.show();
    let bubble4 = new Speech(
      "Go the the office upstairs\n only that agent can help you",
      0
    );
    bubble4.x = 200;
    noStroke();
    bubble4.show();
    p.y = 300;
  }

  if (stop === 6) {
    image(level5bgend, 0, 0, width, height);
    shouldEnter = false;
    p.show();
    p.move();
    if (p.y + 50 <= 50) {
      stage = 1;
      p.x = width / 2;
      stop = 7;
    }
  }
}

///////////////////////////////mini game- forms
function level6() {
  shouldEnter = true;
  clear();
  background(255,204,0);
  if (score < 2) {
    fill(128);
    text("SIGN THE FORMS!\nPRESS ENTER TO SIGN!", width / 2, height / 2 - 20);
    f.show();
    f.update();

    noStroke();
    fill(0, 255, 0, 30);
    image(sign, 240, 327, 115, 50);

    fill(0);
    textSize(24);
    text(score, width - 40, 40);
  } else {
    shouldEnter = false;
    stop = 5;
    stage = 5;
  }
}

// Start game on mouse click
function mouseClicked() {
  if (stage == 0) {
    stage = 1;
  }
}

// Listen for ENTER key to advance dialogue
function keyPressed() {
  if (keyCode === ENTER && stop >= 1 && stop < 11 && shouldEnter) {
    stop++; // Move to the next dialogue
  }

  if (stage === 4) {
    if (keyCode === 32 && car.onGround()) {
      if (!introTextVisible) {
        car.jump();
      }
      gameStarted = true;
      introTextVisible = false;
    }
  }

  if (stage === 6 && keyCode == ENTER) {
    if (
      dist(300, f.y - 175, 297, 352) < 25 ||
      dist(300, f.y - 175 + 520, 297, 352) < 25
    ) {
      score++;
      f.signed++;
    } else {
      score = 0;
      f.y = -500;
      f.speed = 3;
    }
  }
}

class Person {
  constructor(x, y, img) {
    this.x = x;
    this.y = y;
    this.img = img;
  }

  show() {
    if (this.img) {
      image(this.img, this.x, this.y);
    }
  }

  move() {
    if (stop === 0 || stop === 6) {
      if (keyIsDown(UP_ARROW)){this.y -= speed;
                              this.img = charac;}
      if (keyIsDown(DOWN_ARROW)){this.y += speed;
                                this.img = sprD;}
      if (keyIsDown(LEFT_ARROW)){this.x -= speed;
                                this.img = sprL;}
      if (keyIsDown(RIGHT_ARROW)){this.x += speed;
                                  this.img = sprR;}
    }

    // Keep character inside canvas
    this.x = constrain(this.x, 0, 400);
    this.y = constrain(this.y, 0, 350);
  }
}

class Speech {
  constructor(dialogue, y = (height * 2) / 3) {
    this.dialogue = dialogue;
    this.y = y;
    this.x = 80;
  }

  show() {
    image(speechb1, 0, this.y, width, height / 3);
    fill(0);
    textSize(15);
    text("Press ENTER to continue", 150, 340);
    textSize(18);
    if (this.y < 100) {
      text(this.dialogue, this.x + 30, this.y + 80);
    } else {
      text(this.dialogue, this.x, this.y + 65);
    }
  }
}

class Car {
  constructor() {
    this.x = 50;
    this.y = ground - 20;
    this.gravity = 0.5;
    this.lift = -16;
    this.velocity = 0;
    this.width = 150;
    this.height = 120;
  }

  show() {
    image(carImg, this.x, this.y, this.width, this.height);
  }

  jump() {
    this.velocity = this.lift;
  }

  update() {
    this.velocity += this.gravity;
    this.y += this.velocity;

    // Prevent falling below ground
    if (this.y >= ground - this.height) {
      this.y = ground - this.height;
      this.velocity = 0;
    }
  }

  onGround() {
    return this.y === ground - this.height;
  }

  hits(obstacle) {
    return (
      this.x < obstacle.x + obstacle.width - 10 &&
      this.x + this.width - 10 > obstacle.x &&
      this.y < obstacle.y + obstacle.height &&
      this.y + this.height > obstacle.y
    );
  }
}

class Obstacle {
  constructor() {
    this.x = width;
    this.y = ground - 100;
    this.width = 80;
    this.height = 70;
    this.speed = 5;
  }

  show() {
    image(obstacleImg, this.x, this.y, this.width, this.height);
  }

  move() {
    this.x -= this.speed;
  }

  offScreen() {
    return this.x + this.width < 0;
  }
}

class Form {
  constructor(speed) {
    this.y = -500;
    this.speed = speed;
    this.signed = 0;
  }

  show() {
    if (this.signed == 1) {
      image(formsigned, 0, this.y);
      image(form, 0, this.y - 520);
    } else if (this.signed == 2) {
      image(formsigned, 0, this.y);
      image(formsigned, 0, this.y - 520);
    } else {
      image(form, 0, this.y);
      image(form, 0, this.y - 520);
    }
  }

  update() {
    this.y += this.speed;

    if (this.y > 1020) {
      this.y = -500;
      this.speed += 2;
      this.signed = 0;
    }

    if (dist(300, this.y - 175, 297, 392) < 20 && this.signed == 1) {
      this.y = -500;
      this.signed = 0;
      score = 0;
      this.speed = 3;
    }

    if (dist(300, this.y - 175 + 520, 297, 392) < 20 && this.signed == 0) {
      this.y = -500;
      this.signed = 0;
      score = 0;
      this.speed = 3;
    }
  }
}
