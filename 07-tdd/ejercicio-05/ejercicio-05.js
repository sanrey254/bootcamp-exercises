function addOdd(n) {
    let result = 0;
	if(n === undefined || n <= 0){
		return 'Error';
	}
    for (var i = 0; i <= n*2; i++) {
    	if(i % 2 !== 0){
    		result += i;
    	}
    }
    return result;
}

if (typeof exports !== 'undefined') {
    exports.addOdd = addOdd;
}
