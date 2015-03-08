var pt = new Array();
var loc = new Array();
var curPt = null;
var curLoc = null;

var buttonHeight = 50;
var fontSize = 24;

var curMode = "DRAW";	//DRAW, MOVE

function setup(){
	
}

function loop(){
	for(var i = 0; i < pt.length; ++i){
		for(var j = 0; j < pt[i].length; ++j){
			pt[i][j].setKasokudo((loc[i][j].x - pt[i][j].x)*20, (loc[i][j].y - pt[i][j].y)*20);
			if(curMode == "MOVE"){
				var maxDist = 100;
				var dist = Math.sqrt(Math.pow(pt[i][j].x - curYubiX, 2) + Math.pow(pt[i][j].y - curYubiY, 2));
				if(dist < maxDist){
					var bai = (maxDist-dist)/maxDist;
					pt[i][j].setKasokudo((curYubiX - preYubiX)*bai*300, (curYubiY - preYubiY)*bai*300);
				}
			}
		}
	}
	
	pbCtx.clearRect(0, 0, screenWidth, screenHeight);
	for(var i = 0; i < pt.length; ++i){
		pbCtx.lineWidth = 8;
		pbCtx.beginPath();
		for(var j = 0; j < pt[i].length-1; ++j){
			if(j == 0){
				pbCtx.moveTo(pt[i][j].x, pt[i][j].y);
			}else{
				pbCtx.quadraticCurveTo(pt[i][j].x, pt[i][j].y, (pt[i][j].x+pt[i][j+1].x)/2, (pt[i][j].y+pt[i][j+1].y)/2);
			}
		}
		pbCtx.stroke();
	}
	
	pbCtx.lineWidth = 1;
	pbCtx.lineCap = "round";
	pbCtx.textAlign = "center";
	pbCtx.font = fontSize+"px 'Times New Roman'";
	if(curMode == "DRAW"){
		pbCtx.fillStyle = "black";
		pbCtx.beginPath();
		pbCtx.rect(screenWidth/3*0, 0, screenWidth/3, buttonHeight);
		pbCtx.fill();
		pbCtx.fillStyle = "white";
		pbCtx.fillText("draw", screenWidth/6, buttonHeight/2+fontSize/3);
		pbCtx.fillStyle = "black";
		pbCtx.beginPath();
		pbCtx.rect(screenWidth/3*1, 0, screenWidth/3, buttonHeight);
		pbCtx.stroke();
		pbCtx.fillText("move", screenWidth/6*3, buttonHeight/2+fontSize/3);
		pbCtx.fillStyle = "black";
		pbCtx.beginPath();
		pbCtx.rect(screenWidth/3*2, 0, screenWidth/3, buttonHeight);
		pbCtx.stroke();
		pbCtx.fillText("reset", screenWidth/6*5, buttonHeight/2+fontSize/3);
	}else{
		pbCtx.fillStyle = "black";
		pbCtx.beginPath();
		pbCtx.rect(screenWidth/3*0, 0, screenWidth/3, buttonHeight);
		pbCtx.stroke();
		pbCtx.fillText("draw", screenWidth/6, buttonHeight/2+fontSize/3);
		pbCtx.fillStyle = "black";
		pbCtx.beginPath();
		pbCtx.rect(screenWidth/3*1, 0, screenWidth/3, buttonHeight);
		pbCtx.fill();
		pbCtx.fillStyle = "white";
		pbCtx.fillText("move", screenWidth/6*3, buttonHeight/2+fontSize/3);
		pbCtx.fillStyle = "black";
		pbCtx.beginPath();
		pbCtx.rect(screenWidth/3*2, 0, screenWidth/3, buttonHeight);
		pbCtx.stroke();
		pbCtx.fillText("reset", screenWidth/6*5, buttonHeight/2+fontSize/3);
	}
	
}

function onPressed(n){
	preYubiX = curYubiX;
	preYubiY = curYubiY;
	
	if(curYubiY > 100){
		if(curMode == "DRAW"){
			pt.push(new Array());
			curPt = pt[pt.length-1];
			curPt.push(new PhysicalPoint(curYubiX, curYubiY));
			loc.push(new Array());
			curLoc = loc[loc.length-1];
			curLoc.push(new Point(curYubiX, curYubiY));
		}
	}else{
		if(0 < curYubiX && curYubiX <= screenWidth/3*1){
			curMode = "DRAW";
		}else if(screenWidth/3*1 < curYubiX && curYubiX <= screenWidth/3*2){
			curMode = "MOVE";
		}else{
			curPt = null;
			curLoc = null;
			pt = new Array();
			loc = new Array();
			curMode = "DRAW"
		}
	}
}

function onMove(n){
	if(curMode == "DRAW"){
		if(curYubiTouched){
			if(curPt != null && curLoc != null){
				curPt.push(new PhysicalPoint(curYubiX, curYubiY));
				curLoc.push(new Point(curYubiX, curYubiY));
			}
		}
	}
}

function onReleased(n){
	preYubiX = curYubiX;
	preYubiY = curYubiY;
}
