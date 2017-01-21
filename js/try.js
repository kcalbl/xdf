// 利用参数
window.onload = function() {
	turnimg("rollButton", "rollImg", "rollTxt")
	turnimg("rollButton2", "rollImg2", "rollTxt2")
	turnimg("rollButton3", "rollImg3", "rollTxt3")
	turnimg("rollButton4", "rollImg4", "rollTxt4")
	turnimg("rollButton5", "rollImg5", "rollTxt5")
}

function turnimg (button, img, txt) {
	var oLi = document.getElementById(button).getElementsByTagName("li");
	var oPic = document.getElementById(img);
	var oTxt = document.getElementById(txt);
	var oLiLen = oLi.length;
	var timerl = null;

	for(var i = 0; i < oLiLen; i++) {
		oLi[i].index = i;
		oLi[i].onmouseover = function() {

			for(var j = 0; j < oLiLen; j++) {
				oLi[j].style.background = "white";
			}
			this.style.background = "#38BCA4";
			
			anim(oPic, "marginLeft", -226 * this.index, 20);
			anim(oTxt, "marginLeft", -226 * this.index, 20);

		}
	}
	

	function anim(obj, attr, value, speed) {
		var timer = setInterval(function() {
			var nVal = getStyle(obj, attr);

			if(value > nVal) {
				nVal += speed;
				if(nVal >= value) {
					nVal = value;
					clearInterval(timer);
				}
			} else {
				nVal -= speed;
				if(nVal <= value) {
					nVal = value;
					clearInterval(timer);
				}
			}
			console.log(nVal)

			obj.style[attr] = nVal + "px";
		}, 30)
	}

	function getStyle(obj, attr) {
		return obj.currentStyle ? parseInt(obj.currentStyle[attr]) : parseInt(getComputedStyle(obj)[attr]);
	}
}