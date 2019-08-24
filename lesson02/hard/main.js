let num = 266219,
	
	arr = num.toString().split('');
	let result = arr.reduce(function(sum, current) {
		return sum * current;
	  });
	let newResult =  result ** 3;
	
	let final = newResult.toString().substring(0, 2);
	let finalNumber = Number(final);
	  console.log(finalNumber);
		
