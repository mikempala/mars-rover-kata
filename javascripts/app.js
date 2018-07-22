// Coded by Miguel Tellez @mikempala - Ironhacker Mexico - July 2018

var rover = {
  direction: "N",
  x: 0,
  y: 0,
  travelLog: ["Rover's movement log: [0,0]"]
};

// Obstacle generator
var obstacle = [];
for (var n = 0; n <= 4; ++n) {
  obstacle[n] = {
    x: Math.floor(Math.random() * 9) + 1,
    y: Math.floor(Math.random() * 9) + 1
  };
}

function turnLeft(rover) {
  switch (rover.direction) {
    case "N":
      rover.direction = "W";
      break;
    case "W":
      rover.direction = "S";
      break;
    case "S":
      rover.direction = "E";
      break;
    case "E":
      rover.direction = "N";
      break;
  }
  console.log("Current direction: " + rover.direction);
}

function turnRight(rover) {
  switch (rover.direction) {
    case "N":
      rover.direction = "E";
      break;
    case "E":
      rover.direction = "S";
      break;
    case "S":
      rover.direction = "W";
      break;
    case "W":
      rover.direction = "N";
      break;
  }
  console.log("Current direction: " + rover.direction);
}

function moveForward(rover) {
  switch (rover.direction) {
    case "N":
      rover.y--;
      break;
    case "W":
      rover.x--;
      break;
    case "S":
      rover.y++;
      break;
    case "E":
      rover.x++;
      break;
  }
  for (var n = 0; n <= 4; n++) {
    if (rover.x === obstacle[n].x && rover.y === obstacle[n].y) {
      console.log(
        "Ouch. Obstacle found. Bounced back to the previous positon."
      );
      if (rover.x === obstacle[n].x && rover.direction === "W") rover.x++;
      if (rover.y === obstacle[n].y && rover.direction === "E") rover.x--;
      if (rover.x === obstacle[n].x && rover.direction === "S") rover.y--;
      if (rover.y === obstacle[n].y && rover.direction === "N") rover.y++;
    }
  }
  if (rover.x === -1 || rover.x === 10 || rover.y === -1 || rover.y === 10) {
    console.log("Off-limits. Movement not registered within log.");
    if (rover.x === -1) rover.x++;
    if (rover.x === 10) rover.x--;
    if (rover.y === -1) rover.y++;
    if (rover.y === 10) rover.y--;
  } else {
    console.log("New position: " + "[" + rover.x + "," + rover.y + "]");
    rover.travelLog.push("[" + rover.x + "," + rover.y + "]");
  }
}
function moveBackwards(rover) {
  switch (rover.direction) {
    case "N":
      rover.y++;
      break;
    case "W":
      rover.x++;
      break;
    case "S":
      rover.y--;
      break;
    case "E":
      rover.x--;
      break;
  }
  for (var n = 0; n <= 4; n++) {
    if (rover.x === obstacle[n].x && rover.y === obstacle[n].y) {
      console.log(
        "Ouch. Obstacle found. Bounced back to the previous positon."
      );
      if (rover.x === obstacle[n].x && rover.direction === "W") rover.x--;
      if (rover.y === obstacle[n].y && rover.direction === "E") rover.x++;
      if (rover.x === obstacle[n].x && rover.direction === "S") rover.y++;
      if (rover.y === obstacle[n].y && rover.direction === "N") rover.y--;
    }
  }
  if (rover.x === -1 || rover.x === 10 || rover.y === -1 || rover.y === 10) {
    console.log(
      "Off-limits, returning to previous position. Movement not registered within log."
    );
    if (rover.x === -1) rover.x++;
    if (rover.x === 10) rover.x--;
    if (rover.y === -1) rover.y++;
    if (rover.y === 10) rover.y--;
  } else {
    console.log("New position: " + "[" + rover.x + "," + rover.y + "]");
    rover.travelLog.push("[" + rover.x + "," + rover.y + "]");
  }
}

function executeCommands(commands) {
  for (var i = 0; i < commands.length; i++) {
    if (
      commands[i] !== "f" &&
      commands[i] !== "r" &&
      commands[i] !== "l" &&
      commands[i] !== "b"
    ) {
      console.log("Command not valid; please use 'f', 'r', 'l', or 'b'.");
    } else {
      if (commands[i] === "f") moveForward(rover);
      if (commands[i] === "r") turnRight(rover);
      if (commands[i] === "l") turnLeft(rover);
      if (commands[i] === "b") moveBackwards(rover);
    }
  }
}
