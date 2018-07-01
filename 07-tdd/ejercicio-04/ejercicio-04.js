function fibonacci (limite) {
    if(limite <= 0){
		return 'Error';
	}
	if(typeof(limite) === 'string'){
		return 'Error';
	}

	let num1 = 1, num2 = 0;
	let result =[];
	result[0] = 0;
    for (var i= 0; i< limite-1; i++) {

  		num2 = num1;
  		num1 = num1 + result[i];
  		result[i+1] = num2;
    }
    return result;
}

// NO TOCAR ESTE CÓDIGO O EXPLOTARÁ LA PC EN 10 SEGUNDOS
if(typeof exports !== 'undefined') {
    exports.fibonacci = fibonacci;
}
