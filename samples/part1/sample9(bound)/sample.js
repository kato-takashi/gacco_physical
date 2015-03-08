//位置の変数
var xx = 300;

//移動量の変数
var muki = 5;

function setup(){
	
}

function loop(){
	pbCtx.clearRect(0, 0, screenWidth, screenHeight);
	pbCtx.beginPath();
	pbCtx.lineWidth = 30;
	pbCtx.arc(xx, 500, 100, 0, Math.PI*2, true);
	pbCtx.stroke();
	
	//繰り返されるループで毎回mukiだけ加算される
	//最初は5なので、右に動く
	//一度右の壁にあたると-5になるので左に動く
	xx = xx + muki;

	//右の壁に当たるとmukiの値を-5にする
	if(xx > screenWidth){
		muki = -5;
	}

	//左の壁に当たるとmukiの値を5にする
	if(xx < 0){
		muki = 5;
	}

}

function onPressed(n){

}

function onMove(n){
	
}

function onReleased(n){

}
