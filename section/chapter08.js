let var1;
let var2 = 10;
let val3 = 20;

let var4 = var1 ?? var2;
let var5 = var1 ?? val3;
let var6 = var1 ?? var2 ?? val3;

console.log(var4); // 10
console.log(var5); // 20


// typeof 연산자
// -> 데이터 타입을 확인할 수 있는 연산자
let var7 = 1;
var7 = "hello";
var7 = true;

console.log(typeof var7); // boolean

// 삼항연산자
let num1 = 10;
let result = num1 > 5 ? "5보다 큽니다." : "5보다 작습니다.";
console.log(result); // 5보다 큽니다.