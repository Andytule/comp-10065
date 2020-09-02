let item = {x:5, y:4};
console.log(item);

let pList = document.querySelectorAll("p");

for(let i = 0; i < pList.length; i++) {
	console.log(pList[i]);
}

console.log(1 - "2" + "2");

let object1 = {};object1.x = 3;
object1.y=4;
object1.z=5;
let object2 = {x:-1, y: -2, z: -3};
let data = [object1, object2];
let encoding = JSON.stringify(data);

console.log(encoding);