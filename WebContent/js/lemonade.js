var lemonRatioInput = document.getElementById("lemonRatio");
var sugarRatioInput = document.getElementById("sugarRatio");
var waterRatioInput = document.getElementById("waterRatio");
var cupsOfLemonJuiceInput = document.getElementById("cupsOfLemonJuice");
lemonRatioInput.onkeyup = update;
sugarRatioInput.onkeyup = update;
waterRatioInput.onkeyup = update;
cupsOfLemonJuiceInput.onkeyup = update;

var resultElement = document.getElementById("result");

function getOutputString(lemonRatio, sugarRatio, waterRatio, cupsOfLemonJuice) {
	return "For "
	+ cupsOfLemonJuice + " cups of lemon juice, you should use "
	+ cupsOfSugar(cupsOfLemonJuice, lemonRatio, sugarRatio) + " cups of sugar and "
	+ cupsOfWater(cupsOfLemonJuice, lemonRatio, waterRatio) + " cups of water.";
}

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
		resultElement.innerHTML = getOutputString(lemonRatio, sugarRatio, waterRatio, cupsOfLemonJuice);
	}
}

function cupsOfSugar(cupsOfLemonJuice, lemonRatio, sugarRatio) {
	return (cupsOfLemonJuice / lemonRatio) * sugarRatio;
}

function cupsOfWater(cupsOfLemonJuice, lemonRatio, waterRatio) {
	return (cupsOfLemonJuice / lemonRatio) * waterRatio;
}