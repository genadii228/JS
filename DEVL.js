function draw(){
	let canvas = document.getElementById('canva');
	let ctx = canvas.getContext('2d');
	    ctx.lineWidth = 5;
	    ctx.arc(200,200,75,0, 2*Math.PI,true);
   		ctx.stroke();
}