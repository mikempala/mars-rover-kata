// Coded by Miguel Tellez @mikempala - Ironhacker Mexico - July 2018

console.log("Instructions provided via README.md file")

var rover = {
  direction: "N",
  x: 0,
  y: 0,
  travelLog: ["Rover's movement log: [0,0]"]
};

var roverette = {
  direction: "S",
  x: 9,
  y: 9,
  travelLog: ["Roverette's movement log: [0,0]"]
};

var turn = "rover";
console.log("Rover's turn starts now.");
console.log("Direction: N");
console.log("Position [0,0]");

// Obstacle generator
var obstacle = [];
for (var n = 0; n <= 4; ++n) {
  obstacle[n] = {
    x: Math.floor(Math.random() * 9) + 1,
    y: Math.floor(Math.random() * 9) + 1
  }
}

function turnLeft() {
  if (turn === "rover") {
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
    console.log("Rover's current direction: " + rover.direction);
  } else {
    switch (roverette.direction) {
      case "N":
        roverette.direction = "W";
        break;
      case "W":
        roverette.direction = "S";
        break;
      case "S":
        roverette.direction = "E";
        break;
      case "E":
        roverette.direction = "N";
        break;
    }
    console.log("Roverette's current direction: " + roverette.direction);
  }
}

function turnRight() {
  if (turn === "rover") {
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
    console.log("Rover's current direction: " + rover.direction);
  } else {
    switch (roverette.direction) {
      case "N":
        roverette.direction = "E";
        break;
      case "E":
        roverette.direction = "S";
        break;
      case "S":
        roverette.direction = "W";
        break;
      case "W":
        roverette.direction = "N";
        break;
    }
    console.log("Roverette's current direction: " + roverette.direction);
  }
}

function moveForward() {
  if (turn === "rover") {
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
    } else if (rover.x === roverette.x || rover.y === roverette.y ) {
      console.log ("Hello Roverette, you're in my way!");
      if (rover.x === roverette.x && rover.direction === "W") rover.x++;
        if (rover.y === roverette.y && rover.direction === "E") rover.x--;
        if (rover.x === roverette.x && rover.direction === "S") rover.y--;
        if (rover.y === roverette.y && rover.direction === "N") rover.y++;
    } else {
      console.log("Rover's new position: " + "[" + rover.x + "," + rover.y + "]");
      rover.travelLog.push("[" + rover.x + "," + rover.y + "]");
    }
    turn = "roverette";
    console.log("Roverette's turn starts.")
  } else {
    switch (roverette.direction) {
      case "N":
      roverette.y--;
        break;
      case "W":
      roverette.x--;
        break;
      case "S":
      roverette.y++;
        break;
      case "E":
      roverette.x++;
        break;
    }
    for (var n = 0; n <= 4; n++) {
      if (roverette.x === obstacle[n].x && roverette.y === obstacle[n].y) {
        console.log(
          "Ouch. Obstacle found. Bounced back to the previous positon."
        );
        if (roverette.x === obstacle[n].x && roverette.direction === "W") roverette.x++;
        if (roverette.y === obstacle[n].y && roverette.direction === "E") roverette.x--;
        if (roverette.x === obstacle[n].x && roverette.direction === "S") roverette.y--;
        if (roverette.y === obstacle[n].y && roverette.direction === "N") roverette.y++;
      }
    }
    if (roverette.x === -1 || roverette.x === 10 || roverette.y === -1 || roverette.y === 10) {
      console.log("Off-limits. Movement not registered within log.");
      if (roverette.x === -1) roverette.x++;
      if (roverette.x === 10) roverette.x--;
      if (roverette.y === -1) roverette.y++;
      if (roverette.y === 10) roverette.y--;
    } else if (rover.x === roverette.x || rover.y === roverette.y ) {
      console.log ("Hello Rover, you're in my way!");
      if (rover.x === roverette.x && rover.direction === "W") roverette.x++;
      if (rover.y === roverette.y && rover.direction === "E") roverette.x--;
      if (rover.x === roverette.x && rover.direction === "S") roverette.y--;
      if (rover.y === roverette.y && rover.direction === "N") roverette.y++;
    } else {
      console.log("Roverette's new position: " + "[" + roverette.x + "," + roverette.y + "]");
      roverette.travelLog.push("[" + roverette.x + "," + roverette.y + "]");
    }
    turn = "rover";
    console.log("Rover's turn starts.")
  }
}

function moveBackwards() {
  if (turn === "rover") {
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
    } else if (rover.x === roverette.x || rover.y === roverette.y ) {
      console.log ("Hello Roverette, you're in my way!");
      if (rover.x === roverette.x && rover.direction === "W") rover.x--;
      if (rover.y === roverette.y && rover.direction === "E") rover.x++;
      if (rover.x === roverette.x && rover.direction === "S") rover.y++;
      if (rover.y === roverette.y && rover.direction === "N") rover.y--;
     } else {
      console.log("Rover's new position: " + "[" + rover.x + "," + rover.y + "]");
      rover.travelLog.push("[" + rover.x + "," + rover.y + "]");
    }
    turn = "roverette";
    console.log("Roverette's turn starts.")
  } else {
    switch (roverette.direction) {
      case "N":
        roverette.y++;
        break;
      case "W":
        roverette.x++;
        break;
      case "S":
        roverette.y--;
        break;
      case "E":
        roverette.x--;
        break;
    }
    for (var n = 0; n <= 4; n++) {
      if (roverette.x === obstacle[n].x && roverette.y === obstacle[n].y) {
        console.log(
          "Ouch. Obstacle found. Bounced back to the previous positon."
        );
        if (roverette.x === obstacle[n].x && roverette.direction === "W")
          roverette.x--;
        if (roverette.y === obstacle[n].y && roverette.direction === "E")
          roverette.x++;
        if (roverette.x === obstacle[n].x && roverette.direction === "S")
          roverette.y++;
        if (roverette.y === obstacle[n].y && roverette.direction === "N")
          roverette.y--;
      }
    }
    if (
      roverette.x === -1 ||
      roverette.x === 10 ||
      roverette.y === -1 ||
      roverette.y === 10
    ) {
      console.log(
        "Off-limits, returning to previous position. Movement not registered within log."
      );
      if (roverette.x === -1) roverette.x++;
      if (roverette.x === 10) roverette.x--;
      if (roverette.y === -1) roverette.y++;
      if (roverette.y === 10) roverette.y--;
    } else if (rover.x === roverette.x || rover.y === roverette.y ) {
      console.log ("Hello Rover, you're in my way!");
      if (rover.x === roverette.x && rover.direction === "W") roverette.x--;
      if (rover.y === roverette.y && rover.direction === "E") roverette.x++;
      if (rover.x === roverette.x && rover.direction === "S") roverette.y++;
      if (rover.y === roverette.y && rover.direction === "N") roverette.y--;
    } else {
      console.log(
        "Roverette's new position: " + "[" + roverette.x + "," + roverette.y + "]"
      );
      roverette.travelLog.push("[" + roverette.x + "," + roverette.y + "]");
    }
    turn = "rover";
    console.log("Rover's turn starts.");
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
      if (commands[i] === "f") moveForward();
      if (commands[i] === "r") turnRight();
      if (commands[i] === "l") turnLeft();
      if (commands[i] === "b") moveBackwards();
    }
  }
}