class ground {

constructor(x,y,width,height){
    var options={
        isStatic:true
    }
this.body=Bodies.rectangle(x,y,width,height,options);
World.add (world,this.body)
this.width=width;
this.height=height;

}



display(){
    var posi= this.body.position;
    rectMode(CENTER);
    fill("brown");
 rect(posi.x,posi.y,this.width,this.height);

}

}



















