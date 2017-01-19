
function newsFunction1() {
	var t1 = document.getElementById("t1");
	var t2 = document.getElementById("t2");
	var nA1 = document.getElementById("newAct1");
	var nA2 = document.getElementById("newAct2");
	t1.style.backgroundColor = "#FFFFFF";
	t1.style.borderColor = "#e8e8e8";
	t1.style.borderBottomColor = "#FFFFFF";
	t2.style.borderColor = "#f6f6f6";
	t2.style.backgroundColor = "#f6f6f6";
	nA1.style.visibility = "visible";
	nA2.style.visibility = "hidden";
}

function newsFunction2() {
	var t1 = document.getElementById("t1");
	var t2 = document.getElementById("t2");
	var nA1 = document.getElementById("newAct1");
	var nA2 = document.getElementById("newAct2");
	t2.style.backgroundColor = "#FFFFFF";
	t2.style.borderColor = "#e8e8e8";
	t2.style.borderBottomColor = "#FFFFFF";
	t1.style.borderColor = "#f6f6f6";
	t1.style.backgroundColor = "#f6f6f6";
	nA1.style.visibility = "hidden";
	nA2.style.visibility = "visible";
}