class Ground {
   constructor(x, y) {     
     var options = {
         isStatic : true,
         restitution:0.8,
         friction:0.3,
         density:1.0
     }
     this.body = Bodies.rectangle(x, y, 480, 10, options);
     this.width = 480;
     this.height = 10;
     World.add(world, this.body);
   }
   display(){
     var pos =this.body.position;
     var angle = this.body.angle;
     push();
     translate (pos.x,pos.y);
     rotate(angle);
     rectMode(CENTER);
     fill(0,255,0);
     rect(0, 0, this.width, this.height);
     pop();
   }
 };