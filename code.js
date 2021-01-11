'use strict'

function atmenet() {

	let szam = document.getElementById('beszam').value;
	var r, g, b = 0;

	if(szam <= 499){
		r = 255
		g = Math.round(szam * 0.1 * 2.55);
	}
	else {
		r = 255;
		g = Math.round(szam * 0.1 * 2.55);
	}
	//Megvan az rgb kód

	console.log(r);
	console.log(g);
	console.log(b);

	var h = r * 0x10000 + g * 0x100 + b * 0x1; //hex konvertálás

	var vegSzin = '#' + ('000000' + h.toString(16)).slice(-6); //Színkód betöltése
	console.log(vegSzin);

	document.getElementById('negyZet').style.backgroundColor = vegSzin;
}