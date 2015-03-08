//点の配列
var xx = new Array(50, 700, 70, 600, 20, 650, 100);
var yy = new Array(50, 200, 350, 530, 680, 820, 980);

function setup(){
	
}

function loop(){
//	指がタッチされていたら、xx[3],yy[3]を指の場所に変更する
//	if(curYubiTouched){
//		xx[3] = curYubiX;
//		yy[3] = curYubiY;
//	}
	
	pbCtx.clearRect(0, 0, screenWidth, screenHeight);
	//単純に点の順番に曲線を描く
	pbCtx.lineWidth = 5;
	pbCtx.strokeStyle = 'rgb(0, 0, 0)';
	pbCtx.beginPath();
	for(var i = 0; i < xx.length; i = i+2){	//quadraticCurveToは２個ずつ点を使うので
		if(i == 0){
			pbCtx.moveTo(xx[i], yy[i]);
		}else{
			//iの一つ前を寄り道して、iまでの曲線を描く
			pbCtx.quadraticCurveTo(xx[i-1], yy[i-1], xx[i], yy[i]);
		}
		
	}
	pbCtx.stroke();

	//それぞれの点の中点をコントロールポイントにすると折れ曲がらない
	pbCtx.lineWidth = 5;
	pbCtx.strokeStyle = 'rgb(255, 0, 0)';
	pbCtx.beginPath();
	//自分と一つ先の点との中点なので、最後の点には次の点がないので、-1をしている
	for(var i = 0; i < xx.length-1; i = i+1){
		if(i == 0){
			//最初は、0と1の中点までmoveTo
			pbCtx.moveTo((xx[i]+xx[i+1])/2, (yy[i]+yy[i+1])/2);
		}else{
			//自身を寄り道して、自身と次の点の中点まで曲線を描く
			pbCtx.quadraticCurveTo(xx[i], yy[i], (xx[i]+xx[i+1])/2, (yy[i]+yy[i+1])/2);
		}
		
	}
	pbCtx.stroke();

	//補助線的描画
	//それぞれの点に丸を描く
	for(var i = 0; i < xx.length-1; i = i+1){
		pbCtx.beginPath();
		pbCtx.arc((xx[i]+xx[i+1])/2, (yy[i]+yy[i+1])/2, 5, 0, Math.PI*2, true);
		pbCtx.fill();
	}

	//点を順番に直線で結ぶ
	pbCtx.lineWidth = 1;
	pbCtx.strokeStyle = 'rgb(127, 127, 127)';
	pbCtx.beginPath();
	for(var i = 0; i < xx.length; ++i){
		if(i == 0){
			pbCtx.moveTo(xx[i], yy[i]);
		}else{
			pbCtx.lineTo(xx[i], yy[i]);
		}
		
	}
	pbCtx.stroke();
}

function onPressed(n){

}

function onMove(n){
	
}

function onReleased(n){

}
