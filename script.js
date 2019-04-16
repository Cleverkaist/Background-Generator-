var css = document.querySelector('h3');// grabbing the h3 element
var firstColor = document.querySelector('.color1');//grabbing the color1 class 
var secondColor = document.querySelector('.color2');// grabbing the color2 class
var bodyBackground = document.getElementById('body');// grabbing the body tag
var generateRandomColor = document.getElementById('generator');

function gradientColor() {
    bodyBackground.style.background = 'linear-gradient(to right' + ',' + firstColor.value + ',' + secondColor.value + ')';
    css.textContent = bodyBackground.style.background + ';';
}

//function randomColors(){
// return '#' + ("000000" + Math.random().toString(16).slice(2, 8)).slice(-6);
// }
function randomColors() {
	var letters = '0123456789abcdef';
	var random_color = '#';
	for (var i = 0; i < 6; i++) {
		random_color += letters[Math.floor(Math.random() * 16)];
	}
	return random_color;
}


firstColor.addEventListener('input', gradientColor);
secondColor.addEventListener('input', gradientColor);
//Method 1 for loading default colors:-
// firstColor.addEventListener('input',gradientColor());
// secondColor.addEventListener('input',gradientColor());
//Method 2 : -
// gradientColor();
//method 3 : -
window.onload(gradientColor());
generateRandomColor.addEventListener('click', function(){
  firstColor.value = randomColors() ;
  secondColor.value = randomColors() ;
  gradientColor();
  console.log(randomColors());
});

