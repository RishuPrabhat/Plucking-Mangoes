class Stone{
    constructor(x,y,w,h){
    var options={
        isStatic:false,
        restitution:0,
        friction:2,
        density:1.2
    }
        this.x=x;
		this.y=y;
		this.w=w
        this.h=h
        this.image = loadImage("main/stone1");
        this.body=Bodies.rectangle(x, y, w, h ,options);
        World.add(world, this.body);
    }
    display(){
        var stonePos=this.body.position;		

			push()
			translate(stonePos.x, stonePos.y);
			rectMode(CENTER)
			fill(128,128,128)
			rect(0,0,this.w, this.h);
			pop()
			

        
    }
}