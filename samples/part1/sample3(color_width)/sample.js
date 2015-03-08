function setup(){

	pbCtx.beginPath();
	pbCtx.lineWidth = 30;	//線の幅を30にする
	pbCtx.arc(385, 150, 100, 0, Math.PI*2, true);
	pbCtx.stroke();

	pbCtx.beginPath();
	pbCtx.lineWidth = 30;
	pbCtx.strokeStyle = 'rgb(200, 80, 50)';	//線の色を、赤200、緑80、青50にする
	pbCtx.arc(385, 400, 100, 0, Math.PI*2, true);
	pbCtx.stroke();

	pbCtx.beginPath();
	pbCtx.fillStyle = 'rgb(80, 200, 50)';	//塗りの色を、赤80、緑200、青50にする
	pbCtx.arc(385, 650, 100, 0, Math.PI*2, true);
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
