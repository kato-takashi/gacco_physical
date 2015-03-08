var pt = new Array();
var pressedNum = -1;	//押されている点の番号

function setup(){
	for(var i = 0; i < 12; ++i){
		var xx = Math.random()*screenWidth;
		var yy = Math.random()*screenHeight;
		pt.push(new PhysicalPoint(xx, yy));
	}
}

function loop(){
	//位置の計算
	for(var i = 0; i < pt.length; ++i){	//それぞれの点について
		if(i != pressedNum){	//それがタッチされていなかったら（タッチされているときはelseで処理）
			for(var j = 0; j < pt.length; ++j){	//別の点に対して
				if(i != j){						//（自分自身じゃなかったら）
					//お互いの距離と向きを計算して
					var dist = Math.sqrt(	Math.pow(pt[i].x - pt[j].x, 2) 
											+ Math.pow(pt[i].y - pt[j].y, 2));
					var dire = Math.atan2(pt[j].y - pt[i].y, pt[j].x - pt[i].x);
					var theDistance = 300;
					if(dist > theDistance){	//遠ければ近づける（相手の方向に加速する）
						pt[i].setKasokudoByPolar(Math.abs(dist-theDistance)*5, dire);
					}else{					//近ければ遠ざける（相手の反対方向に加速する）
						pt[i].setKasokudoByPolar(Math.abs(dist-theDistance)*5, 
													dire+Math.PI);
					}
					
				}
			}
		}else{		//タッチされてるのならその点は指の位置にする
			pt[i].x = curYubiX;
			pt[i].y = curYubiY;
		}
	}

	//描画
	pbCtx.clearRect(0, 0, screenWidth, screenHeight);
	for(var i = 0; i < pt.length; ++i){
		pbCtx.beginPath();
		pbCtx.arc(pt[i].x, pt[i].y, 30, 0, Math.PI*2, true);
		pbCtx.fill();
	}
}

function onPressed(n){
	//押された点の番号をpressedNumに入れる
	for(var i = 0; i < pt.length; ++i){
		//ptと指の距離を計算する
		var dist = Math.sqrt(	Math.pow(pt[i].x - curYubiX, 2) 
								+ Math.pow(pt[i].y - curYubiY, 2));
		if(dist < 30)	pressedNum = i;	//距離が30以内だったら「押されている」ということで
										//pressedNumにその値を入れる
	}
}

function onMove(n){
	
}

function onReleased(n){
	//指が放されたなら、「押されていない」ので-1にする
	pressedNum = -1;
}
