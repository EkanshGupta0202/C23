class Tria {
    constructor(x1,y1,x2,y2,x3,y3){
     var options = {
         isStatic: true
       }
       this.body = Bodies.triangle(x1,y1,x2,y2,x3,y3,options);
       
       World.add(world,this.body);
    }
    display(){
       var pos = this.body.position;
       fill(255);
       triangle(pos.x1,pos.y1,pos.x2,pos.y2,pos.x3,pos.y3);
    }
   }
   