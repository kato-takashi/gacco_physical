var acx = 0;
var acy = 0;
var acz = 0;
var agx = 0;
var agy = 0;
var agz = 0;

var pt = new Array();	//動く点
var loc = new Array();	//自分の位置
var interval = 25;		//点の間隔
var yokoNum = 25;		//横に並ぶ数
var tateNum = 25;		//縦に並ぶ数

//「あ」のデータ（加速にかける倍率）
var aData = [0.3, 0.3, 0.3, 0.3, 0.3, 0.3, 0.3, 0.3, 0.3, 0.3, 0.3, 0.3, 0.3, 0.3, 0.3, 0.3, 0.3, 0.3, 0.3, 0.3, 0.3, 0.3, 0.3, 0.3, 0.3, 
0.3, 0.3, 0.3, 0.3, 0.3, 0.3, 0.3, 0.3, 0.3, 0.8133, 0.8133, 0.8133, 0.3, 0.3, 0.3, 0.3, 0.3, 0.3, 0.3, 0.3, 0.3, 0.3, 0.3, 0.3, 0.3, 
0.3, 0.3, 0.3, 0.3, 0.3, 0.3, 0.3, 0.3, 0.3, 1, 1, 0.8133, 0.3, 0.3, 0.3, 0.3, 0.3, 0.3, 0.3, 0.3, 0.3, 0.3, 0.3, 0.3, 0.3, 
0.3, 0.3, 0.3, 0.3, 0.3, 0.3, 0.3, 0.3, 0.3, 1, 1, 0.8133, 0.3, 0.3, 0.3, 0.3, 0.3933, 0.4867, 0.6267, 0.72, 0.72, 0.3, 0.3, 0.3, 0.3, 
0.3, 0.3, 0.3, 0.3, 0.86, 0.8133, 0.72, 0.6267, 0.6267, 1, 1, 0.9067, 0.8133, 0.8133, 0.9067, 1, 1, 1, 1, 1, 0.8133, 0.3, 0.3, 0.3, 0.3, 
0.3, 0.3, 0.3, 0.3, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0.72, 0.3, 0.3, 0.3, 0.3, 
0.3, 0.3, 0.3, 0.3, 0.8133, 0.8133, 0.8133, 0.8133, 0.86, 1, 1, 0.9067, 0.8133, 0.7667, 0.6267, 0.6267, 0.58, 0.4867, 0.3933, 0.3, 0.3, 0.3, 0.3, 0.3, 0.3, 
0.3, 0.3, 0.3, 0.3, 0.3, 0.3, 0.3, 0.3, 0.4867, 1, 1, 0.6267, 0.3, 0.3, 0.3, 0.3467, 0.9067, 0.72, 0.4867, 0.3, 0.3, 0.3, 0.3, 0.3, 0.3, 
0.3, 0.3, 0.3, 0.3, 0.3, 0.3, 0.3, 0.3, 0.4867, 1, 1, 0.4867, 0.3933, 0.4867, 0.4867, 0.6267, 1, 1, 0.6267, 0.3, 0.3, 0.3, 0.3, 0.3, 0.3, 
0.3, 0.3, 0.3, 0.3, 0.3, 0.3, 0.3, 0.3, 0.5333, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0.72, 0.3933, 0.3, 0.3, 0.3, 0.3, 0.3, 
0.3, 0.3, 0.3, 0.3, 0.3, 0.3, 0.3467, 0.72, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0.6267, 0.3, 0.3, 0.3, 0.3, 
0.3, 0.3, 0.3, 0.3, 0.3, 0.44, 0.9067, 1, 1, 1, 1, 0.6267, 0.3933, 0.3, 0.58, 1, 1, 0.9067, 1, 1, 1, 0.72, 0.3, 0.3, 0.3, 
0.3, 0.3, 0.3, 0.3, 0.3933, 0.9533, 1, 1, 0.9067, 1, 1, 0.4867, 0.3, 0.3, 0.9067, 1, 0.9067, 0.3, 0.5333, 0.9533, 1, 1, 0.58, 0.3, 0.3, 
0.3, 0.3, 0.3, 0.3, 0.8133, 1, 1, 0.72, 0.4867, 1, 1, 0.4867, 0.3, 0.6267, 1, 1, 0.58, 0.3, 0.3, 0.6267, 1, 1, 0.8133, 0.3, 0.3, 
0.3, 0.3, 0.3, 0.58, 1, 1, 0.7667, 0.3, 0.4867, 1, 1, 0.5333, 0.3933, 0.9533, 1, 0.9067, 0.3, 0.3, 0.3, 0.3467, 1, 1, 1, 0.3, 0.3, 
0.3, 0.3, 0.3, 0.7667, 1, 1, 0.3933, 0.3, 0.3933, 1, 1, 0.6733, 0.86, 1, 1, 0.4867, 0.3, 0.3, 0.3, 0.3, 1, 1, 1, 0.3, 0.3, 
0.3, 0.3, 0.3, 0.9533, 1, 0.86, 0.3, 0.3, 0.3, 1, 1, 0.9533, 1, 1, 0.6733, 0.3, 0.3, 0.3, 0.3, 0.5333, 1, 1, 0.9067, 0.3, 0.3, 
0.3, 0.3, 0.3, 1, 1, 0.8133, 0.3, 0.3, 0.3, 0.9067, 1, 1, 1, 0.7667, 0.3, 0.3, 0.3, 0.3, 0.3467, 0.86, 1, 1, 0.6733, 0.3, 0.3, 
0.3, 0.3, 0.3, 0.9067, 1, 1, 0.44, 0.3467, 0.6267, 0.9533, 1, 1, 0.86, 0.3467, 0.3, 0.3, 0.3, 0.4867, 0.9067, 1, 1, 0.9533, 0.3933, 0.3, 0.3, 
0.3, 0.3, 0.3, 0.72, 1, 1, 1, 1, 1, 1, 1, 0.7667, 0.44, 0.4867, 0.4867, 0.6267, 0.9067, 1, 1, 1, 1, 0.58, 0.3, 0.3, 0.3, 
0.3, 0.3, 0.3, 0.3467, 0.86, 1, 1, 1, 1, 0.9533, 0.6267, 0.3, 0.3467, 0.9533, 1, 1, 1, 1, 1, 0.9067, 0.4867, 0.3, 0.3, 0.3, 0.3, 
0.3, 0.3, 0.3, 0.3, 0.3467, 0.6267, 0.8133, 0.8133, 0.6267, 0.3467, 0.3, 0.3, 0.3, 0.6267, 1, 1, 1, 0.9067, 0.6267, 0.3467, 0.3, 0.3, 0.3, 0.3, 0.3, 
0.3, 0.3, 0.3, 0.3, 0.3, 0.3, 0.3, 0.3, 0.3, 0.3, 0.3, 0.3, 0.3, 0.44, 0.6267, 0.6267, 0.44, 0.3, 0.3, 0.3, 0.3, 0.3, 0.3, 0.3, 0.3, 
0.3, 0.3, 0.3, 0.3, 0.3, 0.3, 0.3, 0.3, 0.3, 0.3, 0.3, 0.3, 0.3, 0.3, 0.3, 0.3, 0.3, 0.3, 0.3, 0.3, 0.3, 0.3, 0.3, 0.3, 0.3, 
0.3, 0.3, 0.3, 0.3, 0.3, 0.3, 0.3, 0.3, 0.3, 0.3, 0.3, 0.3, 0.3, 0.3, 0.3, 0.3, 0.3, 0.3, 0.3, 0.3, 0.3, 0.3, 0.3, 0.3, 0.3];

//「い」のデータ（加速にかける倍率）
var iData = [0.3, 0.3, 0.3, 0.3, 0.3, 0.3, 0.3, 0.3, 0.3, 0.3, 0.3, 0.3, 0.3, 0.3, 0.3, 0.3, 0.3, 0.3, 0.3, 0.3, 0.3, 0.3, 0.3, 0.3, 0.3, 
0.3, 0.3, 0.3, 0.3, 0.3, 0.3, 0.3, 0.3, 0.3, 0.3, 0.3, 0.3, 0.3, 0.3, 0.3, 0.3, 0.3, 0.3, 0.3, 0.3, 0.3, 0.3, 0.3, 0.3, 0.3, 
0.3, 0.3, 0.3, 0.3, 0.3, 0.3, 0.3, 0.3, 0.3, 0.3, 0.3, 0.3, 0.3, 0.3, 0.3, 0.3, 0.3, 0.3, 0.3, 0.3, 0.3, 0.3, 0.3, 0.3, 0.3, 
0.3, 0.3, 0.3, 0.4867, 0.6267, 0.6267, 0.58, 0.3, 0.3, 0.3, 0.3, 0.3, 0.3, 0.3, 0.3, 0.3, 0.3, 0.3, 0.3, 0.3, 0.3, 0.3, 0.3, 0.3, 0.3, 
0.3, 0.3, 0.3, 0.4867, 1, 1, 0.8133, 0.3, 0.3, 0.3, 0.3, 0.3, 0.3, 0.3, 0.3, 0.3, 0.3, 0.44, 0.44, 0.3, 0.3, 0.3, 0.3, 0.3, 0.3, 
0.3, 0.3, 0.3, 0.4867, 1, 1, 0.8133, 0.3, 0.3, 0.3, 0.3, 0.3, 0.3, 0.3, 0.3, 0.3933, 0.8133, 1, 0.9533, 0.3467, 0.3, 0.3, 0.3, 0.3, 0.3, 
0.3, 0.3, 0.3, 0.4867, 1, 1, 0.8133, 0.3, 0.3, 0.3, 0.3, 0.3, 0.3, 0.3, 0.3, 0.3, 0.7667, 1, 1, 0.8133, 0.3, 0.3, 0.3, 0.3, 0.3, 
0.3, 0.3, 0.3, 0.4867, 1, 1, 0.8133, 0.3, 0.3, 0.3, 0.3, 0.3, 0.3, 0.3, 0.3, 0.3, 0.3467, 0.9533, 1, 1, 0.58, 0.3, 0.3, 0.3, 0.3, 
0.3, 0.3, 0.3, 0.4867, 1, 1, 0.8133, 0.3, 0.3, 0.3, 0.3, 0.3, 0.3, 0.3, 0.3, 0.3, 0.3, 0.58, 1, 1, 0.9067, 0.3, 0.3, 0.3, 0.3, 
0.3, 0.3, 0.3, 0.4867, 1, 1, 0.8133, 0.3, 0.3, 0.3, 0.3, 0.3, 0.3, 0.3, 0.3, 0.3, 0.3, 0.3, 0.9067, 1, 1, 0.58, 0.3, 0.3, 0.3, 
0.3, 0.3, 0.3, 0.3933, 1, 1, 0.8133, 0.3, 0.3, 0.3, 0.3, 0.3, 0.3, 0.3, 0.3, 0.3, 0.3, 0.3, 0.58, 1, 1, 0.9067, 0.3, 0.3, 0.3, 
0.3, 0.3, 0.3, 0.3, 1, 1, 0.9067, 0.3, 0.3, 0.3, 0.3, 0.3, 0.3, 0.3, 0.3, 0.3, 0.3, 0.3, 0.3, 0.9533, 1, 1, 0.44, 0.3, 0.3, 
0.3, 0.3, 0.3, 0.3, 1, 1, 1, 0.3, 0.3, 0.3, 0.3, 0.6267, 0.3, 0.3, 0.3, 0.3, 0.3, 0.3, 0.3, 0.72, 1, 1, 0.6733, 0.3, 0.3, 
0.3, 0.3, 0.3, 0.3, 0.8133, 1, 1, 0.3933, 0.3, 0.3, 0.3, 1, 0.72, 0.3467, 0.3, 0.3, 0.3, 0.3, 0.3, 0.5333, 1, 1, 0.9067, 0.3, 0.3, 
0.3, 0.3, 0.3, 0.3, 0.72, 1, 1, 0.5333, 0.3, 0.3, 0.4867, 1, 1, 0.72, 0.3, 0.3, 0.3, 0.3, 0.3, 0.3, 1, 1, 1, 0.3467, 0.3, 
0.3, 0.3, 0.3, 0.3, 0.6267, 1, 1, 0.72, 0.3, 0.3, 0.72, 1, 1, 0.58, 0.3, 0.3, 0.3, 0.3, 0.3, 0.3, 0.8133, 1, 1, 0.4867, 0.3, 
0.3, 0.3, 0.3, 0.3, 0.3933, 1, 1, 0.9533, 0.3467, 0.3467, 0.9533, 1, 1, 0.3467, 0.3, 0.3, 0.3, 0.3, 0.3, 0.3, 0.72, 1, 1, 0.6267, 0.3, 
0.3, 0.3, 0.3, 0.3, 0.3, 0.86, 1, 1, 0.86, 0.7667, 1, 1, 0.72, 0.3, 0.3, 0.3, 0.3, 0.3, 0.3, 0.3, 0.6267, 1, 0.86, 0.4867, 0.3, 
0.3, 0.3, 0.3, 0.3, 0.3, 0.5333, 1, 1, 1, 1, 1, 1, 0.4867, 0.3, 0.3, 0.3, 0.3, 0.3, 0.3, 0.3, 0.4867, 0.44, 0.3, 0.3, 0.3, 
0.3, 0.3, 0.3, 0.3, 0.3, 0.3, 0.72, 1, 1, 1, 1, 0.6733, 0.3, 0.3, 0.3, 0.3, 0.3, 0.3, 0.3, 0.3, 0.3, 0.3, 0.3, 0.3, 0.3, 
0.3, 0.3, 0.3, 0.3, 0.3, 0.3, 0.3, 0.6733, 0.9533, 0.9533, 0.6733, 0.3, 0.3, 0.3, 0.3, 0.3, 0.3, 0.3, 0.3, 0.3, 0.3, 0.3, 0.3, 0.3, 0.3, 
0.3, 0.3, 0.3, 0.3, 0.3, 0.3, 0.3, 0.3, 0.3, 0.3, 0.3, 0.3, 0.3, 0.3, 0.3, 0.3, 0.3, 0.3, 0.3, 0.3, 0.3, 0.3, 0.3, 0.3, 0.3, 
0.3, 0.3, 0.3, 0.3, 0.3, 0.3, 0.3, 0.3, 0.3, 0.3, 0.3, 0.3, 0.3, 0.3, 0.3, 0.3, 0.3, 0.3, 0.3, 0.3, 0.3, 0.3, 0.3, 0.3, 0.3, 
0.3, 0.3, 0.3, 0.3, 0.3, 0.3, 0.3, 0.3, 0.3, 0.3, 0.3, 0.3, 0.3, 0.3, 0.3, 0.3, 0.3, 0.3, 0.3, 0.3, 0.3, 0.3, 0.3, 0.3, 0.3, 
0.3, 0.3, 0.3, 0.3, 0.3, 0.3, 0.3, 0.3, 0.3, 0.3, 0.3, 0.3, 0.3, 0.3, 0.3, 0.3, 0.3, 0.3, 0.3, 0.3, 0.3, 0.3, 0.3, 0.3, 0.3];

//「う」のデータ（加速にかける倍率）
var uData = [0.3, 0.3, 0.3, 0.3, 0.3, 0.3, 0.3, 0.3, 0.3, 0.3, 0.3, 0.3, 0.3, 0.3, 0.3, 0.3, 0.3, 0.3, 0.3, 0.3, 0.3, 0.3, 0.3, 0.3, 0.3, 
0.3, 0.3, 0.3, 0.3, 0.3, 0.3, 0.3, 0.3933, 0.44, 0.3, 0.3, 0.3, 0.3, 0.3, 0.3, 0.3, 0.3, 0.3, 0.3, 0.3, 0.3, 0.3, 0.3, 0.3, 0.3, 
0.3, 0.3, 0.3, 0.3, 0.3, 0.3, 0.3, 0.6733, 1, 0.9533, 0.8133, 0.6267, 0.58, 0.4867, 0.4867, 0.3467, 0.3, 0.3, 0.3, 0.3, 0.3, 0.3, 0.3, 0.3, 0.3, 
0.3, 0.3, 0.3, 0.3, 0.3, 0.3, 0.3, 0.9067, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0.58, 0.3, 0.3, 0.3, 0.3, 0.3, 0.3, 
0.3, 0.3, 0.3, 0.3, 0.3, 0.3, 0.3467, 0.6733, 0.8133, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0.4867, 0.3, 0.3, 0.3, 0.3, 0.3, 0.3, 
0.3, 0.3, 0.3, 0.3, 0.3, 0.3, 0.3, 0.3, 0.3, 0.3, 0.44, 0.5333, 0.6267, 0.6267, 0.8133, 0.8133, 0.8133, 0.9533, 0.3467, 0.3, 0.3, 0.3, 0.3, 0.3, 0.3, 
0.3, 0.3, 0.3, 0.3, 0.3, 0.3, 0.3, 0.3, 0.3, 0.3, 0.3, 0.3, 0.3, 0.3, 0.3, 0.3, 0.3, 0.3, 0.3, 0.3, 0.3, 0.3, 0.3, 0.3, 0.3, 
0.3, 0.3, 0.3, 0.3, 0.3, 0.3, 0.3, 0.3, 0.3, 0.3, 0.3, 0.3, 0.3, 0.3, 0.3, 0.3, 0.3, 0.3, 0.3, 0.3, 0.3, 0.3, 0.3, 0.3, 0.3, 
0.3, 0.3, 0.3, 0.3, 0.3, 0.3, 0.3933, 0.4867, 0.6267, 0.72, 0.8133, 0.86, 1, 1, 1, 1, 0.86, 0.72, 0.4867, 0.3, 0.3, 0.3, 0.3, 0.3, 0.3, 
0.3, 0.3, 0.3, 0.3, 0.7667, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0.6733, 0.3, 0.3, 0.3, 0.3, 0.3, 
0.3, 0.3, 0.3, 0.3, 0.7667, 1, 1, 1, 1, 1, 1, 1, 0.8133, 0.8133, 0.8133, 0.9067, 1, 1, 1, 1, 0.6267, 0.3, 0.3, 0.3, 0.3, 
0.3, 0.3, 0.3, 0.3, 0.6267, 1, 0.9067, 0.72, 0.6267, 0.4867, 0.3467, 0.3, 0.3, 0.3, 0.3, 0.3, 0.3933, 0.86, 1, 1, 0.9533, 0.3, 0.3, 0.3, 0.3, 
0.3, 0.3, 0.3, 0.3, 0.3933, 0.3933, 0.3, 0.3, 0.3, 0.3, 0.3, 0.3, 0.3, 0.3, 0.3, 0.3, 0.3, 0.44, 1, 1, 1, 0.44, 0.3, 0.3, 0.3, 
0.3, 0.3, 0.3, 0.3, 0.3, 0.3, 0.3, 0.3, 0.3, 0.3, 0.3, 0.3, 0.3, 0.3, 0.3, 0.3, 0.3, 0.3, 1, 1, 1, 0.4867, 0.3, 0.3, 0.3, 
0.3, 0.3, 0.3, 0.3, 0.3, 0.3, 0.3, 0.3, 0.3, 0.3, 0.3, 0.3, 0.3, 0.3, 0.3, 0.3, 0.3, 0.3933, 1, 1, 1, 0.3933, 0.3, 0.3, 0.3, 
0.3, 0.3, 0.3, 0.3, 0.3, 0.3, 0.3, 0.3, 0.3, 0.3, 0.3, 0.3, 0.3, 0.3, 0.3, 0.3, 0.3, 0.72, 1, 1, 0.9067, 0.3, 0.3, 0.3, 0.3, 
0.3, 0.3, 0.3, 0.3, 0.3, 0.3, 0.3, 0.3, 0.3, 0.3, 0.3, 0.3, 0.3, 0.3, 0.3, 0.3, 0.58, 1, 1, 1, 0.6267, 0.3, 0.3, 0.3, 0.3, 
0.3, 0.3, 0.3, 0.3, 0.3, 0.3, 0.3, 0.3, 0.3, 0.3, 0.3, 0.3, 0.3, 0.3, 0.3467, 0.6733, 1, 1, 1, 0.86, 0.3, 0.3, 0.3, 0.3, 0.3, 
0.3, 0.3, 0.3, 0.3, 0.3, 0.3, 0.3, 0.3, 0.3, 0.3, 0.3, 0.3, 0.5333, 0.72, 0.9533, 1, 1, 1, 0.86, 0.3467, 0.3, 0.3, 0.3, 0.3, 0.3, 
0.3, 0.3, 0.3, 0.3, 0.3, 0.3, 0.3, 0.3467, 0.6267, 0.7667, 0.8133, 1, 1, 1, 1, 1, 1, 0.8133, 0.3467, 0.3, 0.3, 0.3, 0.3, 0.3, 0.3, 
0.3, 0.3, 0.3, 0.3, 0.3, 0.3, 0.3, 0.3, 0.72, 1, 1, 1, 1, 1, 1, 0.9067, 0.5333, 0.3, 0.3, 0.3, 0.3, 0.3, 0.3, 0.3, 0.3, 
0.3, 0.3, 0.3, 0.3, 0.3, 0.3, 0.3, 0.3, 0.3933, 1, 1, 1, 0.9067, 0.72, 0.4867, 0.3, 0.3, 0.3, 0.3, 0.3, 0.3, 0.3, 0.3, 0.3, 0.3, 
0.3, 0.3, 0.3, 0.3, 0.3, 0.3, 0.3, 0.3, 0.3, 0.6267, 0.4867, 0.3467, 0.3, 0.3, 0.3, 0.3, 0.3, 0.3, 0.3, 0.3, 0.3, 0.3, 0.3, 0.3, 0.3, 
0.3, 0.3, 0.3, 0.3, 0.3, 0.3, 0.3, 0.3, 0.3, 0.3, 0.3, 0.3, 0.3, 0.3, 0.3, 0.3, 0.3, 0.3, 0.3, 0.3, 0.3, 0.3, 0.3, 0.3, 0.3, 
0.3, 0.3, 0.3, 0.3, 0.3, 0.3, 0.3, 0.3, 0.3, 0.3, 0.3, 0.3, 0.3, 0.3, 0.3, 0.3, 0.3, 0.3, 0.3, 0.3, 0.3, 0.3, 0.3, 0.3, 0.3];

//「え」のデータ（加速にかける倍率）
var eData = [0.3, 0.3, 0.3, 0.3, 0.3, 0.3, 0.3, 0.3, 0.3, 0.3, 0.3, 0.3, 0.3, 0.3, 0.3, 0.3, 0.3, 0.3, 0.3, 0.3, 0.3, 0.3, 0.3, 0.3, 0.3, 
0.3, 0.3, 0.3, 0.3, 0.3, 0.3, 0.3, 0.3, 0.3, 0.3, 0.3, 0.3, 0.3, 0.3, 0.3, 0.3, 0.3, 0.3, 0.3, 0.3, 0.3, 0.3, 0.3, 0.3, 0.3, 
0.3, 0.3, 0.3, 0.3, 0.3, 0.3, 0.3, 0.3933, 0.7667, 0.6267, 0.44, 0.3, 0.3, 0.3, 0.3, 0.3, 0.3, 0.3, 0.3, 0.3, 0.3, 0.3, 0.3, 0.3, 0.3, 
0.3, 0.3, 0.3, 0.3, 0.3, 0.3, 0.3, 0.6267, 1, 1, 1, 1, 0.86, 0.8133, 0.72, 0.6267, 0.6267, 0.4867, 0.3, 0.3, 0.3, 0.3, 0.3, 0.3, 0.3, 
0.3, 0.3, 0.3, 0.3, 0.3, 0.3, 0.3, 0.8133, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0.5333, 0.3, 0.3, 0.3, 0.3, 0.3, 0.3, 0.3, 
0.3, 0.3, 0.3, 0.3, 0.3, 0.3, 0.3, 0.3, 0.3933, 0.58, 0.6267, 0.8133, 0.86, 1, 1, 1, 1, 0.44, 0.3, 0.3, 0.3, 0.3, 0.3, 0.3, 0.3, 
0.3, 0.3, 0.3, 0.3, 0.3, 0.3, 0.3, 0.3, 0.3, 0.3, 0.3, 0.3, 0.3, 0.3, 0.3, 0.3467, 0.4867, 0.3, 0.3, 0.3, 0.3, 0.3, 0.3, 0.3, 0.3, 
0.3, 0.3, 0.3, 0.3, 0.3, 0.3, 0.3, 0.3, 0.3, 0.3, 0.3, 0.3, 0.3, 0.3, 0.3, 0.3933, 0.5333, 0.3, 0.3, 0.3, 0.3, 0.3, 0.3, 0.3, 0.3, 
0.3, 0.3, 0.3, 0.3, 0.3, 0.6267, 0.6267, 0.6267, 0.6267, 0.72, 0.8133, 0.8133, 0.86, 1, 1, 1, 1, 0.6733, 0.3, 0.3, 0.3, 0.3, 0.3, 0.3, 0.3, 
0.3, 0.3, 0.3, 0.3, 0.3, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0.44, 0.3, 0.3, 0.3, 0.3, 0.3, 0.3, 
0.3, 0.3, 0.3, 0.3, 0.3, 0.9533, 1, 1, 1, 0.86, 0.8133, 0.8133, 0.6267, 0.86, 1, 1, 1, 0.58, 0.3, 0.3, 0.3, 0.3, 0.3, 0.3, 0.3, 
0.3, 0.3, 0.3, 0.3, 0.3, 0.44, 0.3933, 0.3, 0.3, 0.3, 0.3, 0.3, 0.58, 1, 1, 1, 0.58, 0.3, 0.3, 0.3, 0.3, 0.3, 0.3, 0.3, 0.3, 
0.3, 0.3, 0.3, 0.3, 0.3, 0.3, 0.3, 0.3, 0.3, 0.3, 0.3, 0.58, 1, 1, 0.9533, 0.5333, 0.3, 0.3, 0.3, 0.3, 0.3, 0.3, 0.3, 0.3, 0.3, 
0.3, 0.3, 0.3, 0.3, 0.3, 0.3, 0.3, 0.3, 0.3, 0.3, 0.6733, 1, 1, 0.9533, 0.44, 0.3, 0.3, 0.3, 0.3, 0.3, 0.3, 0.3, 0.3, 0.3, 0.3, 
0.3, 0.3, 0.3, 0.3, 0.3, 0.3, 0.3, 0.3, 0.3, 0.72, 1, 1, 0.86, 0.6267, 0.3933, 0.3, 0.3, 0.3, 0.3, 0.3, 0.3, 0.3, 0.3, 0.3, 0.3, 
0.3, 0.3, 0.3, 0.3, 0.3, 0.3, 0.3, 0.3, 0.72, 1, 1, 1, 1, 1, 1, 0.6267, 0.3, 0.3, 0.3, 0.3, 0.3, 0.3, 0.3, 0.3, 0.3, 
0.3, 0.3, 0.3, 0.3, 0.3, 0.3, 0.3467, 0.72, 1, 1, 1, 1, 0.9533, 1, 1, 1, 0.3467, 0.3, 0.3, 0.3, 0.3, 0.3, 0.3, 0.3, 0.3, 
0.3, 0.3, 0.3, 0.3, 0.3, 0.3467, 0.86, 1, 1, 1, 0.6267, 0.3467, 0.3, 0.6733, 1, 1, 0.4867, 0.3, 0.3, 0.3, 0.3, 0.3, 0.3, 0.3, 0.3, 
0.3, 0.3, 0.3, 0.3, 0.3467, 0.86, 1, 1, 0.9533, 0.4867, 0.3, 0.3, 0.3, 0.6267, 1, 1, 0.5333, 0.3, 0.3, 0.3, 0.3, 0.3, 0.3, 0.3, 0.3, 
0.3, 0.3, 0.3, 0.44, 0.9533, 1, 1, 0.9533, 0.44, 0.3, 0.3, 0.3, 0.3, 0.4867, 1, 1, 0.72, 0.3, 0.3, 0.3, 0.3, 0.44, 0.6267, 0.3933, 0.3, 
0.3, 0.3, 0.3933, 1, 1, 1, 0.9533, 0.44, 0.3, 0.3, 0.3, 0.3, 0.3, 0.44, 1, 1, 1, 0.86, 0.8133, 0.8133, 1, 1, 1, 0.4867, 0.3, 
0.3, 0.3, 0.3, 0.6267, 1, 0.9533, 0.44, 0.3, 0.3, 0.3, 0.3, 0.3, 0.3, 0.3, 0.86, 1, 1, 1, 1, 1, 1, 1, 1, 0.5333, 0.3, 
0.3, 0.3, 0.3, 0.3, 0.72, 0.58, 0.3, 0.3, 0.3, 0.3, 0.3, 0.3, 0.3, 0.3, 0.3467, 0.72, 0.9067, 1, 1, 1, 0.8133, 0.7667, 0.6267, 0.4867, 0.3, 
0.3, 0.3, 0.3, 0.3, 0.3, 0.3, 0.3, 0.3, 0.3, 0.3, 0.3, 0.3, 0.3, 0.3, 0.3, 0.3, 0.3, 0.3, 0.3, 0.3, 0.3, 0.3, 0.3, 0.3, 0.3, 
0.3, 0.3, 0.3, 0.3, 0.3, 0.3, 0.3, 0.3, 0.3, 0.3, 0.3, 0.3, 0.3, 0.3, 0.3, 0.3, 0.3, 0.3, 0.3, 0.3, 0.3, 0.3, 0.3, 0.3, 0.3];

//「お」のデータ（加速にかける倍率）
var oData = [0.3, 0.3, 0.3, 0.3, 0.3, 0.3, 0.3, 0.3, 0.3, 0.3, 0.3, 0.3, 0.3, 0.3, 0.3, 0.3, 0.3, 0.3, 0.3, 0.3, 0.3, 0.3, 0.3, 0.3, 0.3, 
0.3, 0.3, 0.3, 0.3, 0.3, 0.3, 0.3, 0.3, 0.3, 0.3, 0.3, 0.3, 0.3, 0.3, 0.3, 0.3, 0.3, 0.3, 0.3, 0.3, 0.3, 0.3, 0.3, 0.3, 0.3, 
0.3, 0.3, 0.3, 0.3, 0.3, 0.3, 0.3, 0.86, 1, 1, 0.3467, 0.3, 0.3, 0.3, 0.3, 0.3, 0.3, 0.3, 0.3, 0.3, 0.3, 0.3, 0.3, 0.3, 0.3, 
0.3, 0.3, 0.3, 0.3, 0.3, 0.3, 0.3, 0.8133, 1, 1, 0.3, 0.3, 0.3, 0.3, 0.3, 0.3, 0.3, 0.3, 0.3, 0.3, 0.3, 0.3, 0.3, 0.3, 0.3, 
0.3, 0.3, 0.3, 0.3, 0.3, 0.3, 0.3, 0.8133, 1, 1, 0.3, 0.3, 0.3, 0.3, 0.3, 0.3, 0.3467, 0.6733, 0.86, 0.3467, 0.3, 0.3, 0.3, 0.3, 0.3, 
0.3, 0.3, 0.3, 0.3, 0.3, 0.3, 0.3, 0.8133, 1, 1, 0.3, 0.3, 0.3933, 0.5333, 0.6267, 0.3, 0.8133, 1, 1, 0.9533, 0.44, 0.3, 0.3, 0.3, 0.3, 
0.3, 0.3, 0.44, 0.6733, 0.6267, 0.6267, 0.6267, 0.9067, 1, 1, 0.8133, 1, 1, 1, 0.8133, 0.3, 0.3467, 0.86, 1, 1, 0.9533, 0.44, 0.3, 0.3, 0.3, 
0.3, 0.3, 0.4867, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0.8133, 0.3, 0.3, 0.3467, 0.86, 1, 1, 0.9533, 0.3933, 0.3, 0.3, 
0.3, 0.3, 0.4867, 1, 1, 1, 1, 1, 1, 1, 0.8133, 0.6733, 0.6267, 0.4867, 0.3467, 0.3, 0.3, 0.3, 0.3467, 0.86, 1, 1, 0.86, 0.3, 0.3, 
0.3, 0.3, 0.3, 0.3, 0.3, 0.3, 0.3, 0.8133, 1, 1, 0.3, 0.3, 0.3, 0.3, 0.3, 0.3, 0.3, 0.3, 0.3, 0.3467, 0.9533, 0.9533, 0.5333, 0.3, 0.3, 
0.3, 0.3, 0.3, 0.3, 0.3, 0.3, 0.3, 0.8133, 1, 1, 0.3, 0.3, 0.3, 0.3, 0.3, 0.3, 0.3, 0.3, 0.3, 0.3, 0.5333, 0.44, 0.3, 0.3, 0.3, 
0.3, 0.3, 0.3, 0.3, 0.3, 0.3, 0.3, 0.8133, 1, 1, 0.3, 0.44, 0.5333, 0.6267, 0.6267, 0.6267, 0.58, 0.3933, 0.3, 0.3, 0.3, 0.3, 0.3, 0.3, 0.3, 
0.3, 0.3, 0.3, 0.3, 0.3, 0.3, 0.3, 0.8133, 1, 1, 0.9533, 1, 1, 1, 1, 1, 1, 1, 0.8133, 0.44, 0.3, 0.3, 0.3, 0.3, 0.3, 
0.3, 0.3, 0.3, 0.3, 0.3, 0.3933, 0.72, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0.58, 0.3, 0.3, 0.3, 0.3, 
0.3, 0.3, 0.3, 0.3, 0.58, 0.9533, 1, 1, 1, 1, 0.72, 0.58, 0.4867, 0.3, 0.3, 0.3, 0.5333, 0.8133, 1, 1, 1, 0.44, 0.3, 0.3, 0.3, 
0.3, 0.3, 0.3, 0.58, 1, 1, 0.9533, 0.9067, 1, 1, 0.3, 0.3, 0.3, 0.3, 0.3, 0.3, 0.3, 0.3, 0.7667, 1, 1, 0.72, 0.3, 0.3, 0.3, 
0.3, 0.3, 0.4867, 1, 1, 0.86, 0.3467, 0.8133, 1, 1, 0.3, 0.3, 0.3467, 0.58, 0.72, 0.3, 0.3, 0.3, 0.3933, 1, 1, 0.9533, 0.3, 0.3, 0.3, 
0.3, 0.3, 0.86, 1, 0.9533, 0.3467, 0.3, 0.8133, 1, 1, 0.3, 0.3, 1, 1, 0.8133, 0.3, 0.3, 0.3, 0.3, 1, 1, 1, 0.3, 0.3, 0.3, 
0.3, 0.3, 1, 1, 0.86, 0.3, 0.3, 0.8133, 1, 1, 0.3, 0.3, 1, 1, 0.8133, 0.3, 0.3, 0.3, 0.4867, 1, 1, 0.9067, 0.3, 0.3, 0.3, 
0.3, 0.3, 0.86, 1, 1, 0.6267, 0.3467, 0.86, 1, 1, 0.3, 0.3, 0.8133, 1, 1, 0.58, 0.3, 0.4867, 0.86, 1, 1, 0.6267, 0.3, 0.3, 0.3, 
0.3, 0.3, 0.4867, 1, 1, 1, 1, 1, 1, 1, 0.3, 0.3, 0.58, 1, 1, 1, 1, 1, 1, 1, 0.9533, 0.3467, 0.3, 0.3, 0.3, 
0.3, 0.3, 0.3, 0.4867, 0.9067, 1, 1, 1, 1, 0.8133, 0.3, 0.3, 0.3, 0.7667, 1, 1, 1, 1, 1, 0.9067, 0.44, 0.3, 0.3, 0.3, 0.3, 
0.3, 0.3, 0.3, 0.3, 0.3, 0.5333, 0.72, 0.8133, 0.72, 0.3467, 0.3, 0.3, 0.3, 0.3, 0.58, 0.7667, 0.8133, 0.7667, 0.58, 0.3, 0.3, 0.3, 0.3, 0.3, 0.3, 
0.3, 0.3, 0.3, 0.3, 0.3, 0.3, 0.3, 0.3, 0.3, 0.3, 0.3, 0.3, 0.3, 0.3, 0.3, 0.3, 0.3, 0.3, 0.3, 0.3, 0.3, 0.3, 0.3, 0.3, 0.3, 
0.3, 0.3, 0.3, 0.3, 0.3, 0.3, 0.3, 0.3, 0.3, 0.3, 0.3, 0.3, 0.3, 0.3, 0.3, 0.3, 0.3, 0.3, 0.3, 0.3, 0.3, 0.3, 0.3, 0.3, 0.3];

function setup(){
	window.addEventListener("devicemotion", deviceMotion);
	
	//それぞれの位置の計算
	for(var i = 0; i < tateNum; ++i){
		for(var j = 0; j < yokoNum; ++j){
			var yokoLoc = screenWidth/2-(yokoNum-1)/2*interval+j*interval;
			var tateLoc = screenHeight/2-(tateNum-1)/2*interval+i*interval;
			pt.push(new PhysicalPoint(yokoLoc, tateLoc, 10));
			loc.push(new PhysicalPoint(yokoLoc, tateLoc, 10));
		}
	}
}

function deviceMotion(evt) {
	var ac = evt.acceleration;
	var ag = evt.accelerationIncludingGravity;

	acx = ac.x
	acy = ac.y;
	acz = ac.z;
	
	agx = ag.x
	agy = ag.y;
	agz = ag.z;
	
	if(navigator.userAgent.indexOf("Android") != -1){
		acx *= -1;
		acy *= -1;
		acz *= -1;
		agx *= -1;
		agy *= -1;
		agz *= -1;
	}
}

function loop(){
	//それぞれの点に対して
	for(var i = 0; i < pt.length; ++i){
		//自分の位置に戻すように加速をかける
		pt[i].setKasokudo(	(loc[i].x - pt[i].x)*10, 
							(loc[i].y - pt[i].y)*10, 
							(loc[i].z - pt[i].z)*10);
		
		//加速度センサーの値を加味する
		//横方向には「あ」の倍率を、縦方向には「い」の倍率を、前後方向には「う」の倍率をかけると
		//それぞれの位置の点がそれぞれ異なる加速になる
		pt[i].setKasokudo(acx*1000*aData[i], -acy*1000*iData[i], acz*100*uData[i]);
		
		//重力加速度センサーの値を加味する
		//横方向には「え」の倍率を、縦方向には「お」の倍率をかける
		pt[i].setKasokudo(agx*100*eData[i], -agy*100*oData[i], 0);
	}

	acx = 0;
	acy = 0;
	acz = 0;

	agx = 0;
	agy = 0;
	agz = 0;

	//描画
	pbCtx.clearRect(0, 0, screenWidth, screenHeight);
	for(var i = 0; i < pt.length; ++i){
		pbCtx.beginPath();
		pbCtx.arc(pt[i].x, pt[i].y, pt[i].z, 0, Math.PI*2, true);
		pbCtx.fill();
	}

}

function onPressed(n){
	
}

function onMove(n){
	
}

function onReleased(n){
	
}
