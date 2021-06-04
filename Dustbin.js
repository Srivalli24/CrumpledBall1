class Dustbin {
    constructor (x,y,radiusX){
        var options = {
            isStatic : false,
            restitution: 0.3,
            density : 1.2,
            friction : 0.5
        }
    this.body = body.ellipse (x,y,radiusX,options);
    radiusX = this.body.radius;
    World.add (world,this.body);
    }
    display() {
        var pos = this.body.position
        ellipse(pos.x, pos.y, this.radiusX);
    }
}