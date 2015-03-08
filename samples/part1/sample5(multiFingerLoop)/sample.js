var col = [	"rgb(127, 0, 0)", 
			"rgb(0, 127, 0)", 
			"rgb(0, 0, 255)", 
			"rgb(255, 255, 0)", 
			"rgb(0, 127, 255)"];

function setup(){
	
}

function loop(){
	pbCtx.clearRect(0, 0, screenWidth, screenHeight);
	//タッチされている指の数だけfor文をまわす
	for(var i=0; i < yubiNum; ++i){
		pbCtx.beginPath();
		pbCtx.lineWidth = 30;
		//あらかじめの色を設定して
		pbCtx.strokeStyle = col[i];
		//その指の場所に円を描く
		pbCtx.arc(yubiX[i], yubiY[i], 100, 0, Math.PI*2, true);
		pbCtx.stroke();
	}
}

function onPressed(n){
	
}

function onMove(n){
	
}

function onReleased(n){
	
}
