//動かすための変数
var xx = 0;

function setup(){
	
}

function loop(){
	//xxの位置に円を描く
	pbCtx.clearRect(0, 0, screenWidth, screenHeight);
	pbCtx.beginPath();
	pbCtx.lineWidth = 30;
	pbCtx.arc(xx, 500, 100, 0, Math.PI*2, true);
	pbCtx.stroke();
	
	//繰り返されるループの中でxxを増やし続ける
	xx = xx + 5;

}

function onPressed(n){

}

function onMove(n){
	
}

function onReleased(n){

}
