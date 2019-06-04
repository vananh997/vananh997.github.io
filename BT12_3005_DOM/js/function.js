function changeColor(){
	document.getElementById("p1").style.color = "pink";
	document.getElementById("p2").style.color = "red";
	document.getElementById("p3").style.color = "orange";
}

function changeBgColor(color){
	document.body.style.backgroundColor = color;
}

function copyContent(p1, p2){
	var x = document.getElementById("p1");
	document.getElementById("p2").innerHTML = x.innerText;

}

function changeFontSize(x){
	let size = document.querySelectorAll('p');
	for ( let i = 0; i < size.length; i++ ){
		size[i].style.fontSize = x + "px";
	}
}

function increaseFontSize(paragraph){
	let giaTri = window.getComputedStyle(paragraph);
	var x = parseInt(giaTri.getPropertyValue('font-size').replace("px",""));
	if(x + 1 < 30){
		paragraph.style.fontSize = x + 1 + "px";
	}
	else{
		alert("Oversize");
	}
}


function decreaseFontSize(paragraph){
	let giaTri = window.getComputedStyle(paragraph);
	var x = parseInt(giaTri.getPropertyValue('font-size').replace("px",""));
	if(x - 1 > 10){
		paragraph.style.fontSize = x - 1 + "px";
	}
	else{
		alert("Oversize");
	}
}