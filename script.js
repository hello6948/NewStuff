c=0
d=0
function counter(){

	c++
	document.getElementById("demo1").innerHTML = "Times Clicked: "+c

	if(c==727)
	document.getElementById("demo1").innerHTML = c+ " When you See it!"
}

function acounter(){
d++
if (d==1)
alert("You know, this just a clicker with extra steps")
alert("Times Clicked: "+d)
document.getElementById("demo2").innerHTML = "Times Clicked: "+d
}

function about(){
	alert("thanks to internet sources especially w3schools to make all of this possible. idk when this clicking counter stops so have fun")
}

function add(){
	var a=Number(document.getElementById("var1").value)
	var b=Number(document.getElementById("var2").value)
	var q=a+b
	document.getElementById("res").innerHTML = q
}
function sub(){
	var a=Number(document.getElementById("var1").value)
	var b=Number(document.getElementById("var2").value)
	var q=a-b
	document.getElementById("res").innerHTML = q
}
function mul(){
	var a=Number(document.getElementById("var1").value)
	var b=Number(document.getElementById("var2").value)
	var q=a*b
	document.getElementById("res").innerHTML = q
}
function div(){
	var a=Number(document.getElementById("var1").value)
	var b=Number(document.getElementById("var2").value)
	var q=a/b
	document.getElementById("res").innerHTML = q
}