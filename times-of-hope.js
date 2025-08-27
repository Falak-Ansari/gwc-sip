let girlCurator;
let player;
let homeBackground, museumBackground, gloomyBedroom, mapBackground, factoryBackground, MGBackground;
let enterButton;
let continueButton, goBackButton, restartButton;
let a1Button, a2Button;
let b1Button, b2Button, b3Button, b4Button, b5Button, b6Button;
let exhi1Button, exhi2Button, exhi3Button, exhi4Button;
let screen = 0;

function preload() {
  homeBackground = loadImage('assets/homeBackground.png')
  girlCurator = loadImage('assets/Girl Curator.png');
  museumBackground = loadImage('assets/darkMuseumBackground.jpg')
  gloomyBedroom = loadImage('assets/gloomyBedroom.jpg')  
  mapBackground = loadImage('assets/greyFloorboards.png')
  factoryBackground = loadImage('assets/bryantmayfactory.jpg')
  MGBackground = loadImage('assets/matchgirlsstrike.png')
}

function setup() {
  createCanvas(600, 355);
  frameRate(60);
  textAlign(CENTER, CENTER);
  noStroke();

  // Create buttons for all screens
  enterButton = new Sprite(width / 2, height / 2 + 100);
  a1Button = new Sprite(-200, -200);
  a2Button = new Sprite(-50, -50);
  continueButton = new Sprite(-200, -200);
  goBackButton = new Sprite(-200, -200);
  restartButton = new Sprite(-200, -200);
  b1Button = new Sprite(-200, -200);
  b2Button = new Sprite(-50, -50);
  b3Button = new Sprite(-200, -200);
  b4Button = new Sprite(-50, -50);
  b5Button = new Sprite(-200, -200);
  b6Button = new Sprite(-50, -50);
  
  // Exhibit buttons
  exhi1Button = new Sprite(-100, -100);
  exhi2Button = new Sprite(-150, -150);
  exhi3Button = new Sprite(-200, -200);
  exhi4Button = new Sprite(-250, -250);
}

function draw() {
  clear(); // Clear the canvas
  if (screen == 0) {
    showScreen0();
    if (enterButton.mouse.presses()) {
      screen = 1;
    }
  } else if (screen == 1) {
    showScreen1();
    if (a1Button.mouse.presses()) {
      screen = 3;
    } else if (a2Button.mouse.presses()) {
      screen = 2;
    }
  } else if (screen == 2) {
    showScreen2();
    movePlayer();
    checkPlayerOverlaps();
  } else if (screen == 3) {
    showScreen3();
  } else if (screen == 4) {
    showScreen4();
    if (goBackButton.mouse.presses()) {
      screen = 2;
      player.x = exhi1Button.pos.x;
      player.y = exhi1Button.pos.y + exhi1Button.h / 2 + player.h / 2;
    } else if (continueButton.mouse.presses()) {
      screen = 5;
    }
  } else if (screen == 5) {
    showScreen5();
    if (b1Button.mouse.presses()) {
      screen = 6;
    } else if (b2Button.mouse.presses()) {
      screen = 7;
    }
  } else if (screen == 6) {
    showScreen6();
    if (b3Button.mouse.presses()) {
      screen = 9;
    } else if (b4Button.mouse.presses()) {
      screen = 8;
    }
  } else if (screen == 7) {
    showScreen7();
    if (restartButton.mouse.presses()) {
      screen = 4;
    }
  } else if (screen == 8) {
    showScreen8();
    if (b5Button.mouse.presses()) {
      screen = 10;
    } else if (b6Button.mouse.presses()) {
      screen = 11;
    }
  } else if (screen == 9) {
    showScreen9();
    if (restartButton.mouse.presses()) {
      screen = 4;
    }
  } else if (screen == 10) {
    showScreen10();
  } else if (screen == 11) {
    showScreen11();
  }
  
  // Draw player if on screen 2
  if (screen == 2 && player) {
    player.draw();
  }
}

function showScreen0() {
  background(homeBackground);
  textSize(40);
  fill("#b8b39e");
  text("Times of Hope", width / 2, height / 2 - 100);
  enterButton.w = 100;
  enterButton.h = 50;
  enterButton.collider = "s";
  enterButton.rotation = 0;
  enterButton.color = "#b8b39e";
  enterButton.textSize = 15;
  enterButton.text = "Enter";
}

function showScreen1() {
  background(museumBackground);
  textSize(20);
  fill("#bdbcb5");
  text("Lia works as a curator at a museum and \nlife has been dire lately. The clock strikes 10, \nand it is time for the museum to close. \nBut maybe there might be something else here, \nwaiting for Lia tonight...", width / 2, height / 2 - 100);

  enterButton.pos = { x: -100, y: -100 };
  
  a1Button.pos = { x: width / 2 - 100, y: height / 2 + 100 };
  a1Button.w = 125;
  a1Button.h = 50;
  a1Button.collider = "s";
  a1Button.rotation = 0;
  a1Button.color = "#bdbcb5";
  a1Button.textSize = 13;
  a1Button.text = "Close the museum \nfor the night";

  a2Button.pos = { x: width / 2 + 100, y: height / 2 + 100 };
  a2Button.w = 125;
  a2Button.h = 50;
  a2Button.collider = "s";
  a2Button.rotation = 0;
  a2Button.color = "#bdbcb5";
  a2Button.textSize = 13;
  a2Button.text = "Stay and explore a \nlittle";
}

function showScreen2() {
  background(mapBackground);
  textSize(30);
  text("Map of Museum", width / 2, height / 2 - 120);

  // Exhibit 1
  exhi1Button.pos = { x: 120, y: 110 };
  exhi1Button.w = 120;
  exhi1Button.h = 70;
  exhi1Button.collider = "s";
  exhi1Button.rotation = 0;
  exhi1Button.color = "#63635c";
  exhi1Button.textSize = 13;
  exhi1Button.text = "The Matchstick \nGirls";
  exhi1Button.draw();

  exhi2Button.pos = { x: 440, y: 110 };
  exhi2Button.w = 120;
  exhi2Button.h = 70;
  exhi2Button.collider = "s";
  exhi2Button.rotation = 0;
  exhi2Button.color = "#63635c";
  exhi2Button.textSize = 13;
  exhi2Button.text = "The \nSuffragettes";
  exhi2Button.draw();

  exhi3Button.pos = { x: 120, y: 310 };
  exhi3Button.w = 120;
  exhi3Button.h = 70;
  exhi3Button.collider = "s";
  exhi3Button.rotation = 0;
  exhi3Button.color = "#63635c";
  exhi3Button.textSize = 13;
  exhi3Button.text = "Exhibit 3";
  exhi3Button.draw();

  exhi4Button.pos = { x: 440, y: 310 };
  exhi4Button.w = 120;
  exhi4Button.h = 70;
  exhi4Button.collider = "s";
  exhi4Button.rotation = 0;
  exhi4Button.color = "#63635c";
  exhi4Button.textSize = 13;
  exhi4Button.text = "Exhibit 4";
  exhi4Button.draw();

  // Player
  if (!player) {
    player = new Sprite(girlCurator, 50, 200, 'n');
    player.collider = "k";
    player.friction = 0;
  }

  // Draw player
  player.draw();

  // Hide other buttons
  a1Button.pos = { x: -100, y: -100 };
  a2Button.pos = { x: -150, y: -150 };
}

function showScreen3() {
  background(gloomyBedroom);
  textSize(20);
  fill("#858585");
  text("Lia goes home and returns to work. \nEverything is the same.", width / 2, height / 2 - 120);

  a1Button.pos = { x: -100, y: -100 };
  a2Button.pos = { x: -150, y: -150 };
}

function showScreen4() {
  background(factoryBackground);
  textSize(15);
  fill("#b5b5aa");
  text("You are Sarah Chapman, a young woman working in the Bryant and May \nmatch factory in London during the late 19th century. \nThe air is thick with the stench of phosphorus, and the flickering candlelight casts \nshadows on the faces of your fellow workers. Day after day, you and your friends endure \nlong hours in unsafe conditions, paid meager wages that barely cover \nyour living expenses. ", width / 2, height / 2 - 100 );
  fill("#f7f7e9");
  text("But change is brewing. You’ve heard whispers of a potential strike among the workers. \nMany are afraid to stand up, but the treatment you receive is unjust. You know that \nif you can rally the other women, you could fight for better conditions and fair pay.", width / 2, height / 2 + 50);

  // Position and configure the buttons
  goBackButton.pos = { x: width / 2 - 100, y: height / 2 + 125 };
  goBackButton.w = 100;
  goBackButton.h = 50;
  goBackButton.color = "#b5b5aa";
  goBackButton.collider = "s";
  goBackButton.rotation = 0;
  goBackButton.textSize = 13;
  goBackButton.text = "Go back";
  goBackButton.draw();
  
  continueButton.pos = { x: width / 2 + 100, y: height / 2 + 125 };
  continueButton.w = 100;
  continueButton.h = 50;
  continueButton.color = "#b5b5aa";
  continueButton.collider = "s";
  continueButton.rotation = 0;
  continueButton.textSize = 13;
  continueButton.text = "Continue";
  continueButton.draw();
}

function showScreen5() {
  background(factoryBackground);
  textSize(20);
  fill("#f7f7e9");
  text("As you ponder your next move, you realize \nyou have a choice: \n(1) Organise a collective walkout to protest the dismissals \n(2) Advocate for a petition to be sent to Management. ", width / 2, height / 2 - 50 );

  b1Button.pos = { x: width / 2 - 100, y: height / 2 + 130 };
  b1Button.w = 125;
  b1Button.h = 40;
  b1Button.collider = "s";
  b1Button.rotation = 0;
  b1Button.color = "#b5b5aa";
  b1Button.textSize = 15;
  b1Button.text = "Walkout";
  b1Button.draw();
  
  b2Button.pos = { x: width / 2 + 100, y: height / 2 + 130 };
  b2Button.w = 125;
  b2Button.h = 40;
  b2Button.collider = "s";
  b2Button.rotation = 0;
  b2Button.color = "#b5b5aa";
  b2Button.textSize = 15;
  b2Button.text = "Petition";
  b2Button.draw();
}

function showScreen6() {
  background(factoryBackground);
  textSize(15);
  fill("#f7f7e9");
  text("You decide to organise a collective walkout in response to the dismissals. \nThis immediate action shows the workers’ unity and determination, \nforcing management to take their grievances seriously. \nThe walkout disrupts production and attracts public attention, \nincreasing pressure on the company to negotiate. The strike gains momentum, \nleading to greater solidarity among the workers and the \ninvolvement of influential supporters like Annie Besant.", width / 2, height / 2 - 100);

  text("Annie Besant, a social reformer and journalist, offers to help by bringing \npublic attention to the matchgirls' cause, but relying on an \noutsider has its risks. Will you: \n(1) Decline, keeping the Strike among the workers \nand avoid outside involvement, or \n(2) Accept Annie Besant’s help and involve the media", width / 2, height / 2 + 50)

  b3Button.pos = { x: width / 2 - 100, y: height / 2 + 130 };
  b3Button.w = 125;
  b3Button.h = 40;
  b3Button.collider = "s";
  b3Button.rotation = 0;
  b3Button.color = "#b5b5aa";
  b3Button.textSize = 15;
  b3Button.text = "Decline";
  b3Button.draw();

  b4Button.pos = { x: width / 2 + 100, y: height / 2 + 130 };
  b4Button.w = 125;
  b4Button.h = 40;
  b4Button.collider = "s";
  b4Button.rotation = 0;
  b4Button.color = "#b5b5aa";
  b4Button.textSize = 15;
  b4Button.text = "Accept";
  b4Button.draw();
  
  // Move extra buttons off screen
  b1Button.pos = {x: -100, y: -100};
  b2Button.pos = {x: -150, y: -150};
}

function showScreen7() {
  background(factoryBackground);
  textSize(15);
  fill("#f7f7e9");
  text("You decide that the workers should write a petition to management, \ndemanding the reinstatement of the \ndismissed workers and better conditions. This cautious approach allows us to \nvoice our concerns without immediately risking their jobs. However, management \nignores the petition, and the workers' frustrations grow without any real progress. \nMorale drops, and the workers eventually return to their \ndangerous and poorly paid jobs without any improvements.", width / 2, height / 2 - 100);
  
  restartButton.pos = { x: width / 2, y: height / 2 + 125 };
  restartButton.w = 150;
  restartButton.h = 50;
  restartButton.color = "#b5b5aa";
  restartButton.collider = "s";
  restartButton.rotation = 0;
  restartButton.textSize = 13;
  restartButton.text = "Restart?";
  restartButton.draw();
  
  // Move extra buttons off screen
  b1Button.pos = {x: -100, y: -100};
  b2Button.pos = {x: -150, y: -150};
}

function showScreen8() {
  background(factoryBackground);
  textSize(15);
  fill("#f7f7e9");
  text("Sarah agrees to work with Annie Besant, allowing her to publicise \nthe strike and gather public support. This brings the issue into the national spotlight, \nputting enormous pressure on the company. Although it risks \nthe strike becoming more about Besant's agenda, the increased attention could lead to \ngreater success, resulting in significant changes in the factory conditions.", width / 2, height / 2 - 100);

  text("After several weeks of striking, management offers a compromise: \nthey’ll raise wages slightly and reduce the use of white phosphorus, but other \nkey demands, like the abolition of fines and improved working conditions, will not \nbe met. The workers are exhausted, and many are suffering financially. Your choices are: \n(1) Accept the compromise to end the strike, or \n(2) Reject the compromise and continue striking", width / 2, height / 2 + 50)

  b5Button.pos = { x: width / 2 - 100, y: height / 2 + 130 };
  b5Button.w = 125;
  b5Button.h = 40;
  b5Button.collider = "s";
  b5Button.rotation = 0;
  b5Button.color = "#b5b5aa";
  b5Button.textSize = 15;
  b5Button.text = "Accept";
  b5Button.draw();

  b6Button.pos = { x: width / 2 + 100, y: height / 2 + 130 };
  b6Button.w = 125;
  b6Button.h = 40;
  b6Button.collider = "s";
  b6Button.rotation = 0;
  b6Button.color = "#b5b5aa";
  b6Button.textSize = 15;
  b6Button.text = "Reject";
  b6Button.draw();

  // Move extra buttons off screen
  b3Button.pos = {x: -100, y: -100};
  b4Button.pos = {x: -150, y: -150};
}

function showScreen9() {
  background(factoryBackground);
  textSize(15);
  fill("#f7f7e9");
  text("You decide to keep the strike a grassroots effort, led entirely by the \nworkers themselves. This ensures that the decisions made reflect the will of the workers, \nbut it also means they have fewer resources and less public visibility. \nThe strike may struggle to gain momentum without the broader support - \nsupport that Besant could provide.", width / 2, height / 2 - 100);

  restartButton.pos = { x: width / 2, y: height / 2 + 125 };
  restartButton.w = 150;
  restartButton.h = 50;
  restartButton.color = "#b5b5aa";
  restartButton.collider = "s";
  restartButton.rotation = 0;
  restartButton.textSize = 13;
  restartButton.text = "Restart?";
  restartButton.draw();

  // Move extra buttons off screen
  b3Button.pos = {x: -100, y: -100};
  b4Button.pos = {x: -150, y: -150};
}

function showScreen10() {
  background(factoryBackground);
  textSize(15);
  fill("#f7f7e9");
  text("You argue that the workers should accept the compromise, \nreasoning that the small gains are better than nothing and that they can \ncontinue to push for more changes gradually from within. This decision could bring \nimmediate relief to the workers and prevent further financial hardship. \nHowever, it also risks losing the momentum of the strike, and \nmanagement might feel emboldened to resist future demands.", width / 2, height / 2 - 100);

  restartButton.pos = { x: width / 2, y: height / 2 + 125 };
  restartButton.w = 150;    
  restartButton.h = 50;
  restartButton.color = "#b5b5aa";
  restartButton.collider = "s";
  restartButton.rotation = 0;    
  restartButton.textSize = 13;
  restartButton.text = "Restart?";
  restartButton.draw();

  // Move extra buttons off screen
  b5Button.pos = {x: -100, y: -100};
  b6Button.pos = {x: -150, y: -150};
}

function showScreen11() {
  background(MGBackground);
  textSize(15);
  fill(255);
  text("You decide to reject the compromise, pushing the workers to \ncontinue the strike until all demands are met. This shows \nstrength and determination, and after enduring more hardship, the workers eventually \nachieve full victory, forcing the company to meet all their demands, \nincluding abolishing fines and improving working conditions.", width / 2, height / 2 + 100);

  // Move extra buttons off screen
  b5Button.pos = {x: -100, y: -100};
  b6Button.pos = {x: -150, y: -150};
}

function movePlayer() {
  if (screen == 2) {
    if (kb.pressing("left")) {
      player.vel.x = -3;
    } else if (kb.pressing("right")) {
      player.vel.x = 3;
    } else if (kb.pressing("up")) {
      player.vel.y = -3;
    } else if (kb.pressing("down")) {
      player.vel.y = 3;
    } else {
      player.vel.x = 0;
      player.vel.y = 0;
    }

    // Player cannot leave maze from y-axis
    if (player.y < 30) {
      player.y = 30;
    } else if (player.y > 325) {
      player.y = 325;
    }
    // Player cannot leave maze from x-axis
    if (player.x < 20) {
      player.x = 20;
    } else if (player.x > 575) {
      player.x = 575;
    }
  }
}


// Only for one exhibit right now - may continue later
function checkPlayerOverlaps() {
  if (screen == 2) { // Only check overlaps on screen 2
    // Check overlap with exhi1Button
    if (player.x > exhi1Button.x - exhi1Button.w / 2 &&
        player.x < exhi1Button.x + exhi1Button.w / 2 &&
        player.y > exhi1Button.y - exhi1Button.h / 2 &&
        player.y < exhi1Button.y + exhi1Button.h / 2) {
      screen = 4; // Move to the screen for Exhibit 1
      player.x = exhi1Button.pos.x;
      player.y = exhi1Button.pos.y + exhi1Button.h / 2 + player.h / 2;
    }
  }
}
