var lemonRatioInput = document.getElementById("lemonRatio");
var sugarRatioInput = document.getElementById("sugarRatio");
var waterRatioInput = document.getElementById("waterRatio");
var cupsOfLemonJuiceInput = document.getElementById("cupsOfLemonJuice");
var sugarResultElement = document.getElementById("sugarResult");
var waterResultElement = document.getElementById("waterResult");
var errorSpan = document.getElementById("errorMessage");
var errorDiv = document.querySelector(".alert.alert-danger");
var hideErrorLink = document.querySelector('.alert.alert-danger>a');

lemonRatioInput.onkeyup = update;
sugarRatioInput.onkeyup = update;
waterRatioInput.onkeyup = update;
cupsOfLemonJuiceInput.onkeyup = update;

hideErrorLink.onclick = hideError;

function hideError(e) {
	errorDiv.classList.add('collapse');
}

function showError(errorMessage) {
	sugarResultElement.innerHTML = '';
	waterResultElement.innerHTML = '';
	errorSpan.innerHTML = errorMessage;
	errorDiv.classList.remove('collapse');
}

function update(e) {
	if (e.which === 13) {
		this.blur();
		return;
	}

	var lemonRatio = parseFloat(lemonRatioInput.value);
	var sugarRatio = parseFloat(sugarRatioInput.value);
	var waterRatio = parseFloat(waterRatioInput.value);
	var cupsOfLemonJuice = parseFloat(cupsOfLemonJuiceInput.value);
	
	var ratioSum = lemonRatio + sugarRatio + waterRatio;
	if (ratioSum < .999 || ratioSum > 1) {
		showError('Ratios do not add up to 1.');
	} else if (!lemonRatio || !sugarRatio || !waterRatio || !cupsOfLemonJuice) {
		showError('Invalid or missing input.');
	} else {
		sugarResultElement.innerHTML = parseFloat(cupsOfSugar(cupsOfLemonJuice, lemonRatio, sugarRatio)).toFixed(1);
		waterResultElement.innerHTML = parseFloat(cupsOfWater(cupsOfLemonJuice, lemonRatio, waterRatio)).toFixed(1);
		hideError();
	}
}

function cupsOfSugar(cupsOfLemonJuice, lemonRatio, sugarRatio) {
	return (cupsOfLemonJuice / lemonRatio) * sugarRatio;
}

function cupsOfWater(cupsOfLemonJuice, lemonRatio, waterRatio) {
	return (cupsOfLemonJuice / lemonRatio) * waterRatio;
}
