//加速度用の変数
var agx = 0;
var agy = 0;

var pt = new PhysicalPoint(screenWidth/2, screenHeight/2);

function setup(){
	//デバイスが動いたときに実行される
	window.addEventListener("devicemotion", deviceMotion);
}

function deviceMotion(evt) {
	var ag = evt.accelerationIncludingGravity;	//重力加速度をagに代入

	agx = ag.x;	//グローバル変数に格納
	agy = ag.y;
	
	//AndroidとiPhoneは重力加速度（と加速度）が反対向きなので、AndroidをiPhoneに合わせる
	if(navigator.userAgent.indexOf("Android") != -1){
		agx *= -1;
		agy *= -1;
	}
}

function loop(){
	//重力加速度のセンサーの値をptに加味する（y方向は逆向きなのに注意）
	pt.setKasokudo(agx*1500, -agy*1500);
	
	//ptに加味したのでそれぞれの値を0に戻す
	agx = 0;
	agy = 0;

	//上下左右の壁に当たったら跳ね返す
	if(pt.x < 0){
		pt.x = 0;
		pt.vx *= -.9;
	}
	if(pt.y < 0){
		pt.y = 0;
		pt.vy *= -.9;
	}
	if(pt.x > screenWidth){
		pt.x = screenWidth;
		pt.vx *= -.9;
	}
	if(pt.y > screenHeight){
		pt.y = screenHeight;
		pt.vy *= -.9;
	}

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
