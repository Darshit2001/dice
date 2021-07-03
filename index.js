var num1=Math.random();
var num2=Math.random();
var a=Math.floor(num1*6)+1;
var b=Math.floor(num2*6)+1;
// alert(value1 );
// alert(value2);

if(a===1)
 { document.querySelector("div .img1").setAttribute("src" , "images/dice1.png");
}
else if(a===2)
{
	document.querySelector("div .img1").setAttribute("src" , "images/dice2.png");
}  
else if(a===3)
{
	document.querySelector("div .img1").setAttribute("src" , "images/dice3.png");
}
else if(a===4)
{
	document.querySelector("div .img1").setAttribute("src" , "images/dice4.png");
}
else if(a===5)
{
	document.querySelector("div .img1").setAttribute("src" , "images/dice5.png");
}
else if(q===6)
{
	document.querySelector("div .img1").setAttribute("src" , "images/dice6.png");
}


if(b===1)
 { document.querySelector("div .img2").setAttribute("src" , "images/dice1.png");
}
else if(b===2)
{
	document.querySelector("div .img2").setAttribute("src" , "images/dice2.png");
}  
else if(b===3)
{
	document.querySelector("div .img2").setAttribute("src" , "images/dice3.png");
}
else if(b===4)
{
	document.querySelector("div .img2").setAttribute("src" , "images/dice4.png");
}
else if(b===5)
{
	document.querySelector("div .img2").setAttribute("src" , "images/dice5.png");
}
else if(b===6)
{
	document.querySelector("div .img2").setAttribute("src" , "images/dice6.png");
}


if(a===b)
document.querySelector("h1").innerHTML="Match Draw!";
else if(a>b)
	document.querySelector("h1").innerHTML="👦Player1 Won";
else if(a<b)
{  document.querySelector("h1").innerHTML="Player2 Won👱‍♂️";

}
