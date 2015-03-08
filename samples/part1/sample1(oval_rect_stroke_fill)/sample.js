function setup(){

	pbCtx.beginPath();	//描画を開始する
	pbCtx.rect(135, 100, 200, 200);		//左、上、幅、高さで矩形を描く
	pbCtx.stroke();		//線を描く

	pbCtx.beginPath();
	pbCtx.rect(435, 100, 200, 200);
	pbCtx.fill();		//塗りつぶす

	pbCtx.beginPath();
	//中心座標、半径、開始角度、終角度、反時計回りで円を描く
	pbCtx.arc(235, 500, 100, 0, Math.PI*1.5, true);
	pbCtx.stroke();

	pbCtx.beginPath();
	pbCtx.arc(535, 500, 100, 0, Math.PI*2, true);
	pbCtx.fill();
}

function loop(){
	
}

function onPressed(n){

}

function onMove(n){
	
}

function onReleased(n){

}
