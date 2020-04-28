class CanonBall {
  constructor(x, y,diameter) {
    var options = {
     // isStatic : true
      "density" :   1.5,
      "friction" : 1.0,
      "restitution" : 0.8,
      "frictionAir":0.06
      
    }

    this.body = Bodies.circle(x,y,diameter);
    this.diameter = diameter;
    World.add(world, this.body);
    this.image =  loadImage("assets/canonBall1.png");

  };

  display(){
    var pos = this.body.position;
    circle(pos.x,pos.y,this.diameter);
   imageMode(CENTER);
  image(this.image, pos.x, pos.y, this.diameter);
  };

  
};
