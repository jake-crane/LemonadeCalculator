var lemonRatioInput = document.getElementById("lemonRatio");
var sugarRatioInput = document.getElementById("sugarRatio");
var waterRatioInput = document.getElementById("waterRatio");
var cupsOfLemonJuiceInput = document.getElementById("cupsOfLemonJuice");
lemonRatioInput.onkeyup = update;
sugarRatioInput.onkeyup = update;
waterRatioInput.onkeyup = update;
cupsOfLemonJuiceInput.onkeyup = update;

var sugarResultElement = document.getElementById("sugarResult");
var waterResultElement = document.getElementById("waterResult");

function update() {
	var lemonRatio = parseFloat(lemonRatioInput.value);
	var sugarRatio = parseFloat(sugarRatioInput.value);
	var waterRatio = parseFloat(waterRatioInput.value);
	var cupsOfLemonJuice = parseFloat(cupsOfLemonJuiceInput.value);
	
	var ratioSum = lemonRatio + sugarRatio + waterRatio;
	if (ratioSum < .999 || ratioSum > 1) {
		resultElement.innerHTML = "Ratios do not add up to 1.";
	} else if (!lemonRatio || !sugarRatio || !waterRatio || !cupsOfLemonJuice) {
		resultElement.innerHTML = "Invalid input";
	} else {
		sugarResultElement.innerHTML = parseFloat(cupsOfSugar(cupsOfLemonJuice, lemonRatio, sugarRatio)).toFixed(1);
		waterResultElement.innerHTML = parseFloat(cupsOfWater(cupsOfLemonJuice, lemonRatio, waterRatio)).toFixed(1);
	}
}

function cupsOfSugar(cupsOfLemonJuice, lemonRatio, sugarRatio) {
	return (cupsOfLemonJuice / lemonRatio) * sugarRatio;
}

function cupsOfWater(cupsOfLemonJuice, lemonRatio, waterRatio) {
	return (cupsOfLemonJuice / lemonRatio) * waterRatio;
}
