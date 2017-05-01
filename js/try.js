// 利用参数
window.onload = function() {
	// 循环调用，id不规律的话可以借助数组
	for (var i = 1; i <= 5; i++) {
		turnimg("rollButton" + i, "rollImg" + i, "rollTxt" + i)
	}
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