let arr4 = [1, 2, 3];

let sym4 = Symbol();
arr4[sym4] = function(){
	let sum = 0;
	for (let i4 = 0; i4 < arr4.length; i4++)
		sum += arr4[i4];
	console.log(sum);
}
arr4[sym4]();