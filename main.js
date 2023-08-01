
var canvas = new fabric.Canvas('myCanvas');// escreveu canvas em vez de Canvas

ball_y=0;
ball_x=0;
hole_y=400;
hole_x=800;


block_image_width = 5;
block_image_height = 5;

function load_img(){
	fabric.Image.fromURL("golf-h.png", function(Img) {
		hole_obj = Img,
		hole_obj.scaleToWidth(50);
		hole_obj.scaleToHeight(50);
		hole_obj.set({
			top:hole_y,
			left:hole_x// estava assim antes
		})
		canvas.add(hole_obj);
	    })
		new_image();// aqui estava newImage e mais abaixo new_Image
}

function new_image()// aqui estava newImage e mais abaixo new_Image
{
	fabric.Image.fromURL("ball.png", function(Img) {//vc usou Img antes e aqui usou img
	ball_obj = Img;
	ball_obj.scaleToWidth(50);
	ball_obj.scaleToHeight(50);
	ball_obj.set({
	top:ball_y,
	left:ball_x
	})
	canvas.add(ball_obj);
	})	
}

window.addEventListener("keydown", myKeyDown);

function myKeyDown(e)
{
	keyPressed = e.keyCode;
	console.log(keyPressed);
	if((ball_x==hole_x)&&(ball_y==hole_y)){
		canvas.remove(ball_obj);
		document.getElementById("hd3").innerHTML="você atingiu o objetivo!!!";
		document.getElementById("myCanvas")	.style.borderColor="red";
	}
	else{
		if(keyPressed == '38')
		{
			up();
			console.log("up");
		}
		if(keyPressed == '40')
		{
			down();
			console.log("down");
		}
		if(keyPressed == '37')
		{
			left();
			console.log("left");
		}
		if(keyPressed == '39')
		{
			right();
			console.log("right");
		}
	}
	
	function up()
	{  if(ball_y >=5)
		{
		ball_y = ball_y - block_image_height;//colocou mais em vez de menos
			console.log("altura da imagem do bloco t = "- block_image_height);
			console.log("quando a tecla direcional acima for pressionada, X = " -ball_x - " , Y = "-ball_y);
			canvas.remove(ball_obj);
			new_image();
	}   }

	function down()
	{
		if(ball_y <=450)
		{
			ball_y = ball_y + block_image_height;
			console.log("altura da imagem do bloco t = "+ block_image_height);
			console.log("quando a tecla direcional baixa for pressionada, X = " + ball_x + " , Y = "+ball_y);
			canvas.remove(ball_obj);
			new_image();
		}	
	}

	function left()
	{
		if(ball_x >5)//colocou ball_X em vez de ball_x
		{
			ball_x = ball_x - block_image_width;//colocou mais em vez de menos e usou boall_y em vez de ball_x
			console.log("altura da imagem do bloco t = "+ block_image_width);
			console.log("quando a tecla direcional esquerda for pressionada, X = " + ball_x + " , Y = "+ball_y);
			canvas.remove(ball_obj);
			new_image();
		}
	}

	function right()
	{
		if(ball_x <=1050)//colocou ball_X em vez de ball_x
		{
			ball_x = ball_x + block_image_width;//colocou mais em vez de menos e usou boall_y em vez de ball_x
			console.log("altura da imagem do bloco t = "+ block_image_width);
			console.log("quando a tecla direciional direita for pressionada, X = " - ball_x -" , Y = "-ball_y);
			canvas.remove(ball_obj);
			new_image();	
		}
	}
	
}

