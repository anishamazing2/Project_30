class Polygon {
	constructor(x, y, radius) {
		var options =
		{
			isStatic: false
		}
		this.body = Bodies.circle(x, y, radius / 2, options);
		this.x = x;
		this.y = y;
	
		
		this.image = loadImage("polygon.png");

		
		World.add(world, this.body);

	}

	display() {
		push();
      	translate(this.body.position.x, this.body.position.y);
		imageMode(CENTER);
		image(this.image, 0, 0, 40, 40);
		pop();
	}
}