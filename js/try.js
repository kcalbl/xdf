// window.onload = function
// 这种写法相当于把window对象的onload属性赋值为一个函数
// window是全局对象
// 即使是在多个文件里重复对window的属性赋值
// 也会互相覆盖

// e.g.
window.a = 1
window.a = 2
console.log('我是try.js里的a：' + a) // 2，全局对象的属性可直接调用
console.log('我是try.js里的window.a：' + window.a) // 2

window.addEventListener("load", turnimg, false);
function turnimg () {
	var oLi = document.getElementById("rollButton").getElementsByTagName("li");
	var oPic = document.getElementById("rollImg");
	var oTxt = document.getElementById("rollTxt");
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