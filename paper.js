class Paper {
    constructor(x, y, radius) {
      var options = {
          isStatic:false,
          restitution:0.3,
          'friction':0.3,
          'density':1.0
      }
      this.body = Bodies.circle(x, y, radius, options);
      this.radius = radius;
      
      World.add(world, this.body);
      this.image = loadImage("paper.png");
    }
    display(){
      var pos =this.body.position;
      var angle = this.body.angle;
      push();
      translate(pos.x,pos.y);
      rotate(angle);
      ellipseMode(RADIUS);
      fill("white");
      stroke("white")
      ellipse(0, 0, this.radius);
      imageMode(CENTER);
      image(this.image, 0, 0, 60,60);
      pop();
    }
  };