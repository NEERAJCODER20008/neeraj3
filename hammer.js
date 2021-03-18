class Hammer {
    constructor(x, y,width) {
      var options = {
          'restitution':0.5,
          'friction':2,
          'density':5
      }
      this.body = Bodies.rectangle(x, y, width, 15, options);
      this.width = width;
      this.height = 15;
      
      World.add(world, this.body);
    }
    display(){
      var pos =this.body.position;
      pos.x = mouseX;
      pos.y = mouseY;
      var angle = this.body.angle;
      push();
      translate(pos.x, pos.y);
      rotate(angle);
      rectMode(CENTER);
      strokeWeight(4);
      stroke("red");
      fill("red");
      rect(0, 0, this.width, this.height);
      pop();
    }
  };