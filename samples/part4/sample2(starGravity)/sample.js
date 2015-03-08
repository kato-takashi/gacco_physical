var agx = 0;		//重力加速度
var agy = 0;
var acx = 0;		//加速度
var acy = 0;
var rtgamma = 0;	//回転加速度（ラジアン）

//角度を管理するPhysicalPoint型（ラジアン）
var angle = new PhysicalPoint(0);
//位置を管理するPhysicalPoint型
var pt = new PhysicalPoint(screenWidth/2, screenHeight/2);

function setup(){
	window.addEventListener("devicemotion", deviceMotion);
}

function deviceMotion(evt) {
	var ag = evt.accelerationIncludingGravity;	//重力加速度をagに代入
	var ac = evt.acceleration;	//加速度をacに代入
	var rt = evt.rotationRate;	//回転加速度をrtに代入

	//それぞれの値をグローバル値に保存
	acx = ac.x
	acy = ac.y;
	agx = ag.x
	agy = ag.y;
	rtgamma = rt.gamma;	
	
	if(navigator.userAgent.indexOf("Android") != -1){
		acx *= -1;
		acy *= -1;
		agx *= -1;
		agy *= -1;
	}
}

function loop(){
	//位置に加速をかける
	pt.setKasokudo(acx*800, -acy*800);
	pt.setKasokudo(agx*500, -agy*500);
	
	//普段はがめんの中心にもどるように加速をかける
	pt.setKasokudo((screenWidth/2 - pt.x)*10, (screenHeight/2 - pt.y)*10);
	//加速をかけたので０に戻す
	acx = 0;
	acy = 0;
	agx = 0;
	agy = 0;

	//角度に加速をかける
	angle.setKasokudo(rtgamma*.07);
	
	//普段は角度を0度に戻すように加速をかける
	angle.setKasokudo((0 - angle.x)*3);
	//加速をかけたので０に戻す
	rtgamma = 0;

	//描画
	var r1 = 200;
	var r2 = 350;

	pbCtx.clearRect(0, 0, screenWidth, screenHeight);
	var div = 6;	//６角形
	for(var i = 0; i < div; ++i){	//６角形なので６回ループして、60度ごとに処理をする
		pbCtx.beginPath();
		pbCtx.lineWidth = 10;	//線幅は10
		pbCtx.moveTo(pt.x, pt.y);	//動く点から線を描く
		//６角形なので360度(2π)/6が単位の角度で、それにiをかけると今の角度
		var kakudo = Math.PI*2/div*i;
		//回転加速度を加味したコントロールポイントを通った２次ベジェ曲線を描く
		pbCtx.quadraticCurveTo(	pt.x+r1*Math.cos(kakudo+angle.x), 
								pt.y+r1*Math.sin(kakudo+angle.x),
								screenWidth/2+r2*Math.cos(kakudo), 
								screenHeight/2+r2*Math.sin(kakudo));
		pbCtx.stroke();
		pbCtx.beginPath();
		//端点に丸を描く
		pbCtx.arc(	screenWidth/2+r2*Math.cos(kakudo), 
					screenHeight/2+r2*Math.sin(kakudo), 
					20, 0, Math.PI*2, true);
		pbCtx.fill();
	}
	pbCtx.beginPath();
	pbCtx.arc(pt.x, pt.y, 20, 0, Math.PI*2, true);	//丸を描く
	pbCtx.fill();
}

function onPressed(n){
	
}

function onMove(n){
	
}

function onReleased(n){
	
}
