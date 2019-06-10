function del(){
	document.getElementById('result').value = "";
}

function back(){
	var x = result.value;
	document.getElementById('result').value = x.substring(0, x.length - 1);
}

function sqrt(){
	var x = result.value;
	document.getElementById('result').value = Math.sqrt(x) ;
}

function tan(){
	var x = result.value;
	document.getElementById('result').value = Math.tan(x) ;
}

function increase(){
	var x = result.value;
	document.getElementById('result').value = x*x;
}

function sin(){
	var x = result.value;
	document.getElementById('result').value = Math.sin(x * Math.PI / 180);
}

function cos(){
	var x = result.value;
	document.getElementById('result').value = Math.cos(x * Math.PI / 180);
}

function PI(){
	var x = result.value;
	document.getElementById('result').value = Math.PI;
}

