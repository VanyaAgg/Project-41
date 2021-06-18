class Drop{
    constructor(x,y,radius){

    this.body = Bodies.circle(x, y, radius);
    World.add(world, this.body);
    }
    display(){
    if(this.drop.position.y > height){
Matter.body.setPosition(this.drop, {x: random(0,400), y: random(0,400)})
    }
    ellipseMode(RADIUS)
}
}