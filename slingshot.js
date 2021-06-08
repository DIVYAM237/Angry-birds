class Slingshot {
    constructor(b1, point2){
        var options = {
            bodyA:b1, 
            pointB:point2,
            length:10, stiffness: 0.04
        }
        this.sling = Constraint.create(options);
        World.add(world, this.sling)
        this.point2=point2
    }
    display(){
        if(this.sling.bodyA){
            var pointA = this.sling.bodyA.position;
            var pointB = this.point2
            strokeWeight(3);
            line(pointA.x, pointA.y, pointB.x, pointB.y)
        }
        
    }
    fly(){
        this.sling.bodyA=null
    }
}