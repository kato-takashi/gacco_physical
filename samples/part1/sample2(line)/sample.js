function setup(){

	pbCtx.beginPath();
	pbCtx.moveTo(100, 350);		//ペンをそこまで移動する（描画しない）
	pbCtx.lineTo(350, 100);		//現在のペンの場所からそこまで直線を描く
	//(750,250)を寄り道して、(400,500)まで二次ベジェ曲線を描く
	pbCtx.quadraticCurveTo(750, 250, 400, 500);
	//(50,750)、(100,800)を寄り道して、(600,850)まで三次ベジェ曲線を描く
	pbCtx.bezierCurveTo(50, 750, 100, 800, 600, 850);
	pbCtx.stroke();
}

function loop(){
	
}

function onPressed(n){

}

function onMove(n){
	
}

function onReleased(n){

}
