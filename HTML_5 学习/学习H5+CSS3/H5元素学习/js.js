var CANVAS_WIDTH = 200 , CANVAS_HEIGHT = 200 ;

function createCanvas(){
	document.body.innerHTML = "<canvas id=\"mycanvas\" width=\""+CANVAS_WIDTH+"\" height=\"" +CANVAS_HEIGHT+"\"></canvas>";
}


	function clickA(){
		var a = document.getElementById("audio");
		if(a.paused){
			a.play();
		}else{
			a.pause();
		}
	}

	function clickV(){
		var v = document.getElementById("video");
		if(v.paused){
			v.play();
		}else{
			v.pause();
		}
	}

	function clickVBig(){
		var v = document.getElementById("video");
		v.width=300;
		v.height=300;
	}
function clickVSmall(){
	var v = document.getElementById("video");
	v.width=250;
	v.height=250;
}

function email(){
	var clear = document.getElementById('email');
	clear.value="";
}

function check(){
	var pass1 = document.getElementById("pass1");
	var pass2 = document.getElementById("pass2");
	if(pass1.value!=pass2.value){
		pass2.setCustomValidity("上下密码不一致.");
	}else{
		pass2.setCustomValidity("");
	}
}

// H5数据存储

function getE(ele){
	return document.getElementById(ele);
}

var text_1 = getE('text_1'),mag=getE('msg_1'),btn_1=getE('btn-1'),btn_2=getE('btn-2'),
				btn_3=getE('btn-3'),btn_4=getE('btn-4');
				btn_1.onclick = saveSessionStorage;
				btn_2.onclick = loadSessionStorage;
				btn_3.onclick = saveLocalStorage;
				btn_4.onclick = loadLocalStirage;

				function saveSessionStorage(){
					sessionStorage.setItem('msg',text_1.value+'session');
				}
				function loadSessionStorage(){
					mag.innerHTML = sessionStorage.getItem('msg')
				}
				function saveSessionStorage(){
					localStorage.setItem('msg',text_1.value+'local');
				}
				function saveSessionStorage(){
						mag.innerHTML = localStorage.getItem('msg');
				}


function ddd(){
	alert('hello');
	console.log("事件流");
}

var dd = document.getElementById("domEvent");
var dd1 = document.getElementById('dom1');
var dd2 = document.getElementById("dom2");

dd.addEventListener('click',ddd,false);

dd1.onclick=function(){alert('asdf');}