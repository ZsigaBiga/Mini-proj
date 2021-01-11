'use strict'

function atmenet() {

	let szam = document.getElementById('beszam').value;

	var r, g, b = 0;
	if(szam < 50) {
		r = 255;
		g = Math.round(5.1 * szam);
	}
	else {
		g = 255;
		r = Math.round(510 - 5.10 * szam);
	}
	var h = r * 0x10000 + g * 0x100 + b * 0x1;

	console.log(beszam);
	return document.getElementById('szin').innerHTML += '#' + ('000000' + h.toString(16)).slice(-6);
}