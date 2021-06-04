class Paper {
    constructor (x,y){
        var options = {
            restitution: 0.3,
            isStatic:false,
            friction:0.5,
            density:1.2
        }
        this.body=Bodies.rectangle(x,y, 20, 20, options);
        this.image=loadImage("basketball.png");
        this.image.width= 20;
        this.image.height=20;
        World.add(world,this.body);
    }
    display(){
        var pos = this.body.position;
        imageMode(CENTER);  
        image(this.image,100,600,this.width,this.height);
    }
}