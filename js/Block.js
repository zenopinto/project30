class Block{
    constructor(x, y, width, height) {
        var options = {
          isStatic:false,
            restitution :0.4,
            friction :0.0
         
           
        }
        this.visibility =255;
        this.body = Bodies.rectangle(x, y, width, height, options);
        this.width = width;
        this.height = height;
        World.add(world, this.body);
      }
      display(){
        var angle = this.body.angle;
        var pos= this.body.position;
        push();
        if(this.body.speed<3){
        translate(pos.x, pos.y);
        rotate(angle);
        rectMode(CENTER);
        rect(0,0,this.width, this.height);
        pop();
        }
        else{
        push();
        World.remove(world,this.body);
        this.visibility = this.visibility-3
        tint(255,this.visibility)
        pop();

        }
      }
}