function addTwoOdd(n) {
  let result = 0;
	let result2 = 0;
	if(n === undefined || m ===  undefined){
		return 'Error';
	}
	if(n < 1 || m < 1){
		return 'Error';
	}
    for (var i = 0; i <= n*2; i++) {
    	if(i % 2 !== 0){
    		result += i;
    	}
    }

    for (var i = 0; i <= m*2; i++) {
    	if(i % 2 !== 0){
    		result2 += i;
    	}
    }
    return result + result2;
}

if (typeof exports !== 'undefined') {
  exports.addTwoOdd = addTwoOdd;
}
