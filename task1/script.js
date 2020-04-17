let obj1 = {
	1: 'Привет',
	2: 'Приветик',
	3: 'Здравствуйте',
};

let sym1 = Symbol();
obj1[sym1] = 'Символ';

for (let i1 in obj1){
	console.log('obj1.' + i1 + ' = ' + obj1[i1]);
}