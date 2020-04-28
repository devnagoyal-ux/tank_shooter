class Tanker {
  constructor(x, y, width, height) {
      var options = {
      isStatic: true
     }
    
    this.body = Bodies.rectangle(x,y,width,height,options);
    this.width = width;
    this.height = height;
    World.add(world, this.body);
  };
  
  display(){
    var pos =this.body.position;
    rectMode(CENTER);
    fill("yellow");
    rect(pos.x, pos.y, this.width, this.height);
      // Draw the tanker the way you like.
      // You could also use an image if you want a specific look

    };
}
