var pt = new PhysicalPoint(100, 100);

function setup(){
	
}

function loop(){
	//x方向に100, y方向に200の加速を加える
	pt.setKasokudo(100, 200);

	//描画
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
