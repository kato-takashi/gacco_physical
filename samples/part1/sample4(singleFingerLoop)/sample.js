function setup(){
	
}

function loop(){
	//繰り返されるループの中で
	//まず、全体を消してから「今の指の場所」に丸を描くと「アニメーション」が作られる
	pbCtx.clearRect(0, 0, screenWidth, screenHeight);	//画面の消去
	if(curYubiTouched){		//もし指がタッチされていたら
		pbCtx.beginPath();
		pbCtx.lineWidth = 30;
		//指の場所に円を描く
		pbCtx.arc(curYubiX, curYubiY, 100, 0, Math.PI*2, true);
		pbCtx.stroke();
	}
}

function onPressed(n){
	
}

function onMove(n){
	
}

function onReleased(n){
	
}
