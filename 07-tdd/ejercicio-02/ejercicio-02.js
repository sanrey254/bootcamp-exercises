function busquedaLinear (arreglo, itemBuscado) {
   if(arreglo === undefined || itemBuscado === undefined){
		return 'Error';
	}
	if(typeof(itemBuscado) !== 'number'){
		return 'Error de dato';
	}
    for (var i = 0; i <= arreglo.length - 1; i++) {
    	if(itemBuscado === arreglo[i]){
    		return i;
    	}
    }
    return false;     
}

// NO TOCAR ESTE CÓDIGO O EXPLOTARÁ LA PC EN 10 SEGUNDOS
if(typeof exports !== 'undefined') {
    exports.busquedaLinear = busquedaLinear;
}
