var preYubiX0 = 0;	//１ループ前の指の位置
var preYubiY0 = 0;
var preYubiX1 = 0;
var preYubiY1 = 0;
var curKakudo = 0;	//現在の角度（ラジアン）
var curX = screenWidth/2;	//現在の位置
var curY = screenHeight/2;
var curSize = 0.5;	//現在のサイズ(倍率)
var imgWidth = 768;	//読み込む画像のサイズ
var imgHeight = 1024;
var img = new Image();	//画像用変数

function setup(){
	//画像を読み込む
	img.src = "img/face.png";
}

function loop(){
	//描画
	pbCtx.clearRect(0, 0, screenWidth, screenHeight);

	pbCtx.save();	//現在の描画状態を保存する
	pbCtx.translate(curX, curY);	//Canvasを画像を描く位置まで移動する
	pbCtx.rotate(curKakudo);		//Canvasを回転する
	//画像の中央を中心にして描画
	pbCtx.drawImage(img, -imgWidth*curSize/2, -imgHeight*curSize/2, 
					imgWidth*curSize, imgHeight*curSize);
	pbCtx.restore();	//描画状態を元に戻す
}

function onPressed(n){
	if(yubiNum == 2){
		//「前の指の位置」と「前の指の中間位置」を計算しておく
		preYubiX0 = yubiX[0];
		preYubiY0 = yubiY[0];
		preYubiX1 = yubiX[1];
		preYubiY1 = yubiY[1];
	}
}

function onMove(n){
	if(yubiNum == 2){
		//画像の位置を２本の指の中間の位置にする
		curX = (yubiX[0] + yubiX[1])/2;
		curY = (yubiY[0] + yubiY[1])/2;
		
		//今の２本指の距離をcurDistに１ループ前の２本指の距離をpreDistに計算
		var curDist = Math.sqrt(Math.pow(yubiX[0]-yubiX[1], 2)+Math.pow(yubiY[0]-yubiY[1], 2));
		var preDist = Math.sqrt(Math.pow(preYubiX0-preYubiX1, 2)+Math.pow(preYubiY0-preYubiY1, 2));
		if(preDist > 1){	//preDistが１ピクセル以上だったら（０割を防ぐため）
			var bairitsu = curDist / preDist;	//指の間隔の変化率を倍率とする
			curSize *= bairitsu;
			if(curSize > 2)	curSize = 2;
			else if(curSize < 0.2)	curSize = 0.2;
		}
		
		//角度の計算
		//２本の指の角度を計算
		var curAngle = Math.atan2(yubiY[1]-yubiY[0], yubiX[1]-yubiX[0]);
		var preAngle = Math.atan2(preYubiY1-preYubiY0, preYubiX1-preYubiX0);
		
		//curKakudoに角度の変化を加算する
		curKakudo += curAngle - preAngle;
	
		preYubiX0 = yubiX[0];
		preYubiY0 = yubiY[0];
		preYubiX1 = yubiX[1];
		preYubiY1 = yubiY[1];
		
	}
}

function onReleased(n){
	
}
