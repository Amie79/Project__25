class Dustbin
{
	constructor(x,y)
	{
		
		this.x=x;
		this.y=y;
		this.dustbinWidth=200;
		this.dustbinHeight=150;
		this.wallThickness=20;
		this.angle=0;	
		
		//this.bottomBody=Bodies.rectangle(this.x, this.y, this.dustbinWidth, this.wallThickness, {isStatic:true})
	//	this.leftWallBody=Bodies.rectangle(this.x-this.dustbinWidth/2, this.y-this.dustbinHeight/2, this.wallThickness, this.dustbinHeight, {isStatic:true})
	//	Matter.Body.setAngle(this.leftWallBody, this.angle);
		

		this.rightWallBody=Bodies.rectangle(this.x+this.dustbinWidth/2, this.y-this.dustbinHeight/2, this.wallThickness, this.dustbinHeight, {isStatic:true})
		Matter.Body.setAngle(this.rightWallBody, -1*this.angle);
		
		
		//add  the bottomBody,leftWallBody and rightWallBody to world
		//World.add(world,this.bottomBody);
		//World.add(world,this.leftWallBody);
		World.add(world,this.rightWallBody);

	}
	display()
	{
			//var posBottom=this.bottomBody.position;
			//var posLeft=this.leftWallBody.position;
			var posRight=this.rightWallBody.position;

			

		//	push()
		//	translate(posLeft.x, posLeft.y);
		//	rectMode(CENTER)
		//	//strokeWeight(4);
		//	angleMode(RADIANS)
		//	fill(255)
		//	stroke(255)
		//	rotate(this.angle)
		//	rect(0,0,this.wallThickness, this.dustbinHeight);
		//	pop()

			push()
			translate(posRight.x, posRight.y);
			rectMode(CENTER)
			//strokeWeight(4);
			stroke(255)
			angleMode(RADIANS)
			fill(255)
			rotate(-1*this.angle)
			rect(0,0,this.wallThickness, this.dustbinHeight);
			pop()
			// now similarly write instructions to display the bottomBody
            
         //   push()
		//	translate(posBottom.x, posBottom.y);
		//	rectMode(CENTER)
		//	//strokeWeight(4);
		//	stroke(255)
		//	angleMode(RADIANS)
		//	fill(255)
		//	rotate(this.angle)
		//	rect(0,0,this.dustbinWidth, this.wallThickness);
		//	pop()

			imageMode(CENTER);
			image(dustbin_Img,1000,430,250,250);
	}

}
