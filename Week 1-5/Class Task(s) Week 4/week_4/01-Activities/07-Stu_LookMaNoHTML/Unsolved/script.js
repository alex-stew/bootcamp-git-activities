// Create your HTML Page via DOM Methods here!

var headingOne = document.createElement("h1");
headingOne.textContent = "NO JS fools!! We are real programmers now....";
document.body.appendChild(headingOne);

var headingTwo = document.createElement("h2");
headingTwo.textContent = "right...?";
document.body.appendChild(headingTwo);

var theImg = document.createElement("img");
theImg.textContent = "Look at this picture";
document.body.appendChild(theImg);

var favFoods = document.createElement("ul");
favFoods.innerHTML = "<li>sushi</li> <li>laksa</li> <li>schnitzel</li>";
document.body.appendChild(favFoods);

headingOne.setAttribute("style","font-size: 50px; color: pink;");
headingTwo.setAttribute("style","font-size: 20px; color: blue;");
theImg.setAttribute("src","./programmer-memes_md.jpg", "style", "height: 300px;", "width: 250px;");