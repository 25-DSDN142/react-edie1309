// ----=  HANDS  =----
// USING THE GESTURE DETECTORS (check their values in the debug menu)
// detectHandGesture(hand) returns "Pinch", "Peace", "Thumbs Up", "Pointing", "Open Palm", or "Fist"

/* load images here */
function prepareInteraction() {
  atomic = loadImage('/images/atomic.png')
  angry = loadImage ('/images/angryanime.png')
  //bgImage = loadImage('/images/background.png');
}

function drawInteraction(faces, hands) {
  // hands part
  // for loop to capture if there is more than one hand on the screen. This applies the same process to all hands.
  for (let i = 0; i < hands.length; i++) {
    let hand = hands[i];
    // console.log(hand);
    if (showKeypoints) {
      drawConnections(hand)
    }

    let middleFingerMcpX = hand.middle_finger_mcp.x;
    let middleFingerMcpY = hand.middle_finger_mcp.y;
    /*
    Start drawing on the hands here
    */

    let whatGesture = detectHandGesture(hand)

      if (whatGesture == "Open Palm") { 
    if (hand.handedness === "Left") {
      image(atomic,400,200,820,312)// SMALL IMAGE OF EXPLOSION 
      
      textSize(400)
      textFont('Impact')
      strokeWeight(20)
      stroke(255, 154, 0) //ORANGE
      fill(255, 61, 0) // RED
      text('KA',200,300)
    }
    if (hand.handedness === "Right") {
      image(atomic,450,150)

      textSize(400)
      textFont('Impact')
      strokeWeight(20)
      stroke(255, 61, 0)// RED
      fill(255, 154, 0) // ORANGE
      text('BOOM!',750,700) //LARGE EXPLOSION 

    }

  }

    if (whatGesture == "Thumbs Up") { 
      if (hand.handedness === "Left") {
         noStroke()
      fill (250)
     ellipse(800,300, 100)//draws thought bubble
     ellipse(850,275, 75)
     ellipse(895,300,80)
     ellipse(820,340,100)
     ellipse(860,350,95)
     ellipse(745,390, 55)
      
     textSize(40)
      strokeWeight(4)
      textFont('Impact')
      fill(0, 191, 255) // BLUE
      text('GREAT!',835,320)//WRITES GOOD! IN BUBBLE WHEN THUMB UP
      
    }
    if (hand.handedness === "Right") {
      fill(250)
      noStroke()
      ellipse(200,300, 200,150)//drawing speech bubble
      triangle(400,300,250,340,270,300 )
      
      textSize(40)
      textFont('Impact')
      strokeWeight(4)
      fill(0, 191, 255) // BLUE
      text('GOOD!',195,300)
    }
  }
    if (whatGesture == "Peace") {
      if (hand.handedness === "Left") {
        noStroke()
      fill (250)
     ellipse(800,300, 100)//draws thought bubble
     ellipse(850,275, 75)
     ellipse(895,300,80)
     ellipse(820,340,100)
     ellipse(860,350,95)
     ellipse(745,390, 55)
      
     textSize(40)
      strokeWeight(4)
      textFont('Impact')
      fill(162, 0, 255) // PURPLE
      text(':)',845,320)
      
    }
     if (hand.handedness === "Right") {
      fill(250)
      noStroke()
      ellipse(200,300, 200,150)//drawing speech bubble
      triangle(400,300,250,340,270,300 )
      
      textSize(40)
      textFont('Impact')
      strokeWeight(4)
      fill(162,0,255) // PURPLE
      text('(:',200,300)
    }
  }

  if (whatGesture == "Pointing") {
      if (hand.handedness === "Left") {
        noStroke()
      fill (250)
     ellipse(800,300, 100)//draws thought bubble
     ellipse(850,275, 75)
     ellipse(895,300,80)
     ellipse(820,340,100)
     ellipse(860,350,95)
     ellipse(745,390, 55)
      
       textSize(40)
      strokeWeight(4)
      textFont('Impact')
      fill(255, 61, 0) // RED
      text('OI YOU!',835,320)
      
    }
     if (hand.handedness === "Right") {
     fill(250)
      noStroke()
      ellipse(200,300, 200,150)//drawing speech bubble
      triangle(400,300,250,340,270,300 )
     
      textSize(40)
      textFont('Impact')
      strokeWeight(4)
      fill(255, 61, 0) // RED
      text('SHHH',190,300)
    }
  }

    if (whatGesture == "Fist") {
      if (hand.handedness === "Left") {
     image(angry,450,150)// ANGRY ANIME 
     
      
    }
     if (hand.handedness === "Right") {
    image(angry,450,150)// ANGRY ANIME 
     
  
    }
  }
  
    /*
    Stop drawing on the hands here
    */
  }
  // You can make addtional elements here, but keep the hand drawing inside the for loop. 
  //------------------------------------------------------

}


function drawConnections(hand) {
  // Draw the skeletal connections
  push()
  for (let j = 0; j < connections.length; j++) {
    let pointAIndex = connections[j][0];
    let pointBIndex = connections[j][1];
    let pointA = hand.keypoints[pointAIndex];
    let pointB = hand.keypoints[pointBIndex];
    stroke(255, 0, 0);
    strokeWeight(2);
    line(pointA.x, pointA.y, pointB.x, pointB.y);
  }
  pop()
}

// This function draw's a dot on all the keypoints. It can be passed a whole face, or part of one. 
function drawPoints(feature) {
  push()
  for (let i = 0; i < feature.keypoints.length; i++) {
    let element = feature.keypoints[i];
    noStroke();
    fill(0, 255, 0);
    circle(element.x, element.y, 10);
  }
  pop()

}