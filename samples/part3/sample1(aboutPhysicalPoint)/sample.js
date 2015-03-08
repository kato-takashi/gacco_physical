var pt = new PhysicalPoint(100, 100);

function setup(){
	
}

function loop(){
	if(curYubiTouched){
		pt.setKasokudo((curYubiX - pt.x)*20, (curYubiY - pt.y)*20);
	}

	pbCtx.clearRect(0, 0, screenWidth, screenHeight);
	pbCtx.beginPath();
	pbCtx.arc(pt.x, pt.y, 40, 0, Math.PI*2, true);
	pbCtx.fill();
}

function onPressed(n){
	
}

function onMove(n){
	
}

function onReleased(n){
	
}
