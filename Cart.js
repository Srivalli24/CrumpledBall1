class Cart {
    constructor (x,y,width, height){
        var options = {
            restitution: 0,
            isStatic:true,
            friction:0.5,
            density:1.2
        }
        this.body=Bodies.rectangle(x,y, width, height, options);
        World.add(world,this.body);
    }
    display(){
        var pos = this.body.position;
        rectMode(CENTER);  
        rect(600,200,this.width,this.height);
    }
}