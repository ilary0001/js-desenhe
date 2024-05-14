function setup() {
    createCanvas(800, 800);
    background("lightblue");
  }
  
  function draw() {
    stroke("purple");
    fill("pink");
  
    //console.log(mouseIsPressed);
  
    if (mouseIsPressed) {
      rect(mouseX, mouseY, 20, 35);
    }
  }