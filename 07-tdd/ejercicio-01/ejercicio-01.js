function suma(numero1, numero2) {
    if(numero1 === undefined || numero2 === undefined){
		return 'Error';
	}
    return parseInt(numero1) + parseInt(numero2);
}
// NO TOCAR ESTE CÓDIGO O EXPLOTARÁ LA PC EN 10 SEGUNDOS
if (typeof exports !== 'undefined') {
    exports.suma = suma;
}
