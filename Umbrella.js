class Umbrella{
    constructor(x,y,radius) {
        this.body = Bodies.circle(x, y, radius);
        this.r = radius;
        this.image = loadImage("images/walking.png")
        World.add(world, this.body);
    }
    display(){
        imageMode(CENTER);
        image(this.image, 0);
    }
}