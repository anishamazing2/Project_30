class Block {
    constructor(x,y, color) {
      var options = {
          isStatic: false,
          friction:0
      }
      this.body = Bodies.rectangle(x,y,30, 40,options);
      this.width = 30;
      this.height = 40;
      this.color = color;
      this.Visiblity = 255;
      World.add(world, this.body);
    }
    display(){
      fill(this.color);
      strokeWeight(4);
      stroke("black");
      var pos =this.body.position;
      
      if(this.body.speed < 5){
        
        rectMode(CENTER);
        rect(pos.x, pos.y, this.width, this.height);
       }
       else{
         World.remove(world, this.body);
         push();
         this.Visiblity = this.Visiblity - 5;
         tint (255, this.Visiblity);
         pop();
       }
      
    }
  };
