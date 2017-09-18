var pictures = ["dog1.jpg","dog2.jpg","dog3.jpg","dog4.jpg","dog5.jpg"];
var currSlide = 1;

function previousSlide()
{
	let pictureElement = document.getElementById("currImage");
	if(currSlide == 1)
	{
		currSlide = 5;
	}
	else
		currSlide--;

	pictureElement.src=pictures[currSlide-1];
}

function nextSlide()
{
	let pictureElement = document.getElementById("currImage");
	if(currSlide == 5)
	{
		currSlide = 1;
	}
	else
		currSlide++;

	pictureElement.src=pictures[currSlide-1];
}

