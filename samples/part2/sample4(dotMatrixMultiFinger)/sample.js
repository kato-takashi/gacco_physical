var ppt = new Array();
var loc = new Array();
var interval = 25;
var yokoNum = 25;
var tateNum = 25;

function setup(){
	for(var i = 0; i < tateNum; ++i){
		for(var j = 0; j < yokoNum; ++j){
			var yokoLoc = screenWidth/2-(yokoNum-1)/2*interval+j*interval;
			var tateLoc = screenHeight/2-(tateNum-1)/2*interval+i*interval;
			ppt.push(new PhysicalPoint(yokoLoc, tateLoc));
			loc.push(new PhysicalPoint(yokoLoc, tateLoc));
		}
	}
}

function loop(){
	for(var i = 0; i < ppt.length; ++i){
		
		ppt[i].setKasokudo((loc[i].x-ppt[i].x)*10, (loc[i].y-ppt[i].y)*10);
		
			for(var j=0; j < yubiNum; ++j){
				var maxDist = 50;
				var dist = Math.sqrt(Math.pow(ppt[i].x - yubiX[j], 2) + Math.pow(ppt[i].y - yubiY[j], 2));
				
				if(dist < maxDist){
					var par = (maxDist-dist)/maxDist;
					ppt[i].setKasokudo((ppt[i].x - yubiX[j])*par*200, (ppt[i].y - yubiY[j])*par*200);
				}
			}
	}

	pbCtx.clearRect(0, 0, screenWidth, screenHeight);
	for(var i = 0; i < ppt.length; ++i){
		pbCtx.beginPath();
		pbCtx.arc(ppt[i].x, ppt[i].y, 6, 0, Math.PI*2, true);
		pbCtx.fill();
	}
}

function onPressed(n){
	
}

function onMove(n){
	
}

function onReleased(n){
	
}
