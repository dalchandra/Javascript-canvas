class canvas
{
	constructor()
	{
		this.width=600;
		this.height=400;	this.ctx=document.getElementById('canvas').getContext('2d');
	}
	init()
	{
		this.ctx.canvas.width=this.width;
		this.ctx.canvas.height=this.height;
	}
}
class paddle extends canvas
{
	constructor()
	{
		super();
		this.pheight=10;
		this.pwidth=100;
		this.speed=6;
		this.px=this.width/2-this.pwidth/2;
		this.py=this.height-this.pheight;
		this.direction=0;
	}
	create()
	{
		this.ctx.beginPath();
		this.ctx.fillStyle="#666666";	this.ctx.fillRect(this.px,this.py,this.pwidth,this.pheight)
		this.ctx.fill()
	}
	move()
	{
		if(this.direction==1)
			this.px+=this.speed;
		if(this.direction==2)
			this.px-=this.speed;
		if(this.px<0)
			this.px=0
		if(this.px+this.pwidth>this.width)
			this.px=this.width-this.pwidth
		this.create()
	}
}
class ball extends paddle
{
	constructor()
	{
		super();
		this.radius=10;
		this.x=this.width/2;
		this.y=this.height-this.radius-this.pheight;
		this.color="green";
		this.dx=4;
		this.dy=3.2;
	}
	create()
	{
		this.ctx.beginPath();
		this.ctx.arc(this.x,this.y,this.radius,0,Math.PI*2);
		this.ctx.fillStyle="red"
		this.ctx.fill()
	}
	move()
	{
		this.x+=this.dx;
		this.y-=this.dy;
		if(this.x+this.radius>this.width)
			this.dx=-this.dx;
		if(this.x-this.radius<0)
			this.dx=-this.dx;
		if(this.y-this.radius<0)
			this.dy=-this.dy;
		if((this.y+this.radius)>this.height-this.pheight)
			if(this.x+this.radius>p.px&&this.x-this.radius<(p.px+p.pwidth))
				this.dy=-this.dy;
			else
			{
				alert("Game Over")
				location.reload()
			}
		this.create();
	}
}
var c=new canvas;
var b=new ball;
var p=new paddle
var score=document.getElementById('score'),s=0
c.init()
function fun()
{
	c.ctx.clearRect(0,0,c.width,c.height)
	p.move()
	b.move()
	s+=2;
	score.innerHTML="Score="+s/100;
	requestAnimationFrame(fun)
}
document.addEventListener('click',fun)
//requestAnimationFrame(fun)
window.addEventListener('keydown',function(e) 
{
	if(e.keyCode==37)
		p.direction=2;
	if(e.keyCode==39)
		p.direction=1
})
window.addEventListener('keyup',function(e) 
{
	p.direction=0
})