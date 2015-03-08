var pt = new Array();	//点の配列（線が描かれているが、実は点の連なり）
var loc = new Array();	//自分のホームポジションの配列

var buttonHeight = 50;	//上部のボタンの高さ
var fontSize = 24;		//ボタンに表示される文字の大きさ

var curMode = "DRAW";	//現在のモード、"DRAW"か"MOVE"

function setup(){
	
}

function loop(){
	for(var i = 0; i < pt.length; ++i){	//それぞれの点について
		//自分の場所に帰る
		pt[i].setKasokudo((loc[i].x - pt[i].x)*20, (loc[i].y - pt[i].y)*20);
		
		if(curMode == "MOVE"){		//curModeがMOVEだったら
			var maxDist = 100;
			var dist = Math.sqrt(Math.pow(pt[i].x - curYubiX, 2) + Math.pow(pt[i].y - curYubiY, 2));
			if(dist < maxDist){
				var par = (maxDist-dist)/maxDist;	//指と点が近ければ１、遠ければ０
				pt[i].setKasokudo((curYubiX - preYubiX)*par*300, (curYubiY - preYubiY)*par*300);
			}
		}
	}
	
	//描画
	pbCtx.clearRect(0, 0, screenWidth, screenHeight);
	pbCtx.lineWidth = 8;
	pbCtx.lineJoin = "round";
	pbCtx.beginPath();
	for(var i = 0; i < pt.length; ++i){
		if(i == 0){
			pbCtx.moveTo(pt[i].x, pt[i].y);
		}else{
			pbCtx.lineTo(pt[i].x, pt[i].y);
		}
	}
	pbCtx.stroke();
	
	//ボタンの描画
	pbCtx.lineWidth = 1;
	pbCtx.textAlign = "center";
	pbCtx.font = fontSize+"px 'Times New Roman'";
	if(curMode == "DRAW"){
		pbCtx.fillStyle = "black";
		pbCtx.beginPath();
		pbCtx.rect(screenWidth/2*0, 0, screenWidth/2, buttonHeight);
		pbCtx.fill();
		pbCtx.fillStyle = "white";
		pbCtx.fillText("draw", screenWidth/4, buttonHeight/2+fontSize/3);
		pbCtx.fillStyle = "black";
		pbCtx.beginPath();
		pbCtx.rect(screenWidth/2*1, 0, screenWidth/2, buttonHeight);
		pbCtx.stroke();
		pbCtx.fillText("move", screenWidth/4*3, buttonHeight/2+fontSize/3);
	}else{
		pbCtx.fillStyle = "black";
		pbCtx.beginPath();
		pbCtx.rect(screenWidth/2*0, 0, screenWidth/2, buttonHeight);
		pbCtx.stroke();
		pbCtx.fillText("draw", screenWidth/4, buttonHeight/2+fontSize/3);
		pbCtx.fillStyle = "black";
		pbCtx.beginPath();
		pbCtx.rect(screenWidth/2*1, 0, screenWidth/2, buttonHeight);
		pbCtx.fill();
		pbCtx.fillStyle = "white";
		pbCtx.fillText("move", screenWidth/4*3, buttonHeight/2+fontSize/3);
	}
}

function onPressed(n){
	//「以前の指の場所」を初期化（今の指の場所に）して
	preYubiX = curYubiX;
	preYubiY = curYubiY;
	
	if(curYubiY > buttonHeight){	//カンバス内が押されていたのなら
		if(curMode == "DRAW"){		//「描く」モードなら
			pt = new Array();		//ptとlocを初期化して、１番目の点として指の場所を入れる
			pt.push(new PhysicalPoint(curYubiX, curYubiY));
			loc = new Array();
			loc.push(new PhysicalPoint(curYubiX, curYubiY));
		}
	}else{							//ボタンが押されていたのなら
		if(curYubiX <= screenWidth/2){	//DRAWが押されていたら
			curMode = "DRAW";			//モードをDRAWに
		}else if(screenWidth/2 < curYubiX){	//MOVEが押されていたら
			curMode = "MOVE";			//モードをMOVEに
		}
	}
}

function onMove(n){
	if(curMode == "DRAW"){		//もしDRAWモードだったら
		if(curYubiTouched){
			//ptとlocに今の指の位置をどんどんと追加していく
			pt.push(new PhysicalPoint(curYubiX, curYubiY));
			loc.push(new PhysicalPoint(curYubiX, curYubiY));
		}
	}
}

function onReleased(n){
	
}
