var pt = new Array();	//動く点（配列）
var loc = new Array();	//それぞれの点のホームポジション（配列、ptと一対一で対応）
var interval = 25;		//点の間隔
var yokoNum = 30;		//横方向の数
var tateNum = 30;		//縦方向の数

function setup(){
	//点の位置の決定
	//縦方向と横方向なので二重のfor文
	//（ただし配列は二元配列ではない、一元配列でそれぞれにPhysicalPoint型で位置情報が入っている）
	for(var i = 0; i < tateNum; ++i){
		for(var j = 0; j < yokoNum; ++j){
			//横位置の決定
			//スクリーン中央から、並べる点の全幅の半分を引くと、並べる左端の位置がわかるので、
			//そこからj個分のinterbalだけ進めたところが点の位置
			var yokoLoc = screenWidth/2-(yokoNum-1)*interval/2+j*interval;
			//縦位置の決定
			var tateLoc = screenHeight/2-(tateNum-1)*interval/2+i*interval;
			loc.push(new PhysicalPoint(yokoLoc, tateLoc));
			pt.push(new PhysicalPoint(yokoLoc, tateLoc));
		}
	}
}

function loop(){
	//加速
	for(var i = 0; i < pt.length; ++i){
		//自分の場所に向けて加速する
		pt[i].setKasokudo((loc[i].x-pt[i].x)*10, (loc[i].y-pt[i].y)*10);
		
		if(curYubiTouched){
			var maxDist = 50;	//影響範囲
			//指と点の距離を測る（ピタゴラスの定理）
			var dist = Math.sqrt(Math.pow(pt[i].x - curYubiX, 2) 
									+ Math.pow(pt[i].y - curYubiY, 2));
			
			if(dist < maxDist){	//もし、距離が影響範囲内だったら
				var par = (maxDist-dist)/maxDist;	//距離からパラメータ（０〜１）を計算
													//近ければ１、遠ければ０
				pt[i].setKasokudo(	(pt[i].x - curYubiX)*par*200, 
									(pt[i].y - curYubiY)*par*200);
			}
		}
	}

	//描画
	pbCtx.clearRect(0, 0, screenWidth, screenHeight);
	for(var i = 0; i < pt.length; ++i){
		pbCtx.beginPath();
		pbCtx.arc(pt[i].x, pt[i].y, 6, 0, Math.PI*2, true);
		pbCtx.fill();
	}
}

function onPressed(n){
	
}

function onMove(n){
	
}

function onReleased(n){
	
}
