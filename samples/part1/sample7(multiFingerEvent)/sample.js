function setup(){
	
}

function loop(){
	
}

function onPressed(n){
	//タッチされたら、
	//タッチされている指の数だけfor文をまわす
	for(var i=0; i < n.length; ++i){
		//それぞれの場所に赤い円を描く
		pbCtx.strokeStyle = 'rgb(200, 80, 0)';
		pbCtx.lineWidth = 30;
		pbCtx.beginPath();
		//nで渡されるのは配列、配列の中には指の番号が順番に入っている
		pbCtx.arc(yubiX[n[i]], yubiY[n[i]], 60, 0, Math.PI*2, true);
		pbCtx.stroke();
	}
}

function onMove(n){
	//指が動いていたら
	for(var i=0; i < n.length; ++i){
		//それぞれの場所に黄色の円を描く
		pbCtx.fillStyle = 'rgb(255, 255, 0)';
		pbCtx.beginPath();
		pbCtx.arc(yubiX[n[i]], yubiY[n[i]], 25, 0, Math.PI*2, true);
		pbCtx.fill();
	}
}

function onReleased(n){
	//指が放れたら
	//このとき渡されるnには「放れた指」の情報しかない
	for(var i=0; i < n.length; ++i){
		//それぞれの場所に青い円を描く
		pbCtx.strokeStyle = 'rgb(0, 80, 200)';
		pbCtx.lineWidth = 30;
		pbCtx.beginPath();
		pbCtx.arc(yubiX[n[i]], yubiY[n[i]], 60, 0, Math.PI*2, true);
		pbCtx.stroke();
	}
}
