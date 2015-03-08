var kakudo = 0;
var hankei = 180;

function setup(){
	
}

function loop(){
	//描画
	pbCtx.clearRect(0, 0, screenWidth, screenHeight);
	if(curYubiTouched){
		pbCtx.beginPath();
		//指の場所からhankeiだけはなれたkakudo向きの場所を計算
		var xx = curYubiX + hankei*Math.cos(kakudo/360*(Math.PI*2));
		var yy = curYubiY + hankei*Math.sin(kakudo/360*(Math.PI*2));
		pbCtx.arc(xx, yy, 30, 0, Math.PI*2, true);
		pbCtx.fill();
	}
	
	kakudo = kakudo+5;
}

function onPressed(n){
	
}

function onMove(n){
	
}

function onReleased(n){
	
}
