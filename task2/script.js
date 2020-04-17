let sym = Symbol();
let obj = {
  1: "Привет",
  2: "Приветик",
  3: "Здравстуйте",
  [sym]: function() {
    alert("!");
  }
}

for(let key in obj){
  console.log(obj[key]);
}

obj[sym]();