function showDiv(z) {
	for(var i = 1; i <= 5; i++) {
		var alldiv = document.getElementById("guideDiv" + i);
		var list = document.getElementById("zx" + i);
		alldiv.style.display = "none";
		list.style.borderBottom = "1px solid #39baa6";
		list.style.borderTop = "2px solid #FFFFFF";
		list.style.borderLeft = "1px solid #FFFFFF";
		list.style.borderRight = "1px solid #FFFFFF";

	}
	var obj = document.getElementById("guideDiv" + z);
	var listChange = document.getElementById("zx" + z);
	obj.style.display = "block";
	listChange.style.borderBottom = "1px solid #fff";
	listChange.style.borderTop = "2px solid #39baa6";
	listChange.style.borderLeft = "1px solid #39baa6";
	listChange.style.borderRight = "1px solid #39baa6";
}

function list(y) {
	for(var x = 1; x <= 6; x++) {
		var alllist = document.getElementById("rec" + x);

		alllist.style.borderBottom = "1px solid #39baa6";
		alllist.style.borderTop = "2px solid #FFFFFF";
		alllist.style.borderLeft = "1px solid #FFFFFF";
		alllist.style.borderRight = "1px solid #FFFFFF";

	}
	var obj1 = document.getElementById("rec" + y);

	obj1.style.borderBottom = "1px solid #fff";
	obj1.style.borderTop = "2px solid #39baa6";
	obj1.style.borderLeft = "1px solid #39baa6";
	obj1.style.borderRight = "1px solid #39baa6";
}