var xx = 0;
var yy = 0;

function setup(){
	
}

function loop(){
	//毎回繰り返されるループで
	//今の場所から、目的の場所までの1/10だけ進める
	xx = xx + (curYubiX - xx)/10;
	yy = yy + (curYubiY - yy)/10;
	
	//描画
	pbCtx.clearRect(0, 0, screenWidth, screenHeight);
	pbCtx.beginPath();
	pbCtx.lineWidth = 30;
	pbCtx.arc(xx, yy, 100, 0, Math.PI*2, true);
	pbCtx.stroke();
}

function onPressed(n){
	
}

function onMove(n){
	
}

function onReleased(n){
	
}
