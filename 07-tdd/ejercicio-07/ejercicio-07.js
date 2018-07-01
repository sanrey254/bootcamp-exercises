function codeHard(n) {
  if(n === undefined){
		return 'ERROR';
	}
	if(n % 3 === 0 && n % 5 === 0){
		return 'CodeHard';
	}else if(n % 3 === 0){
  		return 'Code';
  	}else if(n % 5 === 0){
  		return 'Hard';
  	}else{
  		return n;
  	}
}

if (typeof exports !== 'undefined') {
  exports.codeHard = codeHard;
}
