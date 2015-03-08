function setup(){
	
}

function loop(){
	
}

function onPressed(n){
	//タッチされたらまず画面全体を消去する
	pbCtx.clearRect(0, 0, screenWidth, screenHeight);

	//指の場所に赤い円を描く
	pbCtx.strokeStyle = 'rgb(200, 80, 0)';
	pbCtx.lineWidth = 30;
	pbCtx.beginPath();
	pbCtx.arc(curYubiX, curYubiY, 100, 0, Math.PI*2, true);
	pbCtx.stroke();
}

function onMove(n){
	//指が動いていたら
	if(curYubiTouched){	//タッチされていたら（スマホなら当たり前だけど、マウスのことを考慮している）
		//指の場所に黄色の円を描く
		pbCtx.fillStyle = 'rgb(255, 255, 0)';
		pbCtx.beginPath();
		pbCtx.arc(curYubiX, curYubiY, 70, 0, Math.PI*2, true);
		pbCtx.fill();
	}
}

function onReleased(n){
	//タッチが放されたら
	//その場所に青い円を描く
	pbCtx.strokeStyle = 'rgb(0, 80, 200)';
	pbCtx.lineWidth = 30;
	pbCtx.beginPath();
	pbCtx.arc(curYubiX, curYubiY, 100, 0, Math.PI*2, true);
	pbCtx.stroke();
}
