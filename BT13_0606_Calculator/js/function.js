let x = document.getElementById('result');

function del(){
	document.getElementById('result').value = "";
}

function back(){	
	document.getElementById('result').value = x.substring(0, x.length - 1);
}

function sqrt(){
	document.getElementById('result').value = Math.sqrt(x) ;
}

function tan(){	
	document.getElementById('result').value = Math.tan(x) ;
}

function increase(){
	document.getElementById('result').value = x*x;
}

function sin(){
	document.getElementById('result').value = Math.sin(x * Math.PI / 180);
}

function cos(){
	document.getElementById('result').value = Math.cos(x * Math.PI / 180);
}

function PI(){
	document.getElementById('result').value = Math.PI;
}


