function del(){
  document.getElementById('result').value = "";
}

function back(){
	var x = result.value;
	document.getElementById('result').value = x.substring(0, x.length - 1);
}

function sqrt(x){
	var x = Math.sqrt(x);
	document.getElementById('result').value = x;
}
