var pt = new Array();	//位置
var size = new Array();	//大きさ
var col = new Array();	//色
var kazu = 100;			//円の数

var acx = 0;
var acy = 0;
var agx = 0;
var agy = 0;

function setup(){
	window.addEventListener("devicemotion", deviceMotion);

	//円を100個作る
	for(var i = 0; i < kazu; ++i){
		//位置は横位置はランダム、縦位置は-100（画面の上部）
		pt.push(new PhysicalPoint(Math.random()*screenWidth, -100));
		size.push(1+Math.random()*2);	//大きさは１〜３のランダム
		var red = Math.floor(180+Math.random()*75);		//赤成分（180〜255）
		var green = Math.floor(180+Math.random()*75);
		var blue = Math.floor(180+Math.random()*75);
		col.push([red, green, blue]);	//色
		
		//col[0][185, 234, 203]
		//col[1][196, 217, 198]
	}
}

function deviceMotion(evt) {
	var ac = evt.acceleration;
	var ag = evt.accelerationIncludingGravity;

	acx = ac.x
	acy = ac.y;
	agx = ag.x
	agy = ag.y;
	
	if(navigator.userAgent.indexOf("Android") != -1){
		acx *= -1;
		acy *= -1;
		agx *= -1;
		agy *= -1;
	}
}

function loop(){
	//位置の計算
	for(var i = 0; i < pt.length; ++i){
		//それぞれの加速度から位置を計算（大きければ大きく動く）
		pt[i].setKasokudo(acx*400*size[i], -acy*400*size[i]);
		pt[i].setKasokudo(agx*100*size[i], -agy*100*size[i]);
		
		//ぞれぞれの指との関係（指に近かったらはじかれる）
		for(var j=0; j < yubiNum; ++j){
			var maxDist = 150;
			var dist = Math.sqrt(Math.pow(pt[i].x - yubiX[j], 2) 
								+ Math.pow(pt[i].y - yubiY[j], 2));
			
			if(dist < maxDist){
				var par = (maxDist-dist)/maxDist;
				pt[i].setKasokudo(	(pt[i].x - yubiX[j])*par*500, 
									(pt[i].y - yubiY[j])*par*500);
			}
		}
		
		//左右の壁に当たったら跳ね返る
		if(pt[i].x < 0){
			pt[i].x = 0;
			pt[i].vx *= -.9;
		}
		if(pt[i].x > screenWidth){
			pt[i].x = screenWidth;
			pt[i].vx *= -.9;
		}
		//上下の壁に当たったら、円を上部中央に持っていく（上下に消えたら画面上から降ってくる）
		if(pt[i].y < -100){
			pt[i].x = screenWidth/2;
			pt[i].y = -100;
			pt[i].vx = (Math.random()-0.5)*300;		//ちょっと左右に揺らしてる
			pt[i].vy = 0;
		}
		if(pt[i].y > screenHeight+100){
			pt[i].x = screenWidth/2;
			pt[i].y = -100;
			pt[i].vx = (Math.random()-0.5)*300;
			pt[i].vy = 0;
		}
	}

	acx = 0;
	acy = 0;
	agx = 0;
	agy = 0;

	//描画
	pbCtx.clearRect(0, 0, screenWidth, screenHeight);
	for(var i = 0; i < pt.length; ++i){
		pbCtx.beginPath();
		pbCtx.strokeStyle = 'rgb('+col[i][0]+', '+col[i][1]+', '+col[i][2]+')';
		pbCtx.lineWidth = 3;
		pbCtx.arc(pt[i].x, pt[i].y, size[i]*10, 0, Math.PI*2, true);
		pbCtx.stroke();
	}
}

function onPressed(n){
	
}

function onMove(n){
	
}

function onReleased(n){
	
}
