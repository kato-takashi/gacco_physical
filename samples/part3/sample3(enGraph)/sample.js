//円グラフのそれぞれのモード（年）での値（%）
var value = [	[12.5,12.5,12.5,12.5,12.5,12.5,12.5,12.5],
				[2.77,5.55,8.33,11.11,13.88,16.66,19.44,22.22],
				[22.22,19.44,16.66,13.88,11.11,8.33,5.55,2.77],
				[6.03,11.33,15.27,17.36,17.36,15.27,11.33,6.03],
				[17.36,15.27,11.33,6.03,6.03,11.33,15.27,17.36],
				[8.33,16.66,8.33,16.66,8.33,16.66,8.33,16.66],
				[5,10,15,20,5,10,15,20],
				[16.66,8.33,16.66,8.33,16.66,8.33,16.66,8.33]
			];

//円グラフのそれぞれの色
var col = [	'rgb(100,100,100)',
			'rgb(170,170,170)',
			'rgb(120,120,120)',
			'rgb(190,190,190)',
			'rgb(140,140,140)',
			'rgb(210,210,210)',
			'rgb(160,160,160)',
			'rgb(230,230,230)'];
			
var pt = new Array();	//円グラフのそれぞれの値を配列で管理
var hankei = new Array();	//円グラフのそれぞれの半径を配列で管理
var mode = 0;		//モード（年）の管理

function setup(){
	//円グラフの値管理の変数の初期化
	for(var i = 0; i < 10; i = i+1){
		pt[i] = new PhysicalPoint(0);
		pt[i].b = 0.8;
		hankei[i] = new PhysicalPoint(270);
		hankei[i].b = 0.8;
	}
}

//モードの変更
//html側に配置した<img>から実行される
function changeMode(n){
	mode = Number(n);	//モードを指定の値にする
	//モードがかわったので、抑揚をつけるために半径に大きなランダムな加速をつける
	for(var i = 0; i < hankei.length; ++i){
		hankei[i].setKasokudo(1000+50000*Math.random());	//1000〜51000
	}
}

function loop(){
	//円グラフの値を現在のモードの値に向けて加速して、
	//半径は（モードがかわったときにビヨヨンとなったので）
	//270に向けて加速して（徐々に安定させる）
	for(var i = 0; i < pt.length; ++i){
		pt[i].setKasokudo((value[mode][i] - pt[i].x)*60);
		hankei[i].setKasokudo((270 - hankei[i].x)*200);
	}
	
	//描画
	pbCtx.clearRect(0, 0, screenWidth, screenHeight);
	//順番に扇形を描いていくので、「現在まで描いている扇形の角度」の変数
	var curKakudo = -Math.PI/2;	//真上は-90度
	//円グラフを順番に描く
	for(var i = 0; i < pt.length; ++i){
		if(pt[i].x > 0){
			var kakudo = pt[i].x/100*Math.PI*2;	//今の円グラフの角度を計算
			pbCtx.lineWidth = 3;
			pbCtx.beginPath();
			pbCtx.fillStyle = col[i];	//あらかじめの色を設定する
			pbCtx.strokeStyle = 'rgb(0, 0, 0)';
			pbCtx.moveTo(screenWidth/2, screenHeight/2);
			//「現在まで描いている扇形の角度」から「現在の扇形の角度」まで扇形を描く
			pbCtx.arc(screenWidth/2, screenHeight/2, hankei[i].x, curKakudo, curKakudo+kakudo, false);
			pbCtx.lineTo(screenWidth/2, screenHeight/2);
			pbCtx.fill();
			pbCtx.stroke();
			
			curKakudo += kakudo;	//現在の扇形を描いたので、次の描画のために
									//「現在まで描いている扇形の角度」に「現在の扇形の角度」を
									//加算しておく
		}
	}
}

function onPressed(n){
	
}

function onMove(n){
	
}

function onReleased(n){
	
}
