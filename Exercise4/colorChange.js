function colorChangeBackground()
{
	if(document.getElementById("errorBG"))
		document.getElementById("errorBG").outerHTML = "";
	
	let red = document.getElementById("backR").value;
	let blue = document.getElementById("backB").value;
	let green = document.getElementById("backG").value;
	let paragraph = document.createElement("P");
	
	paragraph.setAttribute("id","errorBG");
	
	if(!isNaN(red)&&!isNaN(blue)&&!isNaN(green)&&red!=""&&blue!=""&&green!="")
	{
		if(red<=255&&red>=0&&blue<=255&&blue>=0&&green<=255&&green>=0)
		{
		}
		else
		{
			paragraph.appendChild(document.createTextNode("One or more values entered are not between 0 and 255."));
			document.getElementById("backColor").appendChild(paragraph);
		}
	}
	else
	{
		paragraph.appendChild(document.createTextNode("One or more values entered are not a valid number."));
		document.getElementById("backColor").appendChild(paragraph);
	}
}

function colorChangeBorder()
{
	if(document.getElementById("errorBor"))
		document.getElementById("errorBor").outerHTML = "";
	
	let width = document.getElementById("borWidth").value;
	let red = document.getElementById("borR").value;
	let blue = document.getElementById("borB").value;
	let green = document.getElementById("borG").value;
	let paragraph = document.createElement("P");
	
	paragraph.setAttribute("id","errorBor");
	
	if(!isNaN(red)&&!isNaN(blue)&&!isNaN(green)&&!isNaN(width)&&red!=""&&blue!=""&&green!=""&&width!="")
	{
		if(red<=255&&red>=0&&blue<=255&&blue>=0&&green<=255&&green>=0&&width>=0)
		{
		}
		else
		{
			paragraph.appendChild(document.createTextNode("One or more values entered are not valid values."));
			document.getElementById("border").appendChild(paragraph);
		}
	}
	else
	{
		paragraph.appendChild(document.createTextNode("One or more values entered are not a valid number."));
		document.getElementById("border").appendChild(paragraph);
	}
}