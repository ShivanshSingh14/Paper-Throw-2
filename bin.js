class Bin {
    constructor(x, y, width, height, angle) {
        var options = {
            ' isStatic':true
           
        }
        this.bin = Bodies.rectangle(x, y, width, height, options);
        this.width = width;
        this.height = height;
        Matter.Body.setStatic( this.bin,true) 
        World.add(world, this.bin);
      }
      display(){
        var position =this.bin.position;
        
        rectMode(CENTER);
       fill("white")
        rect(position.x,position.y, this.width, this.height);
        
      }

}