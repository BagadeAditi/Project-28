class Chain{
    constuctor(bodyA,pointB){
        var options={
        bodyA:bodyA,
        pointB:pointB,
        stiffness:0.004,
        length: 1
    }
    this.chain=Constraint.create(options);
    this.bodyA=bodyA
    this.pointB=pointB
    World.add(world,this.chain);
    }

    fly(){
        this.chain.bodyA=null;
    }

    attach(bodyA){
        this.chain.bodyA=bodyA;
    }
display(){
    if(this.bodyA){
        var pointA=this.bodyA.position;
        var pointB=this.pointB;
        strokeWeight(2);
        line (pointA.x,pointA.y,pointB.x,pointB.y);
    }
}
}